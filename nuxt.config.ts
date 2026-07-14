// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  ssr: true,
  modules: ["@nuxt/ui", "@nuxtjs/seo", "@nuxt/image-edge", "@nuxtjs/i18n"],
  css: ["~/assets/css/variables.css", "~/assets/css/main.css"],
  icon: {
    provider: "iconify",
    serverBundle: false,
    clientBundle: { scan: true },
  },
  site: {
    url: "https://balisman.github.io",
    name: "東方EXスコボ",
    defaultLocale: "ja",
    trailingSlash: false,
    indexable: true,
  },
  robots: {
    robotsTxt: true,
    metaTag: true,
  },
  image: {
    // nuxt/image
    dir: "public",
    presets: {
      og: { modifiers: { fit: "cover", width: 1395, height: 630 } },
    },
  },
  i18n: {
    strategy: "prefix_except_default",
    defaultLocale: "ja",
    baseUrl: "https://balisman.github.io",
    locales: [
      {
        code: "ja",
        name: "日本語",
        file: "ja.yml",
        iso: "ja-JP",
        language: "ja-JP",
      },
      {
        code: "en",
        name: "English",
        file: "en.yml",
        iso: "en-US",
        language: "en-US",
      },
    ],
    lazy: true, // ← lazy を true にすると file が有効
    langDir: "locales/", // ← これが無いとファイルを読めません
    compilation: {
      strictMessage: false, // ← HTML/擬似タグを許可
      escapeHtml: true, // ← 念のためエスケープを有効化（推奨）
    },
    bundle: {
      fullInstall: true,
      optimizeTranslationDirective: false,
    },
  },
  app: {
    baseURL: process.env.NUXT_PUBLIC_DEPLOY_ENV === "github_pages" ? "/" : "/",
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
