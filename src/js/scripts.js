const homeText = new SplitType("#homeText");
gsap.to(".char", { y: 0, stagger: 0.05, delay: 0, duration: 0.2, ease: "power2.inOut" });
const options = { root: null, rootMargin: "200px", threshold: 0.9 };

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true,
  tablet: {
    smooth: true, // Activar scroll suave en tabletas
  },
  smartphone: {
    smooth: true, // Activar scroll suave en smartphones
  },
});

// Configuración de ScrollTrigger con Locomotive
gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.scrollerProxy("[data-scroll-container]", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
  },
  pinType: document.querySelector("[data-scroll-container]").style.transform
    ? "transform"
    : "fixed",
});

locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();
gsap.registerPlugin(ScrollTrigger);
gsap.to(".text p", { backgroundPositionX: "0%", stagger: 1, scrollTrigger: { scroller: "[data-scroll-container]", trigger: ".text p", scrub: 1, start: "top center", end: "bottom top" } });
gsap.to(".title1", { x: -4000, xPercent: 150, ease: "none", scrollTrigger: { scroller: "[data-scroll-container]", trigger: ".title1", scrub: true } });
gsap.to(".title2", { x: 100, xPercent: 150, ease: "none", scrollTrigger: { scroller: "[data-scroll-container]", trigger: ".title2", scrub: true } });
gsap.set(".cursor", { xPercent: -50, yPercent: -50 });
const cursor = document.querySelector(".cursor");
const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
const mouse = { x: pos.x, y: pos.y };
const speed = 0.2;
const xSet = gsap.quickSetter(cursor, "x", "px");
const ySet = gsap.quickSetter(cursor, "y", "px");
window.addEventListener("mousemove", (e) => {
    mouse.x = e.x;
    mouse.y = e.y;
});
gsap.ticker.add(() => {
    const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio());
    pos.x += (mouse.x - pos.x) * dt;
    pos.y += (mouse.y - pos.y) * dt;
    xSet(pos.x);
    ySet(pos.y);
});
// Detectar el ancho de la ventana
// Detectar el ancho de la ventana
if (window.innerWidth <= 768) { 
  // Para dispositivos móviles
  gsap.utils.toArray(".service__content h3").forEach((title) => {
      gsap.from(title, {
          opacity: 1,
          y: 20,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
              trigger: title,
              scroller: "[data-scroll-container]",
              start: "top 90%",
              end: "top 70%",
              scrub: false,
              toggleActions: "play none none reverse", // Solo reproduce al entrar
          },
      });
  });
} else { 
  // Para pantallas mayores a 768px
  gsap.utils.toArray(".service").forEach((service) => {
      const tl = gsap.timeline({
          scrollTrigger: {
              trigger: service,
              start: "top 80%",
              end: "bottom 20%",
              scrub: true,
          },
      });
    
      // Animación de contenido
      tl.fromTo(
          service.querySelector(".service__content"),
          { opacity: 1, x: -100 },
          { opacity: 1, x: 0, duration: 1 }
      );
    
      // Animación de imagen
      tl.fromTo(
          service.querySelector(".service__image img"),
          { scale: 1.4 },
          { scale: 1, duration: 1 },
          "<" // Sincroniza con el inicio de la animación de contenido
      );
  });
};

document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin();

  const tl = gsap.timeline({ repeat: -1 }); // Loop infinito

  tl.fromTo(".figma",
    { opacity: 0, x: 100 }, // Aparece y se mueve
    { opacity: 1, x: 0, duration: 1, ease: "power3.out" }
  )
  .to(".figma", { opacity: 0, duration: 0.5, ease: "power3.out" }) // Desaparece
  .fromTo(".codigo",
    { opacity: 0 },
    { opacity: 1, duration: 1.5, ease: "power3.out" }
  )
  .to(".codigo", { opacity: 0, duration: 1, ease: "power3.out" }); // Desaparece

  
});

document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin();

  const iconos = document.querySelectorAll(".iconos i");

  iconos.forEach((icono, index) => {
    const duracionSubida = gsap.utils.random(1, 2.5);
    const duracionBajada = gsap.utils.random(1.5, 2.5);
    const delayVisible = gsap.utils.random(2, 4);
    const easing = gsap.utils.random(["power2.out", "power3.out", "power4.out"]);

    // Asignación de posiciones y tamaños aleatorios
    const posX = gsap.utils.random(10, 90);
    const posY = gsap.utils.random(10, 90);
    const size = gsap.utils.random(30, 70);

    gsap.set(icono, {
      left: `${posX}%`,
      top: `${posY}%`,
      fontSize: `${size}px`,
    });

    // Asignación de color secuencial
    const colorSecuencia = index % 2 === 0 ? "#007c82" : "#fff"; // Alternar colores

    gsap.timeline({ repeat: -1 })
      .fromTo(icono, 
        { y: 100, opacity: 0, color: colorSecuencia },  
        { y: 0, opacity: 1, duration: duracionSubida, ease: easing, color: "#fff" }
      )
      .to(icono, { 
        y: 0, opacity: 1, duration: delayVisible, color: colorSecuencia
      })
      .to(icono, { 
        y: -100, opacity: 0, duration: duracionBajada, ease: easing, color: "#007c82"
      });
  });
});

// Función para alternar entre Desktop y Smartphone
function glitchEffect() {
  let tl = gsap.timeline({ repeat: -1, repeatDelay: 1.5 });

  // 1️⃣ Glitch horizontal (corte y desplazamiento de capas)
  tl.to(".glitch-top", { x: -15, opacity: 1, duration: 0.025, yoyo: true, repeat: 2 }, "glitch")
  .to(".glitch-middle", { x: 15, opacity: 1, duration: 0.025, yoyo: true, repeat: 2 }, "glitch")
  .to(".glitch-bottom", { x: -20, opacity: 1, duration: 0.025, yoyo: true, repeat: 2 }, "glitch")
    .to(".glitch-top, .glitch-middle, .glitch-bottom", { opacity: 0, duration: 0.05 });

  // 2️⃣ RGB Shift (Efecto de color)
  tl.to(".glitch-icon", { 
      filter: "drop-shadow(5px 0px red) drop-shadow(-5px 0px blue)", 
      duration: 0.1 
  }, "-=0.1")
  .to(".glitch-icon", { filter: "none", duration: 0.1 });

  // 3️⃣ Líneas de interferencia
  tl.to(".stripe", { opacity: 1, x: 5, duration: 0.02, stagger: 0.01 }, "glitch")
    .to(".stripe", { x: -5, duration: 0.02, stagger: 0.01 }, "glitch")
    .to(".stripe", { opacity: 0, duration: 0.02, stagger: 0.01 }, "+=0.05");

  // 4️⃣ Cambio de icono Desktop → Smartphone
  tl.to(".glitch-icon", { opacity: 0, duration: 0.1 })
    .call(() => {
        document.querySelectorAll(".glitch-icon, .glitch-top, .glitch-middle, .glitch-bottom").forEach(icon => {
            icon.classList.toggle("fa-desktop");
            icon.classList.toggle("fa-mobile-alt");
        });
    })
    .to(".glitch-icon", { opacity: 1, duration: 0.1 });
}

glitchEffect();

function setCopyrightDate() {
    year = new Date().getYear();
    if (year < 1900) {
        year += 1900;
    }
    document.getElementById("currentYear").innerHTML = year;
}
setCopyrightDate();
