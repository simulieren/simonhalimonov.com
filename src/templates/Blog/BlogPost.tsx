import React from "react"
import { Flex, Box, Grid } from "theme-ui"
import { Link } from "gatsby"
import Image, { FluidObject } from "gatsby-image"
import { motion } from "framer-motion"

import SEO from "../../components/SEO"

import HTML from "../../components/HTML/HTML"

import { PageTitleAnimation } from "../../components/Layout/PageTitleAnimation"

import { ContentWithSidebar } from "../../components/Layouts/ContentWithSidebar"

import { H, P, S, XS } from "../../components/Typography"

import { Post, CategoryTagInfo } from "../../contracts/post"

import { decodeHtmlCharCodes, capitalizeFirstLetter } from "../../utils"

export interface Props {
  pageContext: {
    previous: {
      slug: string
    }
    next: {
      slug: string
    }
    post: { node: Post }
  }
  location: Location
}

export const BlogPostPage = (props: Props) => {
  const post = props?.pageContext?.post?.node

  const fluid: FluidObject | null =
    post?.featured_media?.localFile?.childImageSharp?.fluid || null
  const categories: CategoryTagInfo[] =
    post?.categories?.length > 0
      ? post.categories.filter((category) => category.name !== "Uncategorized")
      : new Array<CategoryTagInfo>()
  const tags: CategoryTagInfo[] =
    (post.tags && post.tags.length) > 0
      ? post.tags
      : new Array<CategoryTagInfo>()

  const date =
    post.modified && post.modified.length > 0 ? post.modified : post.date

  return (
    <>
      <SEO
        title={decodeHtmlCharCodes(post.title)}
        description={decodeHtmlCharCodes(post.excerpt)}
        // TODO: Add lang for SEO
      />

      <PageTitleAnimation>{decodeHtmlCharCodes(post.title)}</PageTitleAnimation>

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
            <motion.div
              layoutId={`post-title-${post.slug}`}
              transition={{ delay: 1, duration: 1 }}
            >
              <H as="h1">{decodeHtmlCharCodes(post.title)}</H>
            </motion.div>

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
            <motion.div layoutId={`post-image-${post.slug}`}>
              <Box sx={{ my: [2, 3] }}>
                <Image fluid={fluid} alt={post.title} title={post.title} />
              </Box>
            </motion.div>
          )}

          <HTML html={post.content} />

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
