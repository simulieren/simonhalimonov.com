import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Grid, Box } from "theme-ui"

import SEO from "../../components/SEO"

import StaticImage from "../../components/Image/Image"

import { H, P, S, XS } from "../../components/Typography"

import WorkIndexTeaser from "./WorkIndexTeaser"

export interface Props {
  pageContext: {
    edges: any[] // TODO: Add types
  }
  location: Location
}

export default (props: Props) => {
  const { edges } = props.pageContext

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

  return (
    <>
      <SEO
        title={`${site.siteMetadata.title} | ${site.siteMetadata.description}`}
        description={site.siteMetadata.description}
      />
      <Grid
        sx={{ p: [3, 4], pt: [6, 7, 8] }}
        gap={[3, 4, 5]}
        columns={[1, "1fr 1fr"]}
      >
        {edges.map(WorkIndexTeaser)}
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
              rel="noreferrer noopener nofollow"
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
            rel="noreferrer noopener nofollow"
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
            rel="noreferrer noopener nofollow"
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
            rel="noreferrer noopener nofollow"
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
            rel="noreferrer noopener nofollow"
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
              rel="noreferrer noopener nofollow"
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
            rel="noreferrer noopener nofollow"
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
            rel="noreferrer noopener nofollow"
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
            rel="noreferrer noopener nofollow"
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
            rel="noreferrer noopener nofollow"
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
            rel="noreferrer noopener nofollow"
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
            rel="noreferrer noopener nofollow"
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
            rel="noreferrer noopener nofollow"
          >
            santander.de
          </P>
        </Box>
        <Box>
          <P
            as="a"
            title="Santander"
            href="https://www.vaillant.de/"
            target="_blank"
            rel="noreferrer noopener nofollow"
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
