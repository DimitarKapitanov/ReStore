// theme.ts

type TextTransform = "none" | "capitalize" | "uppercase" | "lowercase";

const getDesignTokens = (mode: "light" | "dark") => ({
  palette: {
    mode: mode,
    primary: {
      main: "#ffffff",
    },
    background: {
      default: mode === "light" ? "#F2F0F1" : "#121212b2",
    },
    text: {
      primary: mode === "light" ? "#000000" : "#ffffff",
      secondary:
        mode === "light" ? "rgba(0, 0, 0, 0.6)" : "rgba(255, 255, 255, 0.7)",
    },
  },
  components: {
    MuiRadio: {
      styleOverrides: {
        root: {
          color: mode === "light" ? "#000000" : "#ffffff",
          "&.Mui-checked": {
            color: mode === "light" ? "#000000" : "#ffffff",
          },
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: mode === "light" ? "#000000" : "#ffffff",
          "&.Mui-checked": {
            color: mode === "light" ? "#000000" : "#ffffff",
          },
        },
      },
    },
    MuiSwitch: {
      styleOverrides: {
        root: {
          color: mode === "light" ? "#000000" : "#ffffff",
          "&.Mui-checked": {
            color: mode === "light" ? "#000000" : "#ffffff",
          },
        },
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          color: mode === "light" ? "#000000" : "#ffffff",
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          color: mode === "light" ? "#000000" : "#ffffff",
          "&.Mui-focused": {
            color: mode === "light" ? "#000000" : "#ffffff",
          },
        },
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        label: {
          color: mode === "light" ? "#red" : "#ffffff",
          "&.Mui-checked": {
            color: mode === "light" ? "#000000" : "#ffffff",
          },
        },
      },
    },
  },
  typography: {
    fontFamily: ["Figtree", "Satoshi"].join(","),
    h1: {
      fontFamily: '"Figtree", "Arial Black", sans-serif',
      fontSize: "64px",
      fontWeight: "900",
      textTransform: "uppercase" as TextTransform | undefined,
    },
    h2: {
      fontFamily: '"Figtree", "Arial Black", sans-serif',
      fontSize: "48px",
      fontWeight: "900",
      textTransform: "uppercase" as TextTransform | undefined,
    },
    h3: {
      fontFamily: '"Figtree", "Arial Black", sans-serif',
      fontSize: "36px",
      fontWeight: "900",
      textTransform: "uppercase" as TextTransform | undefined,
    },
    h4: {
      fontFamily: '"Figtree", "Arial Black", sans-serif',
      fontSize: "24px",
      fontWeight: "900",
      textTransform: "capitalize" as TextTransform | undefined,
    },
    h5: {
      fontFamily: '"Figtree", "Arial Black", sans-serif',
      fontSize: "20px",
      fontWeight: "900",
      textTransform: "capitalize" as TextTransform | undefined,
    },
    h6: {
      fontFamily: '"Figtree", "Arial Black", sans-serif',
      fontSize: "18px",
      fontWeight: "900",
      textTransform: "capitalize" as TextTransform | undefined,
    },
    subtitle1: {
      fontSize: "16px",
      color: mode === "light" ? "#00000099" : "#ffffff",
    },
    subtitle2: {
      fontSize: "14px",
      color: mode === "light" ? "#00000099" : "#ffffff",
    },
    body1: {
      fontSize: "16px",
    },
    label: {
      color: mode === "light" ? "#000000" : "#ffffff",
    },
    button: {
      fontFamily: "Satoshi, sans-serif",
      fontSize: "16px",
      fontWeight: "700",
      color: mode === "light" ? "#000000" : "#ffffff",
      textTransform: "capitalize" as TextTransform | undefined,
    },
  },
});

export default getDesignTokens;
