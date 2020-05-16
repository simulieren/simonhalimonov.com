/** @jsx jsx */
import { jsx, Flex, Box } from "theme-ui"
import { Link } from "gatsby"
import Image, { FluidObject } from "gatsby-image"

import { H, P, S, XS } from "../../components/Typography"

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

  const date =
    node?.modified && node?.modified.length > 0 ? node?.modified : node?.date
  return (
    <Box
      as="article"
      key={node.slug}
      sx={{
        mb: [4, 5],
        display: "flex",
        flexDirection: ["column", "column", "row"],
      }}
    >
      {fluid && fluid?.src?.length > 0 && (
        <Box
          sx={{
            width: ["100%", "33%"],
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
      <Box sx={{ width: "100%" }}>
        <Box sx={{ maxWidth: "70ch", mx: "auto" }}>
          <Link to={`/post/${node.slug}`} title={node.slug}>
            <H>{decodeHtmlCharCodes(node.title)}</H>
          </Link>
        </Box>
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
            dangerouslySetInnerHTML={{
              __html: decodeHtmlCharCodes(node.excerpt),
            }}
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: ["column-reverse", "column-reverse", "row"],
              justifyContent: "space-between",
              alignItems: "baseline",
            }}
          >
            <Link to={`/post/${node.slug}`} title={node.title}>
              <S>Read more</S>
            </Link>

            <Flex sx={{ alignItems: "baseline", flexWrap: "wrap" }}>
              <XS sx={{ pr: 1 }}>{date}</XS>
              <XS sx={{ p: 1 }}>Category: </XS>
              {categories &&
                categories.length > 0 &&
                categories.map((category, categoryIndex) => {
                  return (
                    <XS key={categoryIndex} sx={{ p: 1 }}>
                      <Link
                        to={`/category/${category.slug}`}
                        title={category.name}
                      >
                        {capitalizeFirstLetter(category.name)}
                      </Link>
                    </XS>
                  )
                })}

              <XS sx={{ p: 1 }}>Tags: </XS>
              {tags &&
                tags.length > 0 &&
                tags.map((tag, tagIndex) => {
                  return (
                    <XS key={tagIndex} sx={{ p: 1 }}>
                      <Link to={`/tag/${tag.slug}`} title={tag.name}>
                        {capitalizeFirstLetter(tag.name)}
                      </Link>
                    </XS>
                  )
                })}
            </Flex>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
