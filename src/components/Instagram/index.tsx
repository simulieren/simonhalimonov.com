import React, { Fragment, ReactNode } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import { Flex, Box, Grid } from "theme-ui"
import { Instagram } from "react-feather"

import { InstagramFeed } from "../../contracts/post"

export interface Props {
  orientation: "horizontal" | "vertical"
  title?: ReactNode
}

export default (props: Props) => {
  const {
    allInstaNode,
  }: { allInstaNode: InstagramFeed } = useStaticQuery(graphql`
    query {
      allInstaNode(limit: 3) {
        edges {
          node {
            id
            likes
            comments
            mediaType
            preview
            original
            timestamp
            caption
            localFile {
              childImageSharp {
                fluid(maxWidth: 960, maxHeight: 960, quality: 85) {
                  aspectRatio
                  src
                  srcSet
                  sizes
                  base64
                  tracedSVG
                  srcWebp
                  srcSetWebp
                }
              }
            }
            thumbnails {
              src
              config_width
              config_height
            }
            dimensions {
              height
              width
            }
          }
        }
      }
    }
  `)

  return process.env.GATSBY_INSTAGRAM_SOURCE &&
    process.env.GATSBY_INSTAGRAM_SOURCE.length > 0 &&
    allInstaNode &&
    allInstaNode.edges &&
    allInstaNode.edges.length > 0 ? (
    <div>
      <Flex
        sx={{ alignItems: ["center"], mb: [2, 3] }}
        as="a"
        href={`https://instagram.com/${process.env.GATSBY_INSTAGRAM_SOURCE}`}
        target="_blank"
        rel="noopenernoopener noreferrer nofollow"
        title={process.env.GATSBY_INSTAGRAM_SOURCE}
      >
        <Instagram />
        <Box sx={{ ml: [2] }}>{props.title}</Box>
      </Flex>

      <Grid columns={[3, 3, 1]} gap={[3, 4, 5]}>
        {allInstaNode.edges.map((instagramPost, index) => {
          return instagramPost.node &&
            instagramPost.node.localFile &&
            instagramPost.node.localFile.childImageSharp ? (
            <Box key={index}>
              <a
                href={`https://instagram.com/p/${instagramPost.node.id}`}
                target="_blank"
                rel="noopenernoopener noreferrer nofollow"
                title={instagramPost.node.caption}
              >
                <Image
                  fluid={instagramPost.node.localFile.childImageSharp.fluid}
                  alt={instagramPost.node.caption}
                  title={instagramPost.node.caption}
                />
              </a>
            </Box>
          ) : (
            <Fragment key={index} />
          )
        })}
      </Grid>
    </div>
  ) : (
    <Fragment />
  )
}
