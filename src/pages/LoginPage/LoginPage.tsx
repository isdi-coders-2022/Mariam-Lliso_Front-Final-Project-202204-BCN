import { Typography } from "@mui/material";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "../../components/LoginForm/LoginForm";
import { useAppSelector } from "../../redux/hooks";
import { RootState } from "../../redux/store/store";
import { IUserState } from "../../types/userInterfaces";
import LoginPageStyle from "./LoginPageStyle";

const LoginPage = (): JSX.Element => {
  const { logged }: IUserState = useAppSelector(
    (state: RootState) => state.user
  );
  const navigate = useNavigate();

  useEffect(() => {
    if (logged) {
      navigate("/user/profile");
    }
  }, [navigate, logged]);

  return (
    <LoginPageStyle>
      <Typography variant="h1" component="h2" className="register_tittle">
        ¡Nos alegra verte de nuevo por aquí!
      </Typography>
      <LoginForm></LoginForm>
    </LoginPageStyle>
  );
};

export default LoginPage;
