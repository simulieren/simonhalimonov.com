import React, { Component, RefObject, createRef } from "react"
import { Global } from "@emotion/core"
import { ParallaxProvider } from "react-scroll-parallax"
import { Box } from "theme-ui"

// Import fonts
import "typeface-ibm-plex-sans"

import Header from "../Header"
import Footer from "../Footer"
import Transition from "../Transition/Transition"

export interface Props {
  children: React.ReactNode
  location: Location
}

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
            },
            html: {
              scrollBehavior: "smooth",
            },
            body: {
              margin: 0,
            },
            kbd: {
              border: "1px solid transparent",
              borderColor: "currentColor",
              padding: "2px 4px",
            },
            ".parallax-inner": {
              /* https://easings.net/en#easeOutCubic */
              transition: `transform 0.6s cubic-bezier(0.33, 1, 0.68, 1)`,
            },
          })}
        />
        <Box
          ref={this.target}
          sx={{
            backgroundColor: "background",
            transition: "background-color .1s ease",
            a: {
              color: "text",
              textDecoration: "underline",
              "&:hover": {
                opacity: 0.5,
              },
            },
          }}
        >
          <Header location={this.props.location} />
          <ParallaxProvider>
            <Transition location={this.props.location}>
              <main>{this.props.children}</main>
              <Footer />
            </Transition>
          </ParallaxProvider>
        </Box>
      </>
    )
  }
}

export default Layout
