export default {
  useColorSchemeMediaQuery: true,
  colors: {
    text: "#111",
    textlight: "#333",
    background: "#eee",
    background2: "#ddd",
    primary: "#111",
    modes: {
      dark: {
        text: "#eee",
        textlight: "#ccc",
        background: "#111",
        background2: "#222",
        primary: "#111",
      },
    },
  },
  fonts: {
    body: '"IBM Plex Sans", system-ui, sans-serif',
    heading: '"IBM Plex Sans", system-ui, sans-serif',
    monospace: "Menlo, monospace",
  },
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 2,
    heading: 2,
  },
  fontSizes: [12, 14, 16, 20, 40, 60, 80, 100],
  space: [0, 5, 10, 20, 40, 60, 80, 100, 120, 140],
  styles: {
    a: {
      color: "primary",
    },
  },
  breakpoints: ["40em", "60em", "80em", "100em", "120em"],
}
