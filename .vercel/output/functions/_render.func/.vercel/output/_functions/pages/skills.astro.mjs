import { c as createComponent, r as renderTemplate, a as renderComponent, b as createAstro, m as maybeRenderHead } from '../chunks/astro/server_DQYyQTKA.mjs';
import { c as cn, C as Card, a as CardHeader, b as CardTitle, e as CardContent, $ as $$Layout } from '../chunks/Layout_B8wGcUhB.mjs';
import { B as Badge } from '../chunks/badge_BHRLfCuE.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_B3Pvg_gP.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import * as React from 'react';
import * as TabsPrimitive from '@radix-ui/react-tabs';
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro();
const $$SkillBadge = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$SkillBadge;
  const { skill, image } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Badge", Badge, { "variant": "outline" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-row gap-2 items-center p-1"> ${renderComponent($$result2, "Image", $$Image, { "src": image, "alt": skill, "width": "25", "height": "20" })} <span>${skill}</span> </div> ` })}`;
}, "/Users/sebastiandiaz/Documents/Projects/portafolio/src/components/skills/SkillBadge.astro", void 0);

const Tabs = TabsPrimitive.Root;
const TabsList = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  TabsPrimitive.List,
  {
    ref,
    className: cn(
      "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
      className
    ),
    ...props
  }
));
TabsList.displayName = TabsPrimitive.List.displayName;
const TabsTrigger = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  TabsPrimitive.Trigger,
  {
    ref,
    className: cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
      className
    ),
    ...props
  }
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;
const TabsContent = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  TabsPrimitive.Content,
  {
    ref,
    className: cn(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className
    ),
    ...props
  }
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

function DesignSkillCard({ title, description }) {
  return /* @__PURE__ */ jsxs(Card, { children: [
    /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, { children: title }) }),
    /* @__PURE__ */ jsx(CardContent, { children: description })
  ] });
}

const designSkillsData = [
  {
    value: "DDD",
    title: "Domain Driven Design",
    description: "Domain Driven Design (DDD) is a methodology in software development that primarily focuses on understanding and modeling the business domain. It aligns different conventions to reach a consensus within the team, follow the same practices, and establish a ubiquitous language. At Dily, I have consistently applied this approach, enabling the creation of maintainable and scalable software. Additionally, this allowed the team to stay continuously aligned in development by following the same conventions."
  },
  {
    value: "TDD",
    title: "Test Driven Development",
    description: "Test Driven Development (TDD) is a software development methodology where tests are written before the functionality's code is implemented. This ensures that the code meets the specified requirements from the outset, leading to more robust, error-free, and easy-to-maintain software. I consistently follow this practice, as test coverage is essential to prevent errors when adding new code or extending certain functionalities."
  }
];
function DesignSkills() {
  return /* @__PURE__ */ jsxs(Tabs, { defaultValue: designSkillsData[0].value, className: "max-w-72 lg:max-w-lg", children: [
    /* @__PURE__ */ jsx(TabsList, { className: "flex flex-row w-full", children: designSkillsData.map((item) => /* @__PURE__ */ jsx(TabsTrigger, { value: item.value, className: "w-1/2", children: item.value })) }),
    designSkillsData.map((item) => /* @__PURE__ */ jsx(TabsContent, { value: item.value, children: /* @__PURE__ */ jsx(DesignSkillCard, { title: item.title, description: item.description }) }))
  ] });
}

const $$SoftwareDesign = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col justify-center items-center gap-5 lg:gap-20 lg:flex-row pb-10 lg:pb-0"> ${renderComponent($$result, "Image", $$Image, { "src": "/logo/Skills.png", "alt": "Skills.", "width": "250", "height": "250" })} <div> ${renderComponent($$result, "DesignSkills", DesignSkills, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/sebastiandiaz/Documents/Projects/portafolio/src/components/skills/DesignSkills", "client:component-export": "DesignSkills" })} </div> </div>`;
}, "/Users/sebastiandiaz/Documents/Projects/portafolio/src/components/skills/SoftwareDesign.astro", void 0);

const $$Astro = createAstro();
const $$SkillsComponent = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SkillsComponent;
  const skills = [
    {
      name: "JavaScript",
      image: "/icons/javascript.png"
    },
    {
      name: "TypeScript",
      image: "/icons/typescript.png"
    },
    {
      name: "React",
      image: "/icons/react.png"
    },
    {
      name: "Angular",
      image: "/icons/angular.png"
    },
    {
      name: "Astro",
      image: "/icons/astro.png"
    },
    {
      name: "Node.js",
      image: "/icons/nodejs.png"
    },
    {
      name: "GraphQL",
      image: "/icons/graphql.png"
    },
    {
      name: "MongoDB",
      image: "/icons/mongodb.png"
    },
    {
      name: "MySql",
      image: "/icons/mysql.png"
    },
    {
      name: "AWS",
      image: "/icons/aws.png"
    },
    {
      name: "Git",
      image: "/icons/git.png"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<div id="skills" class="grid justify-center items-center w-full h-full gap-5"> <div class="w-full flex flex-col justify-center items-center gap-5 mt-5 lg:mt-0"> <h1 class="text-3xl font-bold mb-3">Skills</h1> <div class="max-w-80 lg:max-w-2xl"> ${renderComponent($$result, "Card", Card, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "CardContent", CardContent, {}, { "default": ($$result3) => renderTemplate` <div class="flex flex-wrap gap-4 mt-4"> ${skills.map((skill) => renderTemplate`${renderComponent($$result3, "SkillBadge", $$SkillBadge, { "skill": skill.name, "image": skill.image })}`)} </div> ` })} ` })} </div> </div> ${renderComponent($$result, "SoftwareDesign", $$SoftwareDesign, {})} </div>`;
}, "/Users/sebastiandiaz/Documents/Projects/portafolio/src/components/skills/SkillsComponent.astro", void 0);

const $$Skills = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Skills | Sebasti\xE1n D\xEDaz" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="w-full h-full"> ${renderComponent($$result2, "SkillsComponent", $$SkillsComponent, {})} </div> ` })}`;
}, "/Users/sebastiandiaz/Documents/Projects/portafolio/src/pages/skills.astro", void 0);

const $$file = "/Users/sebastiandiaz/Documents/Projects/portafolio/src/pages/skills.astro";
const $$url = "/skills";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Skills,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
