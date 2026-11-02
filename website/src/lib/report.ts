import fs from 'node:fs';
import path from 'node:path';
import { Marked, type Token, type Tokens } from 'marked';
import type { Lang } from '../data/chapters';

/**
 * Reads the two report files that live next to the website folder and splits them
 * into numbered sections (## 1. … ## 18.). Each section is rendered to HTML at build time,
 * so the full original text ships as static, indexable HTML.
 */
const FILES: Record<Lang, string> = {
  pt: 'engenharia_de_software_na_era_da_ia.md',
  en: 'software_engineering_in_the_ai_era.md',
};

const reportDir = process.env.REPORT_DIR
  ? path.resolve(process.env.REPORT_DIR)
  : path.resolve(process.cwd(), '..');

const marked = new Marked({ gfm: true });
marked.use({
  renderer: {
    link({ href, title, tokens }: Tokens.Link) {
      const text = this.parser.parseInline(tokens);
      const external = /^https?:\/\//.test(href);
      const t = title ? ` title="${title}"` : '';
      return external
        ? `<a href="${href}"${t} target="_blank" rel="noopener noreferrer">${text}</a>`
        : `<a href="${href}"${t}>${text}</a>`;
    },
    table(token: Tokens.Table) {
      // wrap tables so they scroll horizontally on small screens
      let out = '<div class="table-wrap"><table><thead><tr>';
      for (const cell of token.header) out += `<th>${this.parser.parseInline(cell.tokens)}</th>`;
      out += '</tr></thead><tbody>';
      for (const row of token.rows) {
        out += '<tr>';
        for (const cell of row) out += `<td>${this.parser.parseInline(cell.tokens)}</td>`;
        out += '</tr>';
      }
      return out + '</tbody></table></div>';
    },
  },
});

interface Parsed {
  intro: string;
  sections: Record<number, string>;
  links: Record<string, { href: string; title?: string | null }>;
}

const cache = new Map<Lang, Parsed>();

function parse(lang: Lang): Parsed {
  const hit = cache.get(lang);
  if (hit) return hit;
  const md = fs.readFileSync(path.join(reportDir, FILES[lang]), 'utf8');
  const tokens = marked.lexer(md);
  const links = tokens.links as Parsed['links'];

  const groups: { key: number | 'intro' | 'skip'; tokens: Token[] }[] = [{ key: 'skip', tokens: [] }];
  for (const tok of tokens) {
    if (tok.type === 'heading' && (tok as Tokens.Heading).depth === 2) {
      const text = (tok as Tokens.Heading).text;
      const m = /^(\d+)\.\s/.exec(text);
      if (m) groups.push({ key: Number(m[1]), tokens: [] });
      else if (/^(How to read|Como ler)/i.test(text)) groups.push({ key: 'intro', tokens: [] });
      else groups.push({ key: 'skip', tokens: [] }); // table of contents etc.
      continue;
    }
    groups[groups.length - 1].tokens.push(tok);
  }

  const render = (list: Token[]) => {
    // drop trailing horizontal rules and empty space
    const trimmed = [...list];
    while (trimmed.length && ['hr', 'space', 'def'].includes(trimmed[trimmed.length - 1].type)) trimmed.pop();
    const arr = Object.assign(trimmed, { links }) as unknown as Parameters<typeof marked.parser>[0];
    return marked.parser(arr) as string;
  };

  const result: Parsed = { intro: '', sections: {}, links };
  for (const g of groups) {
    if (g.key === 'intro') result.intro = render(g.tokens);
    else if (typeof g.key === 'number') result.sections[g.key] = render(g.tokens);
  }
  cache.set(lang, result);
  return result;
}

export const sectionHtml = (lang: Lang, id: number) => parse(lang).sections[id] ?? '';
export const introHtml = (lang: Lang) => parse(lang).intro;
export const sourceLinks = (lang: Lang) => parse(lang).links;

/* ---------- structured extracts used by interactive components ---------- */

const raw = (lang: Lang) => fs.readFileSync(path.join(reportDir, FILES[lang]), 'utf8');
const inline = (md: string) => marked.parseInline(md) as string;

/** Bibliography entries of section 17, grouped by their sub-heading. */
export function references(lang: Lang) {
  const links = sourceLinks(lang);
  const lines = raw(lang).split('\n');
  const start = lines.findIndex((l) => /^## 17\./.test(l));
  const end = lines.findIndex((l, i) => i > start && /^## 18\./.test(l));
  let category = '';
  const out: { id: string; category: string; citationHtml: string; noteHtml: string; url: string; year: string }[] = [];
  for (const line of lines.slice(start, end)) {
    const h = /^### 17\.\d+\.\s+(.*)$/.exec(line);
    if (h) {
      category = h[1].trim();
      continue;
    }
    const m = /^- \*\*\[(F\d\d)\] (.+?)\*\*\s*(.*)$/.exec(line);
    if (!m) continue;
    const [, id, citation, note] = m;
    const year = /(20\d\d|19\d\d)/.exec(citation)?.[1] ?? '';
    out.push({ id, category, citationHtml: inline(citation), noteHtml: inline(note), url: links[id.toLowerCase()]?.href ?? '', year });
  }
  return out.sort((a, b) => a.id.localeCompare(b.id));
}

function appendixSlice(lang: Lang, letter: string) {
  const md = raw(lang);
  const re = new RegExp(`^### (?:Appendix|Apêndice) ${letter}\\b.*$`, 'm');
  const m = re.exec(md);
  if (!m) return { title: '', body: '' };
  const rest = md.slice(m.index + m[0].length);
  const next = rest.search(/^### |^---$/m);
  return { title: m[0].replace(/^###\s+/, ''), body: next === -1 ? rest : rest.slice(0, next) };
}

/** Code-block templates (appendices A and C). */
export function templateBlock(lang: Lang, letter: 'A' | 'C') {
  const { title, body } = appendixSlice(lang, letter);
  const code = /```text\n([\s\S]*?)```/.exec(body)?.[1]?.trimEnd() ?? '';
  return { title, code };
}

/** Bullet questions of appendix D. */
export function reviewQuestions(lang: Lang) {
  const { title, body } = appendixSlice(lang, 'D');
  return { title, items: body.split('\n').filter((l) => l.startsWith('- ')).map((l) => l.slice(2).trim()) };
}

function tableRows(body: string) {
  return body
    .split('\n')
    .filter((l) => l.startsWith('|'))
    .slice(2)
    .map((l) =>
      l
        .split('|')
        .slice(1, -1)
        .map((c) => c.trim()),
    );
}

/** Repository map rows (appendix B). */
export function repoMap(lang: Lang) {
  const { title, body } = appendixSlice(lang, 'B');
  return { title, rows: tableRows(body).map(([k, v]) => ({ k, v })) };
}

/** Glossary rows (appendix E). */
export function glossary(lang: Lang) {
  const { title, body } = appendixSlice(lang, 'E');
  return { title, terms: tableRows(body).map(([term, meaning]) => ({ term, meaning })) };
}
