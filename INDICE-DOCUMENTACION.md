# 📚 Índice de Documentación - Brutto Estudio

## 🎯 ¿Qué Necesitas?

### 🚀 Quiero empezar YA
👉 **[GUIA-RAPIDA.md](GUIA-RAPIDA.md)**
- Instalación en 3 pasos
- Compilar y ejecutar
- Cómo probar desktop y móvil
- Solución de problemas comunes

### 📖 Quiero entender el proyecto
👉 **[README.md](README.md)**
- Vista general completa
- Características principales
- Comandos disponibles
- Tecnologías utilizadas

### 🔍 Quiero saber qué se creó
👉 **[RESUMEN-EJECUTIVO.md](RESUMEN-EJECUTIVO.md)**
- Lista de archivos creados
- Archivos modificados vs nuevos
- Métricas del proyecto
- Estado final

### 🏗️ Quiero entender la arquitectura
👉 **[ESTRUCTURA.md](ESTRUCTURA.md)**
- Estructura de carpetas
- Flujo de archivos
- Sistema de compilación
- Breakpoints responsive

### ⚖️ Quiero comparar Desktop vs Móvil
👉 **[COMPARATIVA.md](COMPARATIVA.md)**
- Tabla comparativa completa
- Características exclusivas
- Tamaños de elementos
- Métricas de código

### 🧪 Quiero probar todo
👉 **[TESTING.md](TESTING.md)**
- Checklist completo de pruebas
- Paso a paso para cada sección
- Pruebas en dispositivos reales
- Debugging y soluciones

### 🔧 Quiero detalles técnicos móviles
👉 **[README-MOBILE.md](README-MOBILE.md)**
- Documentación técnica completa
- Sistema de redirección
- Optimizaciones móviles
- Personalización avanzada

---

## 📂 Archivos por Categoría

### 📄 Código Principal
```
index.html              → HTML Desktop
index-mobile.html       → HTML Móvil
redirect.js             → Detección automática
```

### 🎨 Estilos
```
src/styles.css          → CSS Desktop
src/styles-mobile.css   → CSS Móvil
```

### 📜 Scripts
```
src/main.ts             → TypeScript Desktop
src/main-mobile.ts      → TypeScript Móvil
```

### 📦 Compilados (generados)
```
dist/main.js            → Compilado Desktop
dist/main-mobile.js     → Compilado Móvil
```

### 🖼️ Assets
```
img/                    → Imágenes (compartidas)
svg/                    → Iconos SVG
```

### ⚙️ Configuración
```
package.json            → Dependencias npm
tsconfig.json           → Config TypeScript
bs-config.json          → Config lite-server
compile.sh              → Script compilación
```

### 📚 Documentación
```
README.md               → Documentación principal
GUIA-RAPIDA.md         → Guía de inicio rápido
RESUMEN-EJECUTIVO.md   → Resumen del proyecto
ESTRUCTURA.md          → Arquitectura
COMPARATIVA.md         → Desktop vs Móvil
TESTING.md             → Guía de pruebas
README-MOBILE.md       → Documentación móvil
INDICE-DOCUMENTACION.md → Este archivo
```

---

## 🎓 Rutas de Aprendizaje

### Para Principiantes
1. **GUIA-RAPIDA.md** - Empezar aquí
2. **README.md** - Entender el proyecto
3. **TESTING.md** - Probar que funcione

### Para Desarrolladores
1. **ESTRUCTURA.md** - Arquitectura
2. **COMPARATIVA.md** - Diferencias técnicas
3. **README-MOBILE.md** - Detalles móviles
4. **src/main.ts** - Código desktop
5. **src/main-mobile.ts** - Código móvil

### Para Project Managers
1. **RESUMEN-EJECUTIVO.md** - Vista ejecutiva
2. **README.md** - Features y tecnologías
3. **TESTING.md** - QA checklist

### Para Diseñadores
1. **COMPARATIVA.md** - Diferencias visuales
2. **src/styles.css** - Estilos desktop
3. **src/styles-mobile.css** - Estilos móvil

---

## 🔗 Enlaces Rápidos

### Comandos Esenciales
```bash
npm install          # Instalar dependencias
npm run build        # Compilar TypeScript
npm run serve        # Ejecutar servidor
npm run dev          # Compilar + servidor
```

