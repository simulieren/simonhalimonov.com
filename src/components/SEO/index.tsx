import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

import { decodeHtmlCharCodes } from "../../utils"

type schemaTypes = "BlogPosting" | "default"

interface SchemaOrgProps {
  author: { name: string }
  siteUrl: string
  datePublished: string
  defaultTitle: string
  description: string
  image: string
  schemaType: schemaTypes
  organization: { url: string; logo: string; name: string }
  title: string
  url: string
}

export const SchemaOrg = React.memo<SchemaOrgProps>(
  ({
    schemaType,
    author,
    siteUrl,
    datePublished,
    defaultTitle,
    description,
    image,
    organization,
    title,
    url,
  }) => {
    // General Schema for websites
    const baseSchema = [
      {
        "@context": "http://schema.org",
        "@type": "WebSite",
        url,
        name: title,
        alternateName: defaultTitle,
      },
    ]

    if (schemaType === "BlogPosting") {
      const blogPostSchema = [
        ...baseSchema,
        {
          "@context": "http://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              item: {
                "@id": url,
                name: title,
                image,
              },
            },
          ],
        },
        {
          "@context": "http://schema.org",
          "@type": "BlogPosting",
          url,
          name: title,
          alternateName: defaultTitle,
          headline: title,
          image: {
            "@type": "ImageObject",
            url: image,
          },
          description,
          author: {
            "@type": "Person",
            name: author.name,
          },
          publisher: {
            "@type": "Organization",
            url: organization.url,
            logo: {
              "@type": "ImageObject",
              url: organization.logo,
            },
            name: organization.name,
          },
          mainEntityOfPage: {
            "@type": "WebSite",
            "@id": siteUrl,
          },
          datePublished,
        },
      ]
      return (
        <Helmet>
          <script type="application/ld+json">
            {/* Schema.org tags */}
            {JSON.stringify(blogPostSchema)}
          </script>
        </Helmet>
      )
    }

    return (
      <Helmet>
        {/* Schema.org tags */}
        <script type="application/ld+json">{JSON.stringify(baseSchema)}</script>
      </Helmet>
    )
  }
)

export interface SEOProps {
  description: string
  lang: string
  title: string
  image: string | boolean
  schemaType?: schemaTypes
  datePublished: string
  url?: string
}

/**
 * SEO component that queries for data with
 * Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

export const SEO: React.FC<SEOProps> = (props) => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          author
          siteUrl
          seo {
            OpenGraphImage
            TwitterCardImage
            logoImage
          }
        }
      }
    }
  `)

  // Title used
  const title = decodeHtmlCharCodes(props.title)

  // Image used for Open Graph, Twitter, SchemaOrg
  const image = props?.image || site.siteMetadata.seo.OpenGraphImage // Use a default image for pages without featured_media

  // Use the correct language for each page on a multilingual site
  const lang = props.lang.includes("_") ? props.lang.split("_")[0] : props.lang

  // Use a custom meta description for each page and default if not available
  const metaDescription = decodeHtmlCharCodes(
    props.description || site.siteMetadata.description
  )

  // Use a custom site
  const url = props?.url || site.siteMetadata.siteUrl

  return (
    <>
      <Helmet
        htmlAttributes={{ lang }}
        title={title}
        titleTemplate={`%s | ${site.siteMetadata.title}`}
      >
        {/* General tags */}
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href={"https://simonhalimonov.com/"} />

        {/* OpenGraph tags */}
        <meta name="og:title" content={title} />
        <meta name="og:description" content={metaDescription} />
        <meta name="og:type" content={"website"} />
        <meta
          name="og:image"
          content={image || site.siteMetadata.seo.OpenGraphImage}
        />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content={"summary"} />
        <meta name="twitter:creator" content={site.siteMetadata.author} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={metaDescription} />
        <meta
          name="twitter:image"
          content={image || site.siteMetadata.seo.TwitterCardImage}
        />
      </Helmet>

      <SchemaOrg
        author={{ name: site.siteMetadata.author }}
        siteUrl={site.siteMetadata.siteUrl}
        datePublished={props.datePublished}
        defaultTitle={site.siteMetadata.title}
        description={metaDescription}
        image={image}
        schemaType={props.schemaType || "default"}
        organization={{
          url: site.siteMetadata.siteUrl,
          logo: site.siteMetadata.logoImage,
          name: site.siteMetadata.title,
        }}
        title={title}
        url={url}
      />
    </>
  )
}

SEO.defaultProps = {
  lang: "en",
  description: "",
}

export default SEO
