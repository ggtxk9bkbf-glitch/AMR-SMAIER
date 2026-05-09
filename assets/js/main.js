// Nav scroll state
const nav = document.querySelector('.nav');
const isHome = document.body.dataset.page === 'home';

function updateNav() {
  if (!nav) return;
  if (isHome) {
    nav.classList.toggle('solid', window.scrollY > 60);
  } else {
    nav.classList.add('solid');
  }
}
window.addEventListener('scroll', updateNav, { passive: true });
updateNav();

// Mobile menu
const toggle = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');
if (toggle && navLinks) {
  toggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    toggle.setAttribute('aria-expanded', navLinks.classList.contains('open'));
  });
  // Close menu on link click
  navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => navLinks.classList.remove('open'));
  });
}

// Scroll reveal with IntersectionObserver
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('in');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal, .reveal-up').forEach(el => io.observe(el));

// Copyright year
const yr = document.getElementById('year');
if (yr) yr.textContent = new Date().getFullYear();

// Contact form → mailto
const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const d = new FormData(form);
    const enc = v => encodeURIComponent(d.get(v) || '');
    const body =
      `Name: ${enc('name')}%0D%0A` +
      `Email: ${enc('email')}%0D%0A` +
      `Phone: ${enc('phone')}%0D%0A` +
      `Programme: ${enc('goal')}%0D%0A%0D%0A` +
      `${enc('message')}`;
    window.location.href =
      `mailto:hello@amrsamir.coach?subject=Coaching%20Enquiry&body=${body}`;
    const status = document.getElementById('form-status');
    if (status) status.textContent = 'Opening your email client…';
  });
}
