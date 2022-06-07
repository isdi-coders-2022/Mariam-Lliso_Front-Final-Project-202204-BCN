import { queryByAttribute, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import store from "../../redux/store/store";
import LoginForm from "./LoginForm";
import { BrowserRouter } from "react-router-dom";

const mockDispatch = jest.fn();

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

describe("Given a LoginForm component", () => {
  describe("When invoked", () => {
    test("Then it should render a form with a button with the text 'iniciar sesión'", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <LoginForm></LoginForm>
          </Provider>
        </BrowserRouter>
      );
      const expectedButton: HTMLButtonElement = screen.getByRole("button", {
        name: "iniciar sesión",
      });

      expect(expectedButton).toBeInTheDocument();
    });
  });

  const getById = queryByAttribute.bind(null, "id");

  describe("When invoked and user don't enters username, name, and password", () => {
    test("Then it should show three diferenten helper text for each field", () => {
      const view = render(
        <BrowserRouter>
          <Provider store={store}>
            <LoginForm></LoginForm>
          </Provider>
        </BrowserRouter>
      );
      const expectedUsernameText = "El nombre de usuario es obligatorio";
      const expectedPasswordText = "La contraseña es obligatoria";

      const registerButton: HTMLButtonElement = screen.getByRole("button", {
        name: "iniciar sesión",
      });
      userEvent.click(registerButton);

      const helperUsername = getById(view.container, "username-helpertext");
      const helperPassword = getById(view.container, "password-helpertext");

      expect(helperUsername).toHaveTextContent(expectedUsernameText);
      expect(helperPassword).toHaveTextContent(expectedPasswordText);
    });
  });

  describe("When invoked and user enters username, and password", () => {
    test("Then resetData should been called", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <LoginForm></LoginForm>
          </Provider>
        </BrowserRouter>
      );

      const usernameInput: HTMLInputElement = screen.getByRole("textbox", {
        name: "Username",
      });
      userEvent.type(usernameInput, "someusername");

      const passwordInput: HTMLInputElement = screen.getByRole("password");
      userEvent.type(passwordInput, "somepassword");

      const registerButton: HTMLButtonElement = screen.getByRole("button", {
        name: "iniciar sesión",
      });
      userEvent.click(registerButton);

      expect(usernameInput).toHaveValue("");
    });

    test("Then dispatch should been called", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <LoginForm></LoginForm>
          </Provider>
        </BrowserRouter>
      );

      const usernameInput: HTMLInputElement = screen.getByRole("textbox", {
        name: "Username",
      });
      userEvent.type(usernameInput, "someusername");

      const passwordInput: HTMLInputElement = screen.getByRole("password");
      userEvent.type(passwordInput, "somepassword");

      const registerButton: HTMLButtonElement = screen.getByRole("button", {
        name: "iniciar sesión",
      });
      userEvent.click(registerButton);

      expect(mockDispatch).toHaveBeenCalled();
    });
  });
});
