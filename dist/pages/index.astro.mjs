import { c as createComponent, m as maybeRenderHead, e as addAttribute, r as renderTemplate, b as renderComponent } from '../chunks/astro/server_nTyYobwF.mjs';
import 'piccolore';
import { g as getCollection, b as getEntry, $ as $$MainLayout, a as $$Hero } from '../chunks/_astro_content_BL6ljTOc.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$WorkList = createComponent(async ($$result, $$props, $$slots) => {
  const projects = (await getCollection("work")).sort(
    (a, b) => (b.data.pubDate?.getTime() || 0) - (a.data.pubDate?.getTime() || 0)
  );
  return renderTemplate`${maybeRenderHead()}<section class="work-list data-animate"> <h2 class="section-title">Selected Work</h2> <ul> ${projects.map((project) => renderTemplate`<li class="work-item reveal"> <a${addAttribute(`/projects/${project.slug}`, "href")}> <span class="work-title"> ${project.data.title} </span> <span class="work-year"> ${new Date(project.data.pubDate).getFullYear()} </span> </a> </li>`)} </ul> </section>`;
}, "/Users/303925m90083600/projects/alanaaguirre.github.io/src/components/WorkList.astro", void 0);

const $$AboutMe = createComponent(async ($$result, $$props, $$slots) => {
  const about = await getEntry("pages", "about");
  if (!about) {
    throw new Error("About content not found");
  }
  const { Content } = await about.render();
  return renderTemplate`${maybeRenderHead()}<section class="about inner"> ${renderComponent($$result, "Content", Content, {})} </section>`;
}, "/Users/303925m90083600/projects/alanaaguirre.github.io/src/components/AboutMe.astro", void 0);

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="contact inner"> <div class="contact-wrapper"> <h2 class="contact-title">
Let’s build something intentional.
</h2> <p class="contact-text">
Open to product design roles, freelance collaborations,
      and system-driven digital projects.
</p> <div class="contact-actions"> <a href="#" id="email-link" class="contact-link">
Email
</a> <a href="https://www.linkedin.com/in/alanaguirre/" target="_blank" class="contact-link">
LinkedIn
</a> </div> </div> </section>`;
}, "/Users/303925m90083600/projects/alanaaguirre.github.io/src/components/Contact.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Alan Aguirre | Product Designer", "description": "Product Designer focused on systems, structured digital processes and technical execution." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, { "title": "Alan Aguirre", "subTitle": "Product Designer", "variant": "home", "transitionName": "main-title" })} ${renderComponent($$result2, "About", $$AboutMe, {})} ${renderComponent($$result2, "WorkList", $$WorkList, {})} ${renderComponent($$result2, "Contact", $$Contact, {})} ` })}`;
}, "/Users/303925m90083600/projects/alanaaguirre.github.io/src/pages/index.astro", void 0);

const $$file = "/Users/303925m90083600/projects/alanaaguirre.github.io/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
