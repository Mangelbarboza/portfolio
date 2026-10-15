// Portafolio de Ángel Barboza
document.addEventListener('DOMContentLoaded', () => {
  // 1. Año dinámico en el footer
  const yearSpan = document.getElementById('current-year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // 2. Menú móvil
  const mobileToggle = document.getElementById('mobile-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link, .nav-btn');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
      const isOpen = navMenu.classList.contains('open');
      mobileToggle.setAttribute('aria-expanded', isOpen);
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
      });
    });
  }

  // 3. Filtrado de proyectos (Clientes Reales vs Personales)
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');
  const categoryHeaders = document.querySelectorAll('.project-category-header');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      // Filtrar cards
      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
          card.style.display = 'flex';
          card.style.animation = 'fadeIn 0.35s ease forwards';
        } else {
          card.style.display = 'none';
        }
      });

      // Filtrar encabezados de categoría
      categoryHeaders.forEach(header => {
        const cat = header.getAttribute('data-category');
        if (filterValue === 'all' || cat === filterValue) {
          header.style.display = 'block';
        } else {
          header.style.display = 'none';
        }
      });
    });
  });

  // 4. Saludo en consola
  console.log(
    '%c[AB] Ángel Barboza Reyes | Software & Cybersecurity\n%cCartago, Costa Rica | angelbarboza.com',
    'color: #38bdf8; font-weight: bold; font-size: 14px;',
    'color: #94a3b8; font-size: 12px;'
  );
});
