let revealObserver: IntersectionObserver | null = null;

function initScrollReveal() {
  const items = document.querySelectorAll(".work-item");

  if (revealObserver) {
    revealObserver.disconnect();
  }

  revealObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.3,
    rootMargin: "0px 0px -20% 0px"
  });

  items.forEach(item => {
    item.classList.remove("visible"); // reset por si vienes de atrás
    revealObserver?.observe(item);
  });
}

function initSectionReveal() {
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const items = entry.target.querySelectorAll(".reveal");

        items.forEach((item, index) => {
          setTimeout(() => {
            item.classList.add("visible");
          }, index * 100);
        });

        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  document.querySelectorAll("[data-animate]").forEach((section) => {
    observer.observe(section);
  });
}

function initEmail() {
  const user = "alan.aguirrej";
  const domain = "proton.me";
  const email = `${user}@${domain}`;

  const link = document.querySelector<HTMLAnchorElement>(".email-link");

  if (link) {
    link.href = `mailto:${email}`;
    link.textContent = email;
  }
}

function init() {
  initScrollReveal();
  initSectionReveal();
  initEmail();
}

document.addEventListener("DOMContentLoaded", init);
document.addEventListener("astro:page-load", init);