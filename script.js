
// Responsive menu toggle
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');
if (menuToggle && navLinks) {
  menuToggle.onclick = () => {
    navLinks.classList.toggle('show');
  };
}

// Filter projects
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');
if (filterBtns && projectCards) {
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelector('.filter-btn.active').classList.remove('active');
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      projectCards.forEach(card => {
        card.style.display =
          filter === 'all' || card.dataset.category === filter ? 'block' : 'none';
      });
    });
  });
}

// Light/Dark mode toggle
const themeToggle = document.getElementById('theme-toggle');
if (themeToggle) {
  themeToggle.onclick = () => {
    document.body.classList.toggle('dark');
    themeToggle.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
  };
}

// Parallax effect for hero background (if present)
const parallaxBg = document.querySelector('.parallax-bg');
window.addEventListener('scroll', () => {
  const scrolled = window.scrollY;
  if (parallaxBg) {
    parallaxBg.style.transform = `translateY(${scrolled * 0.3}px)`;
  }
});

// Optional: Prevent form submission (demo only)
const form = document.querySelector('form');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    alert('Thank you for your message!');
    form.reset();
  });
}