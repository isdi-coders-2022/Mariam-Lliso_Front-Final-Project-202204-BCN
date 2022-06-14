import axios from "axios";
import {
  createEstablishmentEndpoint,
  deleteEstablishmentsEndpoint,
  editEstablishmentEndpoint,
  establishmentsListEndpoint,
} from "../../../routes/establishmentEndpoints";
import {
  createEstablishmentActionCreator,
  deleteEstablishmentActionCreator,
  loadEstablishmentsActionCreator,
} from "../../features/establishmentsSlice/establishmentsSlice";
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

export const createEstablishmentThunk =
  (formData: any) => async (dispatch: AppDispatch) => {
    try {
      dispatch(loadingActionCreator());
      const {
        data: { createdEstablishment },
        status,
      } = await axios.post(`${url}${createEstablishmentEndpoint}`, formData, {
        headers: { Authorization: `Bearer ${localStorage.token}` },
      });

      dispatch(createEstablishmentActionCreator(createdEstablishment));
      dispatch(finishedLoadingActionCreator());
      dispatch(setStatusCodeActionCreator(status));
    } catch (error: any) {
      dispatch(finishedLoadingActionCreator());
      dispatch(feedbackOnActionCreator());
    }
  };

export const editEstablishmentThunk =
  (id: string, formData: any) => async (dispatch: AppDispatch) => {
    try {
      dispatch(loadingActionCreator());
      const { status } = await axios.put(
        `${url}${editEstablishmentEndpoint}${id}`,
        formData,
        {
          headers: { Authorization: `Bearer ${localStorage.token}` },
        }
      );

      dispatch(loadEstablishmentThunk());
      dispatch(finishedLoadingActionCreator());
      dispatch(setStatusCodeActionCreator(status));
    } catch (error: any) {
      dispatch(finishedLoadingActionCreator());
      dispatch(feedbackOnActionCreator());
    }
  };
