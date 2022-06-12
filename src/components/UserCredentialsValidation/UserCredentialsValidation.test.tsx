import { render, screen } from "@testing-library/react";
import LoginPage from "../../pages/LoginPage/LoginPage";
import UserCredentialsValidation from "./UserCredentialsValidation";

const mockUseNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockUseNavigate,
}));

let mockLogged = true;

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: () => ({ logged: mockLogged }),
}));

const inputtedProp = <h1>HOLA!</h1>;

describe("Given the CheckLogged", () => {
  describe("When the user is logged in", () => {
    test("Then children will be renderized", () => {
      render(<UserCredentialsValidation children={inputtedProp} />);

      expect(mockUseNavigate).toHaveBeenCalledWith("/login");
    });
  });
  describe("When the user isn't logged in", () => {
    test("Then the user will be redirected", () => {
      mockLogged = false;

      render(
        <UserCredentialsValidation>
          <h1>HOLA!</h1>
        </UserCredentialsValidation>
      );

      expect(mockUseNavigate).toHaveBeenCalled();
    });
  });
});
