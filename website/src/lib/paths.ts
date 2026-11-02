import type { Chapter, Lang } from '../data/chapters';

const BASE = (import.meta.env.BASE_URL || '/').replace(/\/+$/, '');

/** Prefixes a site-relative path with the configured base path and enforces a trailing slash for pages. */
export function url(path = ''): string {
  const clean = path.replace(/^\/+/, '');
  let out = `${BASE}/${clean}`;
  const last = out.split('/').pop() ?? '';
  if (!out.endsWith('/') && !last.includes('.') && !last.includes('#')) out += '/';
  return out;
}

export const homeUrl = (lang: Lang) => url(`${lang}/`);
export const chapterUrl = (lang: Lang, ch: Chapter) => url(`${lang}/${ch.slug[lang]}/`);
export const asset = (path: string) => `${BASE}/${path.replace(/^\/+/, '')}`;
