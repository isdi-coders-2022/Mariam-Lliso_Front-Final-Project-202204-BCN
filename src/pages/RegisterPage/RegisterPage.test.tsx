import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import store from "../../redux/store/store";
import theme from "../../theme/theme";
import RegisterPage from "./RegisterPage";
import TestRenderer from "react-test-renderer";

  describe("When it's invoked", () => {
    test("Then it should always match this snapshot", () => {
      const testedRegisterPage = TestRenderer.create(
        <Provider store={store}>
            <ThemeProvider theme={theme}>
              <RegisterPage />
            </ThemeProvider>
        </Provider>
      );

      expect(testedRegisterPage).toMatchSnapshot();
    });

    test("Then it should render a register form with a button with the text 'Register'", () => {
      render(
        <Provider store={store}>
            <ThemeProvider theme={theme}>
              <RegisterPage />
            </ThemeProvider>
        </Provider>
      );

      const expectedButton = screen.getByRole("button", { name: "registrarse" });

      expect(expectedButton).toBeInTheDocument();
    });
  });
