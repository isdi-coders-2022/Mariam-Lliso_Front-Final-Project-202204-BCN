import { CssBaseline, ThemeProvider } from "@mui/material";
import GlobalStyle from "../../../theme/assets/GlobalStyle";
import theme from "../../../theme/theme";
import TestRenderer from "react-test-renderer";
import Navigation from "./Navigation";

describe("Given a Navigation component page", () => {
  describe("When it's invoked", () => {
    test("Then it should always match this snapshot", () => {
      const testedRegisterPage = TestRenderer.create(
      <ThemeProvider theme={theme}>
      <GlobalStyle />
      <CssBaseline />
      <Navigation />
      </ThemeProvider>
      );

      expect(testedRegisterPage).toMatchSnapshot();
    });
  });
});
