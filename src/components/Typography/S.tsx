/** @jsx jsx */
import { jsx, Text } from "theme-ui"

export default (props) => (
  <Text
    {...props}
    sx={{
      color: "text",
      fontFamily: "IBM Plex Sans",
      fontSize: [0, 1, 2],
      ...props.sx,
    }}
  />
)
