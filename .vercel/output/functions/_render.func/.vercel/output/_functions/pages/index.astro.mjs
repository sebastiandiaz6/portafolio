import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as renderComponent } from '../chunks/astro/server_DQYyQTKA.mjs';
import { B as Button, $ as $$Layout } from '../chunks/Layout_B8wGcUhB.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_B3Pvg_gP.mjs';
import { ChevronRight } from 'lucide-react';
export { renderers } from '../renderers.mjs';

const $$Slogan = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col justify-center items-center"> <div class="flex flex-col max-w-96"> <h1 class="scroll-m-20 text-5xl font-extrabold tracking-tight lg:text-5xl">
Sebastían Díaz
</h1> <h4 class="scroll-m-20 text-2xl tracking-tight">
Software Engineer
</h4> <p class="text-muted-foreground leading-7 [&:not(:first-child)]:mt-6">
Developing solutions driven by innovation and dedicated to delivering excellence, aiming to exceed expectations and inspire through these solutions.
</p> <div class="mt-5"> <a href="/projects"> ${renderComponent($$result, "Button", Button, { "variant": "outline" }, { "default": ($$result2) => renderTemplate`
See my projects
${renderComponent($$result2, "ChevronRight", ChevronRight, { "className": "h-4 w-4 ml-2" })} ` })} </a> </div> </div> <div class="flex gap-4 mt-5 lg:mt-20"> <a href="https://www.linkedin.com/in/sebastian-diaz-carrasco-b57495209/" target="_blank"> ${renderComponent($$result, "Image", $$Image, { "src": "/icons/linkedin-icon.png", "alt": "Linkedin.", "width": "44", "height": "44" })} </a> <a href="https://www.instagram.com/seba_dc6" target="_blank"> ${renderComponent($$result, "Image", $$Image, { "src": "/icons/instagram-icon.png", "alt": "Instagram.", "width": "44", "height": "44" })} </a> <a href="https://github.com/sebastiandiaz6" target="_blank"> ${renderComponent($$result, "Image", $$Image, { "src": "/icons/github-icon.png", "alt": "Github.", "width": "44", "height": "44" })} </a> </div> </div>`;
}, "/Users/sebastiandiaz/Documents/Projects/portafolio/src/components/about/Slogan.astro", void 0);

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div id="about" class="grid grid-cols-1 w-full h-full lg:grid-cols-2"> <div class="flex justify-center items-center lg:hidden"> ${renderComponent($$result, "Image", $$Image, { "src": "/logo/Logo.png", "alt": "Logo.", "width": "250", "height": "250" })} </div> ${renderComponent($$result, "Slogan", $$Slogan, {})} <div class="hidden lg:flex lg:justify-center lg:items-center"> ${renderComponent($$result, "Image", $$Image, { "src": "/logo/Logo.png", "alt": "Logo.", "width": "500", "height": "500" })} </div> </div>`;
}, "/Users/sebastiandiaz/Documents/Projects/portafolio/src/components/about/About.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Portafolio | Sebasti\xE1n D\xEDaz" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="w-full h-full"> ${renderComponent($$result2, "About", $$About, {})} </div> ` })}`;
}, "/Users/sebastiandiaz/Documents/Projects/portafolio/src/pages/index.astro", void 0);

const $$file = "/Users/sebastiandiaz/Documents/Projects/portafolio/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
