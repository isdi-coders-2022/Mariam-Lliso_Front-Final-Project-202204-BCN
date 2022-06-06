import { CssBaseline, ThemeProvider } from "@mui/material";
import GlobalStyle from "../../../theme/assets/GlobalStyle";
import theme from "../../../theme/theme";
import Header from "./Header";
import TestRenderer from "react-test-renderer";

describe("Given a Header component page", () => {
  describe("When it's invoked", () => {
    test("Then it should always match this snapshot", () => {
      const testedRegisterPage = TestRenderer.create(
      <ThemeProvider theme={theme}>
      <GlobalStyle />
      <CssBaseline />
      <Header />
      </ThemeProvider>
      );

      expect(testedRegisterPage).toMatchSnapshot();
    });
  });
});
