import { CssBaseline, ThemeProvider } from "@mui/material";
import GlobalStyle from "../../../theme/assets/GlobalStyle";
import theme from "../../../theme/theme";
import TestRenderer from "react-test-renderer";
import Navigation from "./Navigation";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../../redux/store/store";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

let mockLogged = true;

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: () => ({ logged: mockLogged }),
}));

const mockUseNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockUseNavigate,
}));

describe("Given a Navigation component", () => {
  describe("When it's invoked", () => {
    test("Then it should always match this snapshot", () => {
      const testedRegisterPage = TestRenderer.create(
        <BrowserRouter>
          <Provider store={store}>
            <ThemeProvider theme={theme}>
              <GlobalStyle />
              <CssBaseline />
              <Navigation />
            </ThemeProvider>
          </Provider>
        </BrowserRouter>
      );

      expect(testedRegisterPage).toMatchSnapshot();
    });
  });

  describe("When it's invoked and user click at 'lugares' button", () => {
    test("then it should call navigate with '/establishment/list'", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <ThemeProvider theme={theme}>
              <GlobalStyle />
              <CssBaseline />
              <Navigation />
            </ThemeProvider>
          </Provider>
        </BrowserRouter>
      );

      const expectedButton: HTMLButtonElement = screen.getByRole("button", {
        name: "lugares",
      });
      userEvent.click(expectedButton);

      expect(mockUseNavigate).toHaveBeenCalledWith("/establishment/list");
    });
  });

  describe("When it's invoked and register user click at 'perfil' button", () => {
    test("then it should call navigate with '/user/profile'", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <ThemeProvider theme={theme}>
              <GlobalStyle />
              <CssBaseline />
              <Navigation />
            </ThemeProvider>
          </Provider>
        </BrowserRouter>
      );

      const expectedButton: HTMLButtonElement = screen.getByRole("button", {
        name: "perfil",
      });
      userEvent.click(expectedButton);

      expect(mockUseNavigate).toHaveBeenCalledWith("/user/profile");
    });
  });

  describe("When it's invoked and no register user click at 'perfil' button", () => {
    test("then it should call navigate with '/login'", () => {
      mockLogged = false;
      render(
        <BrowserRouter>
          <Provider store={store}>
            <ThemeProvider theme={theme}>
              <GlobalStyle />
              <CssBaseline />
              <Navigation />
            </ThemeProvider>
          </Provider>
        </BrowserRouter>
      );

      const expectedButton: HTMLButtonElement = screen.getByRole("button", {
        name: "perfil",
      });
      userEvent.click(expectedButton);

      expect(mockUseNavigate).toHaveBeenCalledWith("/login");
    });
  });
});
