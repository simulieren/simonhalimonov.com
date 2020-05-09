/** @jsx jsx */
import { jsx, Box } from "theme-ui"
import { Link } from "gatsby"
import Image, { FluidObject } from "gatsby-image"

import { H } from "../../components/Typography"

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
    </Box>
  )
}
