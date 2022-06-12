import { CssBaseline, ThemeProvider } from "@mui/material";
import GlobalStyle from "../../../theme/assets/GlobalStyle";
import theme from "../../../theme/theme";
import Header from "./Header";
import TestRenderer from "react-test-renderer";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../../redux/store/store";

describe("Given a Header component page", () => {
  describe("When it's invoked", () => {
    test("Then it should always match this snapshot", () => {
      const testedRegisterPage = TestRenderer.create(
        <Provider store={store}>
          <BrowserRouter>
            <ThemeProvider theme={theme}>
              <GlobalStyle />
              <CssBaseline />
              <Header />
            </ThemeProvider>
          </BrowserRouter>
        </Provider>
      );

      expect(testedRegisterPage).toMatchSnapshot();
    });
  });
});
