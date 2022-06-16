import { render } from "@testing-library/react";
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
  describe("When the user isn't logged in", () => {
    test("Then the user will be redirected and children will be renderized", () => {
      mockLogged = false;

      render(<UserCredentialsValidation children={inputtedProp} />);

      expect(mockUseNavigate).toHaveBeenCalled();
    });
  });
});
