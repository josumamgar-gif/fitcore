"""Generate FitCore PWA icons."""
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parent.parent / "public" / "icons"
SIZES = [72, 96, 128, 192, 512]
BG = (45, 106, 79)  # --G #2d6a4f
FG = (247, 247, 245)


def draw_icon(size: int) -> Image.Image:
    img = Image.new("RGBA", (size, size), BG)
    draw = ImageDraw.Draw(img)
    margin = size * 0.12
    draw.rounded_rectangle(
        [margin, margin, size - margin, size - margin],
        radius=size * 0.18,
        fill=FG,
    )
    font_size = int(size * 0.32)
    try:
        font = ImageFont.truetype("arialbd.ttf", font_size)
    except OSError:
        font = ImageFont.load_default()
    text = "FC"
    bbox = draw.textbbox((0, 0), text, font=font)
    tw, th = bbox[2] - bbox[0], bbox[3] - bbox[1]
    draw.text(
        ((size - tw) / 2, (size - th) / 2 - size * 0.02),
        text,
        fill=BG,
        font=font,
    )
    return img


def main():
    ROOT.mkdir(parents=True, exist_ok=True)
    for s in SIZES:
        path = ROOT / f"icon-{s}.png"
        draw_icon(s).save(path, "PNG", optimize=True)
        print(f"Created {path}")


if __name__ == "__main__":
    main()
