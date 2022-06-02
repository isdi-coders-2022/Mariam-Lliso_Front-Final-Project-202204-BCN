export interface IUserState {
  logged: boolean,
  name: string,
  surnames: string,
  username: string,
  userRol: string,
}

export interface IUserRegister {
  name: string,
  surnames: string,
  username: string,
  password: string,
  userRol: string,
}

export interface IValidationUserRegister {
  name: boolean,
  username: boolean,
  password: boolean,
}
