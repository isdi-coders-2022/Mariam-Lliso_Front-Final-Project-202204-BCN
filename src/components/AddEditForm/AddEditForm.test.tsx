import { queryByAttribute, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import store from "../../redux/store/store";
import theme from "../../theme/theme";
import AddEditForm from "./AddEditForm";

const mockDispatch = jest.fn();

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

describe("Given AddEditForm component without establishmentId param", () => {
  describe("When invoked", () => {
    test("Then it should render a header with text 'Añadir nuevo establecimient' and button with 'creaer establecimiento'", () => {
      render(
        <MemoryRouter initialEntries={["/establishment/add"]}>
          <Routes>
            <Route
              path="/establishment/add"
              element={
                <Provider store={store}>
                  <ThemeProvider theme={theme}>
                    <AddEditForm />
                  </ThemeProvider>
                </Provider>
              }
            />
          </Routes>
        </MemoryRouter>
      );

      const expectedHeader = screen.getByRole("heading", {
        name: "Añadir nuevo establecimiento",
      });
      const expectedButton = screen.getByRole("button", {
        name: "creaer establecimiento",
      });

      expect(expectedHeader).toBeInTheDocument();
      expect(expectedButton).toBeInTheDocument();
    });
  });

  const getById = queryByAttribute.bind(null, "id");

  describe("When invoked without establishmentType, name, adress, municipality, region and button 'creaer establecimiento' is pressed", () => {
    test("Then it should show diferenten helper text for each field", () => {
      const view = render(
        <MemoryRouter initialEntries={["/establishment/add"]}>
          <Routes>
            <Route
              path="/establishment/add"
              element={
                <Provider store={store}>
                  <ThemeProvider theme={theme}>
                    <AddEditForm />
                  </ThemeProvider>
                </Provider>
              }
            />
          </Routes>
        </MemoryRouter>
      );
      const expectedHelperEstablishmentType =
        "El tipo de establetimiento es obligatorio";
      const expectedHelperName = "El nombre es obligatorio";
      const expectedHelperAdress = "La dirección es obligatoria";
      const expectedHelperMunicipality = "El municipio es obligatorio";
      const expectedHelperRegion = "La provincia es obligatoria";

      const expectedButton: HTMLButtonElement = screen.getByRole("button", {
        name: "creaer establecimiento",
      });
      userEvent.click(expectedButton);

      const helperEstalbishmentType = getById(
        view.container,
        "establishmentType-helpertext"
      );
      const helperName = getById(view.container, "name-helpertext");
      const helperAdress = getById(view.container, "adress-helpertext");
      const helperMunicipality = getById(
        view.container,
        "municipality-helpertext"
      );
      const helperRegion = getById(view.container, "region-helpertext");

      expect(helperEstalbishmentType).toHaveTextContent(
        expectedHelperEstablishmentType
      );
      expect(helperName).toHaveTextContent(expectedHelperName);
      expect(helperAdress).toHaveTextContent(expectedHelperAdress);
      expect(helperMunicipality).toHaveTextContent(expectedHelperMunicipality);
      expect(helperRegion).toHaveTextContent(expectedHelperRegion);
    });
  });
});