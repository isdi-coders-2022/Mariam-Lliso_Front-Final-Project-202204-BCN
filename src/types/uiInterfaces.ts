export interface IUserInterface {
  loading: boolean,
  feedback: boolean,
  statusCode: number
}

export type IErrorCode = number;

export type ITypeOfAlert = "error" | "info" | "success" | "warning";
