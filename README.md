# 🎨 Brutto Estudio - Portfolio Web Responsive

## 📱 Versión Completa: Desktop + Móvil/Tablet

Este proyecto incluye **dos versiones completamente independientes** del sitio web de Brutto Estudio, con **detección y redirección automática** según el dispositivo del usuario.

---

## 🚀 Inicio Rápido

### 1. Instalar
```bash
npm install
```

### 2. Compilar
```bash
npm run build
```
O usa el script:
```bash
./compile.sh
```

### 3. Ejecutar
```bash
npm run serve
```
O compila + ejecuta:
```bash
npm run dev
```

### 4. Abrir en navegador
```
http://localhost:3000
```

**¡Listo!** La versión correcta se cargará automáticamente según tu dispositivo.

---

## ✨ Características Principales

### 🖥️ Versión Desktop
- **Navegación**: Scroll tipo diapositivas con transiciones suaves
- **Collage**: Grid asimétrico de 14 columnas con 6 imágenes
- **Proyectos**: 3 imágenes expandibles con efectos hover
- **Carrusel**: Drag horizontal con botones y navegación numérica
- **Controles**: Mouse, teclado (↑↓), rueda, drag
- **Animaciones**: 60 FPS con GPU acceleration

### 📱 Versión Móvil/Tablet
- **Navegación**: Scroll vertical nativo optimizado
- **Collage**: Grid responsive (1-2 columnas)
- **Proyectos**: Stack de tarjetas con animaciones on-scroll
- **Carrusel**: Swipe táctil horizontal con dots
- **Controles**: Touch gestures, swipe, tap
- **Extras**: Vibración háptica, prevención de zoom, animaciones AOS

### 🔄 Sistema de Redirección Automática
- **Detección inteligente**: User agent + tamaño pantalla + capacidad táctil
- **Sin bucles**: Protección contra redirecciones infinitas
- **Responsive**: Detecta cambios de orientación y tamaño
- **Transparente**: El usuario no nota la redirección

---

## 📁 Estructura del Proyecto

```
test-web/
├── index.html              # Versión DESKTOP
├── index-mobile.html       # Versión MÓVIL/TABLET ⭐
├── redirect.js             # Detección automática ⭐
├── src/
│   ├── styles.css         # CSS Desktop
│   ├── styles-mobile.css  # CSS Móvil ⭐
│   ├── main.ts           # TypeScript Desktop
│   └── main-mobile.ts    # TypeScript Móvil ⭐
├── dist/
│   ├── main.js           # Compilado desktop
│   └── main-mobile.js    # Compilado móvil ⭐
└── img/                   # Imágenes compartidas
```

**⭐ = Archivos nuevos creados para la versión móvil**

---

## 📚 Documentación Completa

### Para Empezar
- **[GUIA-RAPIDA.md](GUIA-RAPIDA.md)** → Inicio rápido y primeros pasos
- **[TESTING.md](TESTING.md)** → Checklist completo de pruebas

### Para Desarrolladores
- **[ESTRUCTURA.md](ESTRUCTURA.md)** → Arquitectura y flujo de archivos
- **[COMPARATIVA.md](COMPARATIVA.md)** → Diferencias Desktop vs Móvil
- **[README-MOBILE.md](README-MOBILE.md)** → Documentación técnica completa

### Resumen Rápido
- Este archivo (README.md) → Vista general del proyecto

---

## 🎯 Uso Recomendado

### Desktop (> 1024px)
```
✓ Presentaciones profesionales
✓ Portfolios en oficina
✓ Navegación detallada
✓ Visualización completa del collage
```

### Móvil (< 600px)
```
✓ Consultas rápidas
✓ Compartir en redes sociales
✓ Acceso desde cualquier lugar
✓ Navegación táctil intuitiva
```

### Tablet (600px - 1024px)
```
✓ Presentaciones informales
✓ Mejor que móvil, más portátil que desktop
✓ Layout de 2 columnas
✓ Híbrido táctil/mouse
```

---

## 🔧 Comandos Disponibles

```bash
npm run build        # Compilar TypeScript
npm run serve        # Ejecutar servidor
npm run dev          # Compilar + servidor
npm run watch        # Auto-recompilación
npm run start        # Alias de dev

./compile.sh         # Script de compilación con info
```

---

## 🧪 Cómo Probar

### Probar Desktop
1. Abre `http://localhost:3000`
2. Usa navegador normal (sin modo dispositivo)
3. Se cargará `index.html` automáticamente

### Probar Móvil en Desktop
1. Abre DevTools (F12)
2. Activa Device Toolbar (Ctrl/Cmd + Shift + M)
3. Selecciona un dispositivo móvil
4. Recarga (F5)
5. Se redirigirá a `index-mobile.html` automáticamente

### Probar en Dispositivo Real
1. Encuentra tu IP: `ifconfig` (macOS) o `ipconfig` (Windows)
2. Abre en móvil: `http://TU_IP:3000`
3. Se cargará versión móvil automáticamente

---

## 📊 Tecnologías

- **HTML5**: Estructura semántica
- **CSS3**: Animaciones, flexbox, grid
- **TypeScript**: Lógica tipada y compilada
- **ES2020**: Módulos modernos
- **Intersection Observer**: Animaciones on-scroll (móvil)
- **Touch Events**: Gestos táctiles nativos
- **Vibration API**: Feedback háptico (móvil)

