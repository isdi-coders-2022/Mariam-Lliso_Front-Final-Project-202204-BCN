export interface IUserInterface {
  loading: boolean,
  feedback: boolean,
  statusCode: string
}

export type IErrorCode = string;

export type ITypeOfAlert = "error" | "info" | "success" | "warning";
