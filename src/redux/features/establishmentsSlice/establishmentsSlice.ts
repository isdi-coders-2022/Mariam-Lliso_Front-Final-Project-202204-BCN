import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  IEstablishment,
  IEstablishmentState,
} from "../../../types/establishmentInterface";

const initialState: IEstablishmentState = {
  totalEstablishments: 0,
  currentPage: 0,
  nextPage: null,
  previousPage: null,
  establishments: [],
};

const establishmentsSlice = createSlice({
  name: "establishment",
  initialState,
  reducers: {
    loadEstablishments: (
      establishmentState,
      action: PayloadAction<IEstablishmentState>
    ) => ({ ...action.payload }),
    deleteEstablishment: (
      establishmentState,
      action: PayloadAction<string>
    ) => ({
      ...establishmentState,
      establishments: establishmentState.establishments.filter(
        (establishment) => establishment.id !== action.payload
      ),
    }),
    createEstablishment: (
      establishmentState,
      action: PayloadAction<IEstablishment>
    ) => ({
      ...establishmentState,
      establishments: [...establishmentState.establishments, action.payload],
    }),
  },
});

export const {
  loadEstablishments: loadEstablishmentsActionCreator,
  deleteEstablishment: deleteEstablishmentActionCreator,
  createEstablishment: createEstablishmentActionCreator,
} = establishmentsSlice.actions;
export default establishmentsSlice.reducer;
