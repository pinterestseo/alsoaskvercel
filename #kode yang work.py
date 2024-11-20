#kode yang work

from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options

def write_to_file(data, file_path="hasil.txt"):
    with open(file_path, 'a', encoding='utf-8') as file:
        file.write(data + '\n')
    print(data)  # Menambahkan print untuk mencetak data ke terminal

def write_to_snipped_file(title, file_path="snipped.txt"):
    """Menulis entry snippet yang tidak ditemukan ke dalam snipped.txt"""
    with open(file_path, 'a', encoding='utf-8') as file:
        file.write(f"{title} (Snippet not found)\n")
    print(f"{title} (Snippet not found)")

def sanitize_id(text):
    """Membersihkan text untuk dijadikan id yang valid dalam HTML"""
    return (
        text.replace("'", "")  # Menghapus apostrof
        .replace("\"", "")  # Menghapus tanda kutip ganda
        .replace(",", "")  # Menghapus koma
        .replace("/", "")  # Menghapus garis miring
        .replace(":", "")  # Menghapus titik dua
        .replace("&", "and")  # Mengganti simbol ampersand dengan kata "and"
    )

def scrape_with_exclusions_and_snippet(url):
    # Konfigurasi ChromeDriver
    chrome_options = Options()
    chrome_options.add_argument('--headless')
    chrome_options.add_argument('--no-sandbox')
    chrome_options.add_argument('--disable-dev-shm-usage')

    service = Service('/usr/local/bin/chromedriver')
    driver = webdriver.Chrome(service=service, options=chrome_options)

    try:
        # Buka URL
        driver.get(url)

        # Output untuk hasil scraping
        result = "\n=== START SCRAPING ===\n"

        # Ambil permalink dari URL
        try:
            permalink = url.split('/')[-1].strip()  # Mengambil segmen terakhir dari URL
            result += f"'{permalink}': {{\n"
        except Exception as e:
            permalink = "unknown"
            result += f"'unknown': {{\n"

        # Scrape elemen <h1 class="title">
        try:
            title = driver.find_element(By.CSS_SELECTOR, 'h1.title').text.strip()
            result += f"  title: '{title}',\n"
        except:
            title = "Title not found"
            result += f"  title: '{title}',\n"

        # Tambahkan kategori
        result += f"  category: 'Pets',\n"

        # Scrape snippet
        snippet_extracted = False
        try:
            highlight_block = driver.find_element(By.CSS_SELECTOR, '.highlight-block')
            snippet = highlight_block.text.strip().replace('"', "'")
            result += f"  snippet: \"{snippet}\",\n"
            snippet_extracted = True  # Tandai bahwa snippet sudah ditemukan
        except:
            snippet = "Snippet not found"
            result += f"  snippet: \"{snippet}\",\n"
            # Menulis ke file snipped.txt jika snippet tidak ditemukan
            write_to_snipped_file(title)  # Menyimpan data ke snipped.txt

        # Abaikan elemen <section id="shopify-section-article-comments">
        try:
            comments_section = driver.find_element(By.ID, 'shopify-section-article-comments')
            driver.execute_script("arguments[0].style.display = 'none';", comments_section)  # Menyembunyikan elemen
        except:
            pass

        # Scrape elemen lainnya dalam `article-copy has_sidebar` atau `article-copy`
        article_content = None
        try:
            article_content = driver.find_element(By.CSS_SELECTOR, '.article-copy.has_sidebar')
        except:
            try:
                article_content = driver.find_element(By.CSS_SELECTOR, '.article-copy')
            except:
                pass  # Jika tidak ditemukan, artikel content tetap None

        if article_content:
            children = article_content.find_elements(By.XPATH, "./*")
            content = ""
            headings = []  # List untuk menyimpan data headings

            # Iterasi setiap elemen
            for child in children:
                # Abaikan elemen dengan kelas .flexscroll-inner
                if "flexscroll-inner" in child.get_attribute("class"):
                    continue

                # Abaikan elemen flexscroll-inner dan product
                if "product" in child.get_attribute("class"):
                    continue

                # Abaikan elemen flexscroll-inner jika ditemukan di dalam artikel
                if child.find_elements(By.CLASS_NAME, "flexscroll-inner"):
                    continue

                # Hentikan scraping jika elemen related-holder ditemukan
                if "related-holder" in child.get_attribute("class"):
                    break

                tag_name = child.tag_name
                inner_text = child.text.strip()

                # Abaikan elemen kosong
                if not inner_text:
                    continue

                # Abaikan elemen yang sama dengan snippet
                if snippet_extracted and inner_text == snippet:
                    continue

                # Jika elemen adalah <p><strong></strong></p>, ubah menjadi <h2><strong></strong></h2>
                if tag_name == "p" and child.find_elements(By.TAG_NAME, "strong"):
                    content += f'      <h2>{child.get_attribute("innerHTML")}</h2>\n'
                    continue  # lanjutkan ke elemen berikutnya

                # Jika elemen adalah heading, tambahkan ke headings dan content
                if tag_name in ["h2", "h3"]:
                    level = int(tag_name[-1])  # Ambil level dari angka di tag (2 untuk h2, 3 untuk h3)
                    heading_id = sanitize_id(inner_text)  # Gunakan fungsi sanitize_id untuk id
                    sanitized_text = sanitize_id(inner_text)  # Menambahkan sanitize_id pada text
                    headings.append({
                        "id": heading_id,
                        "text": sanitized_text,  # Gunakan teks yang sudah disanitasi
                        "level": level
                    })
                    content += f'      <{tag_name} id="{heading_id}">{sanitized_text}</{tag_name}>\n'

                # Jika elemen adalah list (ul atau ol)
                elif tag_name in ["ul", "ol"]:
                    list_items = child.find_elements(By.CSS_SELECTOR, "li")
                    list_content = "".join([f"        <li>{li.text.strip()}</li>\n" for li in list_items])
                    content += f"      <{tag_name}>\n{list_content}      </{tag_name}>\n"
                # Elemen lainnya (p, div, dll.)
                else:
                    content += f"      <{tag_name}>{inner_text}</{tag_name}>\n"

            # Pilih caption dari heading pertama
            caption = "No caption available"  # Default caption
            if headings:
                caption = headings[0]['text']  # Gunakan heading pertama

            # Scrape elemen featured image
            try:
                featured_image = driver.find_element(By.CSS_SELECTOR, '.featured-image')
                url_desktop = driver.find_element(By.CSS_SELECTOR, '.featured-image style').get_attribute("innerHTML")
                url_desktop = url_desktop.split("background-image:url(")[1].split(");")[0].replace("//", "https://")
                alt_text = title  # Default alt text menggunakan title
                result += f"  featuredImage: {{\n"
                result += f"    url: \"{url_desktop}\",\n"
                result += f"    alt: \"{alt_text}\",\n"
                result += f"    caption: \"{caption}\"\n"
                result += f"  }},\n"
            except:
                result += f"  featuredImage: {{\n"
                result += f"    url: \"Image not found\",\n"
                result += f"    alt: \"No image available\",\n"
                result += f"    caption: \"No caption available\"\n"
                result += f"  }},\n"

            # Cetak hasil scraping
            result += f"  content: `\n{content.strip()}\n`,\n"
            result += "  headings: [\n"
            for heading in headings:
                result += f"    {{ id: '{heading['id']}', text: '{heading['text']}', level: {heading['level']} }},\n"
            result += "  ]\n"
            result += "},\n"

            result += "\n=== END SCRAPING ==="

            # Simpan hasil ke file dan tampilkan di terminal
            write_to_file(result)

        else:
            write_to_file("Article content not found")

    except Exception as e:
        error_message = f"Terjadi kesalahan: {e}"
        write_to_file(error_message)

    finally:
        # Tutup driver
        driver.quit()


def scrape_multiple_urls(file_path):
    try:
        # Baca file urls.txt
        with open(file_path, 'r') as file:
            urls = [line.strip() for line in file if line.strip()]  # Ambil URL dari setiap baris non-kosong

        for url in urls:
            log_message = f"\nScraping URL: {url}"  # Menulis URL yang sedang di-scrape
            write_to_file(log_message)  # Tampilkan URL yang sedang diproses
            scrape_with_exclusions_and_snippet(url)
    except Exception as e:
        error_message = f"Terjadi kesalahan saat membaca file: {e}"
        write_to_file(error_message)


# Panggil fungsi untuk multiple URLs
file_path = "urls.txt"  # Nama file yang berisi daftar URL
scrape_multiple_urls(file_path)
