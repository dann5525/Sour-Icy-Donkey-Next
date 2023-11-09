module.exports = {
  "theme": {
    "extend": {
      "colors": {
        "Danger": {
          "300": "#A22020",
          "500": "#BF2626",
          "700": "#E14747"
        },
        "Gray": {
          "500": "#595959",
          "700": "#999999",
          "900": "#D9D9D9",
          "White": "#FFFFFF",
          "Black": "#000000"
        },
        "Primary": {
          "100": "#424266ff",
          "300": "#0074F0",
          "500": "#14A9FF",
          "700": "#85DCFF"
        },
        "Success": {
          "300": "#199033",
          "500": "#32A94C",
          "700": "#4CC366"
        },
        "foreground": "#000000",
        "background": "#FFFFFF"
      },
      "spacing": {
        "HalfUnit": "8px",
        "SixUnits": "96px",
        "FourUnits": "64px",
        "TwoUnits": "32px",
        "OneAndHalfUnits": "24px",
        "Unit": "16px",
        "FiveUnits": "80px",
        "ThreeUnits": "48px"
      },
      "borderRadius": {
        "Round": "50%",
        "Radius4": "4px",
        "Radius2": "2px",
        "Radius8": "8px"
      },
      "scale": {
        "Medium": "96px",
        "XSmall": "16px",
        "MaxWidth": "1400px",
        "Small": "48px",
        "XLarge": "192px",
        "XXLarge": "288px",
        "Large": "144px"
      }
    }
  },
  "plugins": [],
  "content": [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ]
}
