import { createSlice } from "@reduxjs/toolkit";
import { IUserInterface } from "../../../interfaces/uiInterfaces";

const initialState: IUserInterface = {
  loading: false,
  feedback: false,
  statusCode: ""
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    loading: (ui) => ({ ...ui, loading: true }),
    finishedLoading: (ui) => ({ ...ui, loading: false }),
    feedbackOn: (ui) => ({ ...ui, feedback: true }),
    feedbackOff: (ui) => ({ ...ui, feedback: false }),
    setStatusCode: (ui, action) => ({ ...ui, statusCode: action.payload }),
    clearStatusCode: (ui) => ({ ...ui, statusCode: "" }),
  },
});

export const {
  loading: loadingActionCreator,
  finishedLoading: finishedLoadingActionCreator,
  feedbackOn: feedbackOnActionCreator,
  feedbackOff: feedbackOffActionCreator,
  setStatusCode: setStatusCodeActionCreator,
  clearStatusCode: clearStatusCodeActionCreator
} = uiSlice.actions;
export default uiSlice.reducer;
