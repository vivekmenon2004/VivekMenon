/* ============================
   PARTICLES BACKGROUND
   ============================ */
(function initParticles() {
  const canvas = document.getElementById('particles-canvas');
  const ctx = canvas.getContext('2d');
  let W, H, particles = [];

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  const COLORS = ['#6366f1','#8b5cf6','#06b6d4','#10b981'];

  class Particle {
    constructor() { this.reset(); }
    reset() {
      this.x  = Math.random() * W;
      this.y  = Math.random() * H;
      this.r  = Math.random() * 2 + 0.5;
      this.vx = (Math.random() - 0.5) * 0.4;
      this.vy = (Math.random() - 0.5) * 0.4;
      this.alpha = Math.random() * 0.6 + 0.2;
      this.color = COLORS[Math.floor(Math.random() * COLORS.length)];
    }
    update() {
      this.x += this.vx;
      this.y += this.vy;
      if (this.x < 0 || this.x > W || this.y < 0 || this.y > H) this.reset();
    }
    draw() {
      ctx.save();
      ctx.globalAlpha = this.alpha;
      ctx.fillStyle = this.color;
      ctx.shadowColor = this.color;
      ctx.shadowBlur = 8;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }
  }

  for (let i = 0; i < 140; i++) particles.push(new Particle());

  // Draw faint connecting lines
  function drawLines() {
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 90) {
          ctx.save();
          ctx.globalAlpha = (1 - dist / 90) * 0.12;
          ctx.strokeStyle = '#6366f1';
          ctx.lineWidth = 0.8;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
          ctx.restore();
        }
      }
    }
  }

  function animate() {
    ctx.clearRect(0, 0, W, H);
    particles.forEach(p => { p.update(); p.draw(); });
    drawLines();
    requestAnimationFrame(animate);
  }
  animate();
})();

/* ============================
   NAVBAR
   ============================ */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 30);
  updateActiveNav();
});

// Hamburger
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('nav-links');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navLinks.classList.toggle('open');
});
navLinks.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
  });
});

// Active nav highlight on scroll
const sections = document.querySelectorAll('section[id]');
function updateActiveNav() {
  const scrollY = window.scrollY + 100;
  sections.forEach(sec => {
    const top = sec.offsetTop;
    const h   = sec.offsetHeight;
    const id  = sec.getAttribute('id');
    const link = document.querySelector(`.nav-link[data-section="${id}"]`);
    if (link) {
      link.classList.toggle('active', scrollY >= top && scrollY < top + h);
    }
  });
}

/* ============================
   TYPED TEXT ANIMATION
   ============================ */
(function initTyped() {
  const words = ['Developer 💻', 'Tech Enthusiast 🚀', 'Problem Solver 🧩', 'Web Creator 🌐', 'AI Explorer 🤖', 'UI Designer 🎨', 'Graphic Designer ✏️'];
  let wi = 0, ci = 0, deleting = false;
  const el = document.getElementById('typed-text');

  function type() {
    const word = words[wi];
    if (!deleting) {
      el.textContent = word.slice(0, ci + 1);
      ci++;
      if (ci === word.length) { deleting = true; setTimeout(type, 1800); return; }
    } else {
      el.textContent = word.slice(0, ci - 1);
      ci--;
      if (ci === 0) { deleting = false; wi = (wi + 1) % words.length; }
    }
    setTimeout(type, deleting ? 60 : 100);
  }
  type();
})();

/* ============================
   SCROLL REVEAL ANIMATION
   ============================ */
(function initReveal() {
  const els = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        // Stagger sibling reveals
        const siblings = [...entry.target.parentElement.querySelectorAll('.reveal:not(.visible)')];
        const delay = siblings.indexOf(entry.target) * 120;
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, Math.max(0, delay));
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

  els.forEach(el => observer.observe(el));
})();

/* ============================
   CONTACT FORM
   ============================ */
// Custom Form Success Feedback
window.submitted = false;
function showSuccess() {
  const btn = document.getElementById('sendBtn');
  const success = document.getElementById('formSuccess');
  const form = document.getElementById('contactForm');

  btn.innerHTML = '<i class="fa-solid fa-check"></i> Sent!';
  success.classList.add('show');
  form.reset();
  
  setTimeout(() => {
    btn.disabled = false;
    btn.innerHTML = '<i class="fa-solid fa-paper-plane"></i> Send Message';
    success.classList.remove('show');
    window.submitted = false; // Reset for next submission
  }, 4000);
}

document.getElementById('contactForm').addEventListener('submit', function(e) {
  const btn = document.getElementById('sendBtn');
  btn.disabled = true;
  btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Sending...';
  window.submitted = true;
  // Let the form submit naturally to the hidden iframe
});

/* ============================
   SMOOTH SCROLL (fallback)
   ============================ */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

/* ============================
   BUTTON RIPPLE EFFECT
   ============================ */
document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('click', function(e) {
    const rect = this.getBoundingClientRect();
    const ripple = document.createElement('span');
    const size = Math.max(rect.width, rect.height);
    ripple.style.cssText = `
      position:absolute;
      width:${size}px; height:${size}px;
      border-radius:50%;
      background:rgba(255,255,255,0.25);
      left:${e.clientX - rect.left - size/2}px;
      top:${e.clientY - rect.top - size/2}px;
      transform:scale(0);
      animation:ripple 0.55s linear;
      pointer-events:none;
    `;
    this.style.position = 'relative';
    this.style.overflow = 'hidden';
    this.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  });
});

// Inject ripple keyframes
const style = document.createElement('style');
style.textContent = `@keyframes ripple { to { transform:scale(4); opacity:0; } }`;
document.head.appendChild(style);
