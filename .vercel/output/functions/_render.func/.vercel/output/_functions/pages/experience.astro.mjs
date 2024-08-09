import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as renderComponent } from '../chunks/astro/server_DQYyQTKA.mjs';
import { c as cn, B as Button, C as Card, a as CardHeader, b as CardTitle, d as CardDescription, e as CardContent, f as CardFooter, $ as $$Layout } from '../chunks/Layout_B8wGcUhB.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import * as React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { B as Badge } from '../chunks/badge_BHRLfCuE.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_B3Pvg_gP.mjs';
export { renderers } from '../renderers.mjs';

const CarouselContext = React.createContext(null);
function useCarousel() {
  const context = React.useContext(CarouselContext);
  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />");
  }
  return context;
}
const Carousel = React.forwardRef(
  ({
    orientation = "horizontal",
    opts,
    setApi,
    plugins,
    className,
    children,
    ...props
  }, ref) => {
    const [carouselRef, api] = useEmblaCarousel(
      {
        ...opts,
        axis: orientation === "horizontal" ? "x" : "y"
      },
      plugins
    );
    const [canScrollPrev, setCanScrollPrev] = React.useState(false);
    const [canScrollNext, setCanScrollNext] = React.useState(false);
    const onSelect = React.useCallback((api2) => {
      if (!api2) {
        return;
      }
      setCanScrollPrev(api2.canScrollPrev());
      setCanScrollNext(api2.canScrollNext());
    }, []);
    const scrollPrev = React.useCallback(() => {
      api?.scrollPrev();
    }, [api]);
    const scrollNext = React.useCallback(() => {
      api?.scrollNext();
    }, [api]);
    const handleKeyDown = React.useCallback(
      (event) => {
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          scrollPrev();
        } else if (event.key === "ArrowRight") {
          event.preventDefault();
          scrollNext();
        }
      },
      [scrollPrev, scrollNext]
    );
    React.useEffect(() => {
      if (!api || !setApi) {
        return;
      }
      setApi(api);
    }, [api, setApi]);
    React.useEffect(() => {
      if (!api) {
        return;
      }
      onSelect(api);
      api.on("reInit", onSelect);
      api.on("select", onSelect);
      return () => {
        api?.off("select", onSelect);
      };
    }, [api, onSelect]);
    return /* @__PURE__ */ jsx(
      CarouselContext.Provider,
      {
        value: {
          carouselRef,
          api,
          opts,
          orientation: orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
          scrollPrev,
          scrollNext,
          canScrollPrev,
          canScrollNext
        },
        children: /* @__PURE__ */ jsx(
          "div",
          {
            ref,
            onKeyDownCapture: handleKeyDown,
            className: cn("relative", className),
            role: "region",
            "aria-roledescription": "carousel",
            ...props,
            children
          }
        )
      }
    );
  }
);
Carousel.displayName = "Carousel";
const CarouselContent = React.forwardRef(({ className, ...props }, ref) => {
  const { carouselRef, orientation } = useCarousel();
  return /* @__PURE__ */ jsx("div", { ref: carouselRef, className: "overflow-hidden", children: /* @__PURE__ */ jsx(
    "div",
    {
      ref,
      className: cn(
        "flex",
        orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
        className
      ),
      ...props
    }
  ) });
});
CarouselContent.displayName = "CarouselContent";
const CarouselItem = React.forwardRef(({ className, ...props }, ref) => {
  const { orientation } = useCarousel();
  return /* @__PURE__ */ jsx(
    "div",
    {
      ref,
      role: "group",
      "aria-roledescription": "slide",
      className: cn(
        "min-w-0 shrink-0 grow-0 basis-full",
        orientation === "horizontal" ? "pl-4" : "pt-4",
        className
      ),
      ...props
    }
  );
});
CarouselItem.displayName = "CarouselItem";
const CarouselPrevious = React.forwardRef(({ className, variant = "outline", size = "icon", ...props }, ref) => {
  const { orientation, scrollPrev, canScrollPrev } = useCarousel();
  return /* @__PURE__ */ jsxs(
    Button,
    {
      ref,
      variant,
      size,
      className: cn(
        "absolute  h-8 w-8 rounded-full",
        orientation === "horizontal" ? "-left-12 top-1/2 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
        className
      ),
      disabled: !canScrollPrev,
      onClick: scrollPrev,
      ...props,
      children: [
        /* @__PURE__ */ jsx(ArrowLeft, { className: "h-4 w-4" }),
        /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Previous slide" })
      ]
    }
  );
});
CarouselPrevious.displayName = "CarouselPrevious";
const CarouselNext = React.forwardRef(({ className, variant = "outline", size = "icon", ...props }, ref) => {
  const { orientation, scrollNext, canScrollNext } = useCarousel();
  return /* @__PURE__ */ jsxs(
    Button,
    {
      ref,
      variant,
      size,
      className: cn(
        "absolute h-8 w-8 rounded-full",
        orientation === "horizontal" ? "-right-12 top-1/2 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
        className
      ),
      disabled: !canScrollNext,
      onClick: scrollNext,
      ...props,
      children: [
        /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" }),
        /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Next slide" })
      ]
    }
  );
});
CarouselNext.displayName = "CarouselNext";

