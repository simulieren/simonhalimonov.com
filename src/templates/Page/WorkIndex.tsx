import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Grid, Box } from "theme-ui"
import { motion } from "framer-motion"
import { useController } from "react-scroll-parallax"

import useInterval from "../../utils/useInterval"

import SEO from "../../components/SEO"

import { PageTitleAnimation } from "../../components/Layout/PageTitleAnimation"

import { P, XS } from "../../components/Typography"

import WorkIndexTeaser from "./WorkIndexTeaser"

import { Page } from "../../contracts/page"

export interface Props {
  pageContext: {
    edges: [{ node: Page }]
    page: { node: Page }
    lang: string
  }
  location: Location
}

export default (props: Props) => {
  const {
    edges,
    page: { node: page },
  } = props.pageContext

  const lang = props.pageContext.lang

  const date = page.modified || page.date

  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)

  const { parallaxController } =
    typeof window !== "undefined"
      ? useController()
      : { parallaxController: null }

  useInterval(() => {
    if (typeof parallaxController === null) return

    parallaxController?.update()
  }, 200)

  return (
    <>
      <SEO
        title={`${site.siteMetadata.title} | ${site.siteMetadata.description}`}
        description={site.siteMetadata.description}
        lang={lang}
        datePublished={date}
      />

      <PageTitleAnimation>{page.title}</PageTitleAnimation>

      <Grid
        sx={{ p: [3, 4], pt: [6, 7, 8], overflowX: "hidden" }}
        gap={[3, 4, 5]}
        columns={[1]}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 1],
          }}
          transition={{ duration: 2, delay: 1, ease: [0.33, 1, 0.68, 1] }}
        >
          {edges.map(WorkIndexTeaser)}
        </motion.div>
      </Grid>
      <Grid sx={{ p: [3, 4] }} gap={[3, 4, 5]} columns={[2, 4]}>
        <Box sx={{ gridColumn: ["1/3", "1/5"] }}>
          <P sx={{ textAlign: "center" }}>References</P>
          <XS sx={{ textAlign: "center" }}>
            While working at{" "}
            <a
              title="alle freiheit Werbeagentur GmbH"
              href="https://allefreiheit.de/"
              target="_blank"
              rel="noreferrer noopener nofollow external"
            >
              alle freiheit Werbeagentur GmbH
            </a>
          </XS>
        </Box>

        <Box>
          <P
            as="a"
            title="Folienjargon"
            href="https://www.folienjargon.de/"
            target="_blank"
            rel="noreferrer noopener nofollow external"
          >
            folienjargon.de
          </P>
        </Box>
        <Box>
          <P
            as="a"
            title="beka GmbH"
            href="https://www.beka.de/"
            target="_blank"
            rel="noreferrer noopener nofollow external"
          >
            beka.de
          </P>
        </Box>
        <Box>
          <P
            as="a"
            title="alle freiheit Werbeagentur GmbH"
            href="https://allefreiheit.de/"
            target="_blank"
            rel="noreferrer noopener nofollow external"
          >
            allefreiheit.de
          </P>
        </Box>
        <Box>
          <P
            as="a"
            title="Rudolf Fuka GmbH"
            href="https://www.fuka.de/de/"
            target="_blank"
            rel="noreferrer noopener nofollow external"
          >
            fuka.de
          </P>
        </Box>

        <Box sx={{ gridColumn: ["1/3", "1/5"] }}>
          <P sx={{ textAlign: "center" }}>References</P>
          <XS sx={{ textAlign: "center" }}>
            While working at{" "}
            <a
              title="TWT reality bytes GmbH"
              href="https://www.twt-rb.de/referenzen"
              target="_blank"
              rel="noreferrer noopener nofollow external"
            >
              TWT reality bytes GmbH
            </a>
          </XS>
        </Box>

        <Box>
          <P
            as="a"
            title="Covestro AG"
            href="https://www.covestro.com/"
            target="_blank"
            rel="noreferrer noopener nofollow external"
          >
            covestro.com
          </P>
        </Box>

        <Box>
          <P
            as="a"
            title="EIZO GmbH"
            href="https://www.eizo.de/"
            target="_blank"
            rel="noreferrer noopener nofollow external"
          >
            eizo.de
          </P>
        </Box>

        <Box>
          <P
            as="a"
            title="My Fujifilm"
            href="https://www.myfujifilm.de/"
            target="_blank"
            rel="noreferrer noopener nofollow external"
          >
            myfujifilm.de
          </P>
        </Box>
        <Box>
          <P
            as="a"
            title="Lekkerland Deutschland GmbH & Co. KG"
            href="https://www.lekkerland.de/"
            target="_blank"
            rel="noreferrer noopener nofollow external"
          >
            lekkerland.de
          </P>
        </Box>
        <Box>
          <P
            as="a"
            title="Hochschule Fresenius online plus GmbH"
            href="https://www.onlineplus.de/"
            target="_blank"
            rel="noreferrer noopener nofollow external"
          >
            onlineplus.de
          </P>
        </Box>
        <Box>
          <P
            as="a"
            title="rhenag Rheinische Energie Aktiengesellschaft"
            href="https://www.rhenag.de/"
            target="_blank"
            rel="noreferrer noopener nofollow external"
          >
            rhenag.de
          </P>
        </Box>
        <Box>
          <P
            as="a"
            title="Santander"
            href="https://www.santander.de/"
            target="_blank"
            rel="noreferrer noopener nofollow external"
          >
            santander.de
          </P>
        </Box>
        <Box>
          <P
            as="a"
            title="Vaillant"
            href="https://www.vaillant.de/"
            target="_blank"
            rel="noreferrer noopener nofollow external"
          >
            vaillant.de
          </P>
        </Box>

        <Box sx={{ gridColumn: ["1/3", "2/4"] }}>
          <XS sx={{ textAlign: "center" }}>
            Index contains both commissioned and agency based projects. Agency
            ones includes ⏤ in most respects ⏤ a project team with different
            talents and responsibilities in a joint collaboration. All projects
            labeled with an agency name were designed and created during my
            employment there → It’s not a one man show. Credit where credit is
            due.
          </XS>
        </Box>
      </Grid>
    </>
  )
}
