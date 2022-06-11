import axios, { AxiosResponse } from "axios";
import {
  IUserLoged,
  IUserLogin,
  IUserRegister,
} from "../../../types/userInterfaces";
import {
  userLoginEndpoint,
  userRegisterEndpoint,
} from "../../../routes/userEndpoints";
import { rolUser } from "../../../utils/userRols";
import {
  feedbackOnActionCreator,
  finishedLoadingUserActionCreator,
  loadingUserActionCreator,
  setStatusCodeActionCreator,
} from "../../features/uiSlice/uiSlice";
import { AppDispatch } from "../../store/store";
import jwtDecode from "jwt-decode";
import { loginActionCreator } from "../../features/userSlice/userSlice";

const url = process.env.REACT_APP_API_URL;

export const userRegisterThunk =
  (userData: IUserRegister) => async (dispatch: AppDispatch) => {
    const userRegisterData: IUserRegister = {
      ...userData,
      userRol: rolUser,
    };

    dispatch(loadingUserActionCreator());
    dispatch(setStatusCodeActionCreator(0));

    await axios
      .post(`${url}${userRegisterEndpoint}`, userRegisterData)
      .then((response: AxiosResponse) => {
        dispatch(finishedLoadingUserActionCreator());
        dispatch(feedbackOnActionCreator());
        dispatch(setStatusCodeActionCreator(response.status));
      })
      .catch((error: any) => {
        dispatch(finishedLoadingUserActionCreator());

        if (error.response) {
          dispatch(finishedLoadingUserActionCreator());
          dispatch(feedbackOnActionCreator());
          dispatch(setStatusCodeActionCreator(error.response.status));
        }
      });
  };

export const userLoginThunk =
  (userData: IUserLogin) => async (dispatch: AppDispatch) => {
    const userloginData: IUserLogin = {
      ...userData,
    };

    dispatch(loadingUserActionCreator());
    dispatch(setStatusCodeActionCreator(0));

    await axios
      .post(`${url}${userLoginEndpoint}`, userloginData)
      .then((response: AxiosResponse) => {
        const token = response.data.token;
        const decodeToken: IUserLoged = jwtDecode(token);
        localStorage.setItem("token", token);

        dispatch(loginActionCreator(decodeToken));

        dispatch(finishedLoadingUserActionCreator());
        dispatch(feedbackOnActionCreator());
        dispatch(setStatusCodeActionCreator(response.status));
      })
      .catch((error: any) => {
        dispatch(finishedLoadingUserActionCreator());

        if (error.response) {
          dispatch(finishedLoadingUserActionCreator());
          dispatch(feedbackOnActionCreator());
          dispatch(setStatusCodeActionCreator(error.response.status));
        }
      });
  };