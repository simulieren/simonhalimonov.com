import React from "react"
import { Box, useThemeUI } from "theme-ui"
import parse, {
  domToReact,
  HTMLReactParserOptions,
  DomElement,
} from "html-react-parser"
// @ts-ignore
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import {
  ghcolors,
  atomDark,
  // @ts-ignore
} from "react-syntax-highlighter/dist/esm/styles/prism"

import { H, P, S } from "../../components/Typography"

import { decodeHtmlCharCodes } from "../../utils"

const getLanguage = (attribs: { [s: string]: string }) => {
  if (attribs.class != null) {
    return attribs.class.replace("wp-block-code ", "")
  }
  return null
}

const getCode = (children: DomElement[]) => {
  if (typeof children === "undefined") return

  if (children.length > 0 && children[0].name === "code") {
    return children[0].children
  } else {
    return children
  }
}

const PostCode = ({
  language,
  children,
}: {
  language: string
  children: DomElement[]
}) => {
  const context = useThemeUI()
  const { colorMode } = context

  return (
    <SyntaxHighlighter
      style={colorMode === "default" ? ghcolors : atomDark}
      language={language}
    >
      {children}
    </SyntaxHighlighter>
  )
}

const options: HTMLReactParserOptions = {
  replace: ({ attribs, children, name, ...rest }: DomElement) => {
    const maxWidth = ["100%", "800px"]
    const mx = [3, 4]
    const px = [0]

    // This fixes a weird bug where the base64 image doesn't
    // disappear when img scrolled into view
    const base64Bug = {
      '& img[aria-hidden="true"]': {
        opacity: "0 !important",
      },
    }

    if (typeof children === "undefined") return

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
            width: "64px",
            mx: "auto",
            px,
            my: [4],
            border: "1px solid transparent",
            borderColor: "textlight",
          }}
        />
      )
    }

    // Image block
    if (name === "figure") {
      const styles = {
        mx: "auto",
        mb: [5, 5, 5, 5],
        pb: [2, 3, 4],
        "& .gatsby-image-wrapper, & > img": {
          width: "100% !important",
          maxWidth: "100% !important",
          overflow: "visible !important",
        },
        ...base64Bug,
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
              maxWidth: "100%",
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
              mx: [-20, -40],
              "& ul": {
                "&::-webkit-scrollbar": {
                  display: "none",
                },
                overflowX: "scroll",
                maxWidth: "none",
                display: "flex",
                listStyle: "none",
                mb: 0,
                pl: [0],
                "& li": {
                  width: "100%",
                  minWidth: ["120%", "50%"],
                  "& figure": {
                    p: [2],
                    m: 0,
                  },
                  ...base64Bug,
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
      if (attribs?.class === "wp-block-pullquote") {
        return <Box as={name}>{domToReact(children, options)}</Box>
      }
    }

    if (name === "blockquote") {
      if (attribs?.class === "wp-block-quote" || !attribs?.class) {
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

    // Button
    if (name === "a") {
      if (attribs?.class?.includes("wp-block-button__link")) {
        return (
          <Box
            as={name}
            sx={{
              maxWidth,
              display: "inline-block",
              mx: "auto",
              width: "auto",
              py: [2],
              my: 2,
              px: [3, 4],
              border: "1px solid transparent",
              borderColor: "text",
              cursor: "pointer",
            }}
            //@ts-ignore
            target={attribs?.target}
            href={attribs?.href}
            rel={attribs?.rel}
          >
            {domToReact(children, options)}
          </Box>
        )
      }
    }

    if (name === "div") {
      // Buttons Block
      if (attribs?.class?.includes("wp-block-buttons")) {
        return (
          <Box
            as={name}
            sx={{
              maxWidth,
              width: "auto",
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
              width: "auto",
              py: [2],
              my: 2,
              px,
              display: "flex",
              flexDirection: ["column", "row"],
            }}
          >
            {domToReact(children, options)}
          </Box>
        )
      }

      // Cover Block
      // FIXME: cover is not supported because it uses a CSS background-image
      // This has to be fixed during the build time, while creating nodes
      if (attribs?.class?.includes("wp-block-cover")) {
        console.warn(
          "This block is not supported: wp-block-cover. \r\n It was not rendered in the page."
        )
        return <Box />
      }
      // Columns Block
      if (attribs?.class?.includes("wp-block-columns")) {
        const styles = {
          maxWidth,
          mx: "auto",
          mb: [3, 4],
          display: "flex",
          flexDirection: ["column", "row"],
          "& > div": {
            width: "100%",
            mb: [3, 4],
          },
        }

        // Full width columns block
        if (attribs?.class?.includes("alignfull")) {
          return (
            <Box
              as={name}
              sx={{
                ...styles,
                maxWidth: "100%",
                width: "100%",
                transform: "translateX(-50%)",
                position: "relative",
                left: "50%",
                margin: 0,
                display: "flex",
              }}
            >
              {domToReact(children, options)}
            </Box>
          )
        }

        return (
          <Box
            as={name}
            sx={{
              ...styles,
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
          pb: [3, 4],
          px: [0, 3, 0],
          "& .wp-block-media-text__media, & .wp-block-media-text__content": {
            width: ["100% !important", "50% !important"],
            overflow: "visible !important",
          },
          "& .wp-block-media-text__media": {
            m: 0,
            display: "flex",
            flexDirection: ["column"],
            justifyContent: "center",
            alignItems: "center",
            "& .gatsby-image-wrapper": {
              width: "100% !important",
            },
            ...base64Bug,
          },
          "& .wp-block-media-text__content": {
            p: [0, 3],
            display: "flex",
            flexDirection: ["column"],
            justifyContent: "center",
            alignItems: "flex-start",
            "& > *": {
              mx: 0,
              px: 0,
            },
          },
        }
        const flexDirection = attribs?.class?.includes("has-media-on-the-right")
          ? ["column", "row-reverse"]
          : ["column", "row"]

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

    if (attribs?.class?.includes("wp-block-embed")) {
      return (
        <Box
          as={name}
          sx={{
            maxWidth,
            mx: "auto",
            mb: [3, 4],
            width: "100%",
            "& iframe": {
              width: "100%",
            },
          }}
        >
          {domToReact(children, options)}
        </Box>
      )
    }

    // FIXME: Self closing iframe tags break the parsing algorithm
    // if (name === "iframe") {
    //   console.log(next)
    //   return (
    //     <Box>
    //       <Box
    //         as={name}
    //         {...attribs}
    //         sx={{
    //           maxWidth,
    //           mx: "auto",
    //           mb: [3, 4],
    //           width: "100%",
    //         }}
    //       ></Box>
    //       {/* {domToReact(children, options)} */}
    //     </Box>
    //   )
    // }

    if (name === "pre") {
      if (typeof children === "undefined") return

      return (
        children.length > 0 &&
        typeof children !== "undefined" && (
          <Box
            as={name}
            sx={{
              maxWidth,
              mx: "auto",
              px,
              mb: [3, 4],
              width: "100%",
              overflowX: "scroll",
            }}
          >
            <PostCode language={getLanguage(attribs)}>
              {domToReact(getCode(children))}
            </PostCode>
          </Box>
        )
      )
    }
  },
}

const parseFunctions = (html: string | undefined) => {
  if (typeof html === "string") {
    html = decodeHtmlCharCodes(html)
    return parse(html, options)
  } else {
    return null
  }
}

export default ({ html, sx }: { html: string; sx?: any }) => (
  <Box
    sx={{
      ml: [0],
      mr: [0],
      mb: [3, 4],
      position: "relative",
      gridColumn: ["1/5", "1/5"],
      ...sx,
    }}
    className="post-content"
  >
    {parseFunctions(html)}
  </Box>
)
