# simonhalimonov.com

This is a personal site and blog. Built on GatsbyJS, TS and a headless WordPress CMS.

## Setup

Configure all environment variables and have your WordPress installation running.

Install all dependencies

`npm i` or `yarn`

### Using the environment variables

`GATSBY_WORDPRESS_URL_PATH` the domain or IP to the WordPress installation

`GATSBY_WORDPRESS_URL_PROTOCOL` the HTTP protocol used

`GATSBY_INSTAGRAM_SOURCE` the name of the instagram account

`GATSBY_TWITTER_SOURCE` the name of the twitter account

`GATSBY_GOOGLE_ANALYTICS` the Google Analytics tracking id

## WordPress Setup

- Polylang
  - Configure a main language that reflect the `gatsby-config.js`
  - This site uses `en_US` as the default language
  - The secondary language is `de_DE`
  - Configure a menu for both languages
- Settings
  - User permalinks with post name.
  - Set a page as the front page
  - Create a menu
    - The first menu item will be used for the logo
    - All other menu items will be generated dynamically
- Install the theme. It will do following things
  - It modifies REST API
  - It disables the WP frontend
  - It reroutes all pages to the REST API
- Install plugins and activate them
  - TODO: Add links here
  - Polylang
  - Polylang REST API
  - ACF (optional)
  - WP REST API MENU

---

### Features

#### Posts, Tags, Categories and Pages

Use posts, tags, categories and pages in WordPress to build your site.

#### Full TS support in Gatsby

TODO: Add credit

#### Simple WordPress Template support

Use the default template attribute from wordpress to choose the file that will be used for the page template.

Page templates can be found in `src/templates/...` and the mapping happen in `src/gatsby/node/index.ts`.

#### Preview pages in the Gatsby frontend

Previews are being rendered in the Gatsby frontend by fetching the data from a modified WordPress REST API.
The modified REST API exposes the latest revisions of the post.
This means that you don't have to deal with `nonce` and other authentication strategies.
By default all revisions are only available with an authenticated REST API.
I did this, because it was a pain in the ass to get it properly working.

### Setting up a cheap WordPress CMS

With a cloud provider, you can easily host a WordPress CMS installation for free with this setup.

I recommend AWS or GCP, as they have very good free tiers.
The lowest virtual machine instance should be enough.
They also have 1-click install setups.

---

## Credits

This is based on a version of [Gatsby Wordpress Typescript Blog Boilerplate](https://github.com/sagar7993/gatsby-wordpress-typescript-scss-blog) by [sagar7993](https://github.com/sagar7993). It is heavily modified from the original.

The WordPress theme is based on [Postlight's Headless WordPress + React Starter Kit](https://github.com/postlight/headless-wp-starter/) by [Postlight](https://github.com/postlight). It was modified by including revisions in the REST API response and adding some page templates.
