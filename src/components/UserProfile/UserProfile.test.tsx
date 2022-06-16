import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../redux/store/store";
import { BrowserRouter } from "react-router-dom";
import UserProfile from "./UserProfile";
import { mockUserProfile } from "../../mocks/userMocks";
import userEvent from "@testing-library/user-event";

const mockDispatch = jest.fn();

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: () => ({ userRol: mockUserProfile.userRol }),
  useDispatch: () => mockDispatch,
}));

const mockUseNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockUseNavigate,
}));

describe("Given UserProfile component", () => {
  describe("When invoked a UserProfile of an admin user", () => {
    test("Then it should render a button with 'cerrar sesión' and 'crear un establecimiento'", () => {
      // Arrange
      const expectCloseSesionText = "cerrar sesión";
      const expectAddText = "crear un establecimiento";
      // Act
      render(
        <BrowserRouter>
          <Provider store={store}>
            <UserProfile></UserProfile>
          </Provider>
        </BrowserRouter>
      );

      const expectedCloseSesionButton = screen.getByRole("button", {
        name: "cerrar sesión",
      }).textContent;
      const expectedAddButton = screen.getByRole("button", {
        name: "crear un establecimiento",
      }).textContent;

      // Assert
      expect(expectedCloseSesionButton).toEqual(expectCloseSesionText);
      expect(expectedAddButton).toEqual(expectAddText);
    });
  });

  describe("When invoked with a UserProfile of a admin and button 'crear un establecimiento' is clicked", () => {
    test("Then it should navigate to '/establishment/add'", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <UserProfile></UserProfile>
          </Provider>
        </BrowserRouter>
      );

      const expectedAddButton = screen.getByRole("button", {
        name: "crear un establecimiento",
      });
      userEvent.click(expectedAddButton);

      // Assert
      expect(mockUseNavigate).toHaveBeenCalledWith("/establishment/add");
    });
  });

  describe("When invoked with a UserProfile of a admin and button 'cerrar sesión' is clicked", () => {
    test("Then it should navigate to '/login' and call dispatch two times", () => {
      const expectRoute = "/login";
      const expectDispatchNumberOfCalls = 2;
      render(
        <BrowserRouter>
          <Provider store={store}>
            <UserProfile></UserProfile>
          </Provider>
        </BrowserRouter>
      );

      const expectedAddButton = screen.getByRole("button", {
        name: "cerrar sesión",
      });
      userEvent.click(expectedAddButton);

      // Assert
      expect(mockUseNavigate).toHaveBeenCalledWith(expectRoute);
      expect(mockDispatch).toHaveBeenCalledTimes(expectDispatchNumberOfCalls);
    });
  });
});
