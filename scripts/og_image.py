"""Build a 1200x630 Open Graph share image:
- Light brand background
- Left: NW logo circle, brand name, tagline, headline, email
- Right: owner portrait (cover-cropped)
"""
from PIL import Image, ImageDraw, ImageFont

OUT = "/home/z/my-project/public/og-image.png"
PORTRAIT = "/home/z/my-project/public/images/owner/nicole-headshot.jpg"

W, H = 1200, 630
BLUE = (43, 127, 255)        # brand-500
INK = (26, 36, 64)           # ink-900
MUTED = (85, 97, 124)        # ink-500
BG = (243, 248, 254)         # mist

BOLD = "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf"
REG = "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf"

img = Image.new("RGB", (W, H), BG)
draw = ImageDraw.Draw(img)

# --- Right: portrait column (cover-crop 470x630) ---
p = Image.open(PORTRAIT).convert("RGB")
target_w, target_h = 470, H
scale = max(target_w / p.width, target_h / p.height)
nw, nh = round(p.width * scale), round(p.height * scale)
p = p.resize((nw, nh), Image.LANCZOS)
left = (nw - target_w) // 2
top = 0  # bias toward top to keep the subject's head
p = p.crop((left, top, left + target_w, top + target_h))
img.paste(p, (W - target_w, 0))

# --- Logo circle ---
cx, cy, r = 96, 96, 44
draw.ellipse((cx - r, cy - r, cx + r, cy + r), fill=BLUE)
f_logo = ImageFont.truetype(BOLD, 34)
bbox = draw.textbbox((0, 0), "NW", font=f_logo)
lw, lh = bbox[2] - bbox[0], bbox[3] - bbox[1]
draw.text((cx - lw / 2 - bbox[0], cy - lh / 2 - bbox[1]), "NW",
          font=f_logo, fill=(255, 255, 255))

tx = 172
draw.text((tx, 66), "NW's Not Just Bookkeeping", font=ImageFont.truetype(BOLD, 30), fill=INK)
draw.text((tx, 110), "ACCURATE BOOKS  ·  BETTER BUSINESS",
          font=ImageFont.truetype(BOLD, 15), fill=BLUE)

# --- Headline ---
f_h1 = ImageFont.truetype(BOLD, 78)
draw.text((84, 240), "More time", font=f_h1, fill=INK)
draw.text((84, 330), "to ", font=f_h1, fill=INK)
w_to = draw.textbbox((84, 330), "to ", font=f_h1)[2]
draw.text((w_to, 330), "grow.", font=f_h1, fill=BLUE)

# --- Subline ---
draw.text(
    (84, 452),
    "Bookkeeping for small businesses — 5+ hours",
    font=ImageFont.truetype(REG, 26), fill=MUTED,
)
draw.text(
    (84, 490),
    "back every week. Remote & reliable.",
    font=ImageFont.truetype(REG, 26), fill=MUTED,
)

# --- Email pill ---
f_pill = ImageFont.truetype(BOLD, 22)
text = "nwnotjustbookkeeping23@gmail.com"
tb = draw.textbbox((0, 0), text, font=f_pill)
tw = tb[2] - tb[0]
pill_x, pill_y, pill_h = 84, 548, 52
pad_x = 26
draw.rounded_rectangle(
    (pill_x, pill_y, pill_x + tw + pad_x * 2, pill_y + pill_h),
    radius=pill_h / 2, fill=BLUE,
)
draw.text(
    (pill_x + pad_x, pill_y + (pill_h - (tb[3] - tb[1])) / 2 - tb[1]),
    text, font=f_pill, fill=(255, 255, 255),
)

img.save(OUT, "PNG")
print("saved:", OUT, img.size)
