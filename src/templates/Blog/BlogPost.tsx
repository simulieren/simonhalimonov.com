import React from "react"
import { Flex, Box, Grid } from "theme-ui"
import { graphql, Link } from "gatsby"
import Image, { FluidObject } from "gatsby-image"
import { motion } from "framer-motion"

import SEO from "../../components/SEO"

import HTML from "../../components/HTML/HTML"

import SocialSidebar from "../../components/SocialSidebar/SocialSidebar"

import { XL, H, P, S, XS } from "../../components/Typography"

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

      <Box
        sx={{
          mb: ["-35vmin"],
          width: "100%",
          overflow: "hidden",
          zIndex: 100,
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
          pointerEvents: "none",
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            y: ["24vmin", "-24vmin"],
          }}
          transition={{ duration: 2, ease: [0.33, 1, 0.68, 1] }}
        >
          <XL sx={{ whiteSpace: "nowrap" }}>
            {decodeHtmlCharCodes(props.data.wordpressPost.title)}
          </XL>
        </motion.div>
      </Box>

      <Grid sx={{ p: [3, 4], pt: [6, 7, 8] }} gap={[3, 4, 5]} columns={[12]}>
        <Box
          as="article"
          sx={{ pb: [4, 5], gridColumn: ["1/13", "1/13", "1/10"] }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              y: ["24vmin", "0vmin"],
            }}
            transition={{
              duration: 2.5,
              delay: 0.25,
              ease: [0.33, 1, 0.68, 1],
            }}
          >
            <article>
              <Box
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

              <Grid sx={{ mx: "auto" }} gap={[3, 4, 5]} columns={[2]}>
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
          </motion.div>
        </Box>

        <Box sx={{ gridColumn: ["1/13", "1/13", "10/13"] }}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              y: ["24vmin", "0vmin"],
            }}
            transition={{ duration: 3, delay: 0.5, ease: [0.33, 1, 0.68, 1] }}
          >
            <SocialSidebar />
          </motion.div>
        </Box>
      </Grid>
    </>
  )
}

export default BlogPostPage

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
