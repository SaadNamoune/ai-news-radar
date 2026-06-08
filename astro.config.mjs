import path, { dirname } from "path";
import { fileURLToPath } from "url";
import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import { defineConfig, passthroughImageService } from "astro/config";
import vercel from "@astrojs/vercel/serverless";
import markdoc from "@astrojs/markdoc";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
import remarkCodeTitles from "remark-code-titles";
import rehypeExternalLinks from "rehype-external-links";

export default defineConfig(
  /** @type {import('astro').AstroUserConfig} */ {
    output: "hybrid",
    site: "https://ai-news-radar.vercel.app",
    image: {
      // Disable image processing — no sharp module needed
      service: passthroughImageService(),
    },
    markdown: {
      syntaxHighlight: "shiki",
      shikiConfig: {
        theme: "dracula",
        wrap: true,
      },
      remarkPlugins: [remarkCodeTitles],
      rehypePlugins: [
        [
          rehypeExternalLinks,
          {
            target: "_blank",
            ref: ["nofollow, noopener, noreferrer"],
          },
        ],
      ],
    },
    integrations: [
      mdx(),
      markdoc(),
      svelte(),
      tailwind({
        applyBaseStyles: false,
      }),
      sitemap(),
    ],
    vite: {
      plugins: [],
      resolve: {
        alias: {
          $: path.resolve(__dirname, "./src"),
        },
      },
      optimizeDeps: {
        allowNodeBuiltins: true,
      },
    },
    adapter: vercel({
      webAnalytics: { enabled: true },
    }),
  }
);
