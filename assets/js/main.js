// nav scroll state
const nav = document.querySelector('.nav');
const isHome = document.body.dataset.page === 'home';
function onScroll(){
  if(!nav) return;
  const y = window.scrollY;
  if(isHome){
    nav.classList.toggle('solid', y > 60);
  } else {
    nav.classList.add('solid');
  }
}
window.addEventListener('scroll', onScroll, {passive:true});
onScroll();

// mobile menu
const toggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.nav .links');
if(toggle && links){
  toggle.addEventListener('click', () => links.classList.toggle('open'));
}

// reveal on scroll
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => { if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } });
}, {threshold:0.12});
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// year
const y = document.getElementById('year');
if(y) y.textContent = new Date().getFullYear();

// contact form (no backend — opens mail client)
const form = document.getElementById('contact-form');
if(form){
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const name = encodeURIComponent(data.get('name') || '');
    const email = encodeURIComponent(data.get('email') || '');
    const phone = encodeURIComponent(data.get('phone') || '');
    const goal = encodeURIComponent(data.get('goal') || '');
    const msg = encodeURIComponent(data.get('message') || '');
    const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0APhone: ${phone}%0D%0AGoal: ${goal}%0D%0A%0D%0A${msg}`;
    window.location.href = `mailto:hello@amrsmaier.coach?subject=New%20coaching%20enquiry&body=${body}`;
    const status = document.getElementById('form-status');
    if(status) status.textContent = 'Opening your email client…';
  });
}
