import {
  mockEstablishment,
  mockEstablishments,
} from "../../../mocks/establishmentMocks";
import {
  deleteEstablishmentActionCreator,
  loadEstablishmentsActionCreator,
} from "../../features/establishmentsSlice/establishmentsSlice";
import {
  createEstablishmentThunk,
  deleteEstablishmentThunk,
  editEstablishmentThunk,
  loadEstablishmentThunk,
} from "./establishmentsThunks";
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

  describe("When it is called with correct data but establishments it's and empty array", () => {
    test("It should not dispatch loadEstablishmentActionCreator", async () => {
      const dispatch = jest.fn();
      const expectedData = {
        totalEstablishments: 0,
        currentPage: 0,
        nextPage: null,
        previousPage: null,
        establishments: [],
      };

      const expectedAction = loadEstablishmentsActionCreator(expectedData);

      const thunk = loadEstablishmentThunk();
      await thunk(dispatch);

      expect(dispatch).not.toHaveBeenLastCalledWith(expectedAction);
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

  describe("When it's called but throw an error", () => {
    test("Then it should dispatch the finishedLoadingActionCreator, feedbackOnActionCreator", async () => {
      const dispatch = jest.fn();
      axios.delete = jest.fn().mockRejectedValue(new Error());
      const finishLoadingAction = finishedLoadingActionCreator();
      const feedbackOnAction = feedbackOnActionCreator();

      const thunk = deleteEstablishmentThunk(mockEstablishment.id);

      await thunk(dispatch);
      expect(dispatch).toHaveBeenCalledWith(finishLoadingAction);
      expect(dispatch).toHaveBeenCalledWith(feedbackOnAction);
    });
  });
});

describe("Given a createEstablishmentThunk function", () => {
  describe("When it's called", () => {
    test("Then it should call dispatch 4 times", async () => {
      const dispatch = jest.fn();

      const expectedNumberOfCalls = 4;
      const thunk = createEstablishmentThunk(mockEstablishment);

      await thunk(dispatch);
      expect(dispatch).toHaveBeenCalledTimes(expectedNumberOfCalls);
    });
  });

  test("Then it should dispatch the finishedLoadingActionCreator, feedbackOnActionCreator", async () => {
    const dispatch = jest.fn();
    axios.post = jest.fn().mockRejectedValue(new Error());
    const finishLoadingAction = finishedLoadingActionCreator();
    const feedbackOnAction = feedbackOnActionCreator();

    const thunk = createEstablishmentThunk(mockEstablishment);

    await thunk(dispatch);
    expect(dispatch).toHaveBeenCalledWith(finishLoadingAction);
    expect(dispatch).toHaveBeenCalledWith(feedbackOnAction);
  });
});

describe("Given a editEstablishmentThunk function", () => {
  describe("When it's called", () => {
    test("Then it should call dispatch 4 times", async () => {
      const dispatch = jest.fn();
      const expectedNumberOfCalls = 4;
      const thunk = editEstablishmentThunk(
        mockEstablishment.id,
        mockEstablishment
      );
      await thunk(dispatch);
      expect(dispatch).toHaveBeenCalledTimes(expectedNumberOfCalls);
    });
  });

  test("Then it should dispatch the finishedLoadingActionCreator, feedbackOnActionCreator", async () => {
    const dispatch = jest.fn();
    axios.put = jest.fn().mockRejectedValue(new Error());
    const finishLoadingAction = finishedLoadingActionCreator();
    const feedbackOnAction = feedbackOnActionCreator();

    const thunk = editEstablishmentThunk(
      mockEstablishment.id,
      mockEstablishment
    );

    await thunk(dispatch);
    expect(dispatch).toHaveBeenCalledWith(finishLoadingAction);
    expect(dispatch).toHaveBeenCalledWith(feedbackOnAction);
  });
});
