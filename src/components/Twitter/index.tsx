import React, { ReactNode } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Flex, Box } from "theme-ui"
import { Twitter } from "react-feather"

export interface Props {
  title?: ReactNode
}

export default (props: Props) => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          social {
            twitter
          }
        }
      }
    }
  `)
  return (
    <>
      {site.siteMetadata.social.twitter &&
        site.siteMetadata.social.twitter.length > 0 && (
          <Flex
            as="a"
            sx={{ mb: [2, 3], alignItems: "center" }}
            href={site.siteMetadata.social.twitter}
            target="_blank"
            rel="noreferrer noopener nofollow"
            title="twitter"
          >
            <Twitter />
            <Box sx={{ ml: [2] }}>{props.title}</Box>
          </Flex>
        )}
      <div className="twitter-container" />
    </>
  )
}
