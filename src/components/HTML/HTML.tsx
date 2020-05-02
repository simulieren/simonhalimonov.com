/** @jsx jsx */
import { jsx, Flex, Box } from "theme-ui"
import parse, { domToReact } from "html-react-parser"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { ghcolors } from "react-syntax-highlighter/dist/esm/styles/prism"

import H from "../../components/Typography/H"
import P from "../../components/Typography/P"
import S from "../../components/Typography/S"

import { decodeHtmlCharCodes } from "../../utils"

const getLanguage = (attribs) => {
  if (attribs.class != null) {
    return attribs.class
  }
  return null
}

const getCode = (children) => {
  if (children.length > 0 && children[0].name === "code") {
    return children[0].children
  } else {
    return children
  }
}

const PostCode = ({ language, children }) => (
  <SyntaxHighlighter style={ghcolors} language={language}>
    {children}
  </SyntaxHighlighter>
)

const options = {
  replace: ({ attribs, children, name, ...rest }) => {
    const maxWidth = ["100%", "800px"]
    const mx = [3, 4]
    const px = [3, 4]

    if (
      name === "h1" ||
      name === "h2" ||
      name === "h3" ||
      name === "h4" ||
      name === "h5" ||
      name === "h6"
    ) {
      return (
        <Box sx={{ maxWidth, mx: "auto", px }}>
          <H as={name} sx={{ mb: [2, 4] }}>
            {domToReact(children, options)}
          </H>
        </Box>
      )
    }

    if (name === "p") {
      return (
        <P as={name} sx={{ maxWidth, mx: "auto", px }}>
          {domToReact(children, options)}
        </P>
      )
    }

    if (name === "ul" || name === "ol") {
      return (
        <Box
          as={name}
          sx={{
            maxWidth,
            mx: "auto",
            mb: [3],
            pl: 4,
            "& ul, & ol": {
              pl: [2],
            },
          }}
        >
          {domToReact(children, options)}
        </Box>
      )
    }

    if (name === "li") {
      return (
        <P as={name} sx={{ maxWidth, mx, mb: [1, 1, 1] }}>
          {domToReact(children, options)}
        </P>
      )
    }

    if (name === "hr") {
      return (
        <Box
          as={name}
          sx={{
            maxWidth,
            mx: "auto",
            px,
            my: [4],
            border: "1px solid transparent",
            borderColor: "text",
          }}
        />
      )
    }

    if (name === "figure") {
      const styles = {
        mx: "auto",
        mb: [5, 5, 5, 5],
        pb: [2, 3, 4],
        "& .gatsby-image-wrapper": {
          width: "100% !important",
          overflow: "visible !important",
        },
      }

      if (attribs?.class?.includes("alignwide")) {
        return (
          <Box
            as={name}
            sx={{
              maxWidth: "none",
              minWidth: ["100%", "90%"],
              ...styles,
              width: "85%",
              transform: "translateX(-50%)",
              position: "relative",
              left: "50%",
              margin: 0,
              pb: 6,
            }}
          >
            {domToReact(children, options)}
          </Box>
        )
      }

      if (attribs?.class?.includes("alignfull")) {
        return (
          <Box
            as={name}
            sx={{
              maxWidth: "none",
              ...styles,
              width: "100%",
              transform: "translateX(-50%)",
              position: "relative",
              left: "50%",
              margin: 0,
              pb: 6,
            }}
          >
            {domToReact(children, options)}
          </Box>
        )
      }

      // All other image blocks
      if (attribs?.class?.includes("size-large")) {
        return (
          <Box
            as={name}
            sx={{
              maxWidth,
              px: [2, 0],
              ...styles,
            }}
          >
            {domToReact(children, options)}
          </Box>
        )
      }

      // Gallery block
      if (attribs?.class?.includes("wp-block-gallery")) {
        return (
          <Box
            as={name}
            sx={{
              ...styles,
              mb: [3, 4],
              "& ul": {
                overflowX: "scroll",
                maxWidth: "none",
                display: "flex",
                listStyle: "none",
                mb: 0,
                pl: [0],
                "& li": {
                  width: "100%",
                  minWidth: "60%",
                  "& figure": {
                    p: [2],
                    m: 0,
                  },
                },
              },
              "& > ul + figcaption": {
                top: 0,
              },
            }}
          >
            {domToReact(children, options)}
          </Box>
        )
      }
    }

    if (name === "figcaption") {
      return (
        <S
          as={name}
          sx={{ maxWidth, mx: "auto", px, top: [4], position: "relative" }}
        >
          {domToReact(children, options)}
        </S>
      )
    }

    if (name === "figure") {
      if (attribs.class === "wp-block-pullquote") {
        return <Box as={name}>{domToReact(children, options)}</Box>
      }
    }

    if (name === "blockquote") {
      if (attribs.class === "wp-block-quote" || !attribs.class) {
        return (
          <Box
            as={name}
            sx={{
              maxWidth,
              mx: "auto",
              px,
              border: "2px solid transparent",
              borderLeftColor: "text",
              pl: [3, 4],
              mb: [3, 4],
              "& p": {
                pl: 0,
              },
            }}
          >
            {domToReact(children, options)}
          </Box>
        )
      }
    }

    if (name === "cite") {
      return (
        <S as={name} sx={{ maxWidth, mx: "auto" }}>
          {domToReact(children, options)}
        </S>
      )
    }

    if (name === "div") {
      // Buttons Block
      if (attribs?.class?.includes("wp-block-buttons")) {
        return (
          <Box
            as={name}
            sx={{
              maxWidth,
              mx: "auto",
              px,
              mb: [2, 4],
              display: "flex",
              flexDirection: ["column", "row"],
            }}
          >
            {domToReact(children, options)}
          </Box>
        )
      }
      if (attribs?.class?.includes("wp-block-button")) {
        return (
          <Box
            as={name}
            sx={{
              maxWidth,
              mx: "auto",
              py: [2],
              my: 2,
              px,
              display: "flex",
              flexDirection: ["column", "row"],
              border: "1px solid transparent",
              borderColor: "text",
              cursor: "pointer",
            }}
          >
            {domToReact(children, options)}
          </Box>
        )
      }
      // Cover Block
      if (attribs?.class?.includes("wp-block-cover")) {
        console.warn(
          "This block is not supported: wp-block-cover. \r\n It was not rendered in the page."
        )
        return <Box />
      }
      // Columns Block
      if (attribs?.class?.includes("wp-block-columns")) {
        return (
          <Box
            as={name}
            sx={{
              maxWidth,
              mx: "auto",
              mb: [3, 4],
              display: "flex",
              flexDirection: ["column", "row"],
              "& > div": {
                width: "100%",
              },
            }}
          >
            {domToReact(children, options)}
          </Box>
        )
      }

      // Media & Text Block
      if (attribs?.class?.includes("wp-block-media-text")) {
        const styles = {
          mx: "auto",
          px: [3, 0],
          "& .wp-block-media-text__media, & .wp-block-media-text__content": {
            width: "50% !important",
            overflow: "visible !important",
          },
          "& .wp-block-media-text__media": {
            m: 0,
            "& .gatsby-image-wrapper": {
              width: "100% !important",
            },
          },
          "& .wp-block-media-text__content": {
            p: [2, 3],
            display: "flex",
            flexDirection: ["column"],
            justifyContent: "center",
            alignItems: "center",
          },
        }
        const flexDirection = attribs?.class?.includes("has-media-on-the-right")
          ? ["row-reverse"]
          : ["row"]

        if (attribs?.class?.includes("alignwide")) {
          return (
            <Box
              as={name}
              sx={{
                maxWidth: "none",
                minWidth: maxWidth,
                ...styles,
                width: "85%",
                transform: "translateX(-50%)",
                position: "relative",
                left: "50%",
                margin: 0,
                display: "flex",
                flexDirection,
              }}
            >
              {domToReact(children, options)}
            </Box>
          )
        }

        if (attribs?.class?.includes("alignfull")) {
          return (
            <Box
              as={name}
              sx={{
                maxWidth: "none",
                ...styles,
                width: "100%",
                transform: "translateX(-50%)",
                position: "relative",
                left: "50%",
                margin: 0,
                display: "flex",
                flexDirection,
              }}
            >
              {domToReact(children, options)}
            </Box>
          )
        }
      }
    }

    if (name === "pre") {
      return (
        children.length > 0 && (
          <Box as={name} sx={{ maxWidth, mx: "auto", px, mb: [3, 4] }}>
            <PostCode language={getLanguage(attribs)}>
              {domToReact(getCode(children))}
            </PostCode>
          </Box>
        )
      )
    }
  },
}

const parseFunctions = (html: string) => {
  html = decodeHtmlCharCodes(html)
  return parse(html, options)
}

export default ({ html, sx }: { html: string; sx?: any }) => (
  <Box
    sx={{
      ml: [-20, -40],
      mr: [-20, -40],
      mb: [3, 4],
      position: "relative",
      ...sx,
    }}
    className="post-content"
  >
    {parseFunctions(html)}
  </Box>
)
