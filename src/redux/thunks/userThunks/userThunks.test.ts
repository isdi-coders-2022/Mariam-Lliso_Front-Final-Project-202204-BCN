import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { IUserLogin, IUserRegister } from "../../../types/userInterfaces";
import {
  feedbackOnActionCreator,
  finishedLoadingUserActionCreator,
  loadingUserActionCreator,
  setStatusCodeActionCreator,
} from "../../features/uiSlice/uiSlice";
import { userLoginThunk, userRegisterThunk } from "./userThunks";

const mock = new MockAdapter(axios);
const url = process.env.REACT_APP_API_URL;

const dispatch = jest.fn();

jest.mock("jwt-decode", () => () => ({
  username: "username",
  userRol: "ADM",
  id: "1",
}));

describe("Given the a userThunks", () => {
  const userRegisterData: IUserRegister = {
    name: "name",
    surnames: "surnames",
    username: "username",
    password: "password",
    userRol: "rol",
  };

  const userLoginData: IUserLogin = {
    username: "username",
    password: "password",
  };

  describe("When userRegisterThunk it's invoked with a correct user register data", () => {
    test("Then it should call dispatch with finishedLoadingUserActionCreator, feedbackOnActionCreator and setStatusCodeActionCreator", async () => {
      const expectedActionLoading = finishedLoadingUserActionCreator();
      const expectedActionfeedback = feedbackOnActionCreator();
      const expectedActionStatus = setStatusCodeActionCreator(201);
      mock.onPost(`${url}user/register`).reply(201);

      const thunk = await userRegisterThunk(userRegisterData);
      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(expectedActionLoading);
      expect(dispatch).toHaveBeenCalledWith(expectedActionfeedback);
      expect(dispatch).toHaveBeenCalledWith(expectedActionStatus);
    });
  });

  describe("When userRegisterThunk it's invoked with an existen username", () => {
    test("Then it should call dispatch with finishedLoadingActionCreator, feedbackOnActionCreator and setStatusCodeActionCreator", async () => {
      const expectedActionLoading = finishedLoadingUserActionCreator();
      const expectedActionfeedback = feedbackOnActionCreator();
      const expectedActionStatus = setStatusCodeActionCreator(409);
      mock.onPost(`${url}user/register`).reply(409);

      const thunk = await userRegisterThunk(userRegisterData);
      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(expectedActionLoading);
      expect(dispatch).toHaveBeenCalledWith(expectedActionfeedback);
      expect(dispatch).toHaveBeenCalledWith(expectedActionStatus);
    });
  });

  describe("When userRegisterThunk it's invoked with a incorrect user register data", () => {
    test("Then it should call dispatch with finishedLoadingActionCreator, feedbackOnActionCreator and setStatusCodeActionCreator", async () => {
      const expectedActionLoading = finishedLoadingUserActionCreator();
      const expectedActionfeedback = feedbackOnActionCreator();
      const expectedActionStatus = setStatusCodeActionCreator(400);
      mock.onPost(`${url}user/register`).reply(400);

      const thunk = await userRegisterThunk(userRegisterData);
      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(expectedActionLoading);
      expect(dispatch).toHaveBeenCalledWith(expectedActionfeedback);
      expect(dispatch).toHaveBeenCalledWith(expectedActionStatus);
    });
  });

  describe("When userLoginThunk it's invoked with a correct user login data", () => {
    test("Then it should call dispatch with finishedLoadingActionCreator, feedbackOnActionCreator and setStatusCodeActionCreator", async () => {
      const mockToken = "4309850-23459";
      const expectedActionLoading = loadingUserActionCreator();
      const expectedActionLoadingFinish = finishedLoadingUserActionCreator();
      const expectedActionStatus = setStatusCodeActionCreator(0);
      mock.onPost(`${url}user/login`).reply(200, {
        token: mockToken,
      });

      const thunk = await userLoginThunk(userLoginData);
      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(expectedActionLoading);
      expect(dispatch).toHaveBeenCalledWith(expectedActionLoadingFinish);
      expect(dispatch).toHaveBeenCalledWith(expectedActionStatus);
    });
  });

  describe("When userLoginThunk it's invoked with a incorrect user login data", () => {
    test("Then it should call dispatch with finishedLoadingActionCreator, feedbackOnActionCreator and setStatusCodeActionCreator", async () => {
      const expectedActionLoading = finishedLoadingUserActionCreator();
      const expectedActionfeedback = feedbackOnActionCreator();
      const expectedActionStatus = setStatusCodeActionCreator(400);
      mock
        .onPost(`${url}user/login`)
        .reply(400, { response: { data: "error" } });

      const thunk = await userLoginThunk(userLoginData);
      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(expectedActionLoading);
      expect(dispatch).toHaveBeenCalledWith(expectedActionfeedback);
      expect(dispatch).toHaveBeenCalledWith(expectedActionStatus);
    });
  });
});
