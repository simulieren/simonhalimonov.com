import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Link from "gatsby-link"
import { Grid, Box } from "theme-ui"

import S from "../Typography/S"
import GridHelper from "../GridHelper/GridHelper"

export const Footer = () => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          social {
            twitter
            email
            linkedin
            github
          }
        }
      }
    }
  `)

  const [showGrid, setShowGrid] = React.useState(false)

  React.useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "g" && e.ctrlKey) {
        setShowGrid(!showGrid)
      }
    }

    window?.addEventListener("keyup", handler)

    return window?.removeEventListener("keypress", handler)
  }, [showGrid])

  return (
    <>
      <Box
        sx={{
          pt: [3, 4],
          mt: [3, 4],
          border: "1px solid transparent",
          borderTopColor: "text",
        }}
      >
        <Grid
          sx={{
            px: [3, 4],
            py: [2],
          }}
          columns={[2, 4]}
          gap={[3, 4, 5]}
        >
          {site.siteMetadata.social && (
            <>
              {site.siteMetadata.social.github &&
                site.siteMetadata.social.github.length > 0 && (
                  <S
                    as="a"
                    sx={{ py: [2] }}
                    href={site.siteMetadata.social.github}
                    target="_blank"
                    rel="noreferrer noopener nofollow"
                    title="github"
                  >
                    Github
                  </S>
                )}
              {site.siteMetadata.social.twitter &&
                site.siteMetadata.social.twitter.length > 0 && (
                  <S
                    as="a"
                    sx={{ py: [2] }}
                    href={site.siteMetadata.social.twitter}
                    target="_blank"
                    rel="noreferrer noopener nofollow"
                    title="twitter"
                  >
                    Twitter
                  </S>
                )}
              {site.siteMetadata.social.linkedin &&
                site.siteMetadata.social.linkedin.length > 0 && (
                  <S
                    as="a"
                    sx={{ py: [2] }}
                    href={site.siteMetadata.social.linkedin}
                    target="_blank"
                    rel="noreferrer noopener nofollow"
                    title="linkedin"
                  >
                    LinkedIn
                  </S>
                )}
              {site.siteMetadata.social.email &&
                site.siteMetadata.social.email.length > 0 && (
                  <S
                    as="a"
                    sx={{ py: [2] }}
                    href={`mailto:${site.siteMetadata.social.email}`}
                    target="_blank"
                    rel="noreferrer noopener nofollow"
                    title="mail"
                  >
                    E-Mail
                  </S>
                )}
            </>
          )}
        </Grid>
        <Grid
          sx={{
            px: [3, 4],
            py: [2],
          }}
          columns={[2, 4]}
          gap={[3, 4, 5]}
        >
          <S sx={{ py: [3] }}>Imprint</S>

          <S sx={{ py: [3] }}>Privacy</S>
        </Grid>

        <S sx={{ px: [3, 4], py: [3] }}>
          Build with GatsbyJS and WordPress by Simon Halimonov. <br />
          See and get the full source code here. (Coming soon) <br />
          View all libraries used here: (Coming soon) <br />
          Read about how to this website works. (Coming soon) <br />
          Fonts used: IBM Plex Sans, IBM Plex Serif
        </S>

        <S sx={{ px: [3, 4], py: [3] }} onClick={() => setShowGrid(!showGrid)}>
          Press <kbd>CTRL</kbd> + <kbd>G</kbd> to view layout grid. Or click
          this text 👈.
        </S>

        <Link to="/kitchensink">
          <S sx={{ px: [3, 4], py: [3] }}>View Kitchensink with all elements</S>
        </Link>

        <S sx={{ px: [3, 4], py: [2] }}>
          © Copyright {new Date().getFullYear()} All rights reserved
        </S>
      </Box>
      {showGrid && <GridHelper key={"grid"} />}
    </>
  )
}

export default Footer
