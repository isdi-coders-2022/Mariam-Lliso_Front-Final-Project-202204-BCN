import { configureStore } from "@reduxjs/toolkit";
import establishmentSliceReducer from "../features/establishmentSlice/establishmentSlice";
import uiSliceReducer from "../features/uiSlice/uiSlice";
import userProfileSliceReducer from "../features/userProfileSlice/userProfileSlice";
import userSliceReducer from "../features/userSlice/userSlice";

const store = configureStore({
  reducer: {
    ui: uiSliceReducer,
    user: userSliceReducer,
    userProfile: userProfileSliceReducer,
    establishment: establishmentSliceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
