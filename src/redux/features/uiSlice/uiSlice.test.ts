import { IErrorCode, IUserInterface } from "../../../interfaces/uiInterfaces";
import uiReducer, {
  finishedLoadingActionCreator,
  feedbackOffActionCreator,
  clearErrorCodeActionCreator,
  setErrorCodeActionCreator,
  loadingActionCreator,
  feedbackOnActionCreator
} from "./uiSlice";


describe("Given the loadingActionCreator", () => {
  describe("When invoked", () => {
    test("Then the loading ui state should change to true", () => {
      const initialState: IUserInterface = {
        loading: false,
        feedback: false,
        errorCode: ""
      };
      const expectedState: IUserInterface = {
        loading: true,
        feedback: false,
        errorCode: ""
      };

      const action = loadingActionCreator(initialState);
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
        errorCode: ""
      };
      const expectedState: IUserInterface = {
        loading: false,
        feedback: false,
        errorCode: ""
      };

      const action = finishedLoadingActionCreator(initialState);
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
        errorCode: ""
      };
      const expectedState: IUserInterface = {
        loading: false,
        feedback: true,
        errorCode: ""
      };

      const action = feedbackOnActionCreator(initialState);
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
        errorCode: ""
      };
      const expectedState: IUserInterface = {
        loading: false,
        feedback: false,
        errorCode: ""
      };

      const action = feedbackOffActionCreator(initialState);
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
        errorCode: "404"
      };
      const expectedState: IUserInterface = {
        loading: false,
        feedback: false,
        errorCode: "404"
      };
      const givenError: IErrorCode = "404"

      const action = setErrorCodeActionCreator(givenError);
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
        errorCode: "404"
      };
      const expectedState: IUserInterface = {
        loading: false,
        feedback: false,
        errorCode: ""
      };

      const action = clearErrorCodeActionCreator(initialState);
      const loadedState = uiReducer(initialState, action);

      expect(loadedState).toEqual(expectedState);
    });
  });
});

