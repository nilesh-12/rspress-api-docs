import { defineConfig } from "rspress/config";

export default defineConfig({
  root: "docs",
  route: {
    exclude: ["src/components/**/*"],
  },
  title: "PDF Service API Docs",
  description: "Documentation for the PDF Service API",
  base: "/docs",
  themeConfig: {
    lastUpdated: true,
    enableContentAnimation: true,
    enableScrollToTop: true,
    // nav: [
    //   { text: "Home", link: "/" },
    //   { text: "Guides", link: "/guide/" },
    // ],
    //
    // sidebar:{
    //   "/":{
    //
    //   }
    // }
  },
});
