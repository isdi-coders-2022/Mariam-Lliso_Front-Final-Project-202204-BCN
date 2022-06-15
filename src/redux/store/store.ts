import { configureStore } from "@reduxjs/toolkit";
import establishmentsSliceReducer from "../features/establishmentsSlice/establishmentsSlice";
import singleEstablishmentSlice from "../features/singleEstablishmentSlice/singleEstablishmentSlice";
import uiSliceReducer from "../features/uiSlice/uiSlice";
import userProfileSliceReducer from "../features/userProfileSlice/userProfileSlice";
import userSliceReducer from "../features/userSlice/userSlice";

const store = configureStore({
  reducer: {
    ui: uiSliceReducer,
    user: userSliceReducer,
    userProfile: userProfileSliceReducer,
    establishments: establishmentsSliceReducer,
    singleEstablishment: singleEstablishmentSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
