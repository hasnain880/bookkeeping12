"""Prepare the face-neutral owner photos for the site's photo slots.

Outputs (both pre-cropped to the exact CSS container aspect ratios so
object-cover is a no-op for the defaults, yet still protects swapped-in
real photos):
  public/images/owner/owner-hero.jpg   -> hero blob   (aspect 10/11)
  public/images/owner/owner-about.jpg  -> about arch  (aspect 4/4.6)

Also keeps the raw generations in scripts/tmp/ for future re-crops.
"""
from PIL import Image

TMP = "/home/z/my-project/scripts/tmp"
OUT = "/home/z/my-project/public/images/owner"
QUALITY = 85


def crop_to_ratio(img: Image.Image, ratio: float, y_bias: float) -> Image.Image:
    """Crop img (centered horizontally) to width/height == ratio.

    y_bias: 0.0 = top-aligned crop, 1.0 = bottom-aligned crop.
    """
    w, h = img.size
    target_h = round(w / ratio)
    if target_h <= h:
        top = round((h - target_h) * y_bias)
        box = (0, top, w, top + target_h)
    else:
        target_w = round(h * ratio)
        left = (w - target_w) // 2
        box = (left, 0, left + target_w, h)
    return img.crop(box)


def main() -> None:
    # Hero blob container: aspect-[10/11] (ratio 0.909).
    # Bias slightly toward the top so the head keeps natural headroom.
    hero = Image.open(f"{TMP}/owner-hero-raw.png").convert("RGB")
    hero = crop_to_ratio(hero, 10 / 11, y_bias=0.18)
    hero.save(f"{OUT}/owner-hero.jpg", "JPEG", quality=QUALITY, optimize=True)
    print("owner-hero.jpg", hero.size)

    # About arch container: aspect-[4/4.6] (ratio 0.8696).
    # Bias toward the middle-bottom where hands/calculator/action live.
    about = Image.open(f"{TMP}/owner-about-raw.png").convert("RGB")
    about = crop_to_ratio(about, 4 / 4.6, y_bias=0.55)
    about.save(f"{OUT}/owner-about.jpg", "JPEG", quality=QUALITY, optimize=True)
    print("owner-about.jpg", about.size)


if __name__ == "__main__":
    main()