function ExperienceCard({ title, description, footer, date, url }) {
  return /* @__PURE__ */ jsx("a", { href: url, target: "_blank", children: /* @__PURE__ */ jsxs(Card, { children: [
    /* @__PURE__ */ jsxs(CardHeader, { children: [
      /* @__PURE__ */ jsx(CardTitle, { children: title }),
      /* @__PURE__ */ jsx(CardDescription, { children: date })
    ] }),
    /* @__PURE__ */ jsx(CardContent, { children: description }),
    /* @__PURE__ */ jsx(CardFooter, { className: "flex flex-wrap", children: footer.map((item) => /* @__PURE__ */ jsx(Badge, { className: "mx-1 my-1", children: item })) })
  ] }) });
}

const experienceData = [
  {
    title: "Falabella Retail: Frontend Developer Intern",
    description: "I participated in the creation of a Design System with the goal of aligning all UI components across the company's various projects. I collaborated closely with the UX team to develop reusable components, thereby optimizing the design efforts for new applications.",
    footer: ["React", "TypeScript", "Storybook"],
    date: "July 2022 - Nov 2022",
    url: "https://www.falabella.com/falabella-cl/page/falabella-retail"
  },
  {
    title: "Dily: Fullstack Developer",
    description: "I have proposed technological solutions for company issues and have been an active member in suggesting best practices for software. I also participated in developing a new, more scalable and maintainable version of the software, completely eliminating the legacy version.",
    footer: ["Angular", "Express", "MySQL", "TypesScript", "AWS"],
    date: "Jan 2023 - Present",
    url: "https://dily.cl/"
  }
];
function ExperienceCarousel() {
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col justify-center items-center mt-5 lg:mt-0", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-3xl font-bold mb-10", children: "Experience" }),
    /* @__PURE__ */ jsxs(Carousel, { className: "w-full max-w-72 sm:max-w-sm", children: [
      /* @__PURE__ */ jsx(CarouselContent, { children: experienceData.map((experience, index) => /* @__PURE__ */ jsx(CarouselItem, { children: /* @__PURE__ */ jsx(
        ExperienceCard,
        {
          title: experience.title,
          description: experience.description,
          footer: experience.footer,
          date: experience.date,
          url: experience.url
        }
      ) }, index)) }),
      /* @__PURE__ */ jsx(CarouselPrevious, {}),
      /* @__PURE__ */ jsx(CarouselNext, {})
    ] })
  ] });
}

const $$Presentation = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col justify-center items-center mt-10 lg:mt-0 pb-10 lg:pb-0"> ${renderComponent($$result, "Image", $$Image, { "src": "/logo/Experience.png", "alt": "Experience.", "width": "200", "height": "200" })} <div class="max-w-sm lg:max-w-lg"> <p class="leading-7 mt-3 lg:mt-0 text-sm">
I have been involved in the world of software development since 2020
            when I started with small projects in React.
            From that day until today, I have created multiple software,
            including mobile apps, web apps, and participation in other projects,
            and my devotion to development has only grown stronger.
            In 2022, I received my degree as a <b>Computer Engineer</b>.
</p> <p class="leading-7 [&:not(:first-child)]:mt-6 text-sm">
Currently, I am working at <b>Dily</b> as a <b>FullStack Developer</b>,
            participating in the entire software development cycle,
            from requirements gathering to development.
            At this moment, what excites me the most is learning more about
<b>Clean Architectures</b> and best programming practices,
            as they are key to achieving more scalable and maintainable development.
</p> </div> </div>`;
}, "/Users/sebastiandiaz/Documents/Projects/portafolio/src/components/experience/Presentation.astro", void 0);

const $$ExperienceComponent = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div id="experience" class="grid justify-center items-center w-full h-full lg:grid-cols-2"> ${renderComponent($$result, "ExperienceCarousel", ExperienceCarousel, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/sebastiandiaz/Documents/Projects/portafolio/src/components/experience/ExperienceCarousel", "client:component-export": "ExperienceCarousel" })} ${renderComponent($$result, "Presentation", $$Presentation, {})} </div>`;
}, "/Users/sebastiandiaz/Documents/Projects/portafolio/src/components/experience/ExperienceComponent.astro", void 0);

const $$Experience = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Experience | Sebasti\xE1n D\xEDaz" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="w-full h-full"> ${renderComponent($$result2, "ExperienceComponent", $$ExperienceComponent, {})} </div> ` })}`;
}, "/Users/sebastiandiaz/Documents/Projects/portafolio/src/pages/experience.astro", void 0);

const $$file = "/Users/sebastiandiaz/Documents/Projects/portafolio/src/pages/experience.astro";
const $$url = "/experience";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Experience,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
