def clean_text(input_file, output_file):
    with open(input_file, 'r', encoding='utf-8') as f:
        lines = f.readlines()
    
    cleaned_lines = []
    skip_line = False
    
    for line in lines:
        # Skip lines that contain these patterns
        if "Scraping URL:" in line or "=== START SCRAPING ===" in line or "=== END SCRAPING ===" in line:
            continue
            
        # Add other lines to cleaned content
        cleaned_lines.append(line)
    
    # Write cleaned content to output file
    with open(output_file, 'w', encoding='utf-8') as f:
        f.writelines(cleaned_lines)

# Run the function
clean_text('data.txt', 'hasil.txt')