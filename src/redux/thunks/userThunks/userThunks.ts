import axios, { AxiosResponse } from "axios";
import {
  IUserLoged,
  IUserLogin,
  IUserRegister,
} from "../../../types/userInterfaces";
import {
  userLoginEndpoint,
  userProfileEndpoint,
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
import {
  loginActionCreator,
  logoutActionCreator,
} from "../../features/userSlice/userSlice";
import { setProfileActionCreator } from "../../features/userProfileSlice/userProfileSlice";

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
        dispatch(userProfileThunk());

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

export const logOutUserThunk = () => (dispatch: AppDispatch) => {
  localStorage.removeItem("token");
  dispatch(logoutActionCreator());
};

export const userProfileThunk = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(loadingUserActionCreator());
    const { data } = await axios.get(`${url}${userProfileEndpoint}`, {
      headers: { Authorization: `Bearer ${localStorage.token}` },
    });

    dispatch(setProfileActionCreator(data));
    dispatch(finishedLoadingUserActionCreator());
  } catch (error: any) {
    dispatch(finishedLoadingUserActionCreator());
    dispatch(feedbackOnActionCreator());
  }
};
