import { mockEstablishments } from "../../../mocks/establishmentMocks";
import { loadEstablishmentsActionCreator } from "../../features/establishmentSlice/establishmentSlice";
import { loadEstablishmentThunk } from "./establishmentThunks";
import { server } from "../mocks/server/server";

beforeEach(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("Given a loadPropertiesThunk function", () => {
  describe("When it is called", () => {
    test("It should dispatch loadAllPropertiesActionCreator with api's data", async () => {
      const dispatch = jest.fn();
      const expectedData = {
        totalEstablishments: 0,
        currentPage: 0,
        nextPage: null,
        previousPage: null,
        establishments: mockEstablishments,
      };

      const expectedAction = loadEstablishmentsActionCreator(expectedData);

      const thunk = loadEstablishmentThunk();
      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(expectedAction);
    });
  });
});
