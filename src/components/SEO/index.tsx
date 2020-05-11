/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

export interface Props {
  description: string
  lang: string
  meta: any[]
  title: string
}

export const SEO = (props: Props) => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          author
        }
      }
    }
  `)

  // Use the correct language for each page on a multilingual site
  const lang = props.lang.includes("_") ? props.lang.split("_")[0] : props.lang

  const metaDescription = props.description || site.siteMetadata.description

  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={props.title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: "description",
          content: metaDescription,
        },
        {
          property: "og:title",
          content: props.title,
        },
        {
          property: "og:description",
          content: metaDescription,
        },
        {
          property: "og:type",
          content: "website",
        },
        {
          name: "twitter:card",
          content: "summary",
        },
        {
          name: "twitter:creator",
          content: site.siteMetadata.author,
        },
        {
          name: "twitter:title",
          content: props.title,
        },
        {
          name: "twitter:description",
          content: metaDescription,
        },
      ].concat(props.meta)}
    />
  )
}

SEO.defaultProps = {
  lang: "en",
  meta: [],
  description: "",
}

export default SEO
