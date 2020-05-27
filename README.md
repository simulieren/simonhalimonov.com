# simonhalimonov.com

This is a personal site and blog. Built on GatsbyJS, TS and a headless WordPress CMS.

This project is open source to educate and simplify the development process of future sites that use GatsbyJS and WordPress. The goal is to fully support these key features:

- 🔥 Fast load speeds
- 📐 Minimal and precise layout for easy customizations
- 🌐 Multilingual support via i18n _(Work in progress)_
- 📝 Editor-friendly setup with accurate previews
- 🤖 SEO optimised site
- ✅ Accessibility optimised site
- 🔃 Programmatic page creation
- ⭐️ Gutenberg support _(Work in progress)_

## Setup

Configure all environment variables and have your WordPress installation running ().

1. Install all dependencies
   `npm i` or `yarn`
1. Add environment variables
1. Run development environment
   `npm start` or `yarn start`

### Using the environment variables

`GATSBY_WORDPRESS_URL_PATH` the domain or IP to the WordPress installation

`GATSBY_WORDPRESS_URL_PROTOCOL` the HTTP protocol used

`GATSBY_INSTAGRAM_SOURCE` the name of the instagram account

`GATSBY_TWITTER_SOURCE` the name of the twitter account

`GATSBY_GOOGLE_ANALYTICS` the Google Analytics tracking id

## WordPress Setup

