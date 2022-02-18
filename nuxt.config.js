const contentful = require("contentful");
export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  env: {
    CTF_SPACE_ID: process.env.CTF_SPACE_ID,
    CTF_CDA_ACCESS_TOKEN: process.env.CTF_CDA_ACCESS_TOKEN
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Too Busy Cooking",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.png" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  // components: true,
  components: [
    {
      path: "~/components",
    },
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ["nuxt-graphql-request"],

  graphql: {
    clients: {
      default: {
        endpoint:
          "https://graphql.contentful.com/content/v1/spaces/" +
          process.env.CTF_SPACE_ID +
          // "/environments/recipe-simplification-01" +
          "?access_token=" +
          process.env.CTF_CDA_ACCESS_TOKEN,
      },
    },
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    "bootstrap-vue/nuxt",
    // https://sitemap.nuxtjs.org
    '@nuxtjs/sitemap'
  ],

  sitemap: {
    hostname: 'https://toobusy.cooking',
    routes: async () => {
      const client = contentful.createClient({
        space: process.env.CTF_SPACE_ID,
        accessToken: process.env.CTF_CDA_ACCESS_TOKEN,
      });
      let recipes = [];
      await client
        .getEntries({
          content_type: "recipe",
        })
        .then(function (entries) {
          entries.items.forEach(function (recipe) {
            recipes.push(`/recipes/${recipe.fields.slug}`);
          });
        });
      return recipes;
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
