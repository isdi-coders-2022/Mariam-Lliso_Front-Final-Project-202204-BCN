import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import store from "../../redux/store/store";
import theme from "../../theme/theme";
import AddEditForm from "./AddEditForm";

const mockPayload = {
  establishmentType: [
    {
      code: "RES",
      description: "Restaurante",
    },
  ],
  name: "Pizza Clik",
  cusine: "Pizzas a domicilio",
  establishmentOffer: [
    {
      code: "DELIVERY",
      description: "A domicilio",
    },
  ],
  adress: "avda aragón 8. bajo 5b",
  municipality: "Valencia",
  region: "Valencia",
  website: "www.pizzaclik.com",
  pictureBackup:
    "https://firebasestorage.googleapis.com/v0/b/valencia-sin-gluten.appspot.com/o/14-6-2022-11-16-IMG_3796.JPG?alt=media&token=90071fab-dc9b-463a-9380-b1799e354de5",
  picture: "images/14-6-2022-11-16-IMG_3796.JPG",
  id: "629c6fab590f5fafee71800b",
};

const mockDispatch = jest.fn();

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
  useSelector: () => ({ singleEstablishment: mockPayload }),
}));

describe("Given AddEditForm component with establishmentId param", () => {
  describe("When invoked", () => {
    test("Then it should render a header with text 'Añadir nuevo establecimient' and button with 'creaer establecimiento'", async () => {
      await waitFor(() => {
        const loadSingleEstablishmentAction = {
          type: "singleEstablishment/loadSingleEstablishment",
          payload: mockPayload,
        };

        store.dispatch(loadSingleEstablishmentAction);
      });

      render(
        <MemoryRouter
          initialEntries={["/establishment/edit/629c6fab590f5fafee71800b"]}
        >
          <Routes>
            <Route
              path="/establishment/edit/:establishmentId"
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
        name: "Editar establecimiento",
      });
      const expectedButton = screen.getByRole("button", {
        name: "editar establecimiento",
      });

      expect(expectedHeader).toBeInTheDocument();
      expect(expectedButton).toBeInTheDocument();
    });
  });
});
