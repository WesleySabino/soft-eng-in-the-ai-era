import type { Lang } from '../../data/chapters';
import { UI } from '../../i18n/ui';

export const ui = (lang: Lang) => UI[lang];
export const cn = (...c: (string | false | null | undefined)[]) => c.filter(Boolean).join(' ');
export const spring = { type: 'spring', stiffness: 380, damping: 32 } as const;
export const softSpring = { type: 'spring', stiffness: 160, damping: 24 } as const;
export const easeOutExpo = [0.16, 1, 0.3, 1] as const;

/** Persist small pieces of island state in localStorage (safe when storage is unavailable). */
export function load<T>(key: string, fallback: T): T {
  try {
    const v = localStorage.getItem(key);
    return v ? (JSON.parse(v) as T) : fallback;
  } catch {
    return fallback;
  }
}
export function save(key: string, value: unknown) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    /* ignore */
  }
}
