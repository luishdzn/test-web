// Función para hacer girar el elemento
// function rotarElemento(selector: string): void {
//   const elemento = document.querySelector(selector) as HTMLElement;
//
//   if (!elemento) {
//     console.error(`No se encontró el elemento con selector: ${selector}`);
//     return;
//   }
//
//   let rotacion = 0;
//
//   // Animar rotación continua
//   setInterval(() => {
//     rotacion += 2;
//     elemento.style.transform = `rotate(${rotacion}deg)`;
//   }, 16); // Aproximadamente 60 FPS
// }
//
// // Esperar a que el DOM esté cargado
// document.addEventListener('DOMContentLoaded', () => {
//   console.log('¡Aplicación iniciada!');
//
//   // Hacer girar el título "Hola Mundo"
//   rotarElemento('.titulo');
// });

// ========== SCROLL ANIMADO TIPO DIAPOSITIVAS ==========

class SectionScroller {
  private sections: NodeListOf<HTMLElement>;
  private currentIndex: number = 0;
  private isAnimating: boolean = false;
  private gestureLock: boolean = false;
  private gestureReleaseTimeout: number | null = null;
  private readonly ANIMATION_DURATION = 900; // ms, debe coincidir con la transición CSS
  private readonly GESTURE_IDLE_DELAY = 250;  // ms sin gestos antes de desbloquear
  private readonly WHEEL_DEADZONE = 8; // Umbral para ignorar pequeños movimientos del mouse
  private readonly TOUCH_THRESHOLD = 50; // px mínimos para considerar swipe

  constructor() {
    this.sections = document.querySelectorAll('.container');
    console.log(`📋 Secciones detectadas: ${this.sections.length}`);
    this.sections.forEach((section, index) => {
      console.log(`  ${index}: ${section.id || 'sin-id'}`);
    });
    this.init();
  }

  private init(): void {
    // Marcar la primera sección como activa
    if (this.sections.length > 0) {
      this.sections[0].classList.add('active');
    }

    // Event listener para el scroll del mouse
    window.addEventListener('wheel', (e) => this.handleWheel(e), { passive: false });

    // Event listener para teclado (flechas arriba/abajo)
    window.addEventListener('keydown', (e) => this.handleKeyboard(e));

    // Event listener para touch (móviles)
    let touchStartY = 0;
    window.addEventListener('touchstart', (e) => {
      touchStartY = e.touches[0].clientY;
    }, { passive: true });

    window.addEventListener('touchend', (e) => {
      const touchEndY = e.changedTouches[0].clientY;
      const diff = touchStartY - touchEndY;
      this.handleTouchEnd(diff);
    }, { passive: true });
  }

  private handleWheel(e: WheelEvent): void {
    e.preventDefault();

    if (!this.canProcessGesture()) {
      return;
    }

    if (e.deltaY > this.WHEEL_DEADZONE) {
      this.processGesture(1, '🖱️');
    } else if (e.deltaY < -this.WHEEL_DEADZONE) {
      this.processGesture(-1, '🖱️');
    }
  }

