
const options = { root: null, rootMargin: "200px", threshold: 0.9 };
let revealCallback = (entries, self) => {
    entries.forEach((entry) => {
        let container = entry.target;
        let img = entry.target.querySelector("img");
        const easeInOut = "power3.out";
        const revealAnim = gsap.timeline({ ease: easeInOut });
        if (entry.isIntersecting) {
            revealAnim.set(container, { visibility: "visible" });
            revealAnim.fromTo(
                container,
                { clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)", webkitClipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" },
                { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", webkitClipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", duration: 1, ease: easeInOut }
            );
            revealAnim.from(img, 4, { scale: 1.4, ease: easeInOut, delay: -1 });
            self.unobserve(entry.target);
        }
    });
};

gsap.registerPlugin(SplitType);

// Divide el texto en letras
const text = new SplitType(".reveal-text", { types: "chars" });

gsap.timeline()
  .from(text.chars, {
    y: "100%", // Las letras vienen desde abajo
    opacity: 0,
    stagger: 0.05, // Animación escalonada
    duration: 1.2,
    ease: "power4.out",
  });

gsap.registerPlugin(ScrollTrigger);
gsap.to(".text p", { backgroundPositionX: "0%", stagger: 1, scrollTrigger: {  trigger: ".text p", scrub: 1, start: "top center", end: "bottom top" } });
gsap.to(".title1", { x: -4000, xPercent: 150, ease: "none", scrollTrigger: {  trigger: ".title1", scrub: true } });
gsap.to(".title2", { x: 100, xPercent: 150, ease: "none", scrollTrigger: {  trigger: ".title2", scrub: true } });
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

document.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
  
      // Animación de salida
      gsap.to(".page", {
        opacity: 0,
        duration: 0.5,
        onComplete: () => {
          window.location = link.href; // Redirige después de la animación
        },
      });
    });
  });

  gsap.from(".page", { opacity: 0, duration: 0.5 });

gsap.to(
    ".projects", {
        scrollTrigger: {
            trigger: ".descriptionProject",
            pin: true,
            scrub: true,
            start: "top 5%",
            markers: true,
        }
    }
);
function setCopyrightDate() {
    year = new Date().getYear();
    if (year < 1900) {
        year += 1900;
    }
    document.getElementById("currentYear").innerHTML = year;
}
setCopyrightDate();
