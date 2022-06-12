import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUserLoged, IUserState } from "../../../types/userInterfaces";

const initialState: IUserState = {
  userData: {
    username: "",
    userRol: "",
    id: "",
  },
  logged: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (user, action: PayloadAction<IUserLoged>) => ({
      userData: { ...action.payload },
      logged: true,
    }),
    logout: () => ({
      userData: {
        username: "",
        userRol: "",
        id: "",
      },
      logged: false,
    }),
  },
});

export const { login: loginActionCreator, logout: logoutActionCreator } =
  userSlice.actions;

export default userSlice.reducer;