  private handleKeyboard(e: KeyboardEvent): void {
    if (!this.canProcessGesture()) {
      return;
    }

    if (e.key === 'ArrowDown' || e.key === 'PageDown') {
      e.preventDefault();
      this.processGesture(1, '⌨️');
    } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
      e.preventDefault();
      this.processGesture(-1, '⌨️');
    }
  }

  private handleTouchEnd(diff: number): void {
    if (!this.canProcessGesture()) {
      return;
    }

    if (diff > this.TOUCH_THRESHOLD) {
      this.processGesture(1, '📱');
    } else if (diff < -this.TOUCH_THRESHOLD) {
      this.processGesture(-1, '📱');
    } else {
      // Swipe demasiado corto: liberar el lock inmediatamente
      this.releaseGestureLock();
    }
  }

  private canProcessGesture(): boolean {
    if (this.isAnimating || this.gestureLock) {
      console.log('⛔ Gestos bloqueados');
      return false;
    }

    this.lockGestures();
    return true;
  }

  private processGesture(direction: 1 | -1, source: string): void {
    console.log(`${source} gesto → ${direction > 0 ? 'next' : 'prev'}`);

    if (direction > 0) {
      this.goToNext();
    } else {
      this.goToPrev();
    }
  }

  private lockGestures(): void {
    this.gestureLock = true;

    if (this.gestureReleaseTimeout) {
      window.clearTimeout(this.gestureReleaseTimeout);
    }

    this.gestureReleaseTimeout = window.setTimeout(() => {
      this.releaseGestureLock();
      console.log('🔓 Gestos desbloqueados por inactividad');
    }, this.GESTURE_IDLE_DELAY);
  }

  private releaseGestureLock(): void {
    this.gestureLock = false;
    if (this.gestureReleaseTimeout) {
      window.clearTimeout(this.gestureReleaseTimeout);
      this.gestureReleaseTimeout = null;
    }
  }

  private updateSections(): void {
    if (this.isAnimating) return;

    this.isAnimating = true;
    this.gestureLock = true;

    console.log(`🔄 Cambiando a sección ${this.currentIndex} (${this.sections[this.currentIndex]?.id || 'unknown'})`);

    this.sections.forEach((section, index) => {
      section.classList.remove('active', 'prev');

      if (index === this.currentIndex) {
        section.classList.add('active');
      } else if (index < this.currentIndex) {
        section.classList.add('prev');
      }
    });

    const activeSection = this.sections[this.currentIndex];

    const onTransitionEnd = () => {
      activeSection.removeEventListener('transitionend', onTransitionEnd);
      this.isAnimating = false;
      this.releaseGestureLock();
      console.log('🔓 Animación completada');
    };

    activeSection.addEventListener('transitionend', onTransitionEnd);

    setTimeout(() => {
      if (this.isAnimating) {
        this.isAnimating = false;
        this.releaseGestureLock();
        console.log('🔓 Animación completada (timeout fallback)');
      }
    }, this.ANIMATION_DURATION + 100);
  }

  public goToSection(index: number): void {
    if (index >= 0 && index < this.sections.length) {
      this.currentIndex = index;
      this.updateSections();
    }
  }

  private goToNext(): void {
    if (this.currentIndex < this.sections.length - 1) {
      this.currentIndex++;
      this.updateSections();
    } else {
      this.releaseGestureLock();
    }
  }

  private goToPrev(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.updateSections();
    } else {
      this.releaseGestureLock();
    }
  }
}

// ========== CARRUSEL DE IMÁGENES ==========

interface CarrouselData {
  title: string;
  description: string;
}

const carrouselData: CarrouselData[] = [
  {
    title: 'Edificio 1',
    description: 'Esta es una descripción del Edificio 1 que muestra los detalles y características principales de este proyecto arquitectónico moderno.'
  },
  {
    title: 'Edificio 2',
    description: 'Esta es una descripción del Edificio 2, un proyecto innovador que combina diseño contemporáneo con funcionalidad excepcional.'
  },
  {
    title: 'Edificio 3',
    description: 'Esta es una descripción del Edificio 3, destacando por su arquitectura única y espacios cuidadosamente diseñados.'
  },
  {
    title: 'Edificio 4',
    description: 'Esta es una descripción del Edificio 4, una obra maestra arquitectónica que redefine los estándares de construcción moderna.'
  }
];

class Carrousel {
  private track: HTMLElement;
  private slides: NodeListOf<HTMLElement>;
  private indicators: NodeListOf<HTMLElement>;
  private prevBtn: HTMLButtonElement;
  private nextBtn: HTMLButtonElement;
  private titleElement: HTMLElement;
  private descriptionElement: HTMLElement;
  private currentIndex: number = 0;
  private isDragging: boolean = false;
  private startX: number = 0;
  private currentTranslate: number = 0;
  private prevTranslate: number = 0;

  constructor() {
    this.track = document.getElementById('carrousel-track') as HTMLElement;
    this.slides = document.querySelectorAll('.carrousel-slide');
    this.indicators = document.querySelectorAll('.indicator');
    this.prevBtn = document.getElementById('prev-btn') as HTMLButtonElement;
    this.nextBtn = document.getElementById('next-btn') as HTMLButtonElement;
    this.titleElement = document.getElementById('carrousel-title') as HTMLElement;
    this.descriptionElement = document.getElementById('carrousel-description') as HTMLElement;

    this.init();
  }

