const revealItems = document.querySelectorAll('.reveal');
const navLinks = [...document.querySelectorAll('.site-nav a')];
const nav = document.querySelector('.site-nav');
const navToggle = document.querySelector('.nav-toggle');
const progressBar = document.querySelector('#progressBar');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.12 });

revealItems.forEach((item) => revealObserver.observe(item));

navToggle?.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    navToggle?.setAttribute('aria-expanded', 'false');
  });
});

const sections = navLinks
  .map((link) => document.querySelector(link.getAttribute('href')))
  .filter(Boolean);

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    navLinks.forEach((link) => link.classList.remove('active'));
    const active = navLinks.find((link) => link.getAttribute('href') === `#${entry.target.id}`);
    active?.classList.add('active');
  });
}, { rootMargin: '-35% 0px -55% 0px', threshold: 0 });

sections.forEach((section) => sectionObserver.observe(section));

function updateProgress() {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
  progressBar.style.width = `${Math.min(100, Math.max(0, progress))}%`;
}

window.addEventListener('scroll', updateProgress, { passive: true });
updateProgress();
