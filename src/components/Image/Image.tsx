import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

interface ImageProps {
  filename: string
  alt?: string
  style?: React.CSSProperties
}

export const Image = (props: ImageProps) => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                fluid(maxWidth: 1400) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    `}
    render={(data) => {
      const image = data.images.edges.find((n) => {
        console.log("n", n)
        return n.node.relativePath.includes(props.filename)
      })
      if (!image) {
        return null
      }

      return (
        <Img
          alt={props.alt as string}
          fluid={image.node.childImageSharp.fluid}
          style={props.style}
        />
      )
    }}
  />
)

export default Image