  private init(): void {
    // Event listeners para los botones
    this.prevBtn.addEventListener('click', () => this.goToPrev());
    this.nextBtn.addEventListener('click', () => this.goToNext());

    // Event listeners para los indicadores
    this.indicators.forEach((indicator) => {
      indicator.addEventListener('click', (e) => {
        const target = e.currentTarget as HTMLElement;
        const index = parseInt(target.dataset.index || '0');
        this.goToSlide(index);
      });
    });

    // Event listeners para arrastrar
    this.track.addEventListener('mousedown', (e) => this.dragStart(e));
    this.track.addEventListener('mousemove', (e) => this.drag(e));
    this.track.addEventListener('mouseup', () => this.dragEnd());
    this.track.addEventListener('mouseleave', () => this.dragEnd());

    // Touch events para móviles
    this.track.addEventListener('touchstart', (e) => this.dragStart(e));
    this.track.addEventListener('touchmove', (e) => this.drag(e));
    this.track.addEventListener('touchend', () => this.dragEnd());

    // Actualizar estado inicial
    this.updateCarrousel();
  }

  private dragStart(e: MouseEvent | TouchEvent): void {
    this.isDragging = true;
    this.startX = this.getPositionX(e);
    this.track.style.cursor = 'grabbing';
  }

  private drag(e: MouseEvent | TouchEvent): void {
    if (!this.isDragging) return;

    const currentX = this.getPositionX(e);
    const diff = currentX - this.startX;
    this.currentTranslate = this.prevTranslate + diff;
  }

  private dragEnd(): void {
    if (!this.isDragging) return;

    this.isDragging = false;
    this.track.style.cursor = 'grab';

    const movedBy = this.currentTranslate - this.prevTranslate;

    // Si se arrastró más de 100px, cambiar de slide
    if (movedBy < -100 && this.currentIndex < this.slides.length - 1) {
      this.goToNext();
    } else if (movedBy > 100 && this.currentIndex > 0) {
      this.goToPrev();
    } else {
      // Volver a la posición actual
      this.updateCarrousel();
    }
  }

  private getPositionX(e: MouseEvent | TouchEvent): number {
    return e instanceof MouseEvent ? e.clientX : e.touches[0].clientX;
  }

  private goToNext(): void {
    if (this.currentIndex < this.slides.length - 1) {
      this.currentIndex++;
      this.updateCarrousel();
    }
  }

  private goToPrev(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.updateCarrousel();
    }
  }

  private goToSlide(index: number): void {
    this.currentIndex = index;
    this.updateCarrousel();
  }

  private updateCarrousel(): void {
    // Calcular la translación
    const slideWidth = this.slides[0].offsetWidth + 20; // 20px es el margin-right
    const translateX = -this.currentIndex * slideWidth;
    this.prevTranslate = translateX;
    this.currentTranslate = translateX;

    this.track.style.transform = `translateX(${translateX}px)`;

    // Actualizar indicadores
    this.indicators.forEach((indicator, index) => {
      if (index === this.currentIndex) {
        indicator.classList.add('active');
      } else {
        indicator.classList.remove('active');
      }
    });

    // Actualizar botones
    this.prevBtn.disabled = this.currentIndex === 0;
    this.nextBtn.disabled = this.currentIndex === this.slides.length - 1;

    // Actualizar texto con efecto de difuminado
    this.updateText();
  }

  private updateText(): void {
    // Añadir clase de fade-out
    this.titleElement.classList.add('fade-out');
    this.descriptionElement.classList.add('fade-out');

    // Después de la animación, cambiar el texto y quitar fade-out
    setTimeout(() => {
      this.titleElement.textContent = carrouselData[this.currentIndex].title;
      this.descriptionElement.textContent = carrouselData[this.currentIndex].description;

      this.titleElement.classList.remove('fade-out');
      this.descriptionElement.classList.remove('fade-out');
    }, 250); // La mitad del tiempo de transición (0.5s / 2)
  }
}

// Inicializar el carrusel cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', () => {
  console.log('¡Aplicación iniciada!');

  // Inicializar scroll animado
  const sectionScroller = new SectionScroller();

  // Inicializar carrusel
  new Carrousel();
  
  // ========== BOTÓN SCROLL TO TOP ==========
  const scrollToTopBtn = document.getElementById('scroll-to-top') as HTMLButtonElement;
  
  if (scrollToTopBtn) {
    scrollToTopBtn.addEventListener('click', () => {
      sectionScroller.goToSection(0); // Volver a la primera sección
    });
  }
});
