# Miller Family Reunion 2026

Website for the Douglas & Anne Miller family reunion — August 13–16, 2026 at Legacy Beach Resort, Bear Lake (Garden City, UT). *One Clan. One Legacy. One Family.*

Elegant Highland-heritage design: navy + gold + cream, subtle tartan, serif headlines, and the Miller crest as the central symbol. Includes the full day-by-day schedule, the complete Highland Games rules & run-of-show, lodging & costs, family leads, a live countdown, and add-to-calendar buttons.

## Quick start

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export → out/
```

## Editing content

**Every name, time, cost, and event lives in [`lib/reunion.ts`](lib/reunion.ts).** Change it there and rebuild — no component ever needs to be touched.

## Structure

```
app/                    home page + /highland-games rules page
components/             crest (SVG), hero, countdown, schedule, lodging…
lib/reunion.ts          ← ALL site content + calendar helpers
```

## Deploying

`npm run build` produces a fully static site in `out/` — host it on Vercel, Netlify, GitHub Pages, or any static file host.
# FamReunionWebsite
