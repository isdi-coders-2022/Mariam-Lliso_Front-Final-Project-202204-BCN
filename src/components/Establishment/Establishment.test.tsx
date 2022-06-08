import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../redux/store/store";
import { BrowserRouter } from "react-router-dom";
import Establishment from "./Establishment";
import { mockEstablishment } from "../../mocks/establishmentMocks";

describe("Given Establishment component", () => {
  describe("When invoked with a establishment whose name is 'La Grava'", () => {
    test("Then it should render a header with 'La Grava'", () => {
      // Arrange
      const expectedText = "La Grava"
      // Act
      render(
        <BrowserRouter>
          <Provider store={store}>
            <Establishment establishment={mockEstablishment}></Establishment>
          </Provider>
        </BrowserRouter>
      )
      const expectedHeading = screen.getByRole("heading", {name: "La Grava"}).textContent;

      // Assert
      expect(expectedHeading).toEqual(expectedText);
    });
  });
});
