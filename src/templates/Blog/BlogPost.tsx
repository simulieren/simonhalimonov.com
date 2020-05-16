import React from "react"
import { Flex, Box, Grid } from "theme-ui"
import { graphql, Link } from "gatsby"
import Image, { FluidObject } from "gatsby-image"

import SEO from "../../components/SEO"

import HTML from "../../components/HTML/HTML"

import { PageTitleAnimation } from "../../components/Layout/PageTitleAnimation"

import { ContentWithSidebar } from "../../components/Layouts/ContentWithSidebar"

import { H, P, S, XS } from "../../components/Typography"

import { Post, CategoryTagInfo, InstagramFeed } from "../../contracts/post"

import { decodeHtmlCharCodes, capitalizeFirstLetter } from "../../utils"

export interface Props {
  data: {
    wordpressPost: Post
    allInstaNode: InstagramFeed
  }
  pageContext: {
    previous: {
      slug: string
    }
    next: {
      slug: string
    }
  }
  location: Location
}

export const BlogPostPage = (props: Props) => {
  const fluid: FluidObject | null =
    props?.data?.wordpressPost?.featured_media?.localFile?.childImageSharp
      ?.fluid || null
  const categories: CategoryTagInfo[] =
    props?.data?.wordpressPost?.categories?.length > 0
      ? props.data.wordpressPost.categories.filter(
          (category) => category.name !== "Uncategorized"
        )
      : new Array<CategoryTagInfo>()
  const tags: CategoryTagInfo[] =
    (props.data.wordpressPost.tags && props.data.wordpressPost.tags.length) > 0
      ? props.data.wordpressPost.tags
      : new Array<CategoryTagInfo>()

  const date =
    props.data.wordpressPost.modified &&
    props.data.wordpressPost.modified.length > 0
      ? props.data.wordpressPost.modified
      : props.data.wordpressPost.date

  return (
    <>
      <SEO
        title={props.data.wordpressPost.title}
        description={props.data.wordpressPost.excerpt}
        // TODO: Add lang for SEO
      />

      <PageTitleAnimation>
        {decodeHtmlCharCodes(props.data.wordpressPost.title)}
      </PageTitleAnimation>

      <ContentWithSidebar>
        <article>
          <Box
            as="header"
            sx={{
              maxWidth: ["100%", "800px"],
              mx: "auto",
              px: [0, 0, 0, 3],
            }}
          >
            <H>{decodeHtmlCharCodes(props.data.wordpressPost.title)}</H>

            <Flex sx={{ alignItems: "baseline", flexWrap: "wrap" }}>
              <XS sx={{ mr: [3] }}>{date}</XS>
              <XS sx={{ mr: [3] }}>Category: </XS>
              {categories &&
                categories.length > 0 &&
                categories.map((category, categoryIndex) => {
                  return (
                    <XS key={categoryIndex} sx={{ mr: [3] }}>
                      <Link
                        to={`/category/${category.slug}`}
                        title={category.name}
                      >
                        {capitalizeFirstLetter(category.name)}
                      </Link>
                    </XS>
                  )
                })}

              <XS sx={{ mx: [3] }}>Tags: </XS>
              {tags &&
                tags.length > 0 &&
                tags.map((tag, tagIndex) => {
                  return (
                    <XS key={tagIndex} sx={{ mr: [3] }}>
                      <Link to={`/tag/${tag.slug}`} title={tag.name}>
                        {capitalizeFirstLetter(tag.name)}
                      </Link>
                    </XS>
                  )
                })}
            </Flex>
          </Box>
          {fluid && fluid?.src?.length > 0 && (
            <Box sx={{ my: [2, 3] }}>
              <Image
                fluid={fluid}
                alt={props.data.wordpressPost.title}
                title={props.data.wordpressPost.title}
              />
            </Box>
          )}

          <HTML html={props.data.wordpressPost.content} />

          <Grid as="footer" sx={{ mx: "auto" }} gap={[3, 4, 5]} columns={[2]}>
            {props.pageContext.next && props.pageContext.next.slug && (
              <Box
                sx={{
                  border: "1px solid transparent",
                  borderTopColor: "text",
                  pt: [3, 4],
                }}
              >
                <Link
                  to={`/post/${props.pageContext.next.slug}`}
                  title={props.pageContext.next.slug}
                >
                  <S type="primary">Go to Previous Post</S>
                  <P>{props.pageContext.next.title}</P>
                </Link>
              </Box>
            )}
            {props.pageContext.previous && props.pageContext.previous.slug && (
              <Box
                sx={{
                  border: "1px solid transparent",
                  borderTopColor: "text",
                  pt: [3, 4],
                }}
              >
                <Link
                  to={`/post/${props.pageContext.previous.slug}`}
                  title={props.pageContext.previous.slug}
                >
                  <S type="primary">Go to Next Post</S>
                  <P>{props.pageContext.previous.title}</P>
                </Link>
              </Box>
            )}
          </Grid>
        </article>
      </ContentWithSidebar>
    </>
  )
}

export default BlogPostPage

// TODO: Remove GarphLQ Query and use PageContext
export const query = graphql`
  query($id: Int!) {
    wordpressPost(wordpress_id: { eq: $id }) {
      title
      content
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
      slug
      wordpress_id
      featured_media {
        localFile {
          childImageSharp {
            fluid(maxWidth: 1000, quality: 85) {
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
`
