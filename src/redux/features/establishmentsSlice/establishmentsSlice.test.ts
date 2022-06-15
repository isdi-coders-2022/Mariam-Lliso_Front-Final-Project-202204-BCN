import {
  mockDictionary,
  mockEstablishment,
  mockEstablishments,
} from "../../../mocks/establishmentMocks";
import {
  IEstablishment,
  IEstablishmentState,
} from "../../../types/establishmentInterface";
import establishmentsSlice, {
  createEstablishmentActionCreator,
  deleteEstablishmentActionCreator,
  loadEstablishmentsActionCreator,
} from "./establishmentsSlice";

describe("Given the loadActionCreator", () => {
  describe("When invoked", () => {
    test("Then the loading ui state should change to true", () => {
      const initialState: IEstablishmentState = {
        totalEstablishments: 0,
        currentPage: 0,
        nextPage: null,
        previousPage: null,
        establishments: [],
      };
      const expectedState: IEstablishmentState = {
        totalEstablishments: 0,
        currentPage: 0,
        nextPage: null,
        previousPage: null,
        establishments: mockEstablishments,
      };

      const action = loadEstablishmentsActionCreator(expectedState);
      const loadedState = establishmentsSlice(initialState, action);

      expect(loadedState).toEqual(expectedState);
    });
  });
});

describe("Given the deleteEstablishmentActionCreator", () => {
  describe("When invoked with the id to be deleted", () => {
    test("Then the item with the id will be deleted from the establishment list", () => {
      const initialState: IEstablishmentState = {
        totalEstablishments: 0,
        currentPage: 0,
        nextPage: null,
        previousPage: null,
        establishments: mockEstablishments,
      };

      const mockEstablishmentsResult: IEstablishment[] = [
        {
          establishmentType: [mockDictionary],
          name: "Sitio de comer 2",
          cusine: "Cocina no tan rica",
          establishmentOffer: [mockDictionary],
          adress: "Avenida calle",
          municipality: "Alicante",
          region: "Benidorm",
          phone: null,
          email: "@",
          website: ".com",
          picture: "foto.jpg",
          pictureBackup: "foto.jpg",
          id: "id5678",
        },
      ];

      const expectedState: IEstablishmentState = {
        totalEstablishments: 0,
        currentPage: 0,
        nextPage: null,
        previousPage: null,
        establishments: mockEstablishmentsResult,
      };

      const id = "id1234";

      const action = deleteEstablishmentActionCreator(id);
      const state = establishmentsSlice(initialState, action);

      expect(state).toEqual(expectedState);
    });
  });
});

describe("Given a createEstablishment reducer", () => {
  describe("When it receives an action to create a new establishment", () => {
    test("Then it should create a new property", () => {
      const initialState: IEstablishmentState = {
        totalEstablishments: 0,
        currentPage: 0,
        nextPage: null,
        previousPage: null,
        establishments: [mockEstablishment],
      };
      const createAction = createEstablishmentActionCreator(mockEstablishment);

      const expectedState: IEstablishmentState = {
        totalEstablishments: 0,
        currentPage: 0,
        nextPage: null,
        previousPage: null,
        establishments: [mockEstablishment, mockEstablishment],
      };

      const establishmentStatus = establishmentsSlice(
        initialState,
        createAction
      );
      expect(establishmentStatus).toEqual(expectedState);
    });
  });
});
