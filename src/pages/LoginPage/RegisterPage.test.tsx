import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import store from "../../redux/store/store";
import theme from "../../theme/theme";
import TestRenderer from "react-test-renderer";
import LoginPage from "./LoginPage"
import { BrowserRouter } from "react-router-dom";

  describe("When it's invoked", () => {
    test("Then it should always match this snapshot", () => {
      const testedRegisterPage = TestRenderer.create(
        <BrowserRouter>
        <Provider store={store}>
            <ThemeProvider theme={theme}>
              <LoginPage />
            </ThemeProvider>
        </Provider>
        </BrowserRouter>
      );

      expect(testedRegisterPage).toMatchSnapshot();
    });

    test("Then it should render a register form with a button with the text 'Register'", () => {
      render(
        <BrowserRouter>
        <Provider store={store}>
            <ThemeProvider theme={theme}>
              <LoginPage />
            </ThemeProvider>
        </Provider>
        </BrowserRouter>
      );

      const expectedButton = screen.getByRole("button", { name: "iniciar sesión" });

      expect(expectedButton).toBeInTheDocument();
    });
  });
