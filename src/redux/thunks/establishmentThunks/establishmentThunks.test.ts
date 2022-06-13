import {
  mockEstablishment,
  mockEstablishments,
} from "../../../mocks/establishmentMocks";
import {
  deleteEstablishmentActionCreator,
  loadEstablishmentsActionCreator,
} from "../../features/establishmentSlice/establishmentSlice";
import {
  deleteEstablishmentThunk,
  loadEstablishmentThunk,
} from "./establishmentThunks";
import { server } from "../mocks/server/server";
import {
  feedbackOnActionCreator,
  finishedLoadingActionCreator,
} from "../../features/uiSlice/uiSlice";
import axios from "axios";

beforeEach(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("Given a loadEstablishmentThunk function", () => {
  describe("When it is called", () => {
    test("It should dispatch loadEstablishmentActionCreator with api's data", async () => {
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

  describe("When it is called with incorrect data", () => {
    test("It should dispatch loadAllPropertiesActionCreator with api's data", async () => {
      const dispatch = jest.fn();
      const expectedActionfinishedLoading = finishedLoadingActionCreator();
      const expectedActionfeedbackOn = feedbackOnActionCreator();

      axios.get = jest.fn().mockRejectedValue(new Error());

      const thunk = loadEstablishmentThunk();
      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(expectedActionfinishedLoading);
      expect(dispatch).toHaveBeenCalledWith(expectedActionfeedbackOn);
    });
  });
});

describe("Given a deleteEstablishmentThunk function", () => {
  describe("When it's called", () => {
    test("Then it should dispatch the deleteEstablishmentThunkActionCreator, loadingActionCreator, finishedLoadingActionCreator,setStatusCodeActionCreator", async () => {
      const dispatch = jest.fn();

      const deleteAction = deleteEstablishmentActionCreator(
        mockEstablishment.id
      );
      const thunk = deleteEstablishmentThunk(mockEstablishment.id);

      await thunk(dispatch);
      expect(dispatch).toHaveBeenCalledWith(deleteAction);
    });
  });
});
