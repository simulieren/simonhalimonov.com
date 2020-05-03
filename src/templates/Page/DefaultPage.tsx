import React from "react"
import { Flex, Box, Grid } from "theme-ui"
import { graphql, Link } from "gatsby"
import Image, { FluidObject } from "gatsby-image"

import SEO from "../../components/SEO"

import HTML from "../../components/HTML/HTML"

import SocialSidebar from "../../components/SocialSidebar/SocialSidebar"

import H from "../../components/Typography/H"
import P from "../../components/Typography/P"
import S from "../../components/Typography/S"

import { InstagramFeed } from "../../contracts/post"
import { Page } from "../../contracts/page"

import { decodeHtmlCharCodes, capitalizeFirstLetter } from "../../utils"

export interface Props {
  data: {
    wordpressPost: Page
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
    props?.data?.wordpressPage?.featured_media?.localFile?.childImageSharp
      ?.fluid || null
  return (
    <>
      <SEO
        title={props.data.wordpressPage.title}
        description={props.data.wordpressPage.excerpt}
      />
      <Grid sx={{ p: [3, 4], pt: [6, 7, 8] }} gap={[3, 4, 5]} columns={[12]}>
        <Box as="article" sx={{ pb: [4, 5], gridColumn: ["1/13", "1/10"] }}>
          <article className="post">
            <Box
              sx={{ maxWidth: ["100%", "800px"], mx: "auto", px: [0, 0, 0, 3] }}
            >
              <H>{decodeHtmlCharCodes(props.data.wordpressPage.title)}</H>
            </Box>
            {fluid && fluid?.src?.length > 0 && (
              <Box sx={{ my: [2, 3] }}>
                <Image
                  fluid={fluid}
                  alt={props.data.wordpressPage.title}
                  title={props.data.wordpressPage.title}
                />
              </Box>
            )}

            <HTML html={props.data.wordpressPage.content} />

            {/* <Grid sx={{ mx: "auto" }} gap={[3, 4, 5]} columns={[2]}>
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
            </Grid> */}
          </article>
        </Box>

        <Box sx={{ gridColumn: ["1/13", "10/13"] }}>
          <SocialSidebar />
        </Box>
      </Grid>
    </>
  )
}

export default BlogPostPage

export const query = graphql`
  query($id: Int!) {
    wordpressPage(wordpress_id: { eq: $id }) {
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
            fluid(maxWidth: 960, maxHeight: 600, quality: 85) {
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
    }
  }
`
