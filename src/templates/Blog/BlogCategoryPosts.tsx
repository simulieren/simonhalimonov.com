import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import { Box, Grid } from "theme-ui"

import SEO from "../../components/SEO"

import SocialSidebar from "../../components/SocialSidebar/SocialSidebar"

import { H } from "../../components/Typography"

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

export const BlogCategoryPostsPage = (props: Props) => {
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
      <Grid
        sx={{ p: [3, 4], pt: [6, 7, 8] }}
        gap={[3, 4, 5]}
        columns={[1, "3fr 1fr"]}
      >
        <Box>
          <Box
            sx={{
              maxWidth: "70ch",
              mx: "auto",
              pb: [3, 4],
              mb: [3, 4],
              border: "1px solid transparent",
              borderBottomColor: "text",
            }}
          >
            <H as="h3">
              Browsing Category Posts:{" "}
              {capitalizeFirstLetter(props.pageContext.slug)}
            </H>
          </Box>
          {group.map(BlogPostTeaser)}
        </Box>
        <SocialSidebar />
      </Grid>
    </>
  )
}

export default BlogCategoryPostsPage
