// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "SadScript",
      description:
        "Lenguaje de programación temático emo con sintaxis en español",
      customCss: ["./src/styles/starlight.css"],
      head: [
        {
          tag: "script",
          attrs: { type: "module" },
          children:
            "document.documentElement.dataset.theme='dark';try{localStorage.setItem('starlight-theme','dark')}catch{}",
        },
      ],
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/Aserturik/sadScript",
        },
      ],
      sidebar: [
        {
          label: "Guía",
          items: [{ label: "Introducción", slug: "guides/sadscript" }],
        },
        {
          label: "Referencia",
          items: [{ label: "Glosario de Keywords", slug: "reference/example" }],
        },
      ],
    }),
  ],
});
