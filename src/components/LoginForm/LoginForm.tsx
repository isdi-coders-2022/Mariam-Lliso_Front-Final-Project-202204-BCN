import {
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  Link,
  OutlinedInput,
  Stack,
} from "@mui/material";
import { useCallback, useState } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { IUserLogin, IValidationUserLogin } from "../../types/userInterfaces";
import { LoadingButton } from "@mui/lab";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { userLoginThunk } from "../../redux/thunks/userThunks/userThunks";
import { useNavigate } from "react-router-dom";
import { IUserInterface } from "../../types/uiInterfaces";
import AlertCustom, { IAlertCustom } from "../Layout/AlertCustom/AlertCustom";
import { feedbackOffActionCreator } from "../../redux/features/uiSlice/uiSlice";

const LoginForm = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { loadingUser, feedback, statusCode } = useAppSelector<IUserInterface>(
    (state) => state.ui
  );

  const formInitialState: IUserLogin = {
    username: "",
    password: "",
  };
  const [formData, setFormData] = useState<IUserLogin>(formInitialState);

  const submitRegisterForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const isNotValidated = validateFields();
    if (isNotValidated) {
      return;
    }

    dispatch(userLoginThunk(formData));
    resetData();
    navigate("/user/profile");
  };

  const resetData = (): void => {
    setFormData(formInitialState);
  };

  const changeData = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setFormData({ ...formData, [event.target.id]: event.target.value });
  };

  const errorInitialState: IValidationUserLogin = {
    username: false,
    password: false,
  };
  const [errors, setErrors] = useState<IValidationUserLogin>(errorInitialState);

  const validateFields = (): boolean => {
    let tempErrors = { ...errors };
    tempErrors.username = formData.username === "" ? true : false;
    tempErrors.password = formData.password === "" ? true : false;
    setErrors(tempErrors);

    return Object.values(tempErrors).some((element) => element === true);
  };

  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const navigateToRegister = () => {
    navigate("/register");
  };

  const feedbackOff = useCallback(
    () => dispatch(feedbackOffActionCreator()),
    [dispatch]
  );

  const validationServer: IAlertCustom = {
    title: `Usuario o contraseña erroneos`,
    content: `
      Comprueba que los datos introducidos son correctos`,
    type: "error",
    action: feedbackOff,
  };

  return (
    <form autoComplete="off" onSubmit={submitRegisterForm}>
      <Stack spacing={3}>
        <FormControl variant="outlined">
          <InputLabel htmlFor="username" error={errors.username}>
            Username
          </InputLabel>
          <OutlinedInput
            id="username"
            type="text"
            label="Username"
            onChange={changeData}
            value={formData.username}
            error={errors.username}
          />
          <FormHelperText id="username-helpertext" error={errors.username}>
            {errors.username ? "El nombre de usuario es obligatorio" : " "}
          </FormHelperText>
        </FormControl>

        <FormControl variant="outlined">
          <InputLabel htmlFor="password" error={errors.password}>
            Password
          </InputLabel>
          <OutlinedInput
            id="password"
            role="password"
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle-password-visibility"
                  onClick={handleClickShowPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
            onChange={changeData}
            value={formData.password}
            error={errors.password}
          />
          <FormHelperText id="password-helpertext" error={errors.password}>
            {errors.password ? "La contraseña es obligatoria" : " "}
          </FormHelperText>
        </FormControl>

        <LoadingButton
          fullWidth
          size="large"
          type="submit"
          variant="contained"
          loading={loadingUser}
        >
          iniciar sesión
        </LoadingButton>

        {feedback &&
          (statusCode === 403 ? (
            <AlertCustom
              title={validationServer.title}
              content={validationServer.content}
              type={validationServer.type}
              action={validationServer.action}
            ></AlertCustom>
          ) : (
            ""
          ))}

        <Link
          variant="subtitle2"
          type="button"
          component="button"
          underline="none"
          onClick={navigateToRegister}
        >
          ¿Aun no tienes cuenta? ¡Registrate ahora!
        </Link>
      </Stack>
    </form>
  );
};

export default LoginForm;
