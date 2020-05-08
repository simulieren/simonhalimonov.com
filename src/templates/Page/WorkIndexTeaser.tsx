/** @jsx jsx */
import { jsx, Box } from "theme-ui"
import { Link } from "gatsby"
import Image, { FluidObject } from "gatsby-image"

import H from "../../components/Typography/H"
import P from "../../components/Typography/P"
import S from "../../components/Typography/S"

import { Page } from "../../contracts/page"
import { decodeHtmlCharCodes } from "../../utils"

export default ({ node }: { node: Page }) => {
  const fluid: FluidObject | null =
    node?.featured_media?.localFile?.childImageSharp?.fluid || null

  return (
    <Box as="article" key={node.slug} sx={{ mb: [4, 5] }}>
      <Box sx={{ maxWidth: "70ch", mx: "auto" }}>
        <Link to={node.path} title={node.slug}>
          <H>{decodeHtmlCharCodes(node?.title)}</H>
        </Link>
      </Box>
      {fluid && fluid?.src?.length > 0 && (
        <Box sx={{ my: [2, 3] }}>
          <Link to={node.path} title={node.slug}>
            <Image fluid={fluid} alt={node?.title} title={node?.title} />
          </Link>
        </Box>
      )}
      <Box
        sx={{
          maxWidth: "70ch",
          mx: "auto",
          pb: [3, 4],
          mb: [3, 4],
          // border: "1px solid transparent",
          // borderBottomColor: "text",
        }}
      >
        {/* <P
          dangerouslySetInnerHTML={{
            __html: decodeHtmlCharCodes(node.excerpt),
          }}
        /> */}
        {/* <div>
          <Link to={node.path} title={node.slug}>
            <S>Read more</S>
          </Link>
        </div> */}
      </Box>
    </Box>
  )
}
