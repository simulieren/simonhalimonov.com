/** @jsx jsx */
import { jsx, Heading } from "theme-ui"

export default (props) => (
  <Heading
    color="black"
    {...props}
    sx={{
      color: "text",
      fontSize: [3, 4],
      fontWeight: "400",
      lineHeight: ["40px", "80px"],
      ...props.sx,
    }}
  />
)
