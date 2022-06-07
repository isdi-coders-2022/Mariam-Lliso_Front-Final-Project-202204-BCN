import { CssBaseline, ThemeProvider } from "@mui/material";
import GlobalStyle from "../../../theme/assets/GlobalStyle";
import theme from "../../../theme/theme";
import TestRenderer from "react-test-renderer";
import Navigation from "./Navigation";
import { BrowserRouter } from "react-router-dom";

describe("Given a Navigation component page", () => {
  describe("When it's invoked", () => {
    test("Then it should always match this snapshot", () => {
      const testedRegisterPage = TestRenderer.create(
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <CssBaseline />
          <Navigation />
        </ThemeProvider>
      </BrowserRouter>
      );

      expect(testedRegisterPage).toMatchSnapshot();
    });
  });
});
