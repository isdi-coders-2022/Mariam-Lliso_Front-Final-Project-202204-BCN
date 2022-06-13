import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IEstablishment } from "../../../types/establishmentInterface";

const initialState: IEstablishment = {
  establishmentType: [],
  name: "",
  cusine: "",
  establishmentOffer: [],
  adress: "",
  municipality: "",
  region: "",
  phone: null,
  email: "",
  website: "",
  picture: "",
  pictureBackup: "",
  id: "",
};

const singleEstablishmentSlice = createSlice({
  name: "singleEstablishment",
  initialState,
  reducers: {
    loadSingleEstablishment: (
      establishment,
      action: PayloadAction<IEstablishment>
    ) => ({
      ...action.payload,
    }),
  },
});

export const { loadSingleEstablishment: loadSingleEstablishmentActionCreator } =
  singleEstablishmentSlice.actions;

export default singleEstablishmentSlice.reducer;
