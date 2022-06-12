import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../redux/store/store";
import { BrowserRouter } from "react-router-dom";
import UserProfile from "./UserProfile";
import { mockUserProfile } from "../../mocks/userMocks";

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: () => mockUserProfile,
}));

describe("Given UserProfile component", () => {
  describe("When invoked with a UserProfile whose name is 'La Grava'", () => {
    test("Then it should render a header with 'La Grava'", () => {
      // Arrange
      const expectedText = "cerrar sesión";
      // Act
      render(
        <BrowserRouter>
          <Provider store={store}>
            <UserProfile></UserProfile>
          </Provider>
        </BrowserRouter>
      );
      const expectedHeading = screen.getByRole("button", {
        name: "cerrar sesión",
      }).textContent;

      // Assert
      expect(expectedHeading).toEqual(expectedText);
    });
  });
});
