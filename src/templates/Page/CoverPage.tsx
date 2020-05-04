import React from "react"
import { Box, Grid } from "theme-ui"
import { Link } from "gatsby"
import Image, { FluidObject } from "gatsby-image"

import SEO from "../../components/SEO"

// import Comments from "../../components/Comments"
import HTML from "../../components/HTML/HTML"

import H from "../../components/Typography/H"
import S from "../../components/Typography/S"

import { Page } from "../../contracts/page"

import { decodeHtmlCharCodes } from "../../utils"

export interface Props {
  pageContext: {
    previous: {
      slug: string
      title: string
      path: string
    }
    next: {
      slug: string
      title: string
      path: string
    }
    page: {
      node: Page
    }
  }
  location: Location
}

export const CoverPage = (props: Props) => {
  const pageContext = props?.pageContext
  const page = pageContext?.page?.node

  const fluid: FluidObject | null =
    page?.featured_media?.localFile?.childImageSharp?.fluid || null

  return (
    <>
      <SEO title={page.title} description={page.excerpt} />
      <Box>
        <Box as="article" sx={{ mb: [4, 5] }}>
          {fluid && fluid?.src?.length > 0 && (
            <Box
              sx={{
                width: "100%",
                mb: [2, 4],
                "& img": { objectFit: "cover" },
              }}
            >
              <Image fluid={fluid} alt={page.title} title={page.title} />
            </Box>
          )}

          <Box sx={{ maxWidth: "70ch", mx: "auto", mb: [2, 4] }}>
            <H as="h1" sx={{ textAlign: "center" }}>
              {decodeHtmlCharCodes(page.title)}
            </H>
          </Box>

          <Box sx={{ px: [3, 4] }}>
            <HTML html={page.content} />
          </Box>
        </Box>
      </Box>
      <Grid
        sx={{ p: [3, 4], pt: [6, 7, 8], maxWidth: 1200, mx: "auto" }}
        gap={[3, 4, 5]}
        columns={[2]}
      >
        {pageContext?.next?.slug && (
          <Box>
            <Link to={pageContext.next.path} title={pageContext.next.slug}>
              <S>Previous</S>
              <H>{pageContext.next.title}</H>
            </Link>
          </Box>
        )}
        {pageContext?.previous?.slug && (
          <Box>
            <Link
              to={pageContext.previous.slug}
              title={pageContext.previous.slug}
            >
              <S>Next</S>
              <H>{pageContext.previous.title}</H>
            </Link>
          </Box>
        )}
      </Grid>
    </>
  )
}

export default CoverPage
