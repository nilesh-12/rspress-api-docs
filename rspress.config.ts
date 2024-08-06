import { defineConfig } from "rspress/config";
import path from "path";

export default defineConfig({
  root: "docs",
  globalStyles: path.join(__dirname, 'styles/index.css'),
  route: {
    exclude: ["src/components/**/*"],
  },
  title: "PDF Service API Docs",
  description: "Documentation for the PDF Service API",
  base: "/docs",
  globalUIComponents: [],
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
