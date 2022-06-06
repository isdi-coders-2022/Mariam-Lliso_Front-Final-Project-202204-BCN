import { IUserLoged, IUserState } from "../../../types/userInterfaces";
import userSlice, { loginActionCreator, logoutActionCreator } from "./userSlice";

describe("Given the userSlice", () => {
  describe("When login action is invoked with user login credentials", () => {
    test("Then it should return the user state with logged true", () => {
      const initialState: IUserState = {
        userData: {
          username: "",
          userRol: "",
          id: "",
        },
        logged: false,
      };
      const expectedState: IUserState = {
        userData: {
          username: "username",
          userRol: "ADM",
          id: "mockid234089"
        },
        logged: true,
      };
      const mockUserLoged: IUserLoged = {
        username: "username",
        userRol: "ADM",
        id: "mockid234089"
      }

      const action = loginActionCreator(mockUserLoged);
      const userState = userSlice(initialState, action);

      expect(userState).toEqual(expectedState);
    });
  });

  describe("When logout is invoked with user state", () => {
    test("Then it should return the user state empty with logged false", () => {
      const initialState: IUserState = {
        userData: {
          username: "username",
          userRol: "ADM",
          id: "mockid234089"
        },
        logged: true,
      };
      const expectedState: IUserState = {
        userData: {
          username: "",
          userRol: "",
          id: ""
        },
        logged: false,
      };

      const action = logoutActionCreator();
      const userState = userSlice(initialState, action);

      expect(userState).toEqual(expectedState);
    });
  });
});
