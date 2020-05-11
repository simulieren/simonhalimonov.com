import React from "react"
import { Flex, Box, Grid } from "theme-ui"
import { motion } from "framer-motion"

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
    lang: string
  }
  location: Location
}

export const Homepage = (props: Props) => {
  const workpages = props.pageContext.edges
  const lang = props.pageContext.lang

  return (
    <>
      <SEO title="Home" lang={lang} />

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
              mt: [6, 6, 0],
              zIndex: 10,
              minHeight: ["auto", "50vh", "50vh", "100vh"],
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              width: ["100%", "100%", "50%"],
            }}
          >
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
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
              <InviewMotion>
                <S
                  as="a"
                  href="#design"
                  title="Design"
                  sx={{ display: "block" }}
                >
                  Design
                </S>
              </InviewMotion>
              <InviewMotion>
                <S
                  as="a"
                  href="#development"
                  title="Development"
                  sx={{ display: "block" }}
                >
                  Development
                </S>
              </InviewMotion>
              <InviewMotion>
                <S
                  as="a"
                  href="#mission"
                  title="Mission"
                  sx={{ display: "block" }}
                >
                  Mission
                </S>
              </InviewMotion>
              <InviewMotion>
                <S
                  as="a"
                  href="#teaching"
                  title="Teaching"
                  sx={{ display: "block" }}
                >
                  Teaching
                </S>
              </InviewMotion>
              <InviewMotion>
                <S as="a" href="#hire" title="Hire" sx={{ display: "block" }}>
                  Hire
                </S>
              </InviewMotion>
            </Box>
          </Box>
          <Box sx={{ gridColumn: ["4/13"] }}>
            <InviewMotion>
              <S
                id="design"
                sx={{
                  textTransform: "uppercase",
                  letterSpacing: "0.2em",
                }}
              >
                Design Services
              </S>
            </InviewMotion>
            <InviewMotion>
              <H>DIGITAL DESIGN</H>
            </InviewMotion>

            <InviewMotion>
              <H>
                I design with a focus on User Interfaces and User Experiences
                with a systematic approach. Informed by strong technical
                expertise.
              </H>
            </InviewMotion>

            <Grid columns={[1, 2, 2, 3]} gap={[2, 2, 3, 5]} mt={[3, 4, 5]}>
              <InviewMotion>
                <S
                  sx={{
                    textTransform: "uppercase",
                    color: "textlight",
                    letterSpacing: "0.2em",
                  }}
                >
                  Services
                </S>
              </InviewMotion>
              <InviewMotion>
                <P>Research</P>
              </InviewMotion>
              <InviewMotion>
                <P>Ideation</P>
              </InviewMotion>
              <InviewMotion>
                <P>Concept</P>
              </InviewMotion>
              <InviewMotion>
                <P>Presentation</P>
              </InviewMotion>
              <InviewMotion>
                <P>Digital Art Direction</P>
              </InviewMotion>
              <InviewMotion>
                <P>User Interface Design</P>
              </InviewMotion>
              <InviewMotion>
                <P>User Experience Design</P>
              </InviewMotion>
              <InviewMotion>
                <P>Design Prototyping</P>
              </InviewMotion>
            </Grid>

            <InviewMotion>
              <S
                id="development"
                sx={{
                  mt: [6],
                  textTransform: "uppercase",
                  letterSpacing: "0.2em",
                }}
              >
                Development Services
              </S>
            </InviewMotion>
            <InviewMotion>
              <H>DIGITAL DEVELOPMENT</H>
            </InviewMotion>

            <InviewMotion>
              <H>
                I develop focused on a modern all rounder approach executed in
                JavaScript for a wide variety of applications.
              </H>
            </InviewMotion>

            <Grid columns={[1, 2, 2, 3]} gap={[2, 2, 3, 5]} mt={[3, 4, 5]}>
              <InviewMotion>
                <S
                  sx={{
                    textTransform: "uppercase",
                    color: "textlight",
                    letterSpacing: "0.2em",
                  }}
                >
                  Services
                </S>
              </InviewMotion>
              <InviewMotion>
                <P>Frontend Development</P>
              </InviewMotion>
              <InviewMotion>
                <P>React.js Development</P>
              </InviewMotion>
              <InviewMotion>
                <P>GatsbyJS Development</P>
              </InviewMotion>
              <InviewMotion>
                <P>Next.js Development</P>
              </InviewMotion>
              <InviewMotion>
                <P>Node.js Development</P>
              </InviewMotion>
              <InviewMotion>
                <P>Electron Development</P>
              </InviewMotion>
              <InviewMotion>
                <P>JavaScript + TypeScript</P>
              </InviewMotion>
              <InviewMotion>
                <P>Performance Optimization</P>
              </InviewMotion>
              <InviewMotion>
                <P>Mobile Optimization</P>
              </InviewMotion>
              <InviewMotion>
                <P>User Interface Animation</P>
              </InviewMotion>
              <InviewMotion>
                <P>Technical Prototyping</P>
              </InviewMotion>
            </Grid>

            <InviewMotion>
              <S
                id="mission"
                sx={{
                  mt: [6],
                  textTransform: "uppercase",
                  letterSpacing: "0.2em",
                }}
              >
                Mission
              </S>
            </InviewMotion>

            <InviewMotion>
              <H sx={{ mt: [2] }}>
                As an independent Digital Product Designer and Frontend
                Developer I conceive, design and develop digital products for
                companies and company founders. My goal is to make technical and
                complex processes user-friendly. For cross-platform solutions, I
                work with proven processes and state-of-the-art technology. In
                order to bridge functionality and design, I create
                comprehensively designed user interfaces for your website or
                app.
              </H>
            </InviewMotion>

            <InviewMotion>
              <S
                id="teaching"
                sx={{
                  mt: [6],
                  textTransform: "uppercase",
                  letterSpacing: "0.2em",
                }}
              >
                Teaching
              </S>
            </InviewMotion>

            <InviewMotion>
              <H sx={{ mt: [2] }}>I teach at the Digital Career Institute.</H>
            </InviewMotion>
            <InviewMotion>
              <H>
                Since December 2018 I have taught over 100 participants about
                webdevelopment. I worked together with other teachers on the
                curriculum and taught the students how to program. From HTML,
                CSS and JavaScript to React.js, Node.js and MongoDB I trained
                the students to become Fullstack JavaScript Developers.
                <br></br>I have taught more than 1200 hours in the classroom and
                have given 20 workshops in three different cities in Germany. I
                teach on “Fullstack JavaScript Development” and “Design for
                Developers”.
              </H>
            </InviewMotion>

            <InviewMotion>
              <P
                id="hire"
                sx={{
                  textTransform: "uppercase",
                  mt: [6],
                }}
              >
                Hire me
              </P>
            </InviewMotion>

            <InviewMotion>
              <H sx={{ mt: [2] }}>How I can help you</H>
            </InviewMotion>

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
