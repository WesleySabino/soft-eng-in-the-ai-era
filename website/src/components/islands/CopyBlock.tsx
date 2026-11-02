import { motion } from 'motion/react';
import { useState } from 'react';
import type { Lang } from '../../data/chapters';
import { ui } from './shared';

/** A template rendered as an editor window with a copy button. */
export default function CopyBlock({ lang, title, code }: { lang: Lang; title: string; code: string }) {
  const t = ui(lang);
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard unavailable */
    }
  };
  return (
    <div className="overflow-hidden rounded-3xl border border-white/10 bg-ink-950/80">
      <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-rose-400/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-300/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
        <span className="ml-3 font-mono text-xs text-zinc-500">{title}</span>
        <motion.button onClick={copy} whileTap={{ scale: 0.92 }} className="ml-auto cursor-pointer rounded-full border border-white/15 px-3 py-1 font-mono text-[0.68rem] text-zinc-200 hover:bg-white/10">
          {copied ? `✓ ${t.copied}` : t.copy}
        </motion.button>
      </div>
      <pre className="max-h-[28rem] overflow-auto p-5 font-mono text-xs leading-relaxed text-zinc-300" data-lenis-prevent>
        {code.split('\n').map((line, i) => (
          <span key={i} className="block">
            {/^\S.*:$/.test(line) || /^[A-ZÀ-Ú][^:]*:\s*$/.test(line) ? <span className="text-[var(--accent)]">{line}</span> : line || ' '}
          </span>
        ))}
      </pre>
    </div>
  );
}
