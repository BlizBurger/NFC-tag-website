/* ============================================================
   ÉCLAT — App JS
   Reads SiteConfig from data/config.js and populates the page
   ============================================================ */

(function () {
  'use strict';

  /* ── Wait for DOM ─────────────────────────────────────────── */
  document.addEventListener('DOMContentLoaded', init);

  function init() {
    const C = window.SiteConfig;
    if (!C) { console.error('SiteConfig not loaded'); return; }

    injectLoader();
    applyBrand(C.brand);
    renderVenue(C.venue);
    renderInstagram(C.instagram);
    renderReviews(C.reviews);
    renderSpotify(C.spotify);
    renderDJs(C.djs);
    renderReservation(C.reservation);
    renderFoodMenu(C.foodMenu);
    renderDrinksMenu(C.drinksMenu);
    renderEvents(C.events);
    renderNFC(C.nfcExperience);
    renderFooter(C.footer);

    initNav();
    initScrollReveal();
    initParticles();
    initDemoMode();
    initReviewsCarousel(C.reviews.testimonials);
    initCountdowns(C.events);
  }

  /* ══════════════════════════════════════════════════════════
     LOADER
  ══════════════════════════════════════════════════════════ */
  function injectLoader() {
    const loader = document.createElement('div');
    loader.className = 'loader';
    loader.id = 'site-loader';
    loader.innerHTML = `
      <div class="loader-logo" id="loader-brand">ÉCLAT</div>
      <div class="loader-line"></div>
    `;
    document.body.prepend(loader);

    const name = (window.SiteConfig?.brand?.name) || 'ÉCLAT';
    loader.querySelector('#loader-brand').textContent = name;

    window.addEventListener('load', () => {
      setTimeout(() => loader.classList.add('hidden'), 500);
    });
    setTimeout(() => loader.classList.add('hidden'), 2800);
  }

  /* ══════════════════════════════════════════════════════════
     BRAND
  ══════════════════════════════════════════════════════════ */
  function applyBrand(b) {
    document.title = `${b.name} — Luxury Experience`;

    setText('page-title',       `${b.name} — Luxury Experience`);
    setText('nav-logo-text',    b.name);
    setText('hero-brand-name',  b.name);
    setText('hero-tagline',     b.tagline);
    setText('hero-sub-tagline', b.subTagline || 'Tap into the experience');
    setText('footer-logo',      b.name);
    setText('loader-brand',     b.name);

    /* Custom accent color */
    if (b.accentColor) {
      document.documentElement.style.setProperty('--gold', b.accentColor);
    }
  }

  /* ══════════════════════════════════════════════════════════
     VENUE
  ══════════════════════════════════════════════════════════ */
  function renderVenue(v) {
    setText('venue-name',        v.name);
    setText('venue-description', v.description);
    setText('venue-address',     v.address);

    /* Hours */
    const hoursList = document.getElementById('venue-hours');
    if (hoursList) {
      hoursList.innerHTML = v.hours.map(h => `
        <li>
          <span class="day">${h.day}</span>
          <span class="time">${h.time}</span>
        </li>
      `).join('');
    }

    /* Contact buttons */
    setAttr('contact-call',     'href', `tel:${v.phone}`);
    setAttr('contact-whatsapp', 'href', `https://wa.me/${v.whatsapp}`);
    setAttr('contact-maps',     'href', v.mapsUrl || '#');
  }

  /* ══════════════════════════════════════════════════════════
     INSTAGRAM
  ══════════════════════════════════════════════════════════ */
  function renderInstagram(ig) {
    setText('insta-handle', ig.handle);
    setAttr('insta-follow-btn', 'href', ig.url || '#');

    const grid = document.getElementById('insta-grid');
    if (!grid) return;

    grid.innerHTML = ig.posts.map(p => `
      <div class="insta-post">
        <img src="${p.image}" alt="${p.caption}" loading="lazy" />
        <div class="insta-post-overlay">
          <p class="insta-post-caption">${p.caption}</p>
        </div>
      </div>
    `).join('');
  }

  /* ══════════════════════════════════════════════════════════
     REVIEWS
  ══════════════════════════════════════════════════════════ */
  function renderReviews(r) {
    setText('rating-score', r.googleRating.toFixed(1));
    setText('rating-count', `${r.totalReviews.toLocaleString()} avis Google`);

    /* Stars */
    const starsEl = document.getElementById('rating-stars');
    if (starsEl) {
      const full = Math.floor(r.googleRating);
      starsEl.textContent = '★'.repeat(full) + (r.googleRating % 1 >= .5 ? '½' : '');
    }

    setAttr('leave-review-btn', 'href', r.googleReviewUrl || '#');
  }

  /* ══════════════════════════════════════════════════════════
     REVIEWS CAROUSEL
  ══════════════════════════════════════════════════════════ */
  function initReviewsCarousel(testimonials) {
    const carousel = document.getElementById('reviews-carousel');
    const dotsWrap = document.getElementById('reviews-dots');
    if (!carousel || !dotsWrap) return;

    carousel.innerHTML = testimonials.map(t => `
      <div class="review-card">
        <div class="review-card-header">
          <div class="review-avatar">${t.avatar}</div>
          <div>
            <div class="review-name">${t.name}</div>
            <div class="review-stars">${'★'.repeat(t.rating)}</div>
          </div>
        </div>
        <p class="review-text">${t.text}</p>
      </div>
    `).join('');

    dotsWrap.innerHTML = testimonials.map((_, i) =>
      `<button class="carousel-dot${i === 0 ? ' active' : ''}" data-index="${i}" aria-label="Review ${i+1}"></button>`
    ).join('');

    let current = 0;

    function goTo(index) {
      current = (index + testimonials.length) % testimonials.length;
      carousel.style.transform = `translateX(calc(-${current * 100}% - ${current}rem))`;
      dotsWrap.querySelectorAll('.carousel-dot').forEach((d, i) => {
        d.classList.toggle('active', i === current);
      });
    }

    document.getElementById('reviews-prev')?.addEventListener('click', () => goTo(current - 1));
    document.getElementById('reviews-next')?.addEventListener('click', () => goTo(current + 1));

    dotsWrap.addEventListener('click', e => {
      const btn = e.target.closest('.carousel-dot');
      if (btn) goTo(parseInt(btn.dataset.index));
    });

    /* Auto-advance */
    setInterval(() => goTo(current + 1), 5500);
  }

  /* ══════════════════════════════════════════════════════════
     SPOTIFY
  ══════════════════════════════════════════════════════════ */
  function renderSpotify(s) {
    const tabs = document.getElementById('playlist-tabs');
    const frame = document.getElementById('spotify-frame');
    if (!tabs || !frame) return;

    tabs.innerHTML = s.playlists.map((p, i) => `
      <button class="playlist-tab${i === 0 ? ' active' : ''}" data-index="${i}" data-embed="${p.embedUrl}">
        <span>${p.icon}</span>
        <span>${p.label}</span>
      </button>
    `).join('');

    tabs.addEventListener('click', e => {
      const btn = e.target.closest('.playlist-tab');
      if (!btn) return;
      tabs.querySelectorAll('.playlist-tab').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      frame.src = btn.dataset.embed;
    });
  }

  /* ══════════════════════════════════════════════════════════
     DJS
  ══════════════════════════════════════════════════════════ */
  function renderDJs(djs) {
    /* Featured */
    const featuredCard = document.getElementById('dj-featured-card');
    if (featuredCard && djs.featured) {
      const f = djs.featured;
      featuredCard.innerHTML = `
        <span class="dj-featured-badge">⭐ Resident DJ</span>
        ${f.image
          ? `<img class="dj-featured-img" src="${f.image}" alt="${f.name}" loading="lazy" />`
          : `<div class="dj-featured-img-placeholder">🎧</div>`
        }
        <div>
          <div class="dj-featured-name">${f.name}</div>
          <p class="dj-featured-bio">${f.bio}</p>
          <div class="dj-featured-meta">
            <span class="dj-next-set">🗓 ${f.nextSet}</span>
            <a href="${f.instagram}" class="btn btn-outline btn--sm demo-trigger">Instagram</a>
          </div>
        </div>
      `;
      /* Re-bind demo triggers after injection */
      featuredCard.querySelectorAll('.demo-trigger').forEach(bindDemoTrigger);
    }

    /* Lineup grid */
    const grid = document.getElementById('dj-grid');
    if (!grid) return;

    grid.innerHTML = djs.lineup.map(dj => `
      <div class="dj-card reveal-up">
        ${dj.image
          ? `<img class="dj-card-img" src="${dj.image}" alt="${dj.name}" loading="lazy" />`
          : `<div class="dj-card-img-placeholder">🎧</div>`
        }
        ${dj.resident ? '<div class="dj-resident-badge">Resident</div>' : ''}
        <div class="dj-card-name">${dj.name}</div>
        <div class="dj-card-genre">${dj.genre}</div>
        <div class="dj-card-set">🗓 ${dj.nextSet}</div>
        <a href="${dj.instagram}" class="btn btn-outline btn--sm demo-trigger">Instagram</a>
      </div>
    `).join('');

    grid.querySelectorAll('.demo-trigger').forEach(bindDemoTrigger);
  }

  /* ══════════════════════════════════════════════════════════
     RESERVATION
  ══════════════════════════════════════════════════════════ */
  function renderReservation(r) {
    setText('reservation-desc', r.description);
    setText('res-phone-display', r.phone);
    setText('res-email-display', r.email);

    setAttr('res-whatsapp', 'href', `https://wa.me/${r.whatsapp}`);
    setAttr('res-call',     'href', `tel:${r.phone}`);
    setAttr('res-email',    'href', `mailto:${r.email}`);
  }

  /* ══════════════════════════════════════════════════════════
     MENUS (generic for food & drinks)
  ══════════════════════════════════════════════════════════ */
  function renderMenu(categories, containerId) {
    const wrap = document.getElementById(containerId);
    if (!wrap) return;

    wrap.innerHTML = categories.map((cat, ci) => `
      <div class="menu-category${ci === 0 ? ' open' : ''}" data-cat="${ci}">
        <div class="menu-category-header">
          <div class="menu-category-left">
            <span class="menu-category-icon">${cat.icon}</span>
            <div>
              <div class="menu-category-name">${cat.category}</div>
              <div class="menu-category-count">${cat.items.length} articles</div>
            </div>
          </div>
          <span class="menu-category-arrow">▾</span>
        </div>
        <div class="menu-items-wrap">
          <div class="menu-items">
            ${cat.items.map(item => `
              <div class="menu-item">
                <div class="menu-item-info">
                  <div class="menu-item-name">${item.name}</div>
                  <div class="menu-item-desc">${item.description}</div>
                </div>
                <div class="menu-item-price">${item.price}</div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `).join('');

    /* Accordion toggle */
    wrap.addEventListener('click', e => {
      const header = e.target.closest('.menu-category-header');
      if (!header) return;
      const cat = header.closest('.menu-category');
      cat.classList.toggle('open');
    });
  }

  function renderFoodMenu(menu)   { renderMenu(menu, 'food-menu-accordion'); }
  function renderDrinksMenu(menu) { renderMenu(menu, 'drinks-menu-accordion'); }

  /* ══════════════════════════════════════════════════════════
     EVENTS
  ══════════════════════════════════════════════════════════ */
  function renderEvents(events) {
    const grid = document.getElementById('events-grid');
    if (!grid) return;

    grid.innerHTML = events.map((ev, i) => `
      <div class="event-card reveal-up" style="transition-delay:${i * .1}s">
        <div class="event-image">
          <img src="${ev.image}" alt="${ev.title}" loading="lazy" />
        </div>
        <div class="event-content">
          ${ev.tag ? `<span class="event-tag">${ev.tag}</span>` : ''}
          <h3 class="event-title">${ev.title}</h3>
          <div class="event-subtitle">${ev.subtitle}</div>
          <p class="event-desc">${ev.description}</p>
          <div class="event-meta">
            <span class="event-meta-item">📅 ${ev.displayDate}</span>
            <span class="event-meta-item">🕙 ${ev.time}</span>
          </div>
          <div class="event-countdown" data-date="${ev.date}" id="countdown-${i}">
            ${countdownHTML(ev.date)}
          </div>
        </div>
      </div>
    `).join('');
  }

  /* ══════════════════════════════════════════════════════════
     COUNTDOWNS
  ══════════════════════════════════════════════════════════ */
  function countdownHTML(dateStr) {
    const { d, h, m, s } = getTimeLeft(dateStr);
    return `
      <div class="countdown-unit"><span class="countdown-number" data-d>${d}</span><span class="countdown-label">Jours</span></div>
      <div class="countdown-unit"><span class="countdown-number" data-h>${h}</span><span class="countdown-label">Heures</span></div>
      <div class="countdown-unit"><span class="countdown-number" data-m>${m}</span><span class="countdown-label">Min</span></div>
      <div class="countdown-unit"><span class="countdown-number" data-s>${s}</span><span class="countdown-label">Sec</span></div>
    `;
  }

  function getTimeLeft(dateStr) {
    const diff = Math.max(0, new Date(dateStr) - Date.now());
    return {
      d: String(Math.floor(diff / 86400000)).padStart(2,'0'),
      h: String(Math.floor((diff % 86400000) / 3600000)).padStart(2,'0'),
      m: String(Math.floor((diff % 3600000) / 60000)).padStart(2,'0'),
      s: String(Math.floor((diff % 60000) / 1000)).padStart(2,'0'),
    };
  }

  function initCountdowns(events) {
    setInterval(() => {
      events.forEach((ev, i) => {
        const wrap = document.getElementById(`countdown-${i}`);
        if (!wrap) return;
        const { d, h, m, s } = getTimeLeft(ev.date);
        const set = (sel, val) => { const el = wrap.querySelector(sel); if (el) el.textContent = val; };
        set('[data-d]', d); set('[data-h]', h); set('[data-m]', m); set('[data-s]', s);
      });
    }, 1000);
  }

  /* ══════════════════════════════════════════════════════════
     NFC SECTION
  ══════════════════════════════════════════════════════════ */
  function renderNFC(nfc) {
    setText('nfc-headline',    nfc.headline);
    setText('nfc-description', nfc.description);

    const grid = document.getElementById('nfc-features');
    if (!grid) return;

    grid.innerHTML = nfc.features.map(f => `
      <div class="nfc-feature reveal-up">
        <div class="nfc-feature-icon">${f.icon}</div>
        <div class="nfc-feature-title">${f.title}</div>
        <p class="nfc-feature-text">${f.text}</p>
      </div>
    `).join('');
  }

  /* ══════════════════════════════════════════════════════════
     FOOTER
  ══════════════════════════════════════════════════════════ */
  function renderFooter(f) {
    setText('footer-tagline',   f.tagline);
    setText('footer-copyright', f.copyright);
    setText('footer-powered',   f.madeWith);

    const social = document.getElementById('footer-social');
    if (social) {
      social.innerHTML = f.social.map(s => `
        <a href="${s.url}" class="footer-social-btn demo-trigger">
          <span>${s.icon}</span>
          <span>${s.label}</span>
        </a>
      `).join('');
      social.querySelectorAll('.demo-trigger').forEach(bindDemoTrigger);
    }
  }

  /* ══════════════════════════════════════════════════════════
     NAVIGATION
  ══════════════════════════════════════════════════════════ */
  function initNav() {
    const nav        = document.getElementById('main-nav');
    const menuBtn    = document.getElementById('nav-menu-btn');
    const drawer     = document.getElementById('nav-drawer');
    const closeBtn   = document.getElementById('nav-drawer-close');

    /* Scroll-shrink */
    window.addEventListener('scroll', () => {
      nav?.classList.toggle('scrolled', window.scrollY > 60);
    }, { passive: true });

    /* Open/close drawer */
    menuBtn?.addEventListener('click', () => {
      drawer?.classList.add('open');
      document.body.style.overflow = 'hidden';
    });

    const closeDrawer = () => {
      drawer?.classList.remove('open');
      document.body.style.overflow = '';
    };

    closeBtn?.addEventListener('click', closeDrawer);

    /* Close on nav link click */
    drawer?.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', closeDrawer);
    });

    /* Close on backdrop click */
    document.addEventListener('click', e => {
      if (drawer?.classList.contains('open') && !drawer.contains(e.target) && e.target !== menuBtn) {
        closeDrawer();
      }
    });
  }

  /* ══════════════════════════════════════════════════════════
     SCROLL REVEAL
  ══════════════════════════════════════════════════════════ */
  function initScrollReveal() {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    /* Trigger hero immediately */
    document.querySelectorAll('.hero .reveal-up').forEach(el => {
      setTimeout(() => el.classList.add('revealed'), 600);
    });

    /* Observe rest */
    document.querySelectorAll('.reveal-up:not(.hero .reveal-up)').forEach(el => observer.observe(el));

    /* Re-observe dynamically added elements */
    const mutObs = new MutationObserver(() => {
      document.querySelectorAll('.reveal-up:not(.revealed)').forEach(el => {
        if (!el.closest('.hero')) observer.observe(el);
      });
    });
    mutObs.observe(document.body, { childList: true, subtree: true });
  }

  /* ══════════════════════════════════════════════════════════
     PARTICLES
  ══════════════════════════════════════════════════════════ */
  function initParticles() {
    const wrap = document.getElementById('hero-particles');
    if (!wrap) return;

    const canvas = document.createElement('canvas');
    canvas.id = 'particles-canvas';
    canvas.style.cssText = 'position:absolute;inset:0;pointer-events:none;';
    wrap.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    let W, H, particles;

    const GOLD = [201, 169, 110];
    const COUNT = 55;

    function resize() {
      W = canvas.width  = wrap.offsetWidth;
      H = canvas.height = wrap.offsetHeight;
    }

    function createParticles() {
      particles = Array.from({ length: COUNT }, () => ({
        x:     Math.random() * W,
        y:     Math.random() * H,
        r:     Math.random() * 1.5 + .3,
        vx:    (Math.random() - .5) * .3,
        vy:   -(Math.random() * .4 + .1),
        alpha: Math.random(),
        aVel:  (Math.random() * .008 + .003) * (Math.random() > .5 ? 1 : -1),
      }));
    }

    function draw() {
      ctx.clearRect(0, 0, W, H);
      particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${GOLD[0]},${GOLD[1]},${GOLD[2]},${p.alpha.toFixed(3)})`;
        ctx.fill();

        p.x += p.vx;
        p.y += p.vy;
        p.alpha += p.aVel;

        if (p.alpha <= 0 || p.alpha >= 1) p.aVel *= -1;
        if (p.y < -10) p.y = H + 10;
        if (p.x < -10) p.x = W + 10;
        if (p.x > W + 10) p.x = -10;
      });
      requestAnimationFrame(draw);
    }

    window.addEventListener('resize', () => { resize(); createParticles(); }, { passive: true });
    resize();
    createParticles();
    draw();
  }

  /* ══════════════════════════════════════════════════════════
     DEMO MODE
  ══════════════════════════════════════════════════════════ */
  function initDemoMode() {
    document.querySelectorAll('.demo-trigger').forEach(bindDemoTrigger);
  }

  function bindDemoTrigger(el) {
    if (el._demobound) return;
    el._demobound = true;
    el.addEventListener('click', e => {
      e.preventDefault();
      openDemoModal();
    });
  }

  function openDemoModal() {
    document.getElementById('demo-modal-overlay')?.classList.add('active');
  }

  window.closeDemoModal = function () {
    document.getElementById('demo-modal-overlay')?.classList.remove('active');
  };

  document.getElementById('demo-modal-overlay')?.addEventListener('click', e => {
    if (e.target === e.currentTarget) window.closeDemoModal();
  });

  window.handleFormSubmit = function (e) {
    e.preventDefault();
    openDemoModal();
  };

  /* ══════════════════════════════════════════════════════════
     HELPERS
  ══════════════════════════════════════════════════════════ */
  function setText(id, text) {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
  }

  function setAttr(id, attr, val) {
    const el = document.getElementById(id);
    if (el) el.setAttribute(attr, val);
  }

})();
