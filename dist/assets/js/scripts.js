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


/// Seleccionar el contenedor del cursor y los elementos interactivos
const cursor = document.querySelector(".cursor");
const cursorInner = document.querySelector(".cursor-inner");
const interactiveElements = document.querySelectorAll("a, button");

// Activar el efecto glitch cuando el mouse entra sobre un elemento interactivo
interactiveElements.forEach((element) => {
  element.addEventListener("mouseenter", () => {
    cursor.classList.add("glitch-active"); // Activa el glitch en el cursor
  });
  element.addEventListener("mouseleave", () => {
    cursor.classList.remove("glitch-active"); // Desactiva el glitch en el cursor
  });
});

// Movimiento fluido del cursor con GSAP
gsap.set(".cursor", { xPercent: -50, yPercent: -50 });
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
  glitchEffectFigma();
  glitchEffectDesign();
  glitchEffectDev();
});

function glitchEffectFigma() {
  let selector = ".figma-icon";
  let iconA = ["fa-brands", "fa-figma"];
  let iconB = ["fa-sharp", "fa-solid", "fa-code"];

  applyGlitchEffect(selector, iconA, iconB);
}

function glitchEffectDesign() {
  let selector = ".design-icon";
  let iconA = ["fa-sharp", "fa-solid", "fa-bezier-curve"];
  let iconB = ["fa-sharp", "fa-solid", "fa-icons"];

  applyGlitchEffect(selector, iconA, iconB);
}

function glitchEffectDev() {
  let selector = ".dev-icon";
  let iconA = ["fa-sharp", "fa-solid", "fa-terminal"];
  let iconB = ["fa-sharp", "fa-solid", "fa-laptop-code"];

  applyGlitchEffect(selector, iconA, iconB);
}

// 📌 Función genérica para glitch y cambio de icono
function applyGlitchEffect(selector, iconA, iconB) {
  let iconElement = document.querySelector(selector);
  if (!iconElement) {
      console.error(`Elemento con selector "${selector}" no encontrado.`);
      return;
  }

  let tl = gsap.timeline({ repeat: -1, repeatDelay: 1.5 });

  // Glitch en clones
  tl.to(`${selector} ~ .glitch-top`, { x: -5, opacity: 1, duration: 0.05, yoyo: true, repeat: 2 }, "glitch")
    .to(`${selector} ~ .glitch-middle`, { x: 5, opacity: 1, duration: 0.05, yoyo: true, repeat: 2 }, "glitch")
    .to(`${selector} ~ .glitch-bottom`, { x: -3, opacity: 1, duration: 0.05, yoyo: true, repeat: 2 }, "glitch")
    .to(`${selector} ~ .glitch-top, ${selector} ~ .glitch-middle, ${selector} ~ .glitch-bottom`, { opacity: 0, duration: 0.1 });

  // Efecto RGB Shift
  tl.to(selector, { filter: "drop-shadow(4px 0px red) drop-shadow(-4px 0px blue)", duration: 0.1 }, "-=0.1")
    .to(selector, { filter: "none", duration: 0.1 });

  // Cambio de icono con `classList.contains()`
  tl.to(selector, { opacity: 0, duration: 0.1 })
    .call(() => {
        let icon = document.querySelector(selector);
        if (icon) {
            let isIconA = icon.classList.contains(iconA[iconA.length - 1]); // Detectamos con la última clase
            
            if (isIconA) {
                iconA.forEach(cls => icon.classList.remove(cls)); // Quitar icono A
                iconB.forEach(cls => icon.classList.add(cls)); // Agregar icono B
            } else {
                iconB.forEach(cls => icon.classList.remove(cls)); // Quitar icono B
                iconA.forEach(cls => icon.classList.add(cls)); // Agregar icono A
            }
        } else {
            console.error(`No se encontró el icono con selector "${selector}" al cambiar de icono.`);
        }
    })
    .to(selector, { opacity: 1, duration: 0.1 });
}


document.querySelectorAll(".copy-link").forEach(link => {
  link.addEventListener("click", (e) => {
      e.preventDefault(); // Evita que el enlace se abra

      const url = link.getAttribute("data-link");

      // Copiar al portapapeles
      navigator.clipboard.writeText(url).then(() => {
          console.log("Enlace copiado:", url);

          // Mostrar el Toast de Bootstrap
          const toastEl = document.getElementById("copyToast");
          const toast = new bootstrap.Toast(toastEl);
          toast.show();
      }).catch(err => {
          console.error("Error al copiar:", err);
      });
  });
});
document.querySelectorAll(".copy-linkF").forEach(link => {
  link.addEventListener("click", (e) => {
      e.preventDefault(); // Evita que el enlace se abra

      const url = link.getAttribute("data-link");

      // Copiar al portapapeles
      navigator.clipboard.writeText(url).then(() => {
          console.log("Enlace copiado:", url);

          // Mostrar el Toast de Bootstrap
          const toastEl = document.getElementById("copyToastF");
          const toast = new bootstrap.Toast(toastEl);
          toast.show();
      }).catch(err => {
          console.error("Error al copiar:", err);
      });
  });
});




function setCopyrightDate() {
    year = new Date().getYear();
    if (year < 1900) {
        year += 1900;
    }
    document.getElementById("currentYear").innerHTML = year;
}
setCopyrightDate();
