import React from "react"
import { Grid, Box } from "theme-ui"

export default () => (
  <Grid
    columns={[12]}
    gap={[3, 4, 5]}
    sx={{
      pointerEvents: "none",
      position: "absolute",
      width: "100%",
      height: "100%",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      px: [3, 4],
      backgroundRepeat: "repeat-y",
      backgroundSize: `100% 20px`,
      backgroundImage: `linear-gradient( to bottom, rgba(0,255,255,0.5) 0, rgba(255,0,0,0.00)1px)`,
    }}
  >
    {[...Array(12)].map((i, index) => (
      <Box
        key={index}
        sx={{
          height: "100%",
          width: "100%",
          border: "1px solid rgba(255,0,0,0.2)",
          backgroundColor: "1px solid rgba(255,0,0,0.5)",
        }}
      />
    ))}
  </Grid>
)
