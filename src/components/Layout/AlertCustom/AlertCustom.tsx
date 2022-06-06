import { Alert, AlertTitle } from "@mui/material";
import { ITypeOfAlert } from "../../../types/uiInterfaces";
import AlertCustomStyle from "./AlertCustomStyle";

export interface IAlertCustom {
  title: string,
  content: string,
  type: ITypeOfAlert,
  action: Function
}

const AlertCustom = ({title, content, type, action}: IAlertCustom): JSX.Element => {
  const onClose = () => {
    action();
  }

  return (
      <AlertCustomStyle>
        <Alert severity={type} onClose={onClose}>
          <AlertTitle>{title}</AlertTitle>
          {content}
        </Alert>
      </AlertCustomStyle>
  )
}

export default AlertCustom;
