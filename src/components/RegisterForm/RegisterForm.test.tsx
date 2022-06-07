import { queryByAttribute, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import store from "../../redux/store/store";
import RegisterForm from "./RegisterForm";
import { BrowserRouter } from "react-router-dom";

const mockDispatch = jest.fn();

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

describe("Given a RegisterForm component", () => {
  describe("When invoked", () => {
    test("Then it should render a form with a button with the text 'registrarse'", () => {
      render(
        <BrowserRouter>
        <Provider store={store}>
            <RegisterForm></RegisterForm>
        </Provider>
        </BrowserRouter>
      );
      const expectedButton: HTMLButtonElement = screen.getByRole("button", {
        name: "registrarse",
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
            <RegisterForm></RegisterForm>
        </Provider>
        </BrowserRouter>
      );
      const expectedNameText = "El nombre es obligatorio";
      const expectedUsernameText = "El nombre de usuario es obligatorio";
      const expectedPasswordText = "La contraseña es obligatoria";

      const registerButton: HTMLButtonElement = screen.getByRole("button", {
        name: "registrarse",
      });
      userEvent.click(registerButton);

      const helperName = getById(view.container, "name-helpertext");
      const helperUsername = getById(view.container, "username-helpertext");
      const helperPassword = getById(view.container, "password-helpertext");


      expect(helperName).toHaveTextContent(expectedNameText);
      expect(helperUsername).toHaveTextContent(expectedUsernameText);
      expect(helperPassword).toHaveTextContent(expectedPasswordText);
    });
  });

  describe("When invoked and user enters username, name, and password", () => {
    test("Then resetData should been called", () => {
      render(
        <BrowserRouter>
        <Provider store={store}>
            <RegisterForm></RegisterForm>
        </Provider>
        </BrowserRouter>
      );

      const nameInput: HTMLInputElement = screen.getByRole("textbox", {
        name: "Nombre",
      });
      userEvent.type(nameInput, "somename");

      const usernameInput: HTMLInputElement = screen.getByRole("textbox", {
        name: "Username",
      });
      userEvent.type(usernameInput, "someusername");

      const passwordInput: HTMLInputElement = screen.getByRole("password");
      userEvent.type(passwordInput, "somepassword");

      const registerButton: HTMLButtonElement = screen.getByRole("button", {
        name: "registrarse",
      });
      userEvent.click(registerButton);
      
      expect(nameInput).toHaveValue("");
      expect(usernameInput).toHaveValue("");
    });

    test("Then dispatch should been called", () => {
      render(
        <BrowserRouter>
        <Provider store={store}>
            <RegisterForm></RegisterForm>
        </Provider>
        </BrowserRouter>
      );

      const nameInput: HTMLInputElement = screen.getByRole("textbox", {
        name: "Nombre",
      });
      userEvent.type(nameInput, "somename");

      const usernameInput: HTMLInputElement = screen.getByRole("textbox", {
        name: "Username",
      });
      userEvent.type(usernameInput, "someusername");

      const passwordInput: HTMLInputElement = screen.getByRole("password");
      userEvent.type(passwordInput, "somepassword");

      const registerButton: HTMLButtonElement = screen.getByRole("button", {
        name: "registrarse",
      });
      userEvent.click(registerButton);

      expect(mockDispatch).toHaveBeenCalled();
    });
  });
});
