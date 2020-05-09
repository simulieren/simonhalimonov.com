import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import { Grid } from "theme-ui"

import SEO from "../../components/SEO"

import WorkIndexTeaser from "./WorkIndexTeaser"

export interface Props {
  pageContext: {
    edges: any[] // TODO: Add types
  }
  location: Location
}

export default (props: Props) => {
  const { edges } = props.pageContext

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
        {edges.map(WorkIndexTeaser)}
      </Grid>
    </>
  )
}
