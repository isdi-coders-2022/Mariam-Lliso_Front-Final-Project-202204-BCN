import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../redux/store/store";
import { BrowserRouter } from "react-router-dom";
import UserProfilePage from "./UserProfilePage";

describe("Given UserProfilePage component", () => {
  describe("When invoked", () => {
    test("Then it should create an unordered list element", () => {
      // Act
      render(
        <BrowserRouter>
          <Provider store={store}>
            <UserProfilePage />
          </Provider>
        </BrowserRouter>
      );
      const expectedIcon = screen.getByTestId("PermIdentityOutlinedIcon");

      // Assert
      expect(expectedIcon).toBeInTheDocument();
    });
  });
});
