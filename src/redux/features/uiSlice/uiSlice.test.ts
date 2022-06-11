import { IErrorCode, IUserInterface } from "../../../types/uiInterfaces";
import uiReducer, {
  finishedLoadingActionCreator,
  feedbackOffActionCreator,
  clearStatusCodeActionCreator,
  setStatusCodeActionCreator,
  loadingActionCreator,
  feedbackOnActionCreator,
  loadingUserActionCreator,
  finishedLoadingUserActionCreator,
} from "./uiSlice";

describe("Given the loadingActionCreator", () => {
  describe("When invoked", () => {
    test("Then the loading ui state should change to true", () => {
      const initialState: IUserInterface = {
        loading: false,
        loadingUser: false,
        feedback: false,
        statusCode: 0,
      };
      const expectedState: IUserInterface = {
        loading: true,
        loadingUser: false,
        feedback: false,
        statusCode: 0,
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
        loadingUser: false,
        feedback: false,
        statusCode: 0,
      };
      const expectedState: IUserInterface = {
        loading: false,
        loadingUser: false,
        feedback: false,
        statusCode: 0,
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
        loadingUser: false,
        feedback: false,
        statusCode: 0,
      };
      const expectedState: IUserInterface = {
        loading: false,
        loadingUser: false,
        feedback: true,
        statusCode: 0,
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
        loadingUser: false,
        feedback: true,
        statusCode: 0,
      };
      const expectedState: IUserInterface = {
        loading: false,
        loadingUser: false,
        feedback: false,
        statusCode: 0,
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
        loadingUser: false,
        feedback: false,
        statusCode: 404,
      };
      const expectedState: IUserInterface = {
        loading: false,
        loadingUser: false,
        feedback: false,
        statusCode: 404,
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
    test("Then the errorCode ui state should change to 0", () => {
      const initialState: IUserInterface = {
        loading: false,
        loadingUser: false,
        feedback: false,
        statusCode: 404,
      };
      const expectedState: IUserInterface = {
        loading: false,
        loadingUser: false,
        feedback: false,
        statusCode: 0,
      };

      const action = clearStatusCodeActionCreator();
      const loadedState = uiReducer(initialState, action);

      expect(loadedState).toEqual(expectedState);
    });
  });
});

describe("Given the loadingUserActionCreator", () => {
  describe("When invoked", () => {
    test("Then the loading ui state should change to true", () => {
      const initialState: IUserInterface = {
        loading: false,
        loadingUser: false,
        feedback: false,
        statusCode: 0,
      };
      const expectedState: IUserInterface = {
        loading: false,
        loadingUser: true,
        feedback: false,
        statusCode: 0,
      };

      const action = loadingUserActionCreator();
      const loadedState = uiReducer(initialState, action);

      expect(loadedState).toEqual(expectedState);
    });
  });
});

describe("Given the finishedLoadingUserActionCreator", () => {
  describe("When invoked", () => {
    test("Then the loading ui state should change to false", () => {
      const initialState: IUserInterface = {
        loading: false,
        loadingUser: true,
        feedback: false,
        statusCode: 0,
      };
      const expectedState: IUserInterface = {
        loading: false,
        loadingUser: false,
        feedback: false,
        statusCode: 0,
      };

      const action = finishedLoadingUserActionCreator();
      const loadedState = uiReducer(initialState, action);

      expect(loadedState).toEqual(expectedState);
    });
  });
});