### URLs Importantes
```
Desktop:  http://localhost:3000/index.html
Móvil:    http://localhost:3000/index-mobile.html
Auto:     http://localhost:3000/
```

### Archivos Clave para Editar
```
Contenido:    index-mobile.html
Estilos:      src/styles-mobile.css
Lógica:       src/main-mobile.ts
Detección:    redirect.js
```

---

## 📊 Estructura de Documentación

```
📚 DOCUMENTACIÓN
│
├── 🚀 INICIO RÁPIDO
│   └── GUIA-RAPIDA.md (Empezar aquí)
│
├── 📖 GENERAL
│   ├── README.md (Vista general)
│   ├── RESUMEN-EJECUTIVO.md (Resumen)
│   └── INDICE-DOCUMENTACION.md (Este archivo)
│
├── 🔧 TÉCNICA
│   ├── ESTRUCTURA.md (Arquitectura)
│   ├── COMPARATIVA.md (Desktop vs Móvil)
│   └── README-MOBILE.md (Detalles móviles)
│
└── 🧪 TESTING
    └── TESTING.md (Guía de pruebas)
```

---

## 💡 Tips Rápidos

### ❓ ¿Cómo...?

**...empezar el proyecto?**
→ GUIA-RAPIDA.md → Sección "Pasos para Compilar"

**...probar la versión móvil?**
→ GUIA-RAPIDA.md → Sección "Pruebas en navegador"

**...cambiar colores?**
→ README-MOBILE.md → Sección "Personalizar la Versión Móvil"

**...añadir más proyectos?**
→ README.md → Sección "Configuración"

**...solucionar errores?**
→ TESTING.md → Sección "Solución de Problemas"

**...entender las animaciones?**
→ COMPARATIVA.md → Tabla comparativa completa

**...desactivar redirección?**
→ Comenta `<script src="redirect.js"></script>` en index.html

---

## 🎯 Casos de Uso Comunes

### Caso 1: Nuevo Desarrollador
```
1. Lee: GUIA-RAPIDA.md
2. Ejecuta: npm install && npm run build && npm run serve
3. Prueba: http://localhost:3000
4. Explora: ESTRUCTURA.md
```

### Caso 2: Modificar Estilos Móviles
```
1. Edita: src/styles-mobile.css
2. Compila: npm run build
3. Recarga: navegador (F5)
4. Verifica: DevTools con modo dispositivo
```

### Caso 3: Añadir Nueva Sección
```
1. Consulta: ESTRUCTURA.md (ver estructura HTML)
2. Edita: index-mobile.html (añadir HTML)
3. Edita: src/styles-mobile.css (añadir CSS)
4. Opcional: src/main-mobile.ts (añadir JS)
5. Compila: npm run build
```

### Caso 4: Debugging
```
1. Consulta: TESTING.md → "Solución de Problemas"
2. Verifica: DevTools → Console (errores)
3. Comprueba: DevTools → Network (archivos cargados)
4. Limpia: Cache (Ctrl/Cmd + Shift + R)
```

---

## 📝 Notas Finales

### ✅ Antes de Empezar
- [ ] Node.js instalado
- [ ] npm instalado
- [ ] Editor de código abierto

### ✅ Primer Uso
- [ ] `npm install` ejecutado
- [ ] `npm run build` ejecutado sin errores
- [ ] `npm run serve` corriendo
- [ ] Navegador abierto en localhost:3000

### ✅ Desarrollo Continuo
- [ ] `npm run watch` para auto-compilación
- [ ] DevTools abierto para debugging
- [ ] Documentación a mano

---

## 🆘 Ayuda Rápida

### Error de Compilación
→ TESTING.md → "No se compila TypeScript"

### Redirección no Funciona
→ GUIA-RAPIDA.md → "Solución de Problemas"

### Móvil se ve Mal
→ COMPARATIVA.md → Ver breakpoints responsive

### Performance Bajo
→ README-MOBILE.md → Sección "Optimizaciones"

---

**Última actualización**: 27 de noviembre de 2025  
**Versión**: 1.0.0  
**Documentación completa**: ✅ 100%

