import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import store from "../../redux/store/store";
import theme from "../../theme/theme";
import TestRenderer from "react-test-renderer";
import {
  BrowserRouter,
  MemoryRouter,
  Route,
  Router,
  Routes,
} from "react-router-dom";
import AddEditPage from "./AddEditPage";
import { render, waitFor } from "@testing-library/react";

let mockLogged = true;
const mockDispatch = jest.fn();

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: () => ({ logged: mockLogged }),
  useDispatch: () => mockDispatch,
}));

describe("Given AddEditPage component", () => {
  describe("When it's invoked", () => {
    test("Then it should always match this snapshot", () => {
      const testedRegisterPage = TestRenderer.create(
        <BrowserRouter>
          <Provider store={store}>
            <ThemeProvider theme={theme}>
              <AddEditPage />
            </ThemeProvider>
          </Provider>
        </BrowserRouter>
      );

      expect(testedRegisterPage).toMatchSnapshot();
    });
  });

  describe("When it's invoked with logged user and establishmentId", () => {
    test("Then it should call dispatch", async () => {
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

      await waitFor(() => {
        const loadSingleEstablishmentAction = {
          type: "singleEstablishment/loadSingleEstablishment",
          payload: mockPayload,
        };

        store.dispatch(loadSingleEstablishmentAction);
      });

      render(
        <MemoryRouter initialEntries={["/establishment/edit/1234"]}>
          <Routes>
            <Route
              path="/establishment/edit/:establishmentId"
              element={
                <Provider store={store}>
                  <ThemeProvider theme={theme}>
                    <AddEditPage />
                  </ThemeProvider>
                </Provider>
              }
            />
          </Routes>
        </MemoryRouter>
      );

      expect(mockDispatch).toHaveBeenCalled();
    });
  });

  describe("When it's invoked with logged user and no establishmentId", () => {
    test("Then it should not call dispatch", async () => {
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

      await waitFor(() => {
        const loadSingleEstablishmentAction = {
          type: "singleEstablishment/loadSingleEstablishment",
          payload: mockPayload,
        };

        store.dispatch(loadSingleEstablishmentAction);
      });

      render(
        <MemoryRouter initialEntries={["/establishment/add"]}>
          <Routes>
            <Route
              path="/establishment/add"
              element={
                <Provider store={store}>
                  <ThemeProvider theme={theme}>
                    <AddEditPage />
                  </ThemeProvider>
                </Provider>
              }
            />
          </Routes>
        </MemoryRouter>
      );

      expect(mockDispatch).not.toHaveBeenCalled();
    });
  });
});
