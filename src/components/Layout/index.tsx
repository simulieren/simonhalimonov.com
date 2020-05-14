import React, { Component, RefObject, createRef } from "react"
import { Global } from "@emotion/core"
import { ParallaxProvider } from "react-scroll-parallax"
import { Box } from "theme-ui"

/**
 * Import fonts
 * Use a 'typeface-...' npm package or another local
 * `npm i typeface-...`
 * font for optimal performance
 */
import "typeface-ibm-plex-sans"
import "typeface-ibm-plex-serif"

import Header from "../Header"
import Footer from "../Footer"
import Transition from "../Transition/Transition"

export interface Props {
  children: React.ReactNode
  location: Location
  pageContext: {
    lang: string
    id?: number
    slug?: string
  }
}

/**
 * This is the main layout component that is being wrapped around each page
 * Here we add Global states, styles, settings and components like the header and footer.
 */
export class Layout extends Component<Props> {
  target: RefObject<HTMLDivElement> = createRef()

  render() {
    return (
      <>
        <Global
          styles={(theme) => ({
            "*": {
              boxSizing: "border-box",
              fontFamily: "IBM Plex Sans",
              lineHeight: 2,
              color: theme.colors.text,
            },
            html: {
              scrollBehavior: "smooth",
            },
            body: {
              margin: 0,
            },
            img: {
              maxWidth: "100%",
            },
            a: {
              color: theme.colors.text,
              "&:visited, &:link, a:active, a:hover": {
                color: theme.colors.text,
              },
              "&:hover": {
                opacity: 0.5,
              },
            },
            kbd: {
              border: "1px solid transparent",
              borderColor: "currentColor",
              padding: "2px 4px",
            },
            "em, i": {
              fontFamily: "IBM Plex Serif",
            },
            ".parallax-inner": {
              /* https://easings.net/en#easeOutCubic */
              transition: `transform 0.6s cubic-bezier(0.33, 1, 0.68, 1)`,
            },
          })}
        />
        <ParallaxProvider>
          <Box
            ref={this.target}
            sx={{
              backgroundColor: "background",
              transition: "background-color .1s ease",
              a: {
                color: "text",
                textDecoration: "underline",
              },
            }}
          >
            <Header
              location={this.props.location}
              lang={this.props.pageContext.lang}
            />

            <Transition location={this.props.location}>
              <Box sx={{ display: "flex", flexDirection: "column" }} as="main">
                {this.props.children}
              </Box>
              <Footer lang={this.props.pageContext.lang} />
            </Transition>
          </Box>
        </ParallaxProvider>
      </>
    )
  }
}

export default Layout
