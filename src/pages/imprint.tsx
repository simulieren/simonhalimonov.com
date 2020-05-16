import React from "react"
import { Flex, Box } from "theme-ui"

import { H, P, S } from "../components/Typography"

import SEO from "../components/SEO"

export interface Props {
  location: Location
}

export default (props: Props) => {
  return (
    <Flex
      sx={{
        p: [3, 4],
        pt: [8, 8],
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <SEO title="Impressum" />
      <Box sx={{ maxWidth: "70ch", mx: "auto", width: "100%", p: [3] }}>
        <H as="h1">Impressum</H>
        <P sx={{ my: [2, 2, 2] }}>Angaben gemäß § 5 TMG:</P>
        <S>Simon Halimonov</S>
        <P sx={{ my: [2, 2, 2] }}>Kontakt:</P>
        <S>
          Telefon: +49 (0) 173 979 144 6 <br />
          Marktstraße. 8 <br />
          50968 Koeln <br />
          E-Mail: hello@simonhalimonov.de
        </S>

        <P sx={{ my: [2, 2, 2] }}>Streitschlichtung</P>

        <S>
          Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren
          vor einer Verbraucherschlichtungsstelle teilzunehmen.
        </S>
        <P sx={{ my: [2, 2, 2] }}>Haftung für Inhalte</P>
        <S>
          Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte
          auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach
          §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
          verpflichtet, übermittelte oder gespeicherte fremde Informationen zu
          überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
          Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der
          Nutzung von Informationen nach den allgemeinen Gesetzen bleiben
          hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem
          Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei
          Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese
          Inhalte umgehend entfernen.
        </S>
        <P sx={{ my: [2, 2, 2] }}>Haftung für Links</P>
        <S>
          Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren
          Inhalte wir keinen Einfluss haben. Deshalb können wir für diese
          fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
          verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der
          Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der
          Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige
          Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine
          permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne
          konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei
          Bekanntwerden von Rechtsverletzungen werden wir derartige Links
          umgehend entfernen.
        </S>
        <P sx={{ my: [2, 2, 2] }}>Urheberrecht</P>
        <S>
          Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen
          Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung,
          Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
          Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des
          jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite
          sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
          Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt
          wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden
          Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf
          eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
          entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen
          werden wir derartige Inhalte umgehend entfernen. <br />
          Quelle: https://www.e-recht24.de/impressum-generator.html
        </S>
        <H sx={{ my: [2, 2, 2] }}>Datenschutzerklärung</H>
        <P sx={{ my: [2, 2, 2] }}>Datenschutz</P>
        <S>
          Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten
          sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und
          entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser
          Datenschutzerklärung. <br />
          Die Nutzung unserer Webseite ist in der Regel ohne Angabe
          personenbezogener Daten möglich. Soweit auf unseren Seiten
          personenbezogene Daten (beispielsweise Name, Anschrift oder
          E-Mail-Adressen) erhoben werden, erfolgt dies, soweit möglich, stets
          auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche
          Zustimmung nicht an Dritte weitergegeben. <br />
          Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei
          der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein
          lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht
          möglich. <br />
        </S>
      </Box>
    </Flex>
  )
}
