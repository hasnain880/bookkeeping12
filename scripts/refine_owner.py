"""Refine the extracted owner portrait:
1. Sample the blob's light-blue background color.
2. Flood-fill the white page-background corners (connected to image edges)
   with that blue so the whole backdrop is uniform (no white peeking inside
   the site's blob mask).
3. Print the sampled color so the site theme can match it exactly.
"""
from PIL import Image, ImageDraw

PATH = "/home/z/my-project/public/owner-portrait.png"

img = Image.open(PATH).convert("RGB")
w, h = img.size
print("size:", img.size)

# Sample the blob background from a point clearly inside the blue area
# (left-middle of the crop, away from the subject).
sample = img.getpixel((30, h // 2))
print("sampled blob blue:", sample, "#%02X%02X%02X" % sample)

# Flood fill white page background from all four corners.
for seed in [(0, 0), (w - 1, 0), (0, h - 1), (w - 1, h - 1)]:
    ImageDraw.floodfill(img, seed, sample, thresh=38)

# Also fill along the top edge midpoint in case the blob curve touches there
ImageDraw.floodfill(img, (w // 2, 0), sample, thresh=38)

img.save(PATH, "PNG")
print("refined saved:", PATH)
