const { resolve } = require("path");
const { defineConfig } = require("vite");

module.exports = defineConfig({
  base: "/learn-data-visualization/",
  build: {
    outDir: "docs",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        movies: resolve(__dirname, "examples/movies/index.html"),
        cars: resolve(__dirname, "examples/cars/index.html"),
        gapminder: resolve(__dirname, "examples/gapminder/index.html"),
        videogamesales: resolve(
          __dirname,
          "examples/videogamesales/index.html"
        ),
      },
    },
  },
});
