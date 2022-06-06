import { configureStore } from "@reduxjs/toolkit";
import uiSliceReducer from "../features/uiSlice/uiSlice";
import userSliceReducer from "../features/userSlice/userSlice";



const store = configureStore({
  reducer: {
    ui: uiSliceReducer,
    user: userSliceReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
