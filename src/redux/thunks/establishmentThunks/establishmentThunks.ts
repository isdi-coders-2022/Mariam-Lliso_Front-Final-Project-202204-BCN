import axios from "axios";
import { establishmentsListEndpoint } from "../../../routes/establishmentEndpoints";
import { loadEstablishmentsActionCreator } from "../../features/establishmentSlice/establishmentSlice";
import {
  feedbackOnActionCreator,
  finishedLoadingActionCreator,
  loadingActionCreator,
} from "../../features/uiSlice/uiSlice";
import { AppDispatch } from "../../store/store";

const url = process.env.REACT_APP_API_URL;

export const loadEstablishmentThunk = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(loadingActionCreator());
    const { data } = await axios.get(`${url}${establishmentsListEndpoint}`);
    dispatch(finishedLoadingActionCreator());

    if (data.establishments.lenght !== 0) {
      dispatch(loadEstablishmentsActionCreator(data));
    } else {
      dispatch(finishedLoadingActionCreator());
    }
  } catch (error: any) {
    dispatch(finishedLoadingActionCreator());
    dispatch(feedbackOnActionCreator());
  }
};
