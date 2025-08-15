// debug-apk.js
(function () {
  // Crear cuadro de depuración
  const debugBox = document.createElement('div');
  debugBox.style.position = 'fixed';
  debugBox.style.bottom = '10px';
  debugBox.style.left = '10px';
  debugBox.style.background = 'rgba(0,0,0,0.8)';
  debugBox.style.color = '#00ff00';
  debugBox.style.padding = '10px';
  debugBox.style.fontSize = '12px';
  debugBox.style.zIndex = '9999999';
  debugBox.style.maxWidth = '300px';
  debugBox.style.fontFamily = 'monospace';
  debugBox.style.whiteSpace = 'pre-wrap';
  debugBox.innerText = '📡 JS cargando...';
  document.body.appendChild(debugBox);

  function log(msg) {
    debugBox.innerText += '\n' + msg;
  }

  // Aviso inicial
  log('🌍 Plataforma: ' + navigator.userAgent);

  // Detectar cuando el DOM esté listo
  document.addEventListener('DOMContentLoaded', () => {
    log('✅ DOM listo');

    // Buscar botones y enlaces
    const elementos = document.querySelectorAll('button, a, .boton');
    log(`🔍 Encontrados ${elementos.length} elementos clicables`);

    elementos.forEach((el, index) => {
      el.addEventListener('click', () => {
        log(`🖱 Click detectado en elemento #${index + 1} (${el.tagName})`);
      });

      el.addEventListener('touchend', () => {
        log(`🤚 Touch detectado en elemento #${index + 1} (${el.tagName})`);
      });
    });
  });

  // Si el script se ejecuta después del DOM cargado
  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    log('⚠ Script cargado después del DOM');
  }
})();
