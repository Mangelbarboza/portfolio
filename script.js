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

  // 3. Desplegable Animado de Insignias IRSI
  const badgesToggle = document.getElementById('badges-toggle');
  const badgesContainer = document.querySelector('.badges-accordion-container');
  const badgesToggleLabel = document.querySelector('.badges-toggle-label');

  if (badgesToggle && badgesContainer) {
    badgesToggle.addEventListener('click', () => {
      const isExpanded = badgesContainer.classList.toggle('expanded');
      badgesToggle.setAttribute('aria-expanded', isExpanded);
      if (badgesToggleLabel) {
        badgesToggleLabel.textContent = isExpanded ? 'Enrollar Certificaciones' : 'Desplegar Certificaciones';
      }
    });
  }

  // 4. Filtrado de proyectos (Exclusivamente 2 categorías: Clientes Reales y Proyectos Personales)
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');
  const categoryHeaders = document.querySelectorAll('.project-category-header');

  function applyProjectFilter(targetFilter) {
    filterBtns.forEach(btn => {
      const isTarget = btn.getAttribute('data-filter') === targetFilter;
      btn.classList.toggle('active', isTarget);
    });

    // Mostrar únicamente las tarjetas de la categoría seleccionada
    projectCards.forEach(card => {
      const category = card.getAttribute('data-category');
      if (category === targetFilter) {
        card.style.display = 'flex';
        card.style.animation = 'fadeIn 0.35s ease forwards';
      } else {
        card.style.display = 'none';
      }
    });

    // Mostrar únicamente el encabezado de la categoría activa
    categoryHeaders.forEach(header => {
      const cat = header.getAttribute('data-category');
      header.style.display = cat === targetFilter ? 'block' : 'none';
    });
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filterValue = btn.getAttribute('data-filter');
      applyProjectFilter(filterValue);
    });
  });

  // Inicializar mostrando únicamente "Clientes Reales" por defecto
  applyProjectFilter('cliente-real');

  // 5. Saludo en consola (Paleta cálida)
  console.log(
    '%c[AB] Ángel Barboza Reyes | Software Developer & Defensive Cybersecurity\n%cCartago, Costa Rica | angelbarboza.com',
    'color: #9e744d; font-weight: bold; font-size: 14px;',
    'color: #6b5e54; font-size: 12px;'
  );
});
