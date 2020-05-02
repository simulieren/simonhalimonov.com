/** @jsx jsx */
import { jsx, Box } from "theme-ui"

import Instagram from "../Instagram"
import Twitter from "../Twitter"

import P from "../Typography/P"

export default () => (
  <Box>
    <Twitter title={<P>Twitter</P>} />
    <Instagram orientation="vertical" title={<P>Instagram</P>} />
  </Box>
)
