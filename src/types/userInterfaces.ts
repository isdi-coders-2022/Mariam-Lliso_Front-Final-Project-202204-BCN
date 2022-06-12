export interface IUserState {
  logged: boolean;
  userData: {
    username: string;
    userRol: string;
    id: string;
  };
}
export interface IUserLoged {
  username: string;
  userRol: string;
  id: string;
}

export interface IUserRegister {
  name: string;
  surnames: string;
  username: string;
  password: string;
  userRol: string;
}

export interface IUserLogin {
  username: string;
  password: string;
}

export interface IValidationUserRegister {
  name: boolean;
  username: boolean;
  password: boolean;
}

export interface IValidationUserLogin {
  username: boolean;
  password: boolean;
}

export type Token = string | null;

export interface IUserProfile {
  name: string;
  surnames: string;
  username: string;
  userRol: IUserRol;
}

export interface IUserRol {
  code: string;
  description: string;
}
