  function initReveal() {

    const sections = document.querySelectorAll("[data-animate]");

    sections.forEach((section) => {

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {

            const items = entry.target.querySelectorAll(".reveal");

            items.forEach((item, index) => {
              setTimeout(() => {
                item.classList.add("visible");
              }, index * 100);
            });

            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.2 });

      observer.observe(section);
    });
  }

  // Primera carga normal
  document.addEventListener("DOMContentLoaded", initReveal);

  // Navegación con Astro
  document.addEventListener("astro:page-load", initReveal);