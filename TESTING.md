# 🧪 Guía de Testing y Validación

## ✅ Checklist de Pruebas Completo

### PASO 1: Compilación

```bash
cd /Users/luishernandez/Desktop/test-web
npm run build
```

**Resultado esperado:**
```
✓ src/main.ts → dist/main.js
✓ src/main-mobile.ts → dist/main-mobile.js
✓ Compilación sin errores
```

**Verificar archivos creados:**
```bash
ls -la dist/
# Debe mostrar:
# main.js
# main-mobile.js
```

---

### PASO 2: Ejecutar Servidor

```bash
npm run serve
```

**Resultado esperado:**
```
[Browsersync] Access URLs:
 -------------------------------------
       Local: http://localhost:3000
    External: http://192.168.x.x:3000
 -------------------------------------
```

---

### PASO 3: Pruebas Desktop

#### 3.1 Abrir en navegador desktop
```
URL: http://localhost:3000
```

**Verificaciones:**
- [ ] Se carga `index.html` (verificar en DevTools → Network)
- [ ] Se carga `styles.css`
- [ ] Se carga `dist/main.js`
- [ ] Título "BRUTTO ESTUDIO." visible
- [ ] Indicador "scroll" animado visible

#### 3.2 Navegación con mouse
- [ ] Scroll down (rueda hacia abajo) → Avanza a sección 2
- [ ] Scroll up (rueda hacia arriba) → Retrocede a sección 1
- [ ] Transición suave de 800ms
- [ ] No permite spam de scroll (gesture lock)

#### 3.3 Navegación con teclado
- [ ] Flecha ↓ → Avanza a siguiente sección
- [ ] Flecha ↑ → Retrocede a sección anterior
- [ ] PageDown → Avanza
- [ ] PageUp → Retrocede

#### 3.4 Sección Collage (Sección 2)
- [ ] Grid de 6 imágenes visible
- [ ] Hover sobre imagen → Muestra overlay con título
- [ ] Hover sobre imagen → Zoom sutil de la imagen
- [ ] Texto vertical "BRUTTO ESTUDIO" en margen izquierdo

#### 3.5 Sección 3 Homes (Sección 3)
- [ ] 3 imágenes horizontales visibles
- [ ] Hover sobre imagen 1 → Se expande, otras se comprimen
- [ ] Hover sobre imagen 2 → Se expande, otras se comprimen
- [ ] Hover sobre imagen 3 → Se expande, otras se comprimen
- [ ] Texto cambia de vertical a horizontal con fade
- [ ] Sin hover → Todas tienen mismo ancho

#### 3.6 Carrusel (Sección 4)
- [ ] Fondo blanco
- [ ] Texto "Edificio 1" visible (lado izquierdo)
- [ ] Descripción visible
- [ ] Imagen 1 visible
- [ ] Click en botón → (flecha derecha) → Cambia a imagen 2
- [ ] Click en botón ← (flecha izquierda) → Vuelve a imagen 1
- [ ] Click en número 3 → Salta a imagen 3
- [ ] Drag con mouse → Arrastra imágenes
- [ ] Texto cambia con fade-out/in
- [ ] Botones se deshabilitan en extremos

#### 3.7 Footer (Sección 5)
- [ ] Fondo negro
- [ ] "ESTUDIO BRUTO" visible
- [ ] Dirección visible
- [ ] 3 enlaces de redes sociales (YouTube, Facebook, Instagram)
- [ ] Hover sobre red social → Opacidad + slide derecha
- [ ] Email "info@estudiobruto.com" visible
- [ ] Hover sobre email → Underline
- [ ] Botón "Volver arriba" visible
- [ ] Click en "Volver arriba" → Regresa a sección 1

#### 3.8 Logs en consola
Abrir DevTools → Console:
- [ ] "¡Aplicación iniciada!"
- [ ] "📋 Secciones detectadas: 5"
- [ ] Sin errores en rojo

---

### PASO 4: Pruebas Móvil (Simulado en Desktop)

#### 4.1 Activar modo dispositivo
1. F12 (abrir DevTools)
2. Ctrl/Cmd + Shift + M (Device Toolbar)
3. Seleccionar "iPhone 12 Pro" (o similar)
4. F5 (recargar página)

**Verificaciones:**
- [ ] Se redirige automáticamente a `index-mobile.html`
- [ ] Consola muestra: "📱 Dispositivo móvil/tablet detectado"
- [ ] Se carga `styles-mobile.css`
- [ ] Se carga `dist/main-mobile.js`

#### 4.2 Sección Título
- [ ] Título "BRUTTO ESTUDIO." visible (tamaño reducido)
- [ ] Texto "desliza" visible
- [ ] Icono de scroll animado
- [ ] Animación fade-in desde abajo

