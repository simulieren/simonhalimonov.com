const path = require("path")
const resolve = path.resolve
const createPaginatedPages = require("gatsby-paginate")

// Import types
import { GatsbyNode } from "gatsby"
import { Page } from "../../contracts/page"
import { Post, InstagramFeed } from "../../contracts/post"

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const createPages: GatsbyNode["createPages"] = async ({
  graphql,
  actions,
  reporter,
}) => {
  const { createPage } = actions

  // Get all Blog template paths
  const BlogPostTemplate = resolve("./src/templates/Blog/BlogPost.tsx")
  const BlogPostsTemplate = resolve("./src/templates/Blog/BlogPosts.tsx")
  const BlogTagPostsTemplate = resolve("./src/templates/Blog/BlogTagPosts.tsx")
  const BlogCategoryPostsTemplate = resolve(
    "./src/templates/Blog/BlogCategoryPosts.tsx"
  )

  const BlogPostsResult = await graphql<{
    allWordpressPost: { edges: [{ node: Post }] }
    allInstaNode: InstagramFeed
  }>(`
    {
      allWordpressPost {
        edges {
          node {
            id
            slug
            status
            template
            format
            wordpress_id
            title
            excerpt
            date(formatString: "MMMM DD, YYYY")
            modified(formatString: "MMMM DD, YYYY")
            author {
              id
              name
              url
              description
              link
              slug
              path
              wordpress_id
            }
            featured_media {
              localFile {
                childImageSharp {
                  fluid(quality: 85) {
                    aspectRatio
                    src
                    srcSet
                    sizes
                    base64
                    tracedSVG
                    srcWebp
                    srcSetWebp
                  }
                }
              }
            }
            categories {
              id
              link
              wordpress_id
              count
              description
              name
              slug
              path
            }
            tags {
              id
              link
              wordpress_id
              count
              description
              name
              slug
              path
            }
          }
        }
      }
      allInstaNode(limit: 8) {
        edges {
          node {
            id
            likes
            comments
            mediaType
            preview
            original
            timestamp
            caption
            localFile {
              childImageSharp {
                fluid(maxWidth: 960, quality: 85) {
                  aspectRatio
                  src
                  srcSet
                  sizes
                  base64
                  srcWebp
                  srcSetWebp
                }
              }
            }
            thumbnails {
              src
              config_width
              config_height
            }
            dimensions {
              height
              width
            }
          }
        }
      }
    }
  `)

  if (BlogPostsResult.errors) {
    reporter.panicOnBuild("Error while running GraphQL query.")
    return
  }

  const BlogPosts = BlogPostsResult?.data?.allWordpressPost?.edges

  BlogPosts?.forEach((post, index: number) => {
    createPage({
      path: `/post/${post.node.slug}`,
      component: BlogPostTemplate,
      context: {
        id: post.node.wordpress_id,
        slug: post.node.slug,
        previous: index === 0 ? null : BlogPosts[index - 1].node,
        next: index === BlogPosts.length - 1 ? null : BlogPosts[index + 1].node,
      },
    })
  })

  const BlogTagPosts = new Map()
  const BlogCategoryPosts = new Map()

  BlogPosts?.forEach((post) => {
    const tags = post.node.tags
    if (tags && tags.length > 0) {
      tags.forEach((tag) => {
        if (BlogTagPosts.has(tag.slug)) {
          BlogTagPosts.set(tag.slug, [...BlogTagPosts.get(tag.slug), post])
        } else {
          BlogTagPosts.set(tag.slug, [post])
        }
      })
    }
    const categories = post.node.categories
    if (categories && categories.length > 0) {
      categories.forEach((category) => {
        if (BlogCategoryPosts.has(category.slug)) {
          BlogCategoryPosts.set(category.slug, [
            ...BlogCategoryPosts.get(category.slug),
            post,
          ])
        } else {
          BlogCategoryPosts.set(category.slug, [post])
        }
      })
    }
  })

  const BlogTagSlugs = [...BlogTagPosts.keys()]
  const BlogCategorySlugs = [...BlogCategoryPosts.keys()]

  if (BlogTagSlugs.length > 0) {
    BlogTagSlugs.forEach((BlogTagSlug) => {
      createPage({
        path: `/tag/${BlogTagSlug}`,
        component: BlogTagPostsTemplate,
        context: {
          group: BlogTagPosts.get(BlogTagSlug),
          slug: BlogTagSlug,
          allInstaNode: BlogPostsResult?.data?.allInstaNode,
        },
      })
    })
  }

  if (BlogCategorySlugs.length > 0) {
    BlogCategorySlugs.forEach((BlogCategorySlug) => {
      createPage({
        path: `/category/${BlogCategorySlug}`,
        component: BlogCategoryPostsTemplate,
        context: {
          group: BlogCategoryPosts.get(BlogCategorySlug),
          slug: BlogCategorySlug,
          allInstaNode: BlogPostsResult?.data?.allInstaNode,
        },
      })
    })
  }

  createPaginatedPages({
    edges: BlogPosts,
    createPage: createPage,
    pageTemplate: BlogPostsTemplate,
    pageLength: 2,
    pathPrefix: "posts",
    context: {
      allInstaNode: BlogPostsResult?.data?.allInstaNode,
    },
  })

  /**
   * Get all template directories necessary for rendering pages
   */
  const DefaultPage = resolve("./src/templates/Page/DefaultPage.tsx")
  const HomePage = resolve("./src/templates/Page/HomePage.tsx")
  const FullWidthPage = resolve("./src/templates/Page/FullWidthPage.tsx")
  const CoverPage = resolve("./src/templates/Page/CoverPage.tsx")
  const WorkIndexTemplate = resolve("./src/templates/Page/WorkIndex.tsx")

  /**
   * Query all pages and then render them
   * with the correct template and pass the id
   */
  const PagesResult = await graphql<{
    allWordpressPage: { edges: [{ node: Page }] }
  }>(`
    {
      allWordpressPage {
        edges {
          node {
            id
            slug
            status
            template
            wordpress_id
            title
            excerpt
            content
            path
            polylang_current_lang
            date(formatString: "MMMM DD, YYYY")
            modified(formatString: "MMMM DD, YYYY")
            featured_media {
              localFile {
                childImageSharp {
                  fluid(quality: 85) {
                    aspectRatio
                    src
                    srcSet
                    sizes
                    base64
                    srcWebp
                    srcSetWebp
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  if (PagesResult.errors) {
    reporter.panicOnBuild("Error while running GraphQL query.")
    return
  }

  const Pages = PagesResult?.data?.allWordpressPage?.edges

  Pages?.forEach((page) => {
    // Default page options
    const pageOptions = {
      path: page.node.path || "",
      component: DefaultPage,
      context: {
        id: page.node.wordpress_id,
        slug: page.node.slug,
        lang: page.node.polylang_current_lang,
        page, // Pass all the page data as context data
      },
    }

    // Get all project pages
    const WorkIndex = PagesResult?.data?.allWordpressPage?.edges.filter(
      (edge) => {
        // Check if it is a project
        return (
          edge.node.template === "templates/template-project.php" &&
          // Match the language to the index language
          page.node.polylang_current_lang === edge.node.polylang_current_lang
        )
      }
    )

    switch (page.node.template) {
      case "":
        // Default template
        createPage({ ...pageOptions })
        break
      case "templates/template-full-width.php":
        // Full width template
        createPage({ ...pageOptions, component: FullWidthPage })
        break
      case "templates/template-cover.php":
        // Cover template
        createPage({ ...pageOptions, component: CoverPage })
        break
      case "templates/template-project.php":
        // Cover template
        createPage({ ...pageOptions, component: CoverPage })
        break
      case "templates/template-home.php":
        // Homepage template
        createPage({
          ...pageOptions,
          component: HomePage,
          // Pass edges as context data
          context: { ...pageOptions.context, edges: WorkIndex },
        })
        break
      case "templates/template-work-index.php":
        // Index template for projects
        createPage({
          ...pageOptions,
          component: WorkIndexTemplate,
          // Pass edges as context data
          context: { ...pageOptions.context, edges: WorkIndex },
        })
        break

      default:
        createPage({ ...pageOptions })
        break
    }
  })
}

// WP Preview
// Implement the Gatsby API “onCreatePage”. This is
// called after every page is created.
const onCreatePage: GatsbyNode["onCreatePage"] = async ({ page, actions }) => {
  const { createPage } = actions

  // page.matchPath is a special key that's used for matching pages
  // only on the client.
  if (page.path.match(/^\/preview/)) {
    page.matchPath = "/preview/*"

    // Update the page.
    createPage(page)
  }
}

module.exports.createPages = createPages
module.exports.onCreatePage = onCreatePage
