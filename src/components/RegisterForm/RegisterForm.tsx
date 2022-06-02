import { Button, FormControl, FormHelperText, IconButton, InputAdornment, InputLabel, OutlinedInput, Stack } from "@mui/material";
import { useState } from "react";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { IUserRegister, IValidationUserRegister } from "../../interfaces/userInterfaces";

const RegisterForm = (): JSX.Element => {
  const formInitialState: IUserRegister = {
    name: "",
    surnames: "",
    username: "",
    password: "",
  }
  const [formData, setFormData] = useState<IUserRegister>(formInitialState);

  const submitRegisterForm = (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    const isNotValidated = validateFields();
    if (isNotValidated) {
      return;
    }

    resetData();
  };

  const changeData = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setFormData({ ...formData, [event.target.id]: event.target.value });
  };

  const resetData = (): void => {
    setFormData(formInitialState);
  };

  const errorInitialState: IValidationUserRegister = {
    name: false,
    username: false,
    password: false,
  }
  const [errors, setErrors] = useState<IValidationUserRegister>(errorInitialState);

  const validateFields = (): boolean => {
    let tempErrors = {...errors};
    tempErrors.name = formData.name === "" ? true : false;
    tempErrors.username = formData.username === "" ? true : false;
    tempErrors.password = formData.password === "" ? true : false;
    setErrors(tempErrors);

    const isNotValidated = Object.values(tempErrors).some(element => element === true);
    return isNotValidated;
  }

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
      setShowPassword(!showPassword);
  };
  

  return (
    <form autoComplete="off" onSubmit={submitRegisterForm}>
      <Stack spacing={3}>

        <FormControl variant="outlined">
          <InputLabel htmlFor="name" error={errors.name}>Nombre</InputLabel>
          <OutlinedInput
            id="name"
            type="text"
            label="Nombre"
            onChange={changeData}
            value={formData.name}
            error={errors.name}
          />
          <FormHelperText id="name-helpertext" error={errors.name}>{errors.name ? "El nombre es obligatorio" : " "}</FormHelperText>
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
            <FormHelperText id="surname-helpertext">{" "}</FormHelperText>
        </FormControl>

        <FormControl variant="outlined">
          <InputLabel htmlFor="username" error={errors.username}>Username</InputLabel>
          <OutlinedInput
            id="username"
            type="text"
            label="Username"
            onChange={changeData}
            value={formData.username}
            error={errors.username}
          />
          <FormHelperText id="username-helpertext" error={errors.username}>{errors.username ? "El nombre de usuario es obligatorio" : " "}</FormHelperText>
        </FormControl>

        <FormControl variant="outlined">
          <InputLabel htmlFor="password" error={errors.password}>Password</InputLabel>
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
          <FormHelperText id="password-helpertext" error={errors.password}>{errors.password ? "La contraseña es obligatoria" : " "}</FormHelperText>
        </FormControl>

        <Button fullWidth size="large" type="submit" variant="contained">
          registrarse
        </Button>
      </Stack>
    </form>
    )
}

export default RegisterForm;
