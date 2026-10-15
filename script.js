// Script de inicialización
document.addEventListener('DOMContentLoaded', () => {
  // Año dinámico en el footer
  const yearSpan = document.getElementById('current-year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  console.log('🚀 Portafolio de Ángel Barboza cargado exitosamente.');
});
