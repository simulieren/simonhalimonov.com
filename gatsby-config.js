// Source: https://gist.github.com/JohnAlbin/2fc05966624dffb20f4b06b4305280f9
// We register the TypeScript evaluator in gatsby-config so we don't need to do
// it in any other .js file. It automatically reads TypeScript config from
// tsconfig.json.
require("ts-node").register()

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Simon Halimonov`,
    description: `Portfolio and Blog about UI/UX Design and Development`,
    author: `@SimonHalimonov`,
    siteUrl: `https://simonhalimonov.com`,
    social: {
      twitter: "https://www.twitter.com/SimonHalimonov",
      email: "hello@simonhalimonov.de",
      linkedin: "https://www.linkedin.com/in/simon-halimonov-745431181/",
      github: "https://github.com/simulieren",
    },
    seo: {
      // Use a landscape image at 1200 x 630 (1.9:1)
      OpenGraphImage: "static/og-image-1200-630.png",
      // Use 2:1 aspect ratio (eg: 1200 x 600 pixels)
      TwitterCardImage: "static/twitter-image-1200-600.png",
      logoImage: "static/logo.png",
    },
    languages: {
      // Define the default language
      default: {
        name: "English",
        locale: "en_US",
        pathPrefix: "",
      },
      // Define more languages here ...
      german: {
        name: "Deutsch",
        locale: "de_DE",
        pathPrefix: "/de",
      },
    },
  },
  plugins: [
    "gatsby-plugin-emotion",
    "gatsby-plugin-theme-ui",
    "gatsby-plugin-typescript",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "src/images",
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: `Simon Halimonov`,
        short_name: `Simon Halimonov`,
        start_url: "/",
        background_color: "#000000",
        theme_color: "#000000",
        display: "minimal-ui",
        icon: "static/logo.png",
      },
    },
    "gatsby-plugin-catch-links",
    {
      resolve: "gatsby-source-wordpress",
      options: {
        baseUrl: `${process.env.GATSBY_WORDPRESS_URL_PATH}`,
        protocol: `${process.env.GATSBY_WORDPRESS_URL_PROTOCOL}`,
        plugins: [
          {
            resolve: `gatsby-wordpress-inline-images`,
            options: {
              baseUrl: `${process.env.GATSBY_WORDPRESS_URL_PATH}`,
              protocol: `${process.env.GATSBY_WORDPRESS_URL_PROTOCOL}`,
              maxWidth: 1920,
              quality: 85,
              withWebp: true,
            },
          },
        ],
        hostingWPCOM: false,
        useACF: false,
        verboseOutput: false,
        perPage: 100,
        // This doesn't work well with gatsby-wordpress-inline-images
        // searchAndReplaceContentUrls: {
        //   sourceUrl: `${process.env.GATSBY_WORDPRESS_URL_PROTOCOL}://${process.env.GATSBY_WORDPRESS_URL_PATH}`,
        //   replacementUrl: `${process.env.GATSBY_SITE_URL_PROTOCOL}://${process.env.GATSBY_SITE_URL_PATH}`,
        // },
        concurrentRequests: 10,
        includedRoutes: [
          "**/categories",
          "**/posts",
          "**/pages",
          "**/media",
          "**/tags",
          "**/taxonomies",
          "**/users",
          "**/menus",
        ],
        excludedRoutes: [],
        normalizer: function ({ entities }) {
          return entities
        },
      },
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: process.env.GATSBY_GOOGLE_ANALYTICS,
        head: false,
        anonymize: true,
        respectDNT: true,
        exclude: ["/preview/**", "/do-not-track/me/too/"],
        pageTransitionDelay: 0,
      },
    },
    {
      resolve: "gatsby-source-instagram",
      options: {
        username: process.env.GATSBY_INSTAGRAM_SOURCE,
      },
    },
    "gatsby-plugin-robots-txt",
    "gatsby-plugin-advanced-sitemap",
    // Disable offline support for now
    // Offline support is not necessary for a small site or blog
    // It can cause bugs with other plugins and scripts
    // {
    //   resolve: "gatsby-plugin-offline",
    //   // Disabled for now
    //   // options: {
    //   //   precachePages: [
    //   //     "",
    //   //     "/posts/*",
    //   //     "/post/*",
    //   //     "/tag/*",
    //   //     "/category/*",
    //   //     "/about",
    //   //     "/work/*",
    //   //     "/work",
    //   //   ],
    //   // },
    // },
  ],
}
