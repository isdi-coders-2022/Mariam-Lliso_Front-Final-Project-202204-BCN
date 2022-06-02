import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { IUserRegister } from "../../interfaces/userInterfaces";
import { feedbackOnActionCreator, finishedLoadingActionCreator, setStatusCodeActionCreator } from "../features/uiSlice/uiSlice";
import { userRegisterThunk } from "./userThunks";

const mock = new MockAdapter(axios);
const url = process.env.REACT_APP_API_URL;

describe("Given the a userThunks", () => {
  const dispatch = jest.fn();

  const userData: IUserRegister = {
    name: "name",
    surnames: "surnames",
    username: "username",
    password: "password",
    userRol: "rol",
  };

  describe("When userRegisterThunk it's invoked with a correct user register data", () => {
    test("Then it should call dispatch with finishedLoadingActionCreator, feedbackOnActionCreator and setStatusCodeActionCreator", async () => {
      const expectedActionLoading = finishedLoadingActionCreator();
      const expectedActionfeedback = feedbackOnActionCreator();
      const expectedActionStatus = setStatusCodeActionCreator(201);
      mock.onPost(`${url}user/register`).reply(201);

      const thunk = await userRegisterThunk(userData);
      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(expectedActionLoading);
      expect(dispatch).toHaveBeenCalledWith(expectedActionfeedback);
      expect(dispatch).toHaveBeenCalledWith(expectedActionStatus);
    });
  });

  describe("When userRegisterThunk it's invoked with an existen username", () => {
    test("Then it should call dispatch with finishedLoadingActionCreator, feedbackOnActionCreator and setStatusCodeActionCreator", async () => {
      const expectedActionLoading = finishedLoadingActionCreator();
      const expectedActionfeedback = feedbackOnActionCreator();
      const expectedActionStatus = setStatusCodeActionCreator(409);
      mock.onPost(`${url}user/register`).reply(409);

      const thunk = await userRegisterThunk(userData);
      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(expectedActionLoading);
      expect(dispatch).toHaveBeenCalledWith(expectedActionfeedback);
      expect(dispatch).toHaveBeenCalledWith(expectedActionStatus);
    });
  });

  describe("When userRegisterThunk it's invoked with a incorrect user register data", () => {
    test("Then it should call dispatch with finishedLoadingActionCreator, feedbackOnActionCreator and setStatusCodeActionCreator", async () => {
      const expectedActionLoading = finishedLoadingActionCreator();
      const expectedActionfeedback = feedbackOnActionCreator();
      const expectedActionStatus = setStatusCodeActionCreator(400);
      mock.onPost(`${url}user/register`).reply(400);

      const thunk = await userRegisterThunk(userData);
      await thunk(dispatch);

      expect(dispatch).toHaveBeenCalledWith(expectedActionLoading);
      expect(dispatch).toHaveBeenCalledWith(expectedActionfeedback);
      expect(dispatch).toHaveBeenCalledWith(expectedActionStatus);
    });
  });
});
