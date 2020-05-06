# simonhalimonov.com

This is a personal site and blog. Built on GatsbyJS, TS and a headless WordPress CMS.

## Setup

Configure all environment variables and have your WordPress installation running.

Install all dependencies

`npm i` or `yarn`

## WordPress Setup

- Polylang
  - Configure a main language that reflect the `gatsby-config.js`
- Settings
  - User permalinks with post name
  - Set a home page
- Install the theme
  - It modifies REST API
  - It disables the WP frontend
- Install plugins and activate them

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

Credits

This is based on a heavily modified version of ...
