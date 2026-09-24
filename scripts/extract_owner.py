"""Inspect the uploaded mock image and extract the owner's portrait.

Coordinate estimates are made in a 1568x830 reference space and scaled to
the actual PNG size. The crop window is chosen to include the owner's full
head + shoulders while excluding the baked-in overlays:
  - blue spark marks (top right)
  - handwritten note "Small business is my business" (top right)
  - white floating card "YOUR BUSINESS..." (bottom right)
  - light blue contact strip (bottom)
"""
from PIL import Image

SRC = "/home/z/my-project/upload/figmacn.png"
OUT = "/home/z/my-project/public/owner-portrait.png"

# Reference-space coordinates (1568 x 830)
REF_W, REF_H = 1568.0, 830.0
CROP = (860, 65, 1245, 555)  # left, top, right, bottom

img = Image.open(SRC)
print("source size:", img.size, "mode:", img.mode)

scale_x = img.width / REF_W
scale_y = img.height / REF_H
print(f"scale: x={scale_x:.3f} y={scale_y:.3f}")

px = (
    round(CROP[0] * scale_x),
    round(CROP[1] * scale_y),
    round(CROP[2] * scale_x),
    round(CROP[3] * scale_y),
)
print("crop box (actual px):", px, "size:", (px[2] - px[0], px[3] - px[1]))

region = img.crop(px).convert("RGB")
region.save(OUT, "PNG")
print("saved:", OUT, region.size)
