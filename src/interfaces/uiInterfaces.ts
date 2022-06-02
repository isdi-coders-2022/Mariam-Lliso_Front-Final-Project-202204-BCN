export interface IUserInterface {
  loading: boolean,
  feedback: boolean,
  statusCode: number | null
}

export type IErrorCode = number;

export type ITypeOfAlert = "error" | "info" | "success" | "warning";
