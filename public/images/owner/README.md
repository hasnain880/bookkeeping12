# Owner Photo Slots

These are **Nicole's photos** (AI-assisted lifestyle/headshot set she provided).
To swap either one later, keep the exact same filename — no code changes needed:
the hero blob, the About arch, and the Open Graph share card all read from here.

## The two files

| File | Used in | Container shape |
|------|---------|-----------------|
| `hero-lifestyle.jpg`  | Hero blob shape | portrait, ratio **10:11** (width:height). Source is a tall portrait (≈9:16); the site uses `object-fit: cover` + `object-position: center 20%` so her face stays framed inside the blob. |
| `nicole-headshot.jpg` | "Meet your bookkeeper" arch | portrait, ratio **40:46 ≈ 0.87**. Rendered with `object-fit: cover` inside the arch frame (rounded top, 2rem bottom corners, 8px brand-blue border). |

## Recommended specs (for future swaps)

- **Orientation**: portrait (vertical)
- **Minimum size**: 1000 px wide (2000 px is even better for retina)
- **Format**: JPG, ~80–86 quality
- **Framing**: face in the upper third, a little headroom above the hair,
  subject centered horizontally.

## If the photo is a different aspect ratio

No problem — both slots use `object-fit: cover`. The hero keeps her face in
frame via `object-[center_20%]` in `src/components/landing/hero.tsx`
(lower % = show more of the top of the photo). The About arch centers by default;
add `object-[center_20%]` there too if a future headshot sits high in frame.

## After swapping

1. Replace the file(s) here.
2. Hard-refresh (Ctrl/Cmd+Shift+R) — Next.js caches images in dev.
3. Regenerate the social share card so it matches:
   `python /home/z/my-project/scripts/og_image.py`
