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
import {
  IUserRegister,
  IValidationUserRegister,
} from "../../types/userInterfaces";
import { LoadingButton } from "@mui/lab";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { feedbackOffActionCreator } from "../../redux/features/uiSlice/uiSlice";
import AlertCustom, { IAlertCustom } from "../Layout/AlertCustom/AlertCustom";
import { userRegisterThunk } from "../../redux/thunks/userThunks/userThunks";
import { useNavigate } from "react-router-dom";

const RegisterForm = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { loadingUser, feedback, statusCode } = useAppSelector(
    (state) => state.ui
  );

  const formInitialState: IUserRegister = {
    name: "",
    surnames: "",
    username: "",
    password: "",
    userRol: "",
  };
  const [formData, setFormData] = useState<IUserRegister>(formInitialState);

  const submitRegisterForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const isNotValidated = validateFields();
    if (isNotValidated) {
      return;
    }

    dispatch(userRegisterThunk(formData));
    resetData();
  };

  const resetData = (): void => {
    setFormData(formInitialState);
  };

  const changeData = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setFormData({ ...formData, [event.target.id]: event.target.value });
  };

  const errorInitialState: IValidationUserRegister = {
    name: false,
    username: false,
    password: false,
  };
  const [errors, setErrors] =
    useState<IValidationUserRegister>(errorInitialState);

  const validateFields = (): boolean => {
    let tempErrors = { ...errors };
    tempErrors.name = formData.name === "" ? true : false;
    tempErrors.username = formData.username === "" ? true : false;
    tempErrors.password = formData.password === "" ? true : false;
    setErrors(tempErrors);

    return Object.values(tempErrors).some((element) => element === true);
  };

  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const feedbackOff = useCallback(
    () => dispatch(feedbackOffActionCreator()),
    [dispatch]
  );

  const userFound: IAlertCustom = {
    title: `Ya existe el usuario`,
    content: `
      Parece que el nombre de usuario que has indicado ya esta cogido.
      Prueba con otro o inicia sesión.`,
    type: "warning",
    action: feedbackOff,
  };

  const userCreated: IAlertCustom = {
    title: `Usuario registrado`,
    content: `¡Genial! Ahora ya formas parte de Valencia Sin Gluten.
      Solo queda que inicies sesión y listo.`,
    type: "success",
    action: feedbackOff,
  };

  const validationServer: IAlertCustom = {
    title: `Los datos introducidos no son correctos`,
    content: `
      El nombre, el apellido y el nombre de usuario no debe superar los 30 caracteres.
      La contraseña debe tener entre 5 y 20 caracteres.`,
    type: "error",
    action: feedbackOff,
  };

  const navigate = useNavigate();
  const navigateToLogin = () => {
    navigate("/login");
  };

  return (
    <form autoComplete="off" onSubmit={submitRegisterForm}>
      <Stack spacing={3}>
        <FormControl variant="outlined">
          <InputLabel htmlFor="name" error={errors.name}>
            Nombre
          </InputLabel>
          <OutlinedInput
            id="name"
            type="text"
            label="Nombre"
            onChange={changeData}
            value={formData.name}
            error={errors.name}
          />
          <FormHelperText id="name-helpertext" error={errors.name}>
            {errors.name ? "El nombre es obligatorio" : " "}
          </FormHelperText>
        </FormControl>

        <FormControl variant="outlined">
          <InputLabel htmlFor="surnames">Apellidos</InputLabel>
          <OutlinedInput
            id="surnames"
            type="text"
            label="Apellidos"
            onChange={changeData}
            value={formData.surnames}
          />
          <FormHelperText id="surname-helpertext"> </FormHelperText>
        </FormControl>

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
          registrarse
        </LoadingButton>

        {feedback &&
          (statusCode === 201 ? (
            <AlertCustom
              title={userCreated.title}
              content={userCreated.content}
              type={userCreated.type}
              action={userCreated.action}
            ></AlertCustom>
          ) : (
            ""
          ))}

        {feedback &&
          (statusCode === 409 ? (
            <AlertCustom
              title={userFound.title}
              content={userFound.content}
              type={userFound.type}
              action={userFound.action}
            ></AlertCustom>
          ) : (
            ""
          ))}

        {feedback &&
          (statusCode === 400 ? (
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
          onClick={navigateToLogin}
        >
          ¿Ya tienes una cuenta? ¡Inicia sesión!
        </Link>
      </Stack>
    </form>
  );
};

export default RegisterForm;
