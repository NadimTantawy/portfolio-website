(function () {
  'use strict';

  /* ── DOM refs ───────────────────────────────────────────── */
  const htmlEl       = document.documentElement;
  const navbar       = document.getElementById('navbar');
  const navMenu      = document.getElementById('navMenu');
  const menuToggle   = document.getElementById('menuToggle');
  const themeToggle  = document.getElementById('themeToggle');
  const navLinks     = document.querySelectorAll('.nav-link');
  const sections     = document.querySelectorAll('section[id]');
  const reveals      = document.querySelectorAll('.reveal');
  const projectCards = document.querySelectorAll('.project-card');

  /* ── Theme toggle ───────────────────────────────────────── */
  themeToggle.addEventListener('click', function () {
    const next = htmlEl.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    htmlEl.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  });

  /* ── Sticky nav + active link tracking ─────────────────── */
  function onScroll() {
    navbar.classList.toggle('scrolled', window.scrollY > 50);

    const offset = window.scrollY + 100;
    let current  = '';

    sections.forEach(function (sec) {
      if (offset >= sec.offsetTop) current = sec.id;
    });

    navLinks.forEach(function (link) {
      link.classList.toggle('active', link.getAttribute('href') === '#' + current);
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ── Mobile menu ────────────────────────────────────────── */
  menuToggle.addEventListener('click', function () {
    const isOpen = navMenu.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });

  /* ── Intersection Observer for Reveal ───────────────────── */
  if ('IntersectionObserver' in window) {
    const revealObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.15 }
    );

    reveals.forEach((el) => revealObs.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add('active'));
  }

  /* ── Mouse Tracking for Project Cards ───────────────────── */
  projectCards.forEach((card) => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  });

})();
