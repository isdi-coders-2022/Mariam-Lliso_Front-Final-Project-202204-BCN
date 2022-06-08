import { CssBaseline, ThemeProvider } from "@mui/material";
import GlobalStyle from "../../../theme/assets/GlobalStyle";
import theme from "../../../theme/theme";
import TestRenderer from "react-test-renderer";
import { BrowserRouter } from "react-router-dom";
import Loader from "./Loader";

describe("Given a Loader component page", () => {
  describe("When it's invoked", () => {
    test("Then it should always match this snapshot", () => {
      const testedRegisterPage = TestRenderer.create(
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <CssBaseline />
          <Loader />
        </ThemeProvider>
      </BrowserRouter>
      );

      expect(testedRegisterPage).toMatchSnapshot();
    });
  });
});
