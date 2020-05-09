/** @jsx jsx */
import { jsx, Flex, Box } from "theme-ui"
import { Link } from "gatsby"
import Image, { FluidObject } from "gatsby-image"

import H from "../../components/Typography/H"
import P from "../../components/Typography/P"
import S from "../../components/Typography/S"

import { Post, CategoryTagInfo } from "../../contracts/post"
import { decodeHtmlCharCodes, capitalizeFirstLetter } from "../../utils"

export default ({ node }: { node: Post }) => {
  const fluid: FluidObject | null =
    node?.featured_media?.localFile?.childImageSharp?.fluid || null
  const categories: CategoryTagInfo[] =
    (node.categories && node.categories.length) > 0
      ? node.categories.filter((category) => category.name !== "Uncategorized")
      : new Array<CategoryTagInfo>()
  const tags: CategoryTagInfo[] =
    node.tags && node.tags.length > 0 ? node.tags : new Array<CategoryTagInfo>()
  return (
    <Box as="article" key={node.slug} sx={{ mb: [4, 5] }}>
      <Box sx={{ maxWidth: "70ch", mx: "auto" }}>
        <Link to={`/post/${node.slug}`} title={node.slug}>
          <H>{decodeHtmlCharCodes(node.title)}</H>
        </Link>
        <Flex sx={{ alignItems: "baseline" }}>
          {categories &&
            categories.length > 0 &&
            categories.map((category, categoryIndex) => {
              return (
                <S key={categoryIndex} sx={{ mr: [3] }}>
                  <Link to={`/category/${category.slug}`} title={category.name}>
                    {capitalizeFirstLetter(category.name)}
                  </Link>
                </S>
              )
            })}
          {tags &&
            tags.length > 0 &&
            tags.map((tag, tagIndex) => {
              return (
                <S key={tagIndex} sx={{ mr: [3] }}>
                  <Link to={`/tag/${tag.slug}`} title={tag.name}>
                    {capitalizeFirstLetter(tag.name)}
                  </Link>
                </S>
              )
            })}
          <S sx={{ mr: [3] }}>
            {node.modified && node.modified.length > 0
              ? node.modified
              : node.date}
          </S>
        </Flex>
      </Box>
      {fluid && fluid?.src?.length > 0 && (
        <Box
          sx={{
            my: [2, 3],
            "& img": {
              width: "100%",
            },
          }}
        >
          <Link to={`/post/${node.slug}`} title={node.slug}>
            <Image fluid={fluid} alt={node.title} title={node.title} />
          </Link>
        </Box>
      )}
      <Box
        sx={{
          maxWidth: "70ch",
          mx: "auto",
          pb: [3, 4],
          mb: [3, 4],
          border: "1px solid transparent",
          borderBottomColor: "text",
        }}
      >
        <P
          className="post-excerpt"
          dangerouslySetInnerHTML={{
            __html: decodeHtmlCharCodes(node.excerpt),
          }}
        />
        <div className="read-more-container">
          <Link to={`/post/${node.slug}`} title={node.slug}>
            <S className="read-more">Read more</S>
          </Link>
        </div>
      </Box>
    </Box>
  )
}
