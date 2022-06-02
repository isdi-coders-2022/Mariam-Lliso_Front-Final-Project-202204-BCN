import { IErrorCode, IUserInterface } from "../../../interfaces/uiInterfaces";
import uiReducer, {
  finishedLoadingActionCreator,
  feedbackOffActionCreator,
  clearStatusCodeActionCreator,
  setStatusCodeActionCreator,
  loadingActionCreator,
  feedbackOnActionCreator
} from "./uiSlice";


describe("Given the loadingActionCreator", () => {
  describe("When invoked", () => {
    test("Then the loading ui state should change to true", () => {
      const initialState: IUserInterface = {
        loading: false,
        feedback: false,
        statusCode: null
      };
      const expectedState: IUserInterface = {
        loading: true,
        feedback: false,
        statusCode: null
      };

      const action = loadingActionCreator();
      const loadedState = uiReducer(initialState, action);

      expect(loadedState).toEqual(expectedState);
    });
  });
});

describe("Given the finiushedLoadingActionCreator", () => {
  describe("When invoked", () => {
    test("Then the loading ui state should change to false", () => {
      const initialState: IUserInterface = {
        loading: true,
        feedback: false,
        statusCode: null
      };
      const expectedState: IUserInterface = {
        loading: false,
        feedback: false,
        statusCode: null
      };

      const action = finishedLoadingActionCreator();
      const loadedState = uiReducer(initialState, action);

      expect(loadedState).toEqual(expectedState);
    });
  });
});

describe("Given the feedbackOnActionCreator", () => {
  describe("When invoked", () => {
    test("Then the feedback ui state should change to true", () => {
      const initialState: IUserInterface = {
        loading: false,
        feedback: false,
        statusCode: null
      };
      const expectedState: IUserInterface = {
        loading: false,
        feedback: true,
        statusCode: null
      };

      const action = feedbackOnActionCreator();
      const loadedState = uiReducer(initialState, action);

      expect(loadedState).toEqual(expectedState);
    });
  });
});

describe("Given the feedbackOffActionCreator", () => {
  describe("When invoked", () => {
    test("Then the feedback ui state should change to true", () => {
      const initialState: IUserInterface = {
        loading: false,
        feedback: true,
        statusCode: null
      };
      const expectedState: IUserInterface = {
        loading: false,
        feedback: false,
        statusCode: null
      };

      const action = feedbackOffActionCreator();
      const loadedState = uiReducer(initialState, action);

      expect(loadedState).toEqual(expectedState);
    });
  });
});

describe("Given the setErrorCode", () => {
  describe("When invoked", () => {
    test("Then the errorCode ui state should change to 404", () => {
      const initialState: IUserInterface = {
        loading: false,
        feedback: false,
        statusCode: 404
      };
      const expectedState: IUserInterface = {
        loading: false,
        feedback: false,
        statusCode: 404
      };
      const givenError: IErrorCode = 404;

      const action = setStatusCodeActionCreator(givenError);
      const loadedState = uiReducer(initialState, action);

      expect(loadedState).toEqual(expectedState);
    });
  });
});

describe("Given the clearErrorCode", () => {
  describe("When invoked", () => {
    test("Then the errorCode ui state should change to ''", () => {
      const initialState: IUserInterface = {
        loading: false,
        feedback: false,
        statusCode: 404
      };
      const expectedState: IUserInterface = {
        loading: false,
        feedback: false,
        statusCode: null
      };

      const action = clearStatusCodeActionCreator();
      const loadedState = uiReducer(initialState, action);

      expect(loadedState).toEqual(expectedState);
    });
  });
});

