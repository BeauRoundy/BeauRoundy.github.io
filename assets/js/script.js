// Theme toggle (light/dark)
(function() {
  const root = document.documentElement;
  const saved = localStorage.getItem('theme');
  if (saved === 'light') root.classList.add('light');

  const btn = document.getElementById('themeToggle');
  if (btn) btn.addEventListener('click', () => {
    root.classList.toggle('light');
    localStorage.setItem('theme', root.classList.contains('light') ? 'light' : 'dark');
  });

  // Footer year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Reveal-on-scroll
  const els = document.querySelectorAll('.reveal');
  const obs = new IntersectionObserver((entries) => {
    for (const e of entries) if (e.isIntersecting) e.target.classList.add('visible');
  }, { threshold: 0.12 });
  els.forEach(el => obs.observe(el));
})();

// Contact: open mailto with form contents
function submitContact(form) {
  const data = new FormData(form);
  const name = encodeURIComponent(data.get('name'));
  const email = encodeURIComponent(data.get('email'));
  const message = encodeURIComponent(data.get('message'));
  const subject = `Website contact from ${name}`;
  const body = `From: ${name} (%3C${email}%3E)%0A%0A${message}`;
  const mailto = `mailto:beau.roundy@jobnimbus.com?subject=${subject}&body=${body}`;
  window.location.href = mailto;
  return false;
}
