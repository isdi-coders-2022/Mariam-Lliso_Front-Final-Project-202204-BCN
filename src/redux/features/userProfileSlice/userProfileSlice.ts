import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUserProfile } from "../../../types/userInterfaces";

const initialState: IUserProfile = {
  name: "",
  surnames: "",
  username: "",
  userRol: {
    code: "",
    description: "",
  },
};

const userSlice = createSlice({
  name: "userProfile",
  initialState,
  reducers: {
    setProfile: (user, action: PayloadAction<IUserProfile>) => ({
      ...action.payload,
    }),
    resetProfile: () => ({
      name: "",
      surnames: "",
      username: "",
      userRol: {
        code: "",
        description: "",
      },
    }),
  },
});

export const {
  setProfile: setProfileActionCreator,
  resetProfile: resetProfileActionCreator,
} = userSlice.actions;

export default userSlice.reducer;
