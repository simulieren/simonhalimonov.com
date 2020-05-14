/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { Box, useColorMode, Flex } from "theme-ui"
import { Sun, Moon } from "react-feather"
import { motion } from "framer-motion"

import Logo from "../Logo/Logo"
import { XS } from "../Typography"

export interface Props {
  location: Location
  lang: string
}

interface MenuNode {
  node: {
    items: {
      object: string
      title: string
      url: string
    }[]
    name: string
  }
}

const MenuItem = ({ title, url }: MenuNode["node"]["items"][0]) => (
  <XS sx={{ mr: [4, 4, 5], "& a": { textDecoration: "none" } }}>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
    >
      <Link to={url} title={title}>
        {title}
      </Link>
    </motion.div>
  </XS>
)

const normalizeLinks = (links: MenuNode["node"]["items"]) => {
  const normalizedItems = links.map((item) => {
    if (item.object === "custom") {
      return item
    } else {
      try {
        const url = new URL(item.url)
        return { ...item, url: url.pathname }
      } catch (error) {
        return item
      }
    }
  })
  return normalizedItems
}

export const Header = ({ lang }: Props) => {
  // Switching color themes
  const [colorMode, setColorMode] = useColorMode()

  /**
   * Query all menu items and site languages
   */
  const query = useStaticQuery(graphql`
    query {
      allWordpressWpApiMenusMenusItems {
        edges {
          node {
            name
            items {
              title
              url
              object
            }
          }
        }
      }
      site {
        siteMetadata {
          languages {
            default {
              name
              locale
              pathPrefix
            }
            german {
              name
              locale
              pathPrefix
            }
          }
        }
      }
    }
  `)

  const menuEdges = query.allWordpressWpApiMenusMenusItems.edges
  const languages = query.site.siteMetadata.languages

  /**
   * Check if lang is available
   * Otherwise use default as fallback language
   */
  const currentMenuLang = lang || languages.default.locale

  const currentMenuItems: MenuNode["node"]["items"] = menuEdges.filter(
    (edge: MenuNode) => edge.node.name.includes(`[${currentMenuLang}]`)
  )[0].node.items

  // Get the first menu item it will be normalized to a relative path
  // This menu item will be used for the logo
  const homepageLink = normalizeLinks([currentMenuItems[0]])[0]

  /**
   * Remove IP/domain of headless WP links
   * Skip the first link with slice
   */
  const normalizedItems = normalizeLinks(currentMenuItems).slice(1)

  /**
   * SVG to Base64 for Favicon
   */
  React.useEffect(() => {
    if (typeof window !== "undefined") {
      let logo = document.querySelector("#logo")
      let svg = new XMLSerializer().serializeToString(
        //@ts-ignore
        logo
      )
      if (colorMode === "dark") {
        svg = svg.replace(`fill="#000"`, `fill="#fff"`)
      } else if (colorMode === "default") {
        svg = svg.replace(`fill="#fff"`, `fill="#000"`)
      }
      const encodedData = window.btoa(svg)

      const link = document.createElement("link")
      const oldLink = document.querySelector(`link[rel="icon"]`)
      link.id = "dynamic-favicon"
      link.rel = "icon"
      link.href = `data:image/svg+xml;base64,${encodedData}`
      if (oldLink) {
        document.head.removeChild(oldLink)
      }
      document.head.appendChild(link)
    }
  }, [colorMode])

  return (
    <Box
      as="header"
      className="header"
      sx={{
        p: [3, 4],
        display: "flex",
        alignItems: "center",
        position: "absolute",
        zIndex: 1000,
        width: "100%",
      }}
    >
      <Link to={homepageLink.url} title={homepageLink.title}>
        <Box
          sx={{
            mr: [4, 4, 5],
            "svg path": { fill: "text" },
          }}
        >
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <Logo />
          </motion.div>
        </Box>
      </Link>
      {normalizedItems.map((item, index) => (
        <MenuItem key={index} {...item} />
      ))}

      <XS
        sx={{
          "&:hover": { opacity: 0.5, cursor: "pointer" },
        }}
        onClick={() => {
          setColorMode(colorMode === "default" ? "dark" : "default")
        }}
      >
        {colorMode === "default" ? (
          <motion.div
            key={"moon"}
            style={{ marginTop: ".35em" }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.5 }}
          >
            <Moon strokeWidth={1} />
          </motion.div>
        ) : (
          <motion.div
            key={"sun"}
            style={{ marginTop: ".35em" }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.5 }}
          >
            <Sun strokeWidth={1} />
          </motion.div>
        )}
      </XS>
    </Box>
  )
}

export default Header
