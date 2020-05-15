import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { motion } from "framer-motion"
import { Box, Grid } from "theme-ui"

import SEO from "../../components/SEO"

import SocialSidebar from "../../components/SocialSidebar/SocialSidebar"

import { XL, H } from "../../components/Typography"

import BlogPostTeaser from "./BlogPostTeaser"

import { Post, InstagramFeed } from "../../contracts/post"
import { capitalizeFirstLetter } from "../../utils"

export interface Props {
  pageContext: {
    group: { node: Post }[]
    allInstaNode: InstagramFeed
    slug: string
    lang: string
  }
  location: Location
}

export const BlogTagPostsPage = (props: Props) => {
  const { group, lang } = props.pageContext
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)
  return (
    <>
      <SEO
        title={`${site.siteMetadata.title} | ${site.siteMetadata.description}`}
        description={site.siteMetadata.description}
        lang={lang}
      />

      <Box
        sx={{
          mb: ["-35vmin"],
          overflow: "hidden",
          width: "100%",
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
          <XL>{capitalizeFirstLetter(props.pageContext.slug)}</XL>
        </motion.div>
      </Box>

      <Grid sx={{ p: [3, 4], pt: [6, 7, 8] }} gap={[3, 4, 5]} columns={[12]}>
        <Box sx={{ gridColumn: ["1/13", "1/13", "1/10"], pb: [4, 5] }}>
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
            <Box
              sx={{
                mx: "auto",
                pb: [3, 4],
                mb: [3, 4],
                border: "1px solid transparent",
                borderBottomColor: "text",
              }}
            >
              <H as="h3">
                Browsing Tag Posts:{" "}
                {capitalizeFirstLetter(props.pageContext.slug)}
              </H>
            </Box>

            {group.map(BlogPostTeaser)}
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

export default BlogTagPostsPage
