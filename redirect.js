/**
 * Script de detección y redirección automática según el dispositivo
 * Detecta si es móvil/tablet y redirige a la versión correspondiente
 */

(function() {
  // Función para detectar si es un dispositivo móvil o tablet
  function isMobileOrTablet() {
    const userAgent = navigator.userAgent.toLowerCase();
    const mobileKeywords = [
      'android', 'webos', 'iphone', 'ipad', 'ipod',
      'blackberry', 'windows phone', 'mobile', 'tablet'
    ];

    // Comprobar user agent
    const isMobileUA = mobileKeywords.some(keyword => userAgent.includes(keyword));

    // Comprobar ancho de pantalla (móvil < 768px, tablet < 1024px)
    const isMobileWidth = window.innerWidth < 1024;

    // Comprobar si tiene capacidad táctil
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

    return (isMobileUA || isMobileWidth) && isTouchDevice;
  }

  // Función para obtener la página actual
  function getCurrentPage() {
    const path = window.location.pathname;
    const page = path.substring(path.lastIndexOf('/') + 1);
    return page || 'index.html';
  }

  // Función para redirigir
  function redirect() {
    const currentPage = getCurrentPage();
    const isMobile = isMobileOrTablet();

    // Evitar bucles de redirección
    if (isMobile && currentPage === 'index.html') {
      console.log('📱 Dispositivo móvil/tablet detectado - Redirigiendo...');
      window.location.href = 'index-mobile.html';
    } else if (!isMobile && currentPage === 'index-mobile.html') {
      console.log('🖥️ Dispositivo de escritorio detectado - Redirigiendo...');
      window.location.href = 'index.html';
    } else {
      console.log(`✅ Versión correcta cargada: ${currentPage}`);
    }
  }

  // Ejecutar la redirección cuando el DOM esté listo
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', redirect);
  } else {
    redirect();
  }

  // Opcional: detectar cambios de orientación y tamaño de pantalla
  window.addEventListener('resize', function() {
    const currentPage = getCurrentPage();
    const isMobile = isMobileOrTablet();

    // Solo redirigir si hay un cambio significativo que requiera otra versión
    if ((isMobile && currentPage === 'index.html') ||
        (!isMobile && currentPage === 'index-mobile.html')) {
      redirect();
    }
  });
})();

