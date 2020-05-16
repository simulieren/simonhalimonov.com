import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import SEO from "../../components/SEO"

import { PageTitleAnimation } from "../../components/Layout/PageTitleAnimation"

import { ContentWithSidebar } from "../../components/Layouts/ContentWithSidebar"

import { S } from "../../components/Typography"

import BlogPostTeaser from "./BlogPostTeaser"

import { Post, InstagramFeed } from "../../contracts/post"

export interface Props {
  pathContext: {
    group: { node: Post }[]
    index: number
    pageCount: number
    allInstaNode: InstagramFeed
  }
  location: Location
}

export default (props: Props) => {
  const { group, index, pageCount } = props.pathContext
  const previousUrl = index - 1 === 1 ? "" : (index - 1).toString()
  const nextUrl = (index + 1).toString()
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
        title={`Blog`}
        description={site.siteMetadata.description}
        // TODO: Add lang for SEO to support multiple languages
        lang={"en"}
        datePublished={new Date().toISOString()}
        schemaType={"default"}
        image={false}
      />

      <PageTitleAnimation>{"Blog"}</PageTitleAnimation>

      <ContentWithSidebar>
        {group.map(BlogPostTeaser)}
        <div>
          {index > 1 && (
            <div>
              <Link
                to={`/posts/${previousUrl}`}
                title={`/posts/${previousUrl}`}
              >
                <S type="primary">Go to Previous Page</S>
              </Link>
            </div>
          )}
          {index <= pageCount - 1 && (
            <div>
              <Link to={`/posts/${nextUrl}`} title={`/posts/${nextUrl}`}>
                <S type="primary">Go to Next Page</S>
              </Link>
            </div>
          )}
        </div>
      </ContentWithSidebar>
    </>
  )
}
