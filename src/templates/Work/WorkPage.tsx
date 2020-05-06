import React from "react"
import { Flex, Box, Grid } from "theme-ui"
import { graphql, Link } from "gatsby"
import Image, { FluidObject } from "gatsby-image"

import SEO from "../../components/SEO"

// import Comments from "../../components/Comments"
import HTML from "../../components/HTML/HTML"

import H from "../../components/Typography/H"
import P from "../../components/Typography/P"
import S from "../../components/Typography/S"

import { Page } from "../../contracts/page"

import { decodeHtmlCharCodes, capitalizeFirstLetter } from "../../utils"

export interface Props {
  data: {
    wordpressPage: Page // TODO: Create page interface
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

export const WorkPage = (props: Props) => {
  const fluid: FluidObject | null =
    props?.data?.wordpressPage?.featured_media?.localFile?.childImageSharp
      ?.fluid || null

  return (
    <>
      <SEO
        title={props.data.wordpressPage.title}
        description={props.data.wordpressPage.excerpt}
      />
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
              <Image
                fluid={fluid}
                alt={props.data.wordpressPage.title}
                title={props.data.wordpressPage.title}
              />
            </Box>
          )}

          <Box sx={{ maxWidth: "70ch", mx: "auto", mb: [2, 4] }}>
            <H sx={{ textAlign: "center" }}>
              {decodeHtmlCharCodes(props.data.wordpressPage.title)}
            </H>
          </Box>

          <Box sx={{ px: [3, 4] }}>
            <HTML html={props.data.wordpressPage.content} />
          </Box>
        </Box>
      </Box>
      <Grid
        sx={{ p: [3, 4], pt: [6, 7, 8], maxWidth: 1200, mx: "auto" }}
        gap={[3, 4, 5]}
        columns={[2]}
      >
        {props.pageContext.next && props.pageContext.next.slug && (
          <Box>
            <Link
              to={`/work/${props.pageContext.next.slug}`}
              title={props.pageContext.next.slug}
            >
              <S type="primary">Previous</S>
              <H>{props.pageContext.next.title}</H>
            </Link>
          </Box>
        )}
        {props.pageContext.previous && props.pageContext.previous.slug && (
          <Box>
            <Link
              to={`/work/${props.pageContext.previous.slug}`}
              title={props.pageContext.previous.slug}
            >
              <S type="primary">Next</S>
              <H>{props.pageContext.previous.title}</H>
            </Link>
          </Box>
        )}
      </Grid>
    </>
  )
}

export default WorkPage

// export const query = graphql`
//   query($id: Int!) {
//     wordpressPage(wordpress_id: { eq: $id }) {
//       title
//       content
//       excerpt
//       date(formatString: "MMMM DD, YYYY")
//       modified(formatString: "MMMM DD, YYYY")
//       author {
//         id
//         name
//         url
//         description
//         link
//         slug
//         path
//         wordpress_id
//       }
//       slug
//       wordpress_id
//       featured_media {
//         localFile {
//           childImageSharp {
//             fluid(quality: 85) {
//               aspectRatio
//               src
//               srcSet
//               sizes
//               base64
//               tracedSVG
//               srcWebp
//               srcSetWebp
//             }
//           }
//         }
//       }
//     }
//   }
// `
