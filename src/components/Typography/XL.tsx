/** @jsx jsx */
import { jsx, Heading } from "theme-ui"

export default (props) => (
  <Heading
    color="black"
    {...props}
    sx={{
      color: "text",
      fontSize: ["30vmin"],
      fontWeight: "300",
      lineHeight: ["100%"],
      textAlign: "center",
      fontFamily: "IBM Plex Serif",
      fontStyle: "italic",
      ...props.sx,
    }}
  />
)
