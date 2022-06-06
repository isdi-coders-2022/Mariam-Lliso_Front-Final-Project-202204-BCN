import { Typography } from "@mui/material";
import RegisterForm from "../../components/RegisterForm/RegisterForm"
import RegisterPageStyle from "./RegisterPageStyle";

const RegisterPage = (): JSX.Element => {
  return (
    <RegisterPageStyle>
          <Typography variant="h1" component="h2" className="register_tittle">
            Crear una nueva cuenta
          </Typography>
        <RegisterForm></RegisterForm>
    </RegisterPageStyle>
  )
}

export default RegisterPage;
