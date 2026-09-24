"""Place Nicole's uploaded photos into the site's photo slots.

- upload/Gemini_Generated_Image_4msfz44msfz44msf.jfif -> public/images/owner/hero-lifestyle.jpg
      (tall lifestyle portrait: Nicole at her desk with laptop + coffee)
- upload/Gemini_Generated_Image_d9rr7ad9rr7ad9rr.jfif -> public/images/owner/nicole-headshot.jpg
      (professional headshot: teal top, blurred office background)

Re-saving through PIL strips the large C2PA/jumb metadata blocks and
re-encodes at a web-friendly quality. Original aspect ratios are preserved
(no destructive cropping) so CSS object-fit/object-position stays in charge
of framing, per the client's spec.
"""
from pathlib import Path

from PIL import Image

UPLOAD = Path("/home/z/my-project/upload")
OUT = Path("/home/z/my-project/public/images/owner")
OUT.mkdir(parents=True, exist_ok=True)

JOBS = [
    (UPLOAD / "Gemini_Generated_Image_4msfz44msfz44msf.jfif", OUT / "hero-lifestyle.jpg"),
    (UPLOAD / "Gemini_Generated_Image_d9rr7ad9rr7ad9rr.jfif", OUT / "nicole-headshot.jpg"),
]

for src, dst in JOBS:
    im = Image.open(src)
    im = im.convert("RGB")
    # Cap the long edge at 2200px — plenty for 2x DPR of the ~520px-wide slots
    long_edge = max(im.size)
    if long_edge > 2200:
        scale = 2200 / long_edge
        im = im.resize((round(im.width * scale), round(im.height * scale)), Image.LANCZOS)
    im.save(dst, "JPEG", quality=86, optimize=True, progressive=True)
    kb = dst.stat().st_size / 1024
    print(f"{dst.name}: {im.width}x{im.height}  {kb:.0f} KB  (from {src.name})")
