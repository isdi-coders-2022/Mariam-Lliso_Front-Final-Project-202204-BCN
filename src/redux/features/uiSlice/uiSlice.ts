import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUserInterface } from "../../../types/uiInterfaces";

const initialState: IUserInterface = {
  loading: false,
  loadingUser: false,
  feedback: false,
  statusCode: 0,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    loading: (ui) => ({ ...ui, loading: true }),
    finishedLoading: (ui) => ({ ...ui, loading: false }),
    loadingUser: (ui) => ({ ...ui, loadingUser: true }),
    finishedLoadingUser: (ui) => ({ ...ui, loadingUser: false }),
    feedbackOn: (ui) => ({ ...ui, feedback: true }),
    feedbackOff: (ui) => ({ ...ui, feedback: false }),
    setStatusCode: (ui, action: PayloadAction<number>) => ({
      ...ui,
      statusCode: action.payload,
    }),
    clearStatusCode: (ui) => ({ ...ui, statusCode: 0 }),
  },
});

export const {
  loading: loadingActionCreator,
  finishedLoading: finishedLoadingActionCreator,
  loadingUser: loadingUserActionCreator,
  finishedLoadingUser: finishedLoadingUserActionCreator,
  feedbackOn: feedbackOnActionCreator,
  feedbackOff: feedbackOffActionCreator,
  setStatusCode: setStatusCodeActionCreator,
  clearStatusCode: clearStatusCodeActionCreator,
} = uiSlice.actions;
export default uiSlice.reducer;
