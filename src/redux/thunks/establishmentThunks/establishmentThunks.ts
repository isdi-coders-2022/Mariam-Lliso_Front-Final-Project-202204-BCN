import axios from "axios";
import {
  deleteEstablishmentsEndpoint,
  establishmentsListEndpoint,
} from "../../../routes/establishmentEndpoints";
import {
  deleteEstablishmentActionCreator,
  loadEstablishmentsActionCreator,
} from "../../features/establishmentSlice/establishmentSlice";
import {
  feedbackOnActionCreator,
  finishedLoadingActionCreator,
  loadingActionCreator,
  setStatusCodeActionCreator,
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
    }
  } catch (error: any) {
    dispatch(finishedLoadingActionCreator());
    dispatch(feedbackOnActionCreator());
  }
};

export const deleteEstablishmentThunk =
  (id: string) => async (dispatch: AppDispatch) => {
    console.log(id);
    try {
      dispatch(loadingActionCreator());
      const { status } = await axios.delete(
        `${url}${deleteEstablishmentsEndpoint}${id}`,
        {
          headers: { Authorization: `Bearer ${localStorage.token}` },
        }
      );
      dispatch(finishedLoadingActionCreator());

      dispatch(setStatusCodeActionCreator(status));
      dispatch(deleteEstablishmentActionCreator(id));
    } catch (error: any) {
      dispatch(finishedLoadingActionCreator());
      dispatch(feedbackOnActionCreator());
    }
  };
