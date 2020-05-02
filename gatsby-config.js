require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `${process.env.GATSBY_SITE_NAME}`,
    description: `${process.env.GATSBY_SITE_DESCRIPTION}`,
    author: `@${process.env.GATSBY_SITE_AUTHOR}`,
    siteUrl: `${process.env.GATSBY_SITE_URL_PROTOCOL}://${process.env.GATSBY_SITE_URL_PATH}`,
    social: {
      twitter: "https://www.twitter.com/SimonHalimonov",
      email: "hello@simonhalimonov.de",
      linkedin: "https://www.linkedin.com/in/simon-halimonov-745431181/",
      github: "https://github.com/simulieren",
    },
  },
  plugins: [
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
        name: `${process.env.GATSBY_SITE_NAME}`,
        short_name: `${process.env.GATSBY_SITE_NAME}`,
        start_url: "/",
        background_color: process.env.GATSBY_PRIMARY_ACCENT_COLOR || "#0047E0",
        theme_color: process.env.GATSBY_PRIMARY_ACCENT_COLOR || "#0047E0",
        display: "minimal-ui",
        icon: "src/images/logo.png",
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
              // maxHeight: 1080,
              quality: 85,
              withWebp: true,
            },
          },
        ],
        hostingWPCOM: false,
        useACF: true,
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
      resolve: "gatsby-source-filesystem",
      options: {
        path: "./src/data/comments",
        name: "comments",
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
    {
      resolve: "gatsby-plugin-offline",
      options: {
        precachePages: [
          "",
          "/posts/*",
          "/post/*",
          "/tag/*",
          "/category/*",
          "/about",
        ],
      },
    },
  ],
}