#### 4.3 Scroll vertical
- [ ] Scroll suave nativo (no tipo diapositivas)
- [ ] Todas las secciones en secuencia vertical
- [ ] Sin bloqueo de gestos

#### 4.4 Sección Collage Móvil
- [ ] Imágenes en 1 columna (stack vertical)
- [ ] 6 imágenes visibles
- [ ] Cada imagen con border-radius
- [ ] Título visible en overlay (siempre)
- [ ] Animación fade-up al hacer scroll
- [ ] Delays escalonados (100ms entre cada una)

#### 4.5 Sección Proyectos Móvil
- [ ] Fondo blanco
- [ ] Título "Proyectos" centrado
- [ ] 3 tarjetas en stack vertical
- [ ] Cada tarjeta con:
  - [ ] Imagen arriba (250px altura)
  - [ ] Título abajo
  - [ ] Descripción abajo
  - [ ] Sombra sutil
  - [ ] Border-radius
- [ ] Animación fade-up al hacer scroll

#### 4.6 Carrusel Móvil
- [ ] Fondo blanco
- [ ] Título "Edificio 1" centrado arriba
- [ ] Descripción centrada
- [ ] Imagen visible (350px altura en móvil)
- [ ] 4 dots visibles abajo
- [ ] Dot 1 activo (negro)
- [ ] Otros dots grises
- [ ] Swipe horizontal → Cambia a siguiente imagen
- [ ] Tap en dot 2 → Salta a imagen 2
- [ ] Texto cambia con fade (150ms)

#### 4.7 Footer Móvil
- [ ] Fondo negro
- [ ] Layout vertical centrado
- [ ] "ESTUDIO BRUTO" en 2 líneas
- [ ] "Visita nuestro estudio"
- [ ] Dirección centrada
- [ ] "Síguenos" visible
- [ ] 3 botones de redes sociales:
  - [ ] Fondo transparente
  - [ ] Borde blanco
  - [ ] Min-width 200px
  - [ ] Centrados
- [ ] "Contacto" visible
- [ ] Email con underline
- [ ] Botón "Volver arriba" centrado
- [ ] Tap en botón → Scroll suave al inicio

#### 4.8 Logs móviles en consola
- [ ] "📱 ¡Aplicación móvil iniciada!"
- [ ] "📐 Tamaño de pantalla: XXXxYYY"
- [ ] "📱 Inicializando carrusel móvil"
- [ ] "🎭 Inicializando animaciones de scroll para X elementos"
- [ ] "✅ Todos los módulos móviles inicializados correctamente"

---

### PASO 5: Pruebas en Tablet (Simulado)

#### 5.1 Cambiar a iPad
1. Device Toolbar → Seleccionar "iPad"
2. F5 (recargar)

**Verificaciones:**
- [ ] Sigue en `index-mobile.html`
- [ ] Collage en 2 columnas (grid 2x3)
- [ ] Proyectos en grid 2x (2 arriba, 1 abajo)
- [ ] Carrusel más alto (450px)
- [ ] Textos más grandes
- [ ] Max-width: 700px

---

### PASO 6: Pruebas en Landscape

#### 6.1 Rotar dispositivo
1. Device Toolbar → Rotar icono (landscape)
2. Scroll por la página

**Verificaciones:**
- [ ] Padding reducido
- [ ] Elementos más compactos
- [ ] Títulos más pequeños
- [ ] Carrusel altura reducida (300px)
- [ ] Sin desbordamiento

---

### PASO 7: Pruebas de Redirección

#### 7.1 Desktop → Móvil
1. Abrir desktop: `http://localhost:3000/index.html`
2. Activar Device Toolbar (móvil)
3. F5 (recargar)
- [ ] Redirige a `index-mobile.html`
- [ ] Log: "📱 Dispositivo móvil/tablet detectado - Redirigiendo..."

#### 7.2 Móvil → Desktop
1. Con Device Toolbar activo: `http://localhost:3000/index-mobile.html`
2. Desactivar Device Toolbar
3. F5 (recargar)
- [ ] Redirige a `index.html`
- [ ] Log: "🖥️ Dispositivo de escritorio detectado - Redirigiendo..."

#### 7.3 Sin bucle
1. Abrir desktop: `http://localhost:3000/index.html`
2. NO activar Device Toolbar
3. F5 varias veces
- [ ] Se mantiene en `index.html`
- [ ] Log: "✅ Versión correcta cargada: index.html"
- [ ] NO redirige infinitamente

---

### PASO 8: Pruebas en Dispositivo Real

#### 8.1 Encontrar IP local
```bash
# macOS/Linux:
ifconfig | grep "inet "

# Windows:
ipconfig
```