You can read about [how to setup a free WordPress site on GCP in my post](https://simonhalimonov.com/post/how-to-set-up-a-free-wordpress-cms-on-google-cloud-platform).

- Create a single post and page
  - Post
    - Add a tag _(required)_
    - Add featured image _(required)_
  - Page
    - Add featured image _(required)_
- Settings
  - Use permalinks with post name _(required)_
  - Set a page as the front page _(required)_
  - Create a menu _(required)_
    - The first menu item will be used for the logo
    - All other menu items will be generated dynamically
- Install the theme _(required)_
  - It will do following things:
    - It modifies REST API
    - It disables the WP frontend
    - It reroutes all pages to the REST API
- Install plugins and activate them _(required)_
  - [Polylang](https://wordpress.org/plugins/polylang/) _(required)_
    - Configure a main language that reflect the `gatsby-config.js`
    - This site uses `en_US` as the default language
    - The secondary language is `de_DE`
    - Configure a menu for both languages
  - [Polylang REST API](https://github.com/maru3l/wp-rest-polylang) _(required)_
  - [WP REST API MENU](https://wordpress.org/plugins/wp-api-menus/) _(required)_
  - [WP Webhooks](https://wordpress.org/plugins/wp-webhooks/) _(optional)_
    - Trigger a webhook on Vercel or Netlify for a redeploy
  - ACF _(optional)_

### Setting up a cheap WordPress CMS

With a cloud provider, you can easily host a WordPress CMS installation for free with this setup. You can read how to setup a [WordPress CMS on GCP here.](https://simonhalimonov.com/post/how-to-set-up-a-free-wordpress-cms-on-google-cloud-platform)

I recommend AWS or GCP, as they have very good free tiers.
The lowest virtual machine instance should be enough.
They also have 1-click install setups.

---

## Features

#### i18n support

This project supports Polylang via REST API. _Note: Full i18n support is a work in progress_

#### Static, programatic and dynamic content

**Static** content is written directly in the codebase. Add pages in `/src/pages/` to create new static content.

**Programatic** content is created during build time. This uses GatsbyJS source plugins to fetch data and translating that data into static HTML files.

**Dynamic** content is created on the client side. In GatsbyJS you can use a custom router to [create dynamic pages](https://www.gatsbyjs.org/docs/client-only-routes-and-user-authentication/). The preview feature uses this to show a preview of the revision of post/page.

#### HTML Parsing to custom React components

Content from WordPress is being parsed, converted to JSX and then rendered to HTML. This enables full control in the frontend to create rich interactive experiences with all features of React. Gutenberg Blocks translate into custom React components in the `HMTL.tsx` file.

#### Posts, Tags, Categories and Pages

Use posts, tags, categories and pages in WordPress to build your site.

#### Full TS support in Gatsby

This project aims to have a high type safety to reduce possible issues. Currently it has 92.43% type coverage. You can check the type coverage by running `npm types` or `yarn types`.
This was possible due to this [GitHub Gist](https://gist.github.com/JohnAlbin/2fc05966624dffb20f4b06b4305280f9) and the credits mentioned in there.

#### Simple WordPress Template support

Use the default template attribute from wordpress to choose the file that will be used for the page template.

Page templates can be found in `src/templates/...` and the mapping happen in `src/gatsby/node/index.ts`.

#### Preview pages in the Gatsby frontend

Previews are being rendered in the Gatsby frontend by fetching the data from a modified WordPress REST API.
The modified REST API exposes the latest revisions of the post.
This means that you don't have to deal with `nonce` and other authentication strategies.
By default all revisions are only available with an authenticated REST API.
I did this, because it was a pain in the ass to get it properly working.

#### Custom WordPress Theme for a headless installation

This project uses a custom theme to deactivate most of the regular frontend of WordPress.

---

## Folder structure

```bash
./src
├── components # React components folder
│   ├── AnimateWords
│   │   └── AnimateWords.tsx
│   ├── Footer
│   │   └── index.tsx
│   ├── GridHelper
│   │   └── GridHelper.tsx
│   ├── HTML
│   │   └── HTML.tsx
│   ├── Header
│   │   └── index.tsx
│   ├── Image
│   │   └── Image.tsx
│   ├── Instagram
│   │   └── index.tsx
│   ├── InviewMotion
│   │   └── InviewMotion.tsx
│   ├── Layout # Common layout components
│   │   ├── Section.tsx
│   │   └── index.tsx
│   ├── Logo
│   │   └── Logo.tsx
│   ├── SEO # Component used for SEO
│   │   └── index.tsx
│   ├── SocialSidebar
│   │   └── SocialSidebar.tsx
│   ├── Transition # Component used for page transitions
│   │   └── Transition.tsx
│   ├── Twitter
│   │   └── index.tsx
│   ├── Typography # Folder for typography components
│   │   ├── XL.tsx
│   │   ├── H.tsx
│   │   ├── P.tsx
│   │   └── S.tsx
│   │   └── XS.tsx
│   └── WorkSlider
│       └── WorkSlider.tsx
├── contracts # TypeScript definitions
│   ├── page.ts
│   ├── post.ts
│   ├── preview.ts
│   ├── templates.ts
│   └── util.ts
├── gatsby # Internal GatsbyJS code
│   ├── config
│   │   └── index.ts
│   ├── node
│   │   └── index.ts
│   ├── shouldUpdateScroll.js
│   └── wrapPageElement.js
├── gatsby-plugin-theme-ui
│   └── index.js # Theme settings
├── images
│   ├── leaf-01.png # folder
│   ...
├── pages # Static pages
│   ├── 404.tsx # Custom 404 page
│   ├── kitchensink.tsx # Page to test WordPress Gutenberg Blocks
│   └── preview.tsx # Page used for previews
├── templates
│   ├── Blog # All post related page templates
│   │   ├── BlogCategoryPosts.tsx
│   │   ├── BlogPost.tsx
│   │   ├── BlogPostTeaser.tsx
│   │   ├── BlogPosts.tsx
│   │   └── BlogTagPosts.tsx
│   └── Page # All custom page templates
│       ├── CoverPage.tsx
│       ├── DefaultPage.tsx
│       ├── FullWidthPage.tsx
│       ├── HomePage.tsx # Page used for the homepage
│       ├── WorkIndex.tsx # Page used to display all work projects
│       └── WorkIndexTeaser.tsx # Component used in WorkIndex page
└── utils # Utility function folder
    ├── index.ts
    └── useInterval.tsx
```

---

## Credits

This is based on a version of [Gatsby Wordpress Typescript Blog Boilerplate](https://github.com/sagar7993/gatsby-wordpress-typescript-scss-blog) by [sagar7993](https://github.com/sagar7993). It is heavily modified from the original.

The WordPress theme is based on [Postlight's Headless WordPress + React Starter Kit](https://github.com/postlight/headless-wp-starter/) by [Postlight](https://github.com/postlight). It was modified by including revisions in the REST API response and adding some page templates.

GatsbyJS + TypeScript was possible because of this [GitHub Gist](https://gist.github.com/JohnAlbin/2fc05966624dffb20f4b06b4305280f9) and the credits mentioned in there.
