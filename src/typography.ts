import Typography from "typography"
const typography = new Typography({
  googleFonts: [
    {
      name: "Source Sans Pro",
      styles: ["200", "400", "400i", "700"],
    },
  ],
  headerFontFamily: ["Source Sans Pro", "sans-serif"],
  bodyFontFamily: ["Source Sans Pro", "sans-serif"],
  headerColor: "hsla(0,0%,0%,0.85)",
  bodyColor: "hsla(0,0%,0%,0.7)",
  baseFontSize: '16px'
})

export default typography