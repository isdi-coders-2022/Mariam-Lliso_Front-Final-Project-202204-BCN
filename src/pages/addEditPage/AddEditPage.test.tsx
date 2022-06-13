import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import store from "../../redux/store/store";
import theme from "../../theme/theme";
import TestRenderer from "react-test-renderer";
import { BrowserRouter } from "react-router-dom";
import AddEditPage from "./AddEditPage";

describe("Given", () => {
  describe("When it's invoked", () => {
    test("Then it should always match this snapshot", () => {
      const testedRegisterPage = TestRenderer.create(
        <BrowserRouter>
          <Provider store={store}>
            <ThemeProvider theme={theme}>
              <AddEditPage />
            </ThemeProvider>
          </Provider>
        </BrowserRouter>
      );

      expect(testedRegisterPage).toMatchSnapshot();
    });
  });
});
