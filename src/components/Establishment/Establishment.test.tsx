import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../redux/store/store";
import { BrowserRouter } from "react-router-dom";
import Establishment from "./Establishment";
import { mockEstablishment } from "../../mocks/establishmentMocks";
import userEvent from "@testing-library/user-event";
import { mockUserProfile } from "../../mocks/userMocks";

const mockUseNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockUseNavigate,
}));

const mockDispatch = jest.fn();

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: () => ({ userData: { userRol: mockUserProfile.userRol.code } }),
  useDispatch: () => mockDispatch,
}));

describe("Given Establishment component", () => {
  describe("When invoked with a establishment whose name is 'La Grava'", () => {
    test("Then it should render a header with 'La Grava'", () => {
      // Arrange
      const expectedText = "La Grava";
      // Act
      render(
        <BrowserRouter>
          <Provider store={store}>
            <Establishment establishment={mockEstablishment}></Establishment>
          </Provider>
        </BrowserRouter>
      );
      const expectedHeading = screen.getByRole("heading", {
        name: "La Grava",
      }).textContent;

      // Assert
      expect(expectedHeading).toEqual(expectedText);
    });
  });

  describe("When admin user clicks the edit button", () => {
    test("Then it should navigate to /establishment/edit/629c6fab590f5fafee717fec", () => {
      // Arrange
      const expectRoute = `/establishment/edit/${mockEstablishment.id}`;

      render(
        <BrowserRouter>
          <Provider store={store}>
            <Establishment establishment={mockEstablishment}></Establishment>
          </Provider>
        </BrowserRouter>
      );
      // Act
      const expectedAddButton = screen.getByRole("button", {
        name: "editar",
      });
      userEvent.click(expectedAddButton);

      // Assert
      expect(mockUseNavigate).toHaveBeenCalledWith(expectRoute);
    });
  });

  describe("When admin user clicks the delete button", () => {
    test("Then it should call dispatch one time", () => {
      // Arrange
      const expectDispatchTime = 1;

      render(
        <BrowserRouter>
          <Provider store={store}>
            <Establishment establishment={mockEstablishment}></Establishment>
          </Provider>
        </BrowserRouter>
      );
      // Act
      const expectedAddButton = screen.getByRole("button", {
        name: "eliminar",
      });
      userEvent.click(expectedAddButton);

      // Assert
      expect(mockDispatch).toHaveBeenCalledTimes(expectDispatchTime);
    });
  });
});
