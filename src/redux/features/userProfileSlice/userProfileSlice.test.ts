import { IUserProfile } from "../../../types/userInterfaces";
import userProfileSlice, {
  resetProfileActionCreator,
  setProfileActionCreator,
} from "./userProfileSlice";

describe("Given the userSlice", () => {
  describe("When login action is invoked with user login credentials", () => {
    test("Then it should return the user state with logged true", () => {
      const initialState: IUserProfile = {
        name: "",
        surnames: "",
        username: "",
        userRol: {
          code: "",
          description: "",
        },
      };
      const expectedState: IUserProfile = {
        name: "bizarap",
        surnames: "moran",
        username: "bzrp",
        userRol: {
          code: "USR",
          description: "Usuario/a",
        },
      };

      const action = setProfileActionCreator(expectedState);
      const userProfileState = userProfileSlice(initialState, action);

      expect(userProfileState).toEqual(expectedState);
    });
  });

  describe("When logout is invoked with user state", () => {
    test("Then it should return the user state empty with logged false", () => {
      const initialState: IUserProfile = {
        name: "bizarap",
        surnames: "moran",
        username: "bzrp",
        userRol: {
          code: "USR",
          description: "Usuario/a",
        },
      };
      const expectedState: IUserProfile = {
        name: "",
        surnames: "",
        username: "",
        userRol: {
          code: "",
          description: "",
        },
      };

      const action = resetProfileActionCreator();
      const userState = userProfileSlice(initialState, action);

      expect(userState).toEqual(expectedState);
    });
  });
});
