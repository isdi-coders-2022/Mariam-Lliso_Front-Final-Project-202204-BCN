import { configureStore } from "@reduxjs/toolkit";
import uiSliceReducer from "../features/uiSlice/uiSlice";



const store = configureStore({
  reducer: {
    ui: uiSliceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
