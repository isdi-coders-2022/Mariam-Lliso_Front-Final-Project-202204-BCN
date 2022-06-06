import { CssBaseline, ThemeProvider } from "@mui/material";
import GlobalStyle from "../../../theme/assets/GlobalStyle";
import theme from "../../../theme/theme";
import TestRenderer from "react-test-renderer";
import Footer from "./Footer";

describe("Given a Footer component page", () => {
  describe("When it's invoked", () => {
    test("Then it should always match this snapshot", () => {
      const testedRegisterPage = TestRenderer.create(
      <ThemeProvider theme={theme}>
      <GlobalStyle />
      <CssBaseline />
      <Footer />
      </ThemeProvider>
      );

      expect(testedRegisterPage).toMatchSnapshot();
    });
  });
});
