# Dokumentasi Lengkap Project PeopleAlsoAsk

## Daftar Isi
1. [Struktur Project](#struktur-project)
2. [Konfigurasi Dasar](#konfigurasi-dasar)
3. [Tema dan Tampilan](#tema-dan-tampilan)
4. [Pengelolaan Artikel](#pengelolaan-artikel)
5. [SEO dan Meta Tags](#seo-dan-meta-tags)
6. [Komponen UI](#komponen-ui)
7. [Routing dan Navigasi](#routing-dan-navigasi)
8. [Panduan Deployment](#panduan-deployment)

## Struktur Project

### Folder dan File Penting
```
├── app/                    # Routing dan halaman
│   ├── layout.tsx         # Layout utama
│   ├── page.tsx           # Halaman utama
│   ├── about/             # Halaman About
│   ├── category/          # Halaman kategori
│   ├── question/          # Halaman artikel
│   └── globals.css        # Style global
├── components/            # Komponen reusable
│   ├── ui/               # Komponen UI dasar
│   ├── navigation.tsx    # Navbar
│   └── footer.tsx        # Footer
├── lib/                   # Utilitas
│   ├── seo.ts            # Fungsi SEO
│   └── utils.ts          # Fungsi helper
├── types/                # TypeScript types
├── data/                 # Data konten
│   └── articles.ts       # Database artikel
└── public/              # Asset statis
```

## Konfigurasi Dasar

### 1. Konfigurasi Next.js
Lokasi: `next.config.js`
```javascript
const nextConfig = {
  images: { 
    domains: ['images.unsplash.com'],
    unoptimized: true 
  },
  output: 'export',
  distDir: 'out'
};
```

### 2. Konfigurasi TypeScript
Lokasi: `tsconfig.json`
- Mengatur path alias (@/)
- Konfigurasi kompilasi

### 3. Konfigurasi Package
Lokasi: `package.json`
- Dependencies
- Scripts untuk development dan build

## Tema dan Tampilan

### 1. Tema Global
Lokasi: `app/globals.css`
```css
:root {
  /* Warna Tema Light */
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --primary: 238 94% 66%;
  /* ... warna lainnya ... */
}

.dark {
  /* Warna Tema Dark */
  --background: 222.2 84% 4.9%;
  --foreground: 210 40% 98%;
  /* ... warna lainnya ... */
}
```

### 2. Komponen Theme Provider
Lokasi: `components/theme-provider.tsx`
- Mengatur tema light/dark
- Persistensi preferensi tema

### 3. Mengubah Tampilan

#### Halaman Utama
Lokasi: `app/page.tsx`
```typescript
export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-[#EEF5FF]">
        {/* Ubah konten dan styling di sini */}
      </section>
      
      {/* Featured Questions */}
      <section>
        {/* Ubah konten dan styling di sini */}
      </section>
    </div>
  );
}
```

#### Halaman Artikel
Lokasi: `app/question/[slug]/page.tsx`
```typescript
export default function QuestionPage() {
  return (
    <article className="prose dark:prose-invert">
      {/* Ubah layout artikel di sini */}
    </article>
  );
}
```

## Pengelolaan Artikel

### 1. Struktur Data Artikel
Lokasi: `data/articles.ts`
```typescript
export const articles = {
  'judul-artikel': {
    title: 'Judul Artikel',
    snippet: 'Ringkasan artikel',
    content: `
      <h2 id="pendahuluan">Pendahuluan</h2>
      <p>Konten artikel...</p>
      <!-- Gunakan HTML untuk formatting -->
    `,
    headings: [
      { id: 'pendahuluan', text: 'Pendahuluan', level: 2 }
    ],
    category: 'Teknologi',
    featuredImage: {
      url: '/path/to/image.jpg',
      alt: 'Deskripsi gambar'
    }
  }
};
```

### 2. Format Artikel
- Gunakan HTML untuk konten
- Struktur heading h2-h6
- Tambahkan gambar dengan alt text
- Kategorisasi yang jelas

### 3. Menambah Artikel Baru
1. Tambah di `data/articles.ts`
2. Buat slug URL-friendly
3. Sertakan metadata lengkap
4. Optimasi gambar

## SEO dan Meta Tags

### 1. Konfigurasi SEO Global
Lokasi: `app/layout.tsx`
```typescript
export const metadata: Metadata = {
  metadataBase: new URL('https://domain-anda.com'),
  title: {
    default: 'Judul Default',
    template: '%s | Nama Situs'
  },
  description: 'Deskripsi situs',
  verification: {
    google: 'KODE_GOOGLE',
    other: {
      'msvalidate.01': 'KODE_BING'
    }
  }
};
```

### 2. SEO per Halaman
Lokasi: File `page.tsx` masing-masing halaman
```typescript
export const metadata: Metadata = {
  title: 'Judul Halaman',
  description: 'Deskripsi halaman',
  openGraph: {
    title: 'Judul OG',
    description: 'Deskripsi OG'
  }
};
```

### 3. Structured Data
Lokasi: `lib/seo.ts`
- Schema.org markup
- JSON-LD format

## Komponen UI

### 1. Shadcn/UI Components
Lokasi: `components/ui/`
- Button, Input, Card, dll
- Styling dengan Tailwind

### 2. Layout Components
- Navigation
- Footer
- Sidebar

## Routing dan Navigasi

### 1. File-based Routing
```
app/
├── page.tsx           # /
├── about/
│   └── page.tsx      # /about
├── category/
│   └── [slug]/
│       └── page.tsx  # /category/[slug]
└── question/
    └── [slug]/
        └── page.tsx  # /question/[slug]
```

### 2. Dynamic Routes
- Category pages
- Article pages
- Search functionality

## Panduan Deployment

### 1. Netlify
1. Push ke GitHub
2. Di Netlify:
   ```
   Build command: npm run build
   Publish directory: out
   Environment variables:
   NETLIFY_NEXT_PLUGIN_SKIP=true
   ```
3. Deploy settings:
   - Tambahkan `netlify.toml`:
   ```toml
   [build]
     command = "npm run build"
     publish = "out"
   
   [build.environment]
     NETLIFY_NEXT_PLUGIN_SKIP = "true"
   ```

### 2. Vercel
1. Push ke GitHub
2. Di Vercel:
   - Import repository
   - Build settings otomatis
   - Deploy

### 3. Cloudflare Pages
1. Push ke GitHub
2. Di Cloudflare:
   ```
   Build command: npm run build
   Output directory: out
   Environment variables:
   NODE_VERSION=16
   ```

### 4. Firebase
1. Setup Firebase:
   ```bash
   npm install -g firebase-tools
   firebase login
   firebase init hosting
   ```

2. Konfigurasi `firebase.json`:
   ```json
   {
     "hosting": {
       "public": "out",
       "ignore": ["firebase.json"],
       "rewrites": [
         {
           "source": "**",
           "destination": "/index.html"
         }
       ]
     }
   }
   ```

3. Deploy:
   ```bash
   npm run build
   firebase deploy
   ```

### 5. Server Pribadi (aaPanel)

#### A. Persiapan Server
1. Di aaPanel:
   - Install Node.js
   - Install Nginx
   - Install PM2

2. Setup Project:
   ```bash
   npm install
   npm run build
   ```

#### B. Konfigurasi Nginx
1. Buat website baru di aaPanel
2. Edit konfigurasi Nginx:
   ```nginx
   server {
       listen 80;
       server_name domain.anda;
       root /www/wwwroot/domain.anda/out;
       
       # Gzip
       gzip on;
       gzip_types text/plain text/css application/json application/javascript;
       
       # Security headers
       add_header X-Frame-Options "SAMEORIGIN";
       add_header X-XSS-Protection "1; mode=block";
       
       location / {
           try_files $uri $uri.html $uri/index.html index.html;
           expires 30d;
       }
       
       location /_next/static {
           alias /www/wwwroot/domain.anda/out/_next/static;
           expires 365d;
       }
   }
   ```

3. Upload Files:
   - Upload folder `out` ke `/www/wwwroot/domain.anda/`
   - Set permissions:
     ```bash
     chown -R www:www /www/wwwroot/domain.anda
     chmod -R 755 /www/wwwroot/domain.anda
     ```

4. Restart Nginx:
   ```bash
   service nginx restart
   ```

## Tips Tambahan

### Performa
1. Optimasi Gambar:
   - Gunakan Next/Image
   - Format WebP
   - Lazy loading

2. Caching:
   - Browser caching
   - Static generation
   - CDN caching

### Keamanan
1. Headers:
   - CSP
   - HSTS
   - X-Frame-Options

2. Input Validation:
   - Sanitize HTML
   - Rate limiting
   - CSRF protection

### Monitoring
1. Analytics:
   - Google Analytics
   - Log monitoring
   - Error tracking

2. Performance:
   - Core Web Vitals
   - Lighthouse scores
   - Real user monitoring