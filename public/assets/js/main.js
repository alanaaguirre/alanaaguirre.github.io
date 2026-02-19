let revealObserver = null;

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
    item.classList.remove("visible");
    revealObserver.observe(item);
  });
}

function initEmail() {
  const link = document.getElementById("email-link");
  if (!link) return;

  const user = ["alan", ".", "aguirrej"].join("");
  const domain = ["proton", ".", "me"].join("");
  const email = `${user}@${domain}`;

  link.href = `mailto:${email}`;
  link.textContent = email;
}

document.addEventListener("astro:page-load", initEmail);
document.addEventListener("DOMContentLoaded", initEmail);

function init() {
  initScrollReveal();
  initEmail();
}

document.addEventListener("DOMContentLoaded", init);
document.addEventListener("astro:page-load", init);