import React from "react"
import { graphql } from "gatsby"
import { Flex, Box, Grid } from "theme-ui"
import { motion } from "framer-motion"
import { Parallax } from "react-scroll-parallax"

import SEO from "../../components/SEO"

import H from "../../components/Typography/H"
import P from "../../components/Typography/P"
import S from "../../components/Typography/S"

import InviewMotion from "../../components/InviewMotion/InviewMotion"

import WorkSlider from "../../components/WorkSlider/WorkSlider"
import { AnimateWords } from "../../components/AnimateWords/AnimateWords"
import Section from "../../components/Layout/Section"

import { Page } from "../../contracts/page"

export interface Props {
  pageContext: {
    edges: [{ node: Page }]
  }
  location: Location
}

export const Homepage = (props: Props) => {
  const workpages = props.pageContext.edges

  return (
    <>
      <SEO title="Home" />

      <Section>
        <Flex
          sx={{
            flexDirection: ["column", "column", "column", "column", "row"],
          }}
        >
          <Box
            sx={{
              p: [3, 4],
              py: [4, 5, 6],
              mt: [6, 0],
              zIndex: 10,
              height: ["auto", "50vh", "50vh", "100vh"],
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <Parallax y={[-20, 20]}>
                <H>
                  Simon Halimonov <br />
                  I'm a <AnimateWords /> <br />
                </H>

                <Box
                  as="a"
                  href="#design"
                  sx={{ mt: [3, 4, 5, 6], display: "block" }}
                >
                  <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, loop: Infinity }}
                  >
                    <svg
                      width="52"
                      height="28"
                      viewBox="0 0 26 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <motion.path
                        d="M1 1L13 13L25 1"
                        stroke="currentColor"
                        stroke-linecap="square"
                        initial={{ pathLength: 1, pathOffset: 0 }}
                        animate={{
                          pathLength: [0.5, 1, 0.5],
                          pathOffset: [1, 0, 0],
                        }}
                        transition={{ duration: 2, delay: 0.3, yoyo: Infinity }}
                      />
                    </svg>
                  </motion.div>
                </Box>
              </Parallax>
            </motion.div>
          </Box>

          <WorkSlider data={workpages} time={10000} />
        </Flex>
      </Section>

      <Section>
        <Grid sx={{ px: [3, 4] }} gap={[3, 4, 5]} columns={[12]}>
          <Box sx={{ gridColumn: ["1/4"] }}>
            <Box
              sx={{
                position: "sticky",
                top: [3, 4],
              }}
            >
              <S as="a" href="#design" title="Design" sx={{ display: "block" }}>
                <InviewMotion>Design</InviewMotion>
              </S>
              <S
                as="a"
                href="#development"
                title="Development"
                sx={{ display: "block" }}
              >
                <InviewMotion>Development</InviewMotion>
              </S>
              <S
                as="a"
                href="#mission"
                title="Mission"
                sx={{ display: "block" }}
              >
                <InviewMotion>Mission</InviewMotion>
              </S>
              <S
                as="a"
                href="#teaching"
                title="Teaching"
                sx={{ display: "block" }}
              >
                <InviewMotion>Teaching</InviewMotion>
              </S>
              <S as="a" href="#hire" title="Hire" sx={{ display: "block" }}>
                <InviewMotion>Hire</InviewMotion>
              </S>
            </Box>
          </Box>
          <Box sx={{ gridColumn: ["4/13"] }}>
            <S
              id="design"
              sx={{
                textTransform: "uppercase",
                letterSpacing: "0.2em",
              }}
            >
              <InviewMotion>Design Services</InviewMotion>
            </S>
            <H>
              <InviewMotion>DIGITAL DESIGN</InviewMotion>
            </H>

            <H>
              <InviewMotion>
                I design with a focus on User Interfaces and User Experiences
                with a systematic approach. Informed by strong technical
                expertise.
              </InviewMotion>
            </H>

            <Grid columns={[3]} gap={[3, 4, 5]} mt={[3, 4, 5]}>
              <S
                sx={{
                  textTransform: "uppercase",
                  color: "textlight",
                  letterSpacing: "0.2em",
                }}
              >
                <InviewMotion>Services</InviewMotion>
              </S>
              <P>
                <InviewMotion>Research</InviewMotion>
              </P>
              <P>
                <InviewMotion>Ideation</InviewMotion>
              </P>
              <P>
                <InviewMotion>Concept</InviewMotion>
              </P>
              <P>
                <InviewMotion>Presentation</InviewMotion>
              </P>
              <P>
                <InviewMotion>User Interface Design</InviewMotion>
              </P>
              <P>
                <InviewMotion>Design Prototyping</InviewMotion>
              </P>
            </Grid>

            <S
              id="development"
              sx={{
                mt: [6],
                textTransform: "uppercase",
                letterSpacing: "0.2em",
              }}
            >
              <InviewMotion>Development Services</InviewMotion>
            </S>
            <H>
              <InviewMotion>DIGITAL DEVELOPMENT</InviewMotion>
            </H>

            <H>
              <InviewMotion>
                I develop focused on a modern all rounder approach executed in
                JavaScript for a wide variety of applications.
              </InviewMotion>
            </H>

            <Grid columns={[3]} gap={[3, 4, 5]} mt={[3, 4, 5]}>
              <S
                sx={{
                  textTransform: "uppercase",
                  color: "textlight",
                  letterSpacing: "0.2em",
                }}
              >
                <InviewMotion>Services</InviewMotion>
              </S>
              <P>
                <InviewMotion>Research</InviewMotion>
              </P>
              <P>
                <InviewMotion>Ideation</InviewMotion>
              </P>
              <P>
                <InviewMotion>Concept</InviewMotion>
              </P>
              <P>
                <InviewMotion>Presentation</InviewMotion>
              </P>
              <P>
                <InviewMotion>User Interface Design</InviewMotion>
              </P>
              <P>
                <InviewMotion>Design Prototyping</InviewMotion>
              </P>
            </Grid>

            <S
              id="mission"
              sx={{
                mt: [6],
                textTransform: "uppercase",
                letterSpacing: "0.2em",
              }}
            >
              <InviewMotion>Mission</InviewMotion>
            </S>

            <H sx={{ mt: [2] }}>
              <InviewMotion>
                As an independent Digital Product Designer and Frontend
                Developer I conceive, design and develop digital products for
                companies and company founders. My goal is to make technical and
                complex processes user-friendly. For cross-platform solutions, I
                work with proven processes and state-of-the-art technology. In
                order to bridge functionality and design, I create
                comprehensively designed user interfaces for your website or
                app.
              </InviewMotion>
            </H>

            <S
              id="teaching"
              sx={{
                mt: [6],
                textTransform: "uppercase",
                letterSpacing: "0.2em",
              }}
            >
              <InviewMotion>Teaching</InviewMotion>
            </S>

            <H sx={{ mt: [2] }}>
              <InviewMotion>
                I teach at the Digital Career Institute.
              </InviewMotion>
            </H>
            <H>
              <InviewMotion>
                Since December 2018 I have taught over 100 participants about
                webdevelopment. I worked together with other teachers on the
                curriculum and taught the students how to program. From HTML,
                CSS and JavaScript to React.js, Node.js and MongoDB I trained
                the students to become Fullstack JavaScript Developers.
              </InviewMotion>
            </H>

            <P
              id="hire"
              sx={{
                textTransform: "uppercase",
                mt: [6],
              }}
            >
              <InviewMotion>Hire me</InviewMotion>
            </P>

            <H sx={{ mt: [2] }}>
              <InviewMotion>How I can help you</InviewMotion>
            </H>

            <InviewMotion>
              <Flex>
                <H sx={{ mr: [4] }}>1.</H>
                <H>
                  I plan, conceive, design and realize your digital project.
                </H>
              </Flex>
            </InviewMotion>
            <InviewMotion>
              <Flex>
                <H sx={{ mr: [4] }}>2.</H>
                <H>I support your team with my competences in your project.</H>
              </Flex>
            </InviewMotion>
            <InviewMotion>
              <Flex>
                <H sx={{ mr: [4] }}>3.</H>
                <H>
                  I'm giving her team a workshop to take you to the next level.
                </H>
              </Flex>
            </InviewMotion>
            <InviewMotion>
              <Flex>
                <H sx={{ mr: [4] }}>4.</H>
                <H>
                  I'm talking about current topics in the field of design and
                  development at your event.
                </H>
              </Flex>
            </InviewMotion>
          </Box>
        </Grid>
      </Section>
    </>
  )
}

export default Homepage

export const query = graphql`
  query {
    allWordpressPage(filter: { path: { regex: "/work/./" } }) {
      nodes {
        slug
        path
        status
        title
        featured_media {
          localFile {
            childImageSharp {
              fluid(quality: 85) {
                aspectRatio
                src
                srcSet
                sizes
                base64
                srcWebp
                srcSetWebp
              }
            }
          }
        }
      }
    }
  }
`
