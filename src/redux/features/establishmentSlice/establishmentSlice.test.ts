import { mockEstablishments } from "../../../mocks/establishmentMocks";
import { IEstablishmentState } from "../../../types/establishmentInterface";
import establishmentSlice, { loadEstablishmentsActionCreator } from "./establishmentSlice";

describe("Given the loadActionCreator", () => {
  describe("When invoked", () => {
    test("Then the loading ui state should change to true", () => {
      const initialState: IEstablishmentState = {
        totalEstablishments: 0,
        currentPage: 0,
        nextPage: null,
        previousPage: null,
        establishments: []
      };
      const expectedState: IEstablishmentState = {
        totalEstablishments: 0,
        currentPage: 0,
        nextPage: null,
        previousPage: null,
        establishments: mockEstablishments
      };

      const action = loadEstablishmentsActionCreator(expectedState);
      const loadedState = establishmentSlice(initialState, action);

      expect(loadedState).toEqual(expectedState);
    });
  });
});

