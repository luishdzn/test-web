#!/bin/bash

# Script para compilar y ejecutar el proyecto test-web

echo "🔨 Compilando TypeScript..."
echo "   • src/main.ts → dist/main.js (versión desktop)"
echo "   • src/main-mobile.ts → dist/main-mobile.js (versión móvil)"
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Compilación exitosa!"
    echo ""
    echo "🚀 Para ejecutar el proyecto, usa:"
    echo "   npm run serve    # Solo servidor"
    echo "   npm run dev      # Compilar + servidor"
    echo "   npm run watch    # Modo desarrollo con auto-recompilación"
    echo ""
    echo "📱 Versiones disponibles:"
    echo "   • Desktop: index.html (automático en pantallas grandes)"
    echo "   • Móvil/Tablet: index-mobile.html (automático en móviles)"
    echo "   • Redirección automática activada con redirect.js"
    echo ""
    echo "🧪 Para probar versión móvil en desktop:"
    echo "   1. Abre DevTools (F12)"
    echo "   2. Activa 'Device Toolbar' (Cmd/Ctrl + Shift + M)"
    echo "   3. Selecciona un dispositivo móvil"
    echo "   4. Recarga la página"
    echo ""
    echo "📖 Características del scroll animado:"
    echo "   Desktop:"
    echo "     - Rueda del mouse: Navegar entre secciones"
    echo "     - Flechas ↑↓: Navegar con teclado"
    echo "     - Touch: Deslizar en dispositivos móviles"
    echo "     - Botón 'Volver arriba': Regresar a la primera sección"
    echo ""
    echo "   Móvil/Tablet:"
    echo "     - Scroll vertical nativo optimizado"
    echo "     - Swipe horizontal en carrusel"
    echo "     - Animaciones on-scroll"
    echo "     - Vibración háptica (si está disponible)"
    echo ""
    echo "📚 Lee GUIA-RAPIDA.md para más información"
else
    echo "❌ Error en la compilación"
    exit 1
fi



