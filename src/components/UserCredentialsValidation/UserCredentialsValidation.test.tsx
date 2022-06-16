import { render, screen } from "@testing-library/react";
import { localStorageMock } from "../../mocks/localStorageMock";
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

const gettinUpLocalStorage = localStorageMock;

const saveToStorage = (value: string) => {
  window.localStorage.setItem("token", value);
};

Object.defineProperty(window, "localStorage", {
  value: gettinUpLocalStorage,
});

describe("Given the CheckLogged", () => {
  describe("When the user is logged in and token exists", () => {
    saveToStorage(
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYTI2MGVlYjgwZDU0MzU0MjZjOTE2MyIsInVzZXJuYW1lIjoibWFyaWFtYWRtaW4iLCJ1c2VyUm9sIjoiQURNIiwiaWF0IjoxNjU1MzUwNzY3fQ.FUMBV_6HS0EwKp-FMVmINCXcwDEHMro4vHTNzzGbVQk"
    );

    test("Then children will be renderized", () => {
      render(<UserCredentialsValidation children={inputtedProp} />);

      const expectedHeader = screen.getByRole("heading", { name: "HOLA!" });
      expect(expectedHeader).toBeInTheDocument();
    });
  });
});
