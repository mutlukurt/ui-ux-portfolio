# UI/UX Portfolio (Static Site)

Curated UI/UX case studies presented as a lightweight static website (HTML/CSS/JS).

## Live Demo

- Live: https://mutlukurt.github.io/ui-ux-portfolio/
- Repo: https://github.com/mutlukurt/ui-ux-portfolio

## Özellikler

- Modern, yalın arayüz (ışık tema)
- Sticky header ve çekmeceli (drawer) mobil navigasyon
- Seçilmiş çalışmalar için görsel kartlar
- İletişim formu (Formspree entegrasyonu)

## Performans İyileştirmeleri (2025)

- Header: `backdrop-filter: blur()` kaldırıldı; GPU compositing için `transform: translateZ(0)` eklendi.
- Arka plan efektleri: Blur yoğunluğu düşürüldü; 900px altı ekranlarda arka plan blobları kapatıldı.
- Görseller: Kart görsellerine `aspect-ratio: 16/9` ve `object-fit: cover`; liste ve case sayfalarındaki görsellere `fetchpriority="low"`, `loading="lazy"`, `decoding="async"`.
- JS: Drawer aç/kapat mantığı tek ve idempotent hale getirildi; Escape ile kapama + bfcache dönüşünde otomatik kapama eklendi.
- Mobil gölgeler: Box-shadow yoğunluğu azaltıldı.
- Erişilebilirlik / hareket: `prefers-reduced-motion` için arka plan kapatma genişletildi.

Bu değişiklikler özellikle mobil cihazlarda ve düşük/orta segment CPU'larda kaydırma takılmalarını azaltır, ana iş parçacığının yükünü düşürür ve boyama/blur maliyetlerini düşürür.

## Teknoloji

- Vanilla HTML, CSS, JavaScript
- Harici bağlam: Formspree (iletişim formu)

## Lokal Geliştirme

Seçenek 1: Dosyayı direkt açın

1. Proje klasöründe `index.html` dosyasını tarayıcıda açın.

Seçenek 2: Basit statik sunucu

```bash
npx serve .
# veya
python3 -m http.server 5173
```

Tarayıcıda `http://localhost:5173` adresine gidin (port farklı olabilir).

## Dağıtım (GitHub Pages)

Bu depo statik bir site olduğundan ek build adımı gerekmez.

1. GitHub’da repo sayfasına gidin: Settings → Pages
2. Source: `Deploy from a branch`
3. Branch: `main` ve `/ (root)` klasörü
4. Kaydedin; site şu adreste yayınlanır: `https://<kullanici>.github.io/<repo-adi>/`

Not: Yukarıdaki Live Demo bağlantısı GitHub Pages etkinleştirildikten sonra çalışır. Özel alan adı kullanacaksanız `Settings → Pages` ekranından domaini ekleyip HTTPS’i zorunlu kılın.

## Lisans

MIT — bkz. `LICENSE`
