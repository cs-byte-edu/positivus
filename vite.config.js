import { defineConfig } from "vite";
import path from "path";
import glob from "fast-glob";
import { fileURLToPath } from "url";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import htmlMinify from "vite-plugin-html-minify";
// Get the directory name using import.meta.url
const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [
    ViteImageOptimizer({
      svg: {
        plugins: [
          "removeDoctype",
          "removeXMLProcInst",
          "minifyStyles",
          "sortAttrs",
          "sortDefsChildren",
        ],
      },
      png: { quality: 70 },
      jpeg: { quality: 70 },
      jpg: { quality: 70 },
    }),
    htmlMinify(),
  ],
  build: {
    rollupOptions: {
      input: Object.fromEntries(
        glob
          .sync(["./*.html", "./pages/**/*.html"])
          .map((file) => [
            path.relative(
              ".",
              file.slice(0, file.length - path.extname(file).length)
            ),
            fileURLToPath(new URL(file, import.meta.url)),
          ])
      ),
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name) {
            const nameParts = assetInfo.name.split(".");
            if (nameParts.length > 1) {
              const extType = nameParts.pop().toLowerCase();
              if (
                ["png", "jpeg", "jpg", "svg", "gif", "webp"].includes(extType)
              ) {
                return `img/[name]-[hash][extname]`;
              }
              if (extType === "css") {
                return `css/[name]-[hash][extname]`;
              }
            }
          }
          return `assets/[name]-[hash][extname]`;
        },
        chunkFileNames: "js/[name]-[hash].js",
        entryFileNames: "js/[name]-[hash].js",
      },
    },
  },
  base: "/positivus/",
});
