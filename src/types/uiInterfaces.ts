export interface IUserInterface {
  loading: boolean;
  loadingUser: boolean;
  feedback: boolean;
  statusCode: number;
}

export type IErrorCode = number;

export type ITypeOfAlert = "error" | "info" | "success" | "warning";
