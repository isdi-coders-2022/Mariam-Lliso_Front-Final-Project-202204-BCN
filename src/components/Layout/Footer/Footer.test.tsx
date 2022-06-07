import { CssBaseline, ThemeProvider } from "@mui/material";
import GlobalStyle from "../../../theme/assets/GlobalStyle";
import theme from "../../../theme/theme";
import TestRenderer from "react-test-renderer";
import Footer from "./Footer";
import { BrowserRouter } from "react-router-dom";

describe("Given a Footer component page", () => {
  describe("When it's invoked", () => {
    test("Then it should always match this snapshot", () => {
      const testedRegisterPage = TestRenderer.create(
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <GlobalStyle />
          <CssBaseline />
          <Footer />
        </BrowserRouter>
      </ThemeProvider>
      );

      expect(testedRegisterPage).toMatchSnapshot();
    });
  });
});