**Ejemplo de salida:**
```
inet 192.168.1.100
```

#### 8.2 Abrir en móvil
```
URL: http://192.168.1.100:3000
```

**Verificaciones:**
- [ ] Se carga `index-mobile.html` automáticamente
- [ ] Touch scroll funciona suavemente
- [ ] Swipe en carrusel funciona
- [ ] Tap en dots funciona
- [ ] Vibración al tocar (si disponible)
- [ ] No se puede hacer zoom con pinch
- [ ] No hay pull-to-refresh
- [ ] Botones táctiles responden bien

#### 8.3 Cambiar orientación
Girar el dispositivo:
- [ ] Layout se adapta
- [ ] No hay desbordamiento horizontal
- [ ] Elementos se reposicionan correctamente

---

### PASO 9: Performance

#### 9.1 Desktop Performance
1. DevTools → Performance
2. Iniciar grabación
3. Scroll por todas las secciones
4. Detener grabación

**Verificaciones:**
- [ ] FPS: ~60 (verde)
- [ ] Sin drops significativos
- [ ] Tiempos de layout < 50ms
- [ ] No hay warnings de performance

#### 9.2 Móvil Performance (simulado)
1. Device Toolbar → iPhone 12
2. DevTools → Performance → CPU throttling 6x
3. Scroll por todas las secciones
4. Swipe en carrusel

**Verificaciones:**
- [ ] FPS: > 30 (aceptable con throttling)
- [ ] Animaciones siguen siendo fluidas
- [ ] No hay jank visible
- [ ] Transiciones suaves

---

### PASO 10: Compatibilidad de Navegadores

#### 10.1 Chrome
- [ ] Desktop: Todas las funciones
- [ ] Móvil simulado: Todas las funciones
- [ ] Sin errores en consola

#### 10.2 Firefox
- [ ] Desktop: Todas las funciones
- [ ] Móvil simulado: Todas las funciones
- [ ] Sin errores en consola

#### 10.3 Safari (si disponible)
- [ ] Desktop: Todas las funciones
- [ ] iOS Safari (real): Todas las funciones móviles
- [ ] Sin errores en consola

---

### PASO 11: Pruebas de Edge Cases

#### 11.1 Resize de ventana
Desktop:
1. Redimensionar ventana de grande a pequeña (< 1024px)
2. Verificar si redirige (debería, si detecta touch)

#### 11.2 Sin JavaScript
1. DevTools → Settings → Disable JavaScript
2. F5
- [ ] Contenido HTML visible
- [ ] Estilos CSS aplicados
- [ ] Sin funcionalidad (esperado)

#### 11.3 Imágenes rotas
1. Renombrar temporalmente `/img` a `/img-backup`
2. F5
- [ ] Layout no se rompe
- [ ] Placeholders visibles
- [ ] Sin errores de JS (excepto 404 de imágenes)

---

## 📊 Resumen de Resultados Esperados

### ✅ Todo Correcto Si:
- Compilación sin errores
- Redirección automática funciona
- Desktop: 5 secciones con scroll tipo diapositivas
- Móvil: 5 secciones con scroll vertical nativo
- Carruseles funcionan (desktop: drag, móvil: swipe)
- Animaciones fluidas (60 FPS)
- Responsive funciona (móvil/tablet/landscape)
- Sin errores en consola (excepto warnings menores)

### ⚠️ Revisar Si:
- Redirección entra en bucle
- Imágenes no cargan
- Animaciones con jank/lag
- Errores en consola
- Layout roto en algún tamaño

### ❌ Error Grave Si:
- Compilación falla
- Página en blanco
- JavaScript no ejecuta
- Errores de sintaxis
- Funcionalidad principal no responde

---

## 🔧 Comandos de Debugging

### Ver estructura compilada
```bash
tree dist/
```

### Ver errores de TypeScript
```bash
npm run build -- --noEmit
```

### Limpiar y recompilar
```bash
rm -rf dist/
npm run build
```

### Ver logs del servidor
```bash
npm run serve -- --verbose
```

---

## 📝 Checklist Final

Antes de considerar terminado:

- [ ] Desktop: 100% funcional
- [ ] Móvil: 100% funcional
- [ ] Tablet: 100% funcional
- [ ] Redirección: 100% funcional
- [ ] Performance: > 60 FPS desktop, > 30 FPS móvil
- [ ] Sin errores en consola
- [ ] Compatible Chrome, Firefox, Safari
- [ ] Probado en dispositivo real
- [ ] README documentado
- [ ] Código comentado

---

**¡Si todos los checks están ✅, el proyecto está listo para producción! 🎉**

