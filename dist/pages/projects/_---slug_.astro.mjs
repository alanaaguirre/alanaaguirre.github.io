import { a as createAstro, c as createComponent, b as renderComponent, r as renderTemplate, m as maybeRenderHead, d as renderSlot } from '../../chunks/astro/server_nTyYobwF.mjs';
import 'piccolore';
import { $ as $$MainLayout, a as $$Hero, g as getCollection } from '../../chunks/_astro_content_BL6ljTOc.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro$1 = createAstro("https://alanaaguirre.github.io");
const $$ProjectLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ProjectLayout;
  const { title, subTitle, role, duration, stack, tags } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": title }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<a href="/" class="back-link">Selected Work</a> ${renderComponent($$result2, "Hero", $$Hero, { "title": title, "subTitle": subTitle, "role": role, "duration": duration, "stack": stack, "variant": "project" })} <article class="project-body"> ${renderSlot($$result2, $$slots["default"])} </article> ${tags && renderTemplate`<div class="project-tags"> <span class="label">Tags —</span> ${tags?.map((tag, i) => renderTemplate`<span> ${tag}${i < tags.length - 1 ? " \xB7 " : ""} </span>`)} </div>`}` })}`;
}, "/Users/303925m90083600/projects/alanaaguirre.github.io/src/layouts/ProjectLayout.astro", void 0);

const $$Astro = createAstro("https://alanaaguirre.github.io");
const getStaticPaths = (async () => {
  const projects = await getCollection("work");
  return projects.map((project) => ({
    params: { slug: project.slug },
    props: { project }
  }));
});
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { project } = Astro2.props;
  const { Content } = await project.render();
  return renderTemplate`${renderComponent($$result, "ProjectLayout", $$ProjectLayout, { ...project.data, "slug": project.slug }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Content", Content, {})} ` })}`;
}, "/Users/303925m90083600/projects/alanaaguirre.github.io/src/pages/projects/[...slug].astro", void 0);

const $$file = "/Users/303925m90083600/projects/alanaaguirre.github.io/src/pages/projects/[...slug].astro";
const $$url = "/projects/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
