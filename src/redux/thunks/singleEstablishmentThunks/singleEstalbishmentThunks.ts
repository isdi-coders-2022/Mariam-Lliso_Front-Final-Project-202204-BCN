import axios from "axios";
import { singleEstablishmentEndpoint } from "../../../routes/establishmentEndpoints";
import { loadSingleEstablishmentActionCreator } from "../../features/singleEstablishmentSlice/singleEstablishmentSlice";
import {
  finishedLoadingActionCreator,
  loadingActionCreator,
} from "../../features/uiSlice/uiSlice";
import { AppDispatch } from "../../store/store";

const url = process.env.REACT_APP_API_URL;

export const loadSingleEstablishmentThunk =
  (id: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(loadingActionCreator());

      const { data } = await axios.get(
        `${url}${singleEstablishmentEndpoint}${id}`,
        {
          headers: { Authorization: `Bearer ${localStorage.token}` },
        }
      );

      await dispatch(loadSingleEstablishmentActionCreator(data));
      dispatch(finishedLoadingActionCreator());
    } catch (error: any) {
      dispatch(finishedLoadingActionCreator());
    }
  };
