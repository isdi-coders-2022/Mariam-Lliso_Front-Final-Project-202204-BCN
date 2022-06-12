import { alpha, createTheme } from "@mui/material";

export const pxToRem = (value: number) => {
  return `${value / 16}rem`;
};

interface IMediaSizes {
  sm: number;
  md: number;
  lg: number;
}

export const responsiveFontSizes = ({ sm, md, lg }: IMediaSizes) => {
  return {
    "@media (min-width:600px)": {
      fontSize: pxToRem(sm),
    },
    "@media (min-width:900px)": {
      fontSize: pxToRem(md),
    },
    "@media (min-width:1200px)": {
      fontSize: pxToRem(lg),
    },
  };
};

export const fontPrimary = "Poppins, sans-serif";
export const fontSecondary = "Libre Bodoni, serif;";

const greyColor = {
  0: "#FFFFFF",
  100: "#F5F5F5",
  200: "#F4F6F8",
  300: "#DFE3E8",
  400: "#C4CDD5",
  500: "#919EAB",
  600: "#637381",
  700: "#454F5B",
  800: "#212B36",
  900: "#161C24",
  500_8: alpha("#919EAB", 0.08),
  500_12: alpha("#919EAB", 0.12),
  500_16: alpha("#919EAB", 0.16),
  500_24: alpha("#919EAB", 0.24),
  500_32: alpha("#919EAB", 0.32),
  500_48: alpha("#919EAB", 0.48),
  500_56: alpha("#919EAB", 0.56),
  500_80: alpha("#919EAB", 0.8),
};

const primaryColor = {
  light: "#E9F3D9",
  main: "#5FAA46",
  dark: "#3b8224",
  contrastText: "#fff",
};

const secondaryColor = {
  lighter: "#D6E4FF",
  light: "#84A9FF",
  main: "#3366FF",
  dark: "#1939B7",
  darker: "#091A7A",
  contrastText: "#fff",
};

const theme = createTheme({
  typography: {
    fontFamily: fontPrimary,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 600,
    h1: {
      fontFamily: fontSecondary,
      fontWeight: 700,
      lineHeight: 80 / 64,
      fontSize: pxToRem(40),
      ...responsiveFontSizes({ sm: 52, md: 58, lg: 64 }),
    },
    h2: {
      fontFamily: fontSecondary,
      fontWeight: 700,
      lineHeight: 64 / 48,
      fontSize: pxToRem(32),
      ...responsiveFontSizes({ sm: 40, md: 44, lg: 48 }),
    },
    h3: {
      fontFamily: fontSecondary,
      fontWeight: 700,
      lineHeight: 1.5,
      fontSize: pxToRem(24),
      ...responsiveFontSizes({ sm: 26, md: 30, lg: 32 }),
    },
    h4: {
      fontWeight: 700,
      lineHeight: 1.5,
      fontSize: pxToRem(20),
      ...responsiveFontSizes({ sm: 20, md: 24, lg: 24 }),
    },
    h5: {
      fontWeight: 700,
      lineHeight: 1.5,
      fontSize: pxToRem(18),
      ...responsiveFontSizes({ sm: 19, md: 20, lg: 20 }),
    },
    h6: {
      fontWeight: 700,
      lineHeight: 28 / 18,
      fontSize: pxToRem(17),
      ...responsiveFontSizes({ sm: 18, md: 18, lg: 18 }),
    },
    subtitle1: {
      fontWeight: 600,
      lineHeight: 1.5,
      fontSize: pxToRem(16),
    },
    subtitle2: {
      fontWeight: 600,
      lineHeight: 22 / 14,
      fontSize: pxToRem(14),
    },
    body1: {
      lineHeight: 1.5,
      fontSize: pxToRem(16),
    },
    body2: {
      lineHeight: 22 / 14,
      fontSize: pxToRem(14),
    },
    caption: {
      lineHeight: 1.5,
      fontSize: pxToRem(12),
    },
    overline: {
      fontWeight: 700,
      lineHeight: 1.5,
      fontSize: pxToRem(12),
      letterSpacing: 1.1,
      textTransform: "uppercase",
    },
    button: {
      fontWeight: 700,
      lineHeight: 24 / 14,
      fontSize: pxToRem(14),
      textTransform: "uppercase",
    },
  },
  palette: {
    common: { black: "#000", white: "#fff" },
    primary: { ...primaryColor },
    secondary: { ...secondaryColor },
    grey: greyColor,
    text: {
      primary: greyColor[800],
      secondary: greyColor[600],
      disabled: greyColor[500],
    },
    background: { paper: "#fff", default: greyColor[0] },
    action: {
      active: greyColor[600],
      hover: greyColor[500_8],
      selected: greyColor[500_16],
      disabled: greyColor[500_80],
      disabledBackground: greyColor[500_24],
      focus: greyColor[500_24],
      hoverOpacity: 0.08,
      disabledOpacity: 0.48,
    },
  },
  components: {
    MuiButtonBase: {
      styleOverrides: {
        root: {
          letterSpacing: "0.1em",
        },
      },
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiInputBase: {
      styleOverrides: {
        input: {
          "&::placeholder": {
            fontSize: "0.875rem",
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: `10px`,
          "&.MuiInputBase-multiline": {
            padding: 1,
          },
        },
        input: {
          fontWeight: 500,
          padding: "15.5px 14px",
          borderRadius: `10px`,
          "&.MuiInputBase-inputSizeSmall": {
            padding: "10px 14px",
            "&.MuiInputBase-inputAdornedStart": {
              paddingLeft: 0,
            },
          },
        },
        inputAdornedStart: {
          paddingLeft: 4,
        },
        notchedOutline: {
          borderRadius: `10px`,
        },
      },
    },
  },
});

export default theme;
