import React from "react"
import { Box, Grid } from "theme-ui"
import Image, { FluidObject } from "gatsby-image"

import SEO from "../../components/SEO"
import HTML from "../../components/HTML/HTML"

import SocialSidebar from "../../components/SocialSidebar/SocialSidebar"

import H from "../../components/Typography/H"

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

export const DefaultPage = (props: Props) => {
  const pageContext = props?.pageContext
  const page = pageContext?.page?.node

  const fluid: FluidObject | null =
    page?.featured_media?.localFile?.childImageSharp?.fluid || null
  return (
    <>
      <SEO title={page.title} description={page.excerpt} />
      <Grid sx={{ p: [3, 4], pt: [6, 7, 8] }} gap={[3, 4, 5]} columns={[12]}>
        <Box as="article" sx={{ pb: [4, 5], gridColumn: ["1/13", "1/10"] }}>
          <Box
            sx={{ maxWidth: ["100%", "800px"], mx: "auto", px: [0, 0, 0, 3] }}
          >
            <H as="h1">{decodeHtmlCharCodes(page.title)}</H>
          </Box>
          {fluid && fluid?.src?.length > 0 && (
            <Box sx={{ my: [2, 3] }}>
              <Image fluid={fluid} alt={page.title} title={page.title} />
            </Box>
          )}

          <HTML html={page.content} />
        </Box>

        <Box sx={{ gridColumn: ["1/13", "10/13"] }}>
          <SocialSidebar />
        </Box>
      </Grid>
    </>
  )
}

export default DefaultPage
