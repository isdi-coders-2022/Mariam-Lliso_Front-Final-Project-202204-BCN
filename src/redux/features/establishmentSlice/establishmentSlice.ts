import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IEstablishmentState } from "../../../types/establishmentInterface";

const initialState: IEstablishmentState = {
  totalEstablishments: 0,
  currentPage: 0,
  nextPage: null,
  previousPage: null,
  establishments: []
};

const establishmentSlice = createSlice({
  name: "establishment",
  initialState,
  reducers: {
    loadEstablishments: (establishmentState, action: PayloadAction<IEstablishmentState>) => ({ ...action.payload })
  },
});

export const {
  loadEstablishments: loadEstablishmentsActionCreator,
} = establishmentSlice.actions;
export default establishmentSlice.reducer;
