import axios, { AxiosResponse } from "axios";
import { IUserRegister } from "../../interfaces/userInterfaces";
import { userRegisterEndpoint } from "../../routes/userEndpoints";
import { rolUser } from "../../utils/userRols";
import { feedbackOnActionCreator, finishedLoadingActionCreator, loadingActionCreator, setStatusCodeActionCreator } from "../features/uiSlice/uiSlice";
import { AppDispatch } from "../store/store";


const url = process.env.REACT_APP_API_URL;

export const userRegisterThunk =
  (userData: IUserRegister) => async (dispatch: AppDispatch) => {
    const userRegisterData: IUserRegister = {
      ...userData,
      userRol: rolUser
    }

    dispatch(loadingActionCreator());
    dispatch(setStatusCodeActionCreator(null));

    await axios.post(`${url}${userRegisterEndpoint}`, userRegisterData)
      .then((response: AxiosResponse) => {
        dispatch(finishedLoadingActionCreator());
        dispatch(feedbackOnActionCreator())
        dispatch(setStatusCodeActionCreator(response.status));

      })
      .catch((error: any) => {
        dispatch(finishedLoadingActionCreator());

        if (error.response) {
          dispatch(feedbackOnActionCreator())
          dispatch(setStatusCodeActionCreator(error.response.status));
        }
      });
  };
