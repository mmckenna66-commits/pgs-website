#!/usr/bin/env python3
"""
Convert and optimize images to WebP format for web performance.
Requires: pip install pillow
"""
import os
import sys

try:
    from PIL import Image
except ImportError:
    print("Installing Pillow...")
    os.system(f"{sys.executable} -m pip install pillow --quiet")
    from PIL import Image

def optimize_image(input_path, output_path, max_width=None, quality=85):
    """Convert and optimize image to WebP."""
    img = Image.open(input_path)
    
    # Convert RGBA to RGB if needed
    if img.mode in ('RGBA', 'LA', 'P'):
        background = Image.new('RGB', img.size, (255, 255, 255))
        if img.mode == 'P':
            img = img.convert('RGBA')
        background.paste(img, mask=img.split()[-1] if img.mode in ('RGBA', 'LA') else None)
        img = background
    
    # Resize if needed
    if max_width and img.width > max_width:
        ratio = max_width / img.width
        new_height = int(img.height * ratio)
        img = img.resize((max_width, new_height), Image.Resampling.LANCZOS)
    
    # Save as WebP
    img.save(output_path, 'WebP', quality=quality, method=6)
    
    # Report savings
    original_size = os.path.getsize(input_path) / 1024 / 1024
    new_size = os.path.getsize(output_path) / 1024 / 1024
    print(f"✓ {os.path.basename(output_path)}: {original_size:.2f}MB → {new_size:.2f}MB ({100 - (new_size/original_size*100):.1f}% reduction)")

def main():
    base_dir = os.path.dirname(os.path.abspath(__file__))
    
    # Hero image (large, high quality)
    optimize_image(
        os.path.join(base_dir, 'assets/brownsville-hero.jpg'),
        os.path.join(base_dir, 'assets/brownsville-hero.webp'),
        max_width=1920,
        quality=85
    )
    
    # Logo (keep original, but create WebP version)
    optimize_image(
        os.path.join(base_dir, 'assets/pgs-logo.png'),
        os.path.join(base_dir, 'assets/pgs-logo.webp'),
        max_width=400,
        quality=90
    )
    
    # Provider headshots (small, avatars)
    providers = ['barba.jpg', 'hill.jpg', 'martinez.jpg', 'mckenna.jpg', 'silhy.jpg']
    for provider in providers:
        input_path = os.path.join(base_dir, f'assets/providers/{provider}')
        output_path = os.path.join(base_dir, f'assets/providers/{provider.replace(".jpg", ".webp")}')
        optimize_image(input_path, output_path, max_width=300, quality=85)
    
    print("\n✅ All images optimized!")

if __name__ == '__main__':
    main()
