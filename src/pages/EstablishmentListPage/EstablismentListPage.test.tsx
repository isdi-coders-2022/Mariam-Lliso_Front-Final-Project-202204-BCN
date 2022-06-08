import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../redux/store/store";
import { BrowserRouter } from "react-router-dom";
import EstablishmentListPage from "./EstablishmentListPage";
import { mockEstablishments } from "../../mocks/establishmentMocks";

describe("Given EstablishmentListPage component", () => {
  describe("When invoked", () => {
    test("Then it should create an unordered list element", () => {
      // Act
      render(
        <BrowserRouter>
          <Provider store={store}>
            <EstablishmentListPage />
          </Provider>
        </BrowserRouter>
      )
      const expectedEstablishmentList = screen.getByRole("list");

      // Assert
      expect(expectedEstablishmentList).toBeInTheDocument();
    });
  });
});
