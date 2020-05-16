import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Box } from "theme-ui"

import SEO from "../../components/SEO"

import { PageTitleAnimation } from "../../components/Layout/PageTitleAnimation"

import { ContentWithSidebar } from "../../components/Layouts/ContentWithSidebar"

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
        title={`${capitalizeFirstLetter(props.pageContext.slug)} | Blog`}
        description={site.siteMetadata.description}
        // TODO: Add lang for SEO to support multiple languages
        lang={"en"}
        datePublished={new Date().toISOString()}
        schemaType={"default"}
        image={false}
      />

      <PageTitleAnimation>
        {capitalizeFirstLetter(props.pageContext.slug)}
      </PageTitleAnimation>

      <ContentWithSidebar>
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
            Browsing Tag Posts: {capitalizeFirstLetter(props.pageContext.slug)}
          </H>
        </Box>

        {group.map(BlogPostTeaser)}
      </ContentWithSidebar>
    </>
  )
}

export default BlogTagPostsPage
