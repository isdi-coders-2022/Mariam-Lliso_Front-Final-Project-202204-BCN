import { createSlice } from "@reduxjs/toolkit";
import { IUserInterface } from "../../../interfaces/uiInterfaces";

const initialState: IUserInterface = {
  loading: false,
  feedback: false,
  errorCode: ""
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    loading: (ui, action) => ({ ...ui, loading: true }),
    finishedLoading: (ui, action) => ({ ...ui, loading: false }),
    feedbackOn: (ui, action) => ({ ...ui, feedback: true }),
    feedbackOff: (ui, action) => ({ ...ui, feedback: false }),
    setErrorCode: (ui, action) => ({ ...ui, errorCode: action.payload }),
    clearErrorCode: (ui, action) => ({ ...ui, errorCode: "" }),
  },
});

export const {
  loading: loadingActionCreator,
  finishedLoading: finishedLoadingActionCreator,
  feedbackOn: feedbackOnActionCreator,
  feedbackOff: feedbackOffActionCreator,
  setErrorCode: setErrorCodeActionCreator,
  clearErrorCode: clearErrorCodeActionCreator
} = uiSlice.actions;
export default uiSlice.reducer;
