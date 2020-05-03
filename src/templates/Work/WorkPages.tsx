import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import { Flex, Box, Grid } from "theme-ui"

import SEO from "../../components/SEO"

import WorkPageTeaser from "./WorkPageTeaser"

export interface Props {
  pathContext: {
    edges: any[] // TODO: Add types
  }
  location: Location
}

export default (props: Props) => {
  const { edges } = props.pathContext
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
      <Grid
        sx={{ p: [3, 4], pt: [6, 7, 8] }}
        gap={[3, 4, 5]}
        columns={[1, "1fr 1fr"]}
      >
        {edges.map(WorkPageTeaser)}
      </Grid>
    </>
  )
}
