# 📂 Estructura del Proyecto - Brutto Estudio

```
test-web/
│
├── 📄 index.html                    # ← VERSIÓN DESKTOP (Original + script redirect)
├── 📱 index-mobile.html             # ← VERSIÓN MÓVIL/TABLET (Nuevo)
├── 🔄 redirect.js                   # ← DETECCIÓN Y REDIRECCIÓN AUTOMÁTICA (Nuevo)
│
├── 📁 src/
│   ├── 🎨 styles.css                # ← CSS Desktop (Original, no modificado)
│   ├── 📱 styles-mobile.css         # ← CSS Móvil/Tablet (Nuevo)
│   ├── 📜 main.ts                   # ← TypeScript Desktop (Original, no modificado)
│   └── 📱 main-mobile.ts            # ← TypeScript Móvil (Nuevo)
│
├── 📁 dist/                         # ← Generado por compilación
│   ├── main.js                      # ← Compilado de main.ts
│   └── main-mobile.js               # ← Compilado de main-mobile.ts
│
├── 📁 img/                          # ← Imágenes (compartidas por ambas versiones)
│   ├── edificio.jpg
│   ├── img.png
│   ├── salon_1.png
│   ├── salon_2.png
│   ├── salon_3.png
│   └── salon_nuevo.png
│
├── 📁 svg/
│   └── scroll.svg
│
├── 📚 README-MOBILE.md              # ← Documentación completa (Nuevo)
├── 🚀 GUIA-RAPIDA.md                # ← Guía rápida de inicio (Nuevo)
├── 📊 ESTRUCTURA.md                 # ← Este archivo
│
├── ⚙️ package.json                  # ← Configuración npm
├── ⚙️ tsconfig.json                 # ← Configuración TypeScript
├── ⚙️ tsconfig.app.json
├── ⚙️ tsconfig.node.json
├── ⚙️ eslint.config.js
├── ⚙️ bs-config.json                # ← Configuración lite-server
└── 🔨 compile.sh                    # ← Script de compilación (Actualizado)
```

## 🎯 Flujo de Archivos

### VERSIÓN DESKTOP
```
index.html
    ↓
redirect.js (detecta desktop)
    ↓
Mantiene index.html
    ↓
Carga: src/styles.css
    ↓
Carga: dist/main.js (compilado de src/main.ts)
```

### VERSIÓN MÓVIL/TABLET
```
index.html (o index-mobile.html directo)
    ↓
redirect.js (detecta móvil/tablet)
    ↓
Redirige a: index-mobile.html
    ↓
Carga: src/styles-mobile.css
    ↓
Carga: dist/main-mobile.js (compilado de src/main-mobile.ts)
```

## 🔧 Archivos de Configuración

### package.json
```json
{
  "scripts": {
    "build": "tsc",           // ← Compila AMBOS archivos TS automáticamente
    "serve": "lite-server",   // ← Servidor local
    "dev": "build + serve",   // ← Compila y ejecuta
    "watch": "tsc --watch"    // ← Recompila automáticamente
  }
}
```

### tsconfig.json
```json
{
  "compilerOptions": {
    "outDir": "./dist",       // ← Destino de compilación
    "rootDir": "./src"        // ← Origen de archivos TS
  },
  "include": ["src/**/*"]     // ← Incluye main.ts Y main-mobile.ts
}
```

## 📊 Tamaños de Archivo

| Archivo | Tamaño Aprox. | Descripción |
|---------|---------------|-------------|
| `styles.css` | ~15 KB | Estilos desktop completos |
| `styles-mobile.css` | ~12 KB | Estilos móvil optimizados |
| `main.ts` | ~10 KB | Lógica desktop (original) |
| `main-mobile.ts` | ~12 KB | Lógica móvil con gestos táctiles |
| `redirect.js` | ~1 KB | Script de detección ligero |
| `index.html` | ~7 KB | HTML desktop |
| `index-mobile.html` | ~8 KB | HTML móvil |

**Total añadido**: ~40 KB (sin comprimir)

## 🎨 Componentes por Versión

### Desktop (Original)
```
1. Título Principal (animado)
2. Collage Grid (6 imágenes, grid 14 columnas)
3. Tres Imágenes Expandibles (hover effect)
4. Carrusel (drag horizontal, botones)
5. Footer/Contacto (info + redes + email)
```

### Móvil/Tablet (Nueva)
```
1. Título Principal (responsive, animación fade-in)
2. Collage Grid (6 imágenes, 1-2 columnas responsive)
3. Stack de Proyectos (tarjetas con animación on-scroll)
4. Carrusel (swipe táctil, dots)
5. Footer/Contacto (layout vertical, botones táctiles)
```

## 🔄 Sistema de Detección

### redirect.js - Lógica de Decisión
```javascript
función isMobileOrTablet() {
  criterios = [
    1. User Agent contiene keywords móviles
    2. Ancho de pantalla < 1024px
    3. Tiene capacidad táctil
  ]
  
  retorna: (1 O 2) Y 3
}

si (dispositivo móvil/tablet Y en index.html)
  → redirigir a index-mobile.html
  
si (dispositivo desktop Y en index-mobile.html)
  → redirigir a index.html
  
sino
  → mantener página actual
```

## 📱 Breakpoints Responsive

### Móvil
```css
< 600px
  - Layout: 1 columna
  - Título: 64-120px
  - Collage: 1 columna
  - Proyectos: Stack vertical
```

### Tablet
```css
600px - 1024px
  - Layout: 2 columnas
  - Título: 80-140px
  - Collage: 2 columnas
  - Proyectos: Grid 2x
```

### Landscape
```css
Altura < 600px
  - Padding reducido
  - Elementos más compactos
  - Alturas ajustadas
```

## 🚀 Proceso de Compilación

```
1. Desarrollador ejecuta: npm run build
   ↓
2. TypeScript Compiler (tsc) lee tsconfig.json
   ↓
3. Encuentra src/main.ts y src/main-mobile.ts
   ↓
4. Compila ambos a ES2020
   ↓
5. Genera:
   • dist/main.js
   • dist/main-mobile.js
   ↓
6. ✅ Listo para servir
```

## 🧪 Testing

### Comandos de Testing
```bash
# Compilar
npm run build

# Servidor de desarrollo
npm run serve

# Compilar + Servidor
npm run dev

# Auto-recompilación
npm run watch
```

### Endpoints de Testing
```
Desktop:
  http://localhost:3000/index.html

Móvil:
  http://localhost:3000/index-mobile.html

Auto (detecta dispositivo):
  http://localhost:3000/
```

## 📝 Modificaciones a Archivos Originales

### ✅ Modificado
- `index.html`: Añadida 1 línea `<script src="redirect.js"></script>`
- `compile.sh`: Actualizado para mostrar info de versión móvil

### ❌ NO Modificado (Intactos)
- `src/main.ts`
- `src/styles.css`
- Cualquier otro archivo de configuración

## 🎯 Dependencias

```json
{
  "devDependencies": {
    "lite-server": "^2.6.1",    // Servidor de desarrollo
    "typescript": "^5.8.3"       // Compilador TypeScript
  }
}
```

**Ninguna dependencia nueva añadida** ✅

---

**Última actualización**: 27 de noviembre de 2025
**Versión**: 1.0.0 (Desktop + Móvil)
**Archivos totales**: 20+
**Nuevos archivos creados**: 6