---

## 🎨 Secciones del Sitio

### 1️⃣ Título Principal
- Presentación del estudio
- Indicador de scroll animado

### 2️⃣ Collage de Proyectos
- 6 imágenes en grid
- Desktop: Asimétrico 14 columnas
- Móvil: Stack vertical responsive

### 3️⃣ Proyectos Destacados
- 3 proyectos principales
- Desktop: Imágenes expandibles
- Móvil: Tarjetas con info

### 4️⃣ Carrusel
- 4 proyectos con descripción
- Desktop: Drag + botones
- Móvil: Swipe + dots

### 5️⃣ Contacto/Footer
- Información del estudio
- Redes sociales
- Email de contacto
- Botón "Volver arriba"

---

## ⚙️ Configuración

### Detectar solo móviles (no tablets)
Edita `redirect.js`:
```javascript
const isMobileWidth = window.innerWidth < 768; // Era 1024
```

### Cambiar tiempo de animaciones desktop
Edita `src/main.ts`:
```typescript
private readonly ANIMATION_DURATION = 1200; // Era 900
```

### Cambiar tiempo de animaciones móvil
Edita `src/main-mobile.ts`:
```typescript
private readonly ANIMATION_DURATION = 600; // Era 400
```

### Añadir más proyectos al carrusel
Edita `src/main.ts` y `src/main-mobile.ts`:
```typescript
const carrouselData = [
  // ... proyectos existentes
  {
    title: 'Edificio 5',
    description: 'Nueva descripción...'
  }
];
```

Y añade la imagen en el HTML correspondiente.

---

## 🐛 Solución de Problemas

### La redirección no funciona
```bash
# Limpia cache
Ctrl/Cmd + Shift + R

# Verifica que redirect.js está cargado
DevTools → Network → redirect.js (debe estar)
```

### No se compila TypeScript
```bash
# Reinstala dependencias
rm -rf node_modules
npm install
npm run build
```

### Carrusel móvil no responde
```bash
# Verifica compilación
ls dist/main-mobile.js
# Si no existe:
npm run build
```

### Imágenes no cargan
```bash
# Verifica que existen
ls img/
# Deben estar: edificio.jpg, salon_nuevo.png, salon_2.png, salon_3.png
```

---

## 📈 Compatibilidad

### Desktop
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

### Móvil
- ✅ iOS Safari 12+
- ✅ Chrome Mobile 90+
- ✅ Firefox Mobile 88+
- ✅ Samsung Internet 14+

---

## 🎯 Características Técnicas

### Performance
- **Desktop**: 60 FPS con GPU acceleration
- **Móvil**: Optimizado para 60 FPS en dispositivos modernos
- **Transiciones**: cubic-bezier personalizados para suavidad

### Accesibilidad
- Navegación con teclado (desktop)
- ARIA labels en botones
- Contraste adecuado de colores
- Tamaños táctiles mínimos 44x44px (móvil)

### SEO
- HTML semántico
- Meta tags apropiados
- Títulos y descripciones
- Imágenes con alt text

---

## 📝 Archivos Modificados vs Nuevos

### ✏️ Modificados (mínimamente)
- `index.html`: +1 línea (script redirect.js)
- `compile.sh`: Actualizado con info móvil

### 🆕 Creados (100% nuevos)
- `index-mobile.html`
- `redirect.js`
- `src/styles-mobile.css`
- `src/main-mobile.ts`
- `GUIA-RAPIDA.md`
- `README-MOBILE.md`
- `ESTRUCTURA.md`
- `COMPARATIVA.md`
- `TESTING.md`

### ✅ No Tocados (originales intactos)
- `src/main.ts`
- `src/styles.css`
- Todas las imágenes
- Configuración original

---

## 🤝 Contribuir

Si encuentras bugs o tienes sugerencias:

1. **Identifica** si es en versión desktop o móvil
2. **Documenta** el comportamiento esperado vs real
3. **Especifica** navegador y versión
4. **Incluye** pasos para reproducir

---

## 📞 Contacto

**Estudio Bruto**
- 📍 Av. Arquitectura 245, Barcelona, España 08001
- 📧 info@estudiobruto.com
- 🌐 [YouTube](#) | [Facebook](#) | [Instagram](#)

---

## 📄 Licencia

Este proyecto es privado y pertenece a Brutto Estudio.

---

## 🎉 Estado del Proyecto

```
✅ Versión Desktop: Completa y funcional
✅ Versión Móvil: Completa y funcional
✅ Redirección: Implementada y probada
✅ Documentación: Completa
✅ Testing: Checklist disponible
✅ Performance: Optimizado

🚀 LISTO PARA PRODUCCIÓN
```

---

## 📌 Notas Importantes

1. **Archivos separados**: Desktop y móvil están completamente separados, sin conflictos
2. **Redirección automática**: No requiere configuración manual
3. **Imágenes compartidas**: Ambas versiones usan las mismas imágenes de `/img`
4. **Compilación única**: `npm run build` compila ambas versiones automáticamente
5. **Seguridad**: Los archivos originales no fueron modificados (excepto 1 línea)

---

**Desarrollado con ❤️ para Brutto Estudio**

**Versión**: 1.0.0 (Desktop + Móvil)  
**Última actualización**: 27 de noviembre de 2025

# test-web
