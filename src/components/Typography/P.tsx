/** @jsx jsx */
import { jsx, Text } from "theme-ui"

export default (props: any) => (
  <Text
    mb={[3, 4]}
    as="p"
    {...props}
    sx={{
      color: "text",
      fontFamily: "IBM Plex Sans",
      fontSize: [2, 3],
      ...props.sx,
      "&:last-of-type": { mb: 0 },
    }}
  />
)
