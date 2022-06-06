import { Typography } from "@mui/material";
import LoginForm from "../../components/LoginForm/LoginForm";
import LoginPageStyle from "./LoginPageStyle";

const LoginPage = (): JSX.Element => {
  return (
    <LoginPageStyle>
          <Typography variant="h1" component="h2" className="register_tittle">
            ¡Nos alegra verte de nuevo por aquí!
          </Typography>
        <LoginForm></LoginForm>
    </LoginPageStyle>
  )
}

export default LoginPage;
