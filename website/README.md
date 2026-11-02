# Software Engineering in the AI Era — interactive course

A bilingual (English / Brazilian Portuguese) static website that teaches the report
*Engenharia de software na era da IA* / *Software engineering in the AI era* through
animations, simulations, games and quizzes. The full original text of every section is
also included in each chapter (collapsible), so nothing from the report is lost.

## Stack

| Concern | Library |
|---|---|
| Static site generation, routing, SEO output | [Astro](https://astro.build) 7 |
| Interactive lessons (islands) | React 19 + [Motion](https://motion.dev) |
| Scroll storytelling, text reveals, counters | [GSAP](https://gsap.com) (ScrollTrigger, SplitText) |
| Smooth scrolling | [Lenis](https://lenis.darkroom.engineering) |
| Hero particle scene | [three.js](https://threejs.org) (lazy-loaded) |
| Styling | Tailwind CSS 4 |
| Markdown → HTML at build time | marked |

Everything renders to plain HTML at build time; JavaScript only hydrates the interactive
pieces when they scroll into view. Motion respects `prefers-reduced-motion`.

## Commands

Requires Node **22.23+** (see `.nvmrc`).

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # outputs dist/
npm run preview   # serves dist/
```

## Where things live

```
../engenharia_de_software_na_era_da_ia.md   Portuguese report (source of truth)
../software_engineering_in_the_ai_era.md    English report (source of truth)
src/data/chapters.ts      chapter/part metadata, slugs, titles, SEO descriptions (EN + PT)
src/lessons/ChNN.astro    the teaching layer of each chapter (bilingual copy + islands)
src/components/islands/   interactive React components (quiz, sorter, simulators…)
src/components/ui/        static building blocks (lesson section, callout, stats…)
src/lib/report.ts         splits the reports into sections; extracts references,
                          glossary and appendix templates for the interactive views
src/pages/                routes: / (language redirect), /en/…, /pt/…, 404, robots.txt
src/scripts/              motion layer, reading progress, hero scene
public/                   favicon, social preview images, manifest
```

Editing a report file changes the "full text" panels, the references explorer, the
glossary and the templates on the next build. Lesson copy lives in `src/lessons/`.

Reading progress, the 90-day plan, checklists and the self-assessment are
stored only in the reader's browser (`localStorage`); there is no backend.

## Analytics

Google Analytics 4 is included only when `PUBLIC_GA_ID` is set at build time (the deploy
workflow sets it), so `npm run dev` and local builds never send analytics. It uses Consent
Mode v2: analytics cookies stay off until the visitor clicks **Accept** in the banner, and
ad storage is always off. "Cookie preferences" in the footer reopens the banner, and on
Accept the current page view is sent again (the one sent before the choice had no cookies).

Events and parameters:

- Every event carries `content_language` (`en`/`pt`); events on chapter pages also carry
  `chapter_id` (1–18), so page views and completions can be compared per chapter.
- `chapter_complete` when the end of a chapter becomes visible.
- `language_switch` (`from_language`, `to_language`) when the EN/PT switch is used.

In Google Analytics (property "Software Engineering in the AI Era", ID `G-893MED3DCR`)
these parameters are registered as the custom dimensions Chapter, Content language,
Switched from language and Switched to language, and **Explore → "SE in the AI Era -
Reading report"** shows chapters started vs. completed, audience by language and
language switches.

## Deploying to GitHub Pages

The workflow at `../.github/workflows/deploy.yml` builds and deploys on every push to `main`.

1. Push the repository to GitHub.
2. In **Settings → Pages**, set **Source** to **GitHub Actions**.
3. Push to `main` (or run the workflow manually).

The workflow sets `SITE_URL` and `BASE_PATH` automatically from the Pages configuration,
so canonical URLs, `hreflang` links, the sitemap and all internal links are correct for
both `https://<user>.github.io/<repo>/` and custom domains. The live site uses the custom
domain **https://softeng.sabinolab.site/**: a `CNAME` record `softeng` → `wesleysabino.github.io`
at the DNS provider, plus the custom domain set in the repository's Pages settings.

To build for another host, set them yourself:

```bash
SITE_URL=https://example.com BASE_PATH=/ npm run build
```

## SEO

- One indexable page per chapter and language, with localized slugs
- `<title>`, meta description, canonical URL and `hreflang` (en, pt-BR, x-default) on every page
- Open Graph / Twitter cards with 1200×630 preview images (`public/og-en.png`, `public/og-pt.png`)
- JSON-LD: `WebSite` and `Course` on the home pages; `LearningResource`/`Article` and `BreadcrumbList` on chapters
- `sitemap-index.xml`, `robots.txt`, semantic headings, and the complete report text rendered as static HTML
