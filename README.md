# Amr Smaier — Coach Website

Editorial, premium 4-page static site for a swimming & performance coach.

## Pages
- `index.html` — Home (hero with video support)
- `about.html` — Bio, certifications, testimonials
- `services.html` — Programs & pricing
- `contact.html` — Form, details, map

## Stack
Vanilla HTML + CSS + a tiny JS file. No build step. Deploy anywhere (GitHub Pages, Netlify, Vercel) by serving the repo root.

## Customise
- **Hero video:** drop a file at `assets/video/hero.mp4`. The poster image will show until the video loads.
- **Images:** placeholders use `picsum.photos`. Replace with real photography (e.g. `assets/img/coach.jpg`) and update the `<img src>` references.
- **Brand:** edit colour tokens at the top of `assets/css/styles.css`.
- **Contact form:** currently opens the visitor's mail client. Wire up to Formspree / Resend / your backend in `assets/js/main.js`.

## Local preview
```bash
python3 -m http.server 8000
# open http://localhost:8000
```
