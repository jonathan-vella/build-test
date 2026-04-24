import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import rehypeMermaid from "rehype-mermaid-lite";

export default defineConfig({
  site: "https://jonathan-vella.github.io",
  base: "/dc2fabric",
  trailingSlash: "always",
  markdown: {
    rehypePlugins: [rehypeMermaid],
  },
  integrations: [
    starlight({
      title: "dc2fabric",
      tagline: "The Modernization Journey from Datacenter to Microsoft Fabric",
      customCss: ["./src/styles/custom.css"],
      head: [
        {
          tag: "script",
          attrs: {
            type: "module",
          },
          content: `import mermaid from "https://cdn.jsdelivr.net/npm/mermaid@11/dist/mermaid.esm.min.mjs"; mermaid.initialize({ startOnLoad: true, theme: "default" });`,
        },
      ],
      sidebar: [
        {
          label: "Strategy",
          autogenerate: { directory: "strategy" },
        },
        {
          label: "Assessment",
          autogenerate: { directory: "assessment" },
        },
        {
          label: "Horizons",
          autogenerate: { directory: "horizons" },
        },
        {
          label: "Execution",
          autogenerate: { directory: "execution" },
        },
        {
          label: "Outcomes",
          autogenerate: { directory: "outcomes" },
        },
        {
          label: "Journey Map",
          autogenerate: { directory: "journey-map" },
        },
        {
          label: "Industries",
          autogenerate: { directory: "industries" },
        },
      ],
      editLink: {
        baseUrl: "https://github.com/jonathan-vella/dc2fabric/edit/main/site/",
      },
    }),
  ],
});
