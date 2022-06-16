import { render, screen, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import store from "../../redux/store/store";
import theme from "../../theme/theme";
import TestRenderer from "react-test-renderer";
import LoginPage from "./LoginPage";
import { BrowserRouter } from "react-router-dom";

const mockUseNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockUseNavigate,
}));

describe("Given the loginpage component", () => {
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

    test("Then it should render a register form with a button with the text 'iniciar sesión'", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <ThemeProvider theme={theme}>
              <LoginPage />
            </ThemeProvider>
          </Provider>
        </BrowserRouter>
      );

      const expectedButton = screen.getByRole("button", {
        name: "iniciar sesión",
      });

      expect(expectedButton).toBeInTheDocument();
    });
  });

  describe("When invoked but user is already logged", () => {
    test("Then it should navigate to '/user/profile'", async () => {
      const mockPayload = {
        type: "user/login",
        payload: {
          id: "62a260eeb80d5435426c9163",
          username: "mariamadmin",
          userRol: "ADM",
          iat: 1655307037,
        },
      };
      await waitFor(() => {
        const loginAction = {
          type: "user/login",
          payload: mockPayload,
        };

        store.dispatch(loginAction);
      });

      render(
        <BrowserRouter>
          <Provider store={store}>
            <ThemeProvider theme={theme}>
              <LoginPage />
            </ThemeProvider>
          </Provider>
        </BrowserRouter>
      );

      expect(mockUseNavigate).toHaveBeenLastCalledWith("/user/profile");
    });
  });
});
