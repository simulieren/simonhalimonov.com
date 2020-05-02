import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import { Box, Grid } from "theme-ui"

import SEO from "../../components/SEO"

import SocialSidebar from "../../components/SocialSidebar/SocialSidebar"

import H from "../../components/Typography/H"
import P from "../../components/Typography/P"
import S from "../../components/Typography/S"

import BlogPostTeaser from "./BlogPostTeaser"

import { Post, InstagramFeed } from "../../contracts/post"

export interface Props {
  pathContext: {
    group: { node: Post }[]
    index: number
    pageCount: number
    allInstaNode: InstagramFeed
  }
  location: Location
}

export default (props: Props) => {
  const { group, index, pageCount } = props.pathContext
  const previousUrl = index - 1 === 1 ? "" : (index - 1).toString()
  const nextUrl = (index + 1).toString()
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
      />
      <Grid sx={{ p: [3, 4], pt: [6, 7, 8] }} gap={[3, 4, 5]} columns={[12]}>
        <Box sx={{ gridColumn: ["1/13", "1/10"], pb: [4, 5] }}>
          {group.map(BlogPostTeaser)}
          <div className="navigation-links">
            {index > 1 && (
              <div className="previous-link">
                <Link
                  to={`/posts/${previousUrl}`}
                  title={`/posts/${previousUrl}`}
                >
                  <S type="primary">Go to Previous Page</S>
                </Link>
              </div>
            )}
            {index <= pageCount - 1 && (
              <div className="next-link">
                <Link to={`/posts/${nextUrl}`} title={`/posts/${nextUrl}`}>
                  <S type="primary">Go to Next Page</S>
                </Link>
              </div>
            )}
          </div>
        </Box>

        <Box sx={{ gridColumn: ["1/13", "10/13"] }}>
          <SocialSidebar />
        </Box>
      </Grid>
    </>
  )
}
