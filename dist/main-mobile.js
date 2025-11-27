"use strict";
/**
 * MAIN MOBILE - TypeScript para la versión móvil/tablet
 * Adaptado para gestos táctiles y comportamiento móvil
 */
const mobileCarouselData = [
    {
        title: 'Edificio 1',
        description: 'Proyecto arquitectónico moderno con diseño innovador y espacios funcionales que redefinen el concepto de hogar.'
    },
    {
        title: 'Edificio 2',
        description: 'Arquitectura contemporánea que combina estética y practicidad en cada detalle del diseño interior.'
    },
    {
        title: 'Edificio 3',
        description: 'Espacios únicos diseñados para maximizar la luz natural y crear ambientes acogedores y elegantes.'
    },
    {
        title: 'Edificio 4',
        description: 'Obra maestra arquitectónica que establece nuevos estándares en construcción sostenible y diseño vanguardista.'
    }
];
class MobileCarousel {
    constructor() {
        this.currentIndex = 0;
        // Variables para el swipe
        this.touchStartX = 0;
        this.isDragging = false;
        this.startX = 0;
        this.currentTranslate = 0;
        this.prevTranslate = 0;
        this.animationID = 0;
        this.SWIPE_THRESHOLD = 50; // px mínimos para considerar swipe
        this.ANIMATION_DURATION = 400; // ms
        this.track = document.getElementById('mobile-carousel-track');
        this.slides = document.querySelectorAll('.mobile-carousel-slide');
        this.dots = document.querySelectorAll('.mobile-dot');
        this.titleElement = document.getElementById('mobile-carousel-title');
        this.descriptionElement = document.getElementById('mobile-carousel-description');
        if (!this.track || this.slides.length === 0) {
            console.warn('⚠️ Carrusel móvil no encontrado');
            return;
        }
        this.init();
    }
    init() {
        console.log('📱 Inicializando carrusel móvil');
        // Event listeners para touch
        this.track.addEventListener('touchstart', (e) => this.touchStart(e), { passive: true });
        this.track.addEventListener('touchmove', (e) => this.touchMove(e), { passive: true });
        this.track.addEventListener('touchend', () => this.touchEnd());
        // Event listeners para mouse (útil para testing en desktop)
        this.track.addEventListener('mousedown', (e) => this.dragStart(e));
        this.track.addEventListener('mousemove', (e) => this.drag(e));
        this.track.addEventListener('mouseup', () => this.dragEnd());
        this.track.addEventListener('mouseleave', () => this.dragEnd());
        // Event listeners para los dots
        this.dots.forEach((dot) => {
            dot.addEventListener('click', (e) => {
                const target = e.currentTarget;
                const index = parseInt(target.dataset.index || '0');
                this.goToSlide(index);
            });
        });
        // Actualizar estado inicial
        this.updateCarousel();
    }
    // ========== TOUCH EVENTS ==========
    touchStart(e) {
        this.touchStartX = e.touches[0].clientX;
        this.startX = this.touchStartX;
        this.isDragging = true;
        this.animationID = requestAnimationFrame(() => this.animation());
    }
    touchMove(e) {
        if (!this.isDragging)
            return;
        const currentX = e.touches[0].clientX;
        this.currentTranslate = this.prevTranslate + currentX - this.startX;
    }
    touchEnd() {
        if (!this.isDragging)
            return;
        this.isDragging = false;
        cancelAnimationFrame(this.animationID);
        const movedBy = this.currentTranslate - this.prevTranslate;
        // Determinar si fue un swipe válido
        if (movedBy < -this.SWIPE_THRESHOLD && this.currentIndex < this.slides.length - 1) {
            this.goToNext();
        }
        else if (movedBy > this.SWIPE_THRESHOLD && this.currentIndex > 0) {
            this.goToPrev();
        }
        else {
            // Volver a la posición actual
            this.updateCarousel();
        }
    }
    // ========== MOUSE EVENTS (PARA TESTING) ==========
    dragStart(e) {
        this.startX = e.clientX;
        this.isDragging = true;
        this.track.style.cursor = 'grabbing';
        this.animationID = requestAnimationFrame(() => this.animation());
    }
    drag(e) {
        if (!this.isDragging)
            return;
        const currentX = e.clientX;
        this.currentTranslate = this.prevTranslate + currentX - this.startX;
    }
    dragEnd() {
        if (!this.isDragging)
            return;
        this.isDragging = false;
        cancelAnimationFrame(this.animationID);
        this.track.style.cursor = 'grab';
        const movedBy = this.currentTranslate - this.prevTranslate;
        if (movedBy < -this.SWIPE_THRESHOLD && this.currentIndex < this.slides.length - 1) {
            this.goToNext();
        }
        else if (movedBy > this.SWIPE_THRESHOLD && this.currentIndex > 0) {
            this.goToPrev();
        }
        else {
            this.updateCarousel();
        }
    }
    // ========== ANIMACIÓN ==========
    animation() {
        if (this.isDragging) {
            this.setSliderPosition();
            requestAnimationFrame(() => this.animation());
        }
    }
    setSliderPosition() {
        this.track.style.transform = `translateX(${this.currentTranslate}px)`;
    }
    // ========== NAVEGACIÓN ==========
    goToNext() {
        if (this.currentIndex < this.slides.length - 1) {
            this.currentIndex++;
            this.updateCarousel();
        }
    }
    goToPrev() {
        if (this.currentIndex > 0) {
            this.currentIndex--;
            this.updateCarousel();
        }
    }
    goToSlide(index) {
        if (index >= 0 && index < this.slides.length) {
            this.currentIndex = index;
            this.updateCarousel();
        }
    }
    // ========== ACTUALIZACIÓN ==========
    updateCarousel() {
        // Calcular la translación
        const slideWidth = this.slides[0].offsetWidth;
        const translateX = -this.currentIndex * slideWidth;
        this.prevTranslate = translateX;
        this.currentTranslate = translateX;
        // Aplicar transformación con transición suave
        this.track.style.transition = `transform ${this.ANIMATION_DURATION}ms cubic-bezier(0.4, 0, 0.2, 1)`;
        this.track.style.transform = `translateX(${translateX}px)`;
        // Quitar transición después de la animación para el drag
        setTimeout(() => {
            if (!this.isDragging) {
                this.track.style.transition = '';
            }
        }, this.ANIMATION_DURATION);
        // Actualizar dots
        this.dots.forEach((dot, index) => {
            if (index === this.currentIndex) {
                dot.classList.add('active');
            }
            else {
                dot.classList.remove('active');
            }
        });
        // Actualizar texto
        this.updateText();
    }
    updateText() {
        // Fade out
        this.titleElement.classList.add('fade-out');
        this.descriptionElement.classList.add('fade-out');
        // Cambiar texto y fade in
        setTimeout(() => {
            this.titleElement.textContent = mobileCarouselData[this.currentIndex].title;
            this.descriptionElement.textContent = mobileCarouselData[this.currentIndex].description;
            this.titleElement.classList.remove('fade-out');
            this.descriptionElement.classList.remove('fade-out');
        }, 150);
    }
}
// ========== ANIMACIONES DE SCROLL (DESACTIVADAS - Todo visible de inmediato) ==========
class ScrollAnimations {
    constructor() {
        console.log('ℹ️ Animaciones de scroll desactivadas - Todo visible inmediatamente');
        // No se inicializan las animaciones para que todo sea visible de golpe
    }
}
// ========== SMOOTH SCROLL PARA BOTÓN "VOLVER ARRIBA" ==========
class MobileScrollTop {
    constructor() {
        this.button = document.getElementById('mobile-scroll-top');
        if (!this.button) {
            console.warn('⚠️ Botón scroll-top no encontrado');
            return;
        }
        this.init();
    }
    init() {
        this.button.addEventListener('click', () => this.scrollToTop());
    }
    scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
}
// ========== PROYECTOS (ITEMS CON DISEÑO COLLAGE - SIN ANIMACIONES) ==========
class MobileProjects {
    constructor() {
        this.items = document.querySelectorAll('.mobile-project-item');
        if (this.items.length === 0) {
            console.warn('⚠️ Items de proyectos no encontrados');
            return;
        }
        this.init();
    }
    init() {
        console.log(`🏗️ Inicializando ${this.items.length} items de proyectos`);
        this.items.forEach((item) => {
            // Añadir efecto de vibración táctil al tocar (si está disponible)
            item.addEventListener('touchstart', () => {
                if ('vibrate' in navigator) {
                    navigator.vibrate(10); // Vibración sutil de 10ms
                }
            });
        });
    }
}
// ========== COLLAGE ITEMS ==========
class MobileCollage {
    constructor() {
        this.items = document.querySelectorAll('.mobile-collage-item');
        if (this.items.length === 0) {
            console.warn('⚠️ Items del collage no encontrados');
            return;
        }
        this.init();
    }
    init() {
        console.log(`🖼️ Inicializando ${this.items.length} items del collage`);
        this.items.forEach((item) => {
            // Añadir efecto de vibración táctil al tocar
            item.addEventListener('touchstart', () => {
                if ('vibrate' in navigator) {
                    navigator.vibrate(10);
                }
            });
        });
    }
}
// ========== INICIALIZACIÓN ==========
document.addEventListener('DOMContentLoaded', () => {
    console.log('📱 ¡Aplicación móvil iniciada!');
    console.log(`📐 Tamaño de pantalla: ${window.innerWidth}x${window.innerHeight}`);
    console.log(`📱 User Agent: ${navigator.userAgent}`);
    // Inicializar todos los módulos
    new MobileCarousel();
    new ScrollAnimations();
    new MobileScrollTop();
    new MobileProjects();
    new MobileCollage();
    // Log para confirmar que todo está listo
    console.log('✅ Todos los módulos móviles inicializados correctamente');
});
// ========== PREVENCIÓN DE ZOOM EN DOBLE TAP ==========
let lastTouchEnd = 0;
document.addEventListener('touchend', (event) => {
    const now = Date.now();
    if (now - lastTouchEnd <= 300) {
        event.preventDefault();
    }
    lastTouchEnd = now;
}, false);
// ========== DETECTAR CAMBIOS DE ORIENTACIÓN ==========
window.addEventListener('orientationchange', () => {
    console.log(`🔄 Orientación cambiada a: ${window.orientation}`);
    // Esperar a que se complete el cambio de orientación
    setTimeout(() => {
        console.log(`📐 Nuevo tamaño: ${window.innerWidth}x${window.innerHeight}`);
    }, 200);
});
// ========== PREVENIR PULL-TO-REFRESH EN MÓVIL (OPCIONAL) ==========
let touchStartY = 0;
document.addEventListener('touchstart', (e) => {
    touchStartY = e.touches[0].clientY;
}, { passive: false });
document.addEventListener('touchmove', (e) => {
    const touchY = e.touches[0].clientY;
    const touchDiff = touchY - touchStartY;
    // Si está en la parte superior y hace scroll hacia abajo, prevenir
    if (window.scrollY === 0 && touchDiff > 0) {
        e.preventDefault();
    }
}, { passive: false });
