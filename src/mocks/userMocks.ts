import { IUserProfile, IUserRegister, IUserRol } from "../types/userInterfaces";

export const mockUserRegister: IUserRegister = {
  name: "name",
  surnames: "password",
  username: "username",
  password: "password",
  userRol: "rol",
};

export const mockRol: IUserRol = {
  code: "ADM",
  description: "Admin",
};
export const mockUserProfile: IUserProfile = {
  name: "Lola",
  surnames: "Mento",
  username: "Lolamento",
  userRol: mockRol,
};
