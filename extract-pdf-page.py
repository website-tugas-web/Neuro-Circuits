#!/usr/bin/env python3
"""
Extract a specific page from PDF as PNG for use in materials/test pages.
Usage: python3 extract-pdf-page.py <pdf-file> <page-number> <output-png>
"""

import sys
from pypdf import PdfReader, PdfWriter
import subprocess
import os

def extract_page_to_pdf(input_pdf, page_num, temp_pdf):
    """Extract a single page to a temporary PDF."""
    reader = PdfReader(input_pdf)
    writer = PdfWriter()

    # Page numbers are 0-indexed in pypdf
    writer.add_page(reader.pages[page_num - 1])

    with open(temp_pdf, 'wb') as f:
        writer.write(f)

def pdf_to_png_sips(pdf_file, png_file, dpi=150):
    """Convert PDF to PNG using macOS sips utility."""
    # sips can convert PDF to PNG on macOS
    cmd = ['sips', '-s', 'format', 'png', pdf_file, '--out', png_file]
    subprocess.run(cmd, check=True, capture_output=True)

def main():
    if len(sys.argv) != 4:
        print(__doc__)
        sys.exit(1)

    input_pdf = sys.argv[1]
    page_num = int(sys.argv[2])
    output_png = sys.argv[3]

    # Create temp PDF with just the target page
    temp_pdf = f"/tmp/page_{page_num}.pdf"

    try:
        print(f"Extracting page {page_num} from {input_pdf}...")
        extract_page_to_pdf(input_pdf, page_num, temp_pdf)

        print(f"Converting to PNG: {output_png}...")
        pdf_to_png_sips(temp_pdf, output_png)

        print(f"Success! Created {output_png}")

    finally:
        # Clean up temp PDF
        if os.path.exists(temp_pdf):
            os.remove(temp_pdf)

if __name__ == '__main__':
    main()
