import { LoadingButton } from "@mui/lab";
import {
  Button,
  FormControl,
  FormHelperText,
  IconButton,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  IEstablishment,
  IEstablishmentAddEdit,
  IValidationEstablishment,
} from "../../types/establishmentInterface";
import { IUserInterface } from "../../types/uiInterfaces";
import { establishmentTypes } from "../../utils/establishmentTypesAndOffers";
import AddEditFormStyle from "./AddEditFormStyle";
import AddPhotoAlternateOutlinedIcon from "@mui/icons-material/AddPhotoAlternateOutlined";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import {
  createEstablishmentThunk,
  editEstablishmentThunk,
} from "../../redux/thunks/establishmentsThunks/establishmentsThunks";
import { getFirebaseImageName } from "../../utils/getFirebaseImageName";

const AddEditForm = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { establishmentId } = useParams();
  const { loading } = useAppSelector<IUserInterface>((state) => state.ui);
  const establishment = useAppSelector<IEstablishment>(
    (state) => state.singleEstablishment
  );

  useEffect(() => {
    if (establishmentId) {
      setFormData({
        establishmentType: establishment.establishmentType[0]?.code || "",
        name: establishment.name || "",
        cusine: establishment.cusine || "",
        adress: establishment.adress || "",
        municipality: establishment.municipality || "",
        region: establishment.region || "",
        phone: establishment.phone || "",
        email: establishment.email || "",
        website: establishment.website || "",
        image: "",
      });
      if (establishment.establishmentType[0]?.code)
        setEstablishmentType(establishment.establishmentType[0]?.code);

      if (establishment.pictureBackup) {
        const imageName = getFirebaseImageName(establishment.pictureBackup);
        setFileName(imageName);
      }
    }
  }, [
    dispatch,
    establishment,
    establishment.adress,
    establishment.cusine,
    establishment.email,
    establishment.establishmentType,
    establishment.municipality,
    establishment.name,
    establishment.phone,
    establishment.region,
    establishment.website,
    establishmentId,
  ]);

  const formInitialState: IEstablishmentAddEdit = {
    establishmentType: "",
    name: "",
    cusine: "",
    establishmentOffer: "",
    adress: "",
    municipality: "",
    region: "",
    phone: "",
    email: "",
    website: "",
    image: "",
  };
  const [formData, setFormData] =
    useState<IEstablishmentAddEdit>(formInitialState);

  const [fileName, setFileName] = useState("");

  const changeData = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [(event.target as HTMLInputElement).id]:
        (event.target as HTMLInputElement).type === "file"
          ? (event.target as HTMLInputElement).files?.[0]
          : (event.target as HTMLInputElement).value,
    });

    if ((event.target as HTMLInputElement).type === "file") {
      setFileName(
        event.target.files?.[0].name ? event.target.files?.[0].name : ""
      );
    }
  };

  const deleteImage = () => {
    setFormData({
      ...formData,
      image: "",
    });
    setFileName("");
  };

  const [establishmentType, setEstablishmentType] = useState("");

  const changeEstablishmentType = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData({
      ...formData,
      establishmentType: event.target.value,
    });
    setEstablishmentType(event.target.value);
  };

  const resetData = (): void => {
    setFormData(formInitialState);
  };

  const errorInitialState: IValidationEstablishment = {
    establishmentType: false,
    name: false,
    adress: false,
    municipality: false,
    region: false,
  };
  const [errors, setErrors] =
    useState<IValidationEstablishment>(errorInitialState);

  const validateFields = (): boolean => {
    let tempErrors = { ...errors };
    tempErrors.establishmentType =
      formData.establishmentType === "" ? true : false;
    tempErrors.name = formData.name === "" ? true : false;
    tempErrors.adress = formData.adress === "" ? true : false;
    tempErrors.municipality = formData.municipality === "" ? true : false;
    tempErrors.region = formData.region === "" ? true : false;
    setErrors(tempErrors);

    return Object.values(tempErrors).some((element) => element === true);
  };

  const submitAddEditForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const isNotValidated = validateFields();
    if (isNotValidated) {
      return;
    }

    const newEstablishment = new FormData();
    newEstablishment.append("establishmentType", formData.establishmentType);
    newEstablishment.append("name", formData.name);
    newEstablishment.append("adress", formData.adress);
    newEstablishment.append("municipality", formData.municipality);
    newEstablishment.append("region", formData.region);
    if (formData.cusine) {
      newEstablishment.append("cusine", formData.cusine);
    }
    if (formData.phone) {
      newEstablishment.append("phone", formData.phone.toString());
    }
    if (formData.email) {
      newEstablishment.append("email", formData.email);
    }
    if (formData.website) {
      newEstablishment.append("website", formData.website);
    }
    if (formData.image) {
      newEstablishment.append("image", formData.image);
    }

    if (establishmentId) {
      dispatch(editEstablishmentThunk(establishmentId, newEstablishment));
    } else {
      dispatch(createEstablishmentThunk(newEstablishment));
    }
    resetData();
  };

  return (
    <AddEditFormStyle>
      {establishmentId ? (
        <Typography variant="h1" component="h1" className="addEdit_tittle">
          Editar establecimiento
        </Typography>
      ) : (
        <Typography variant="h1" component="h1" className="addEdit_tittle">
          Añadir nuevo establecimiento
        </Typography>
      )}

      <form autoComplete="off" onSubmit={submitAddEditForm}>
        <Stack spacing={3}>
          <FormControl variant="outlined">
            <TextField
              id="establishmentType"
              select
              value={establishmentType}
              onChange={changeEstablishmentType}
              label="Tipo de establecimiento"
              error={errors.establishmentType}
            >
              {establishmentTypes.map((option) => (
                <MenuItem key={option.code} value={option.code}>
                  {option.description}
                </MenuItem>
              ))}
            </TextField>

            <FormHelperText
              id="establishmentType-helpertext"
              error={errors.establishmentType}
            >
              {errors.establishmentType
                ? "El tipo de establetimiento es obligatorio"
                : " "}
            </FormHelperText>
          </FormControl>

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
            <InputLabel htmlFor="cusine">Tipo de cocina o productos</InputLabel>
            <OutlinedInput
              id="cusine"
              type="text"
              label="Tipo de cocina o productos"
              onChange={changeData}
              value={formData.cusine}
            />
            <FormHelperText id="cusine-helpertext"> </FormHelperText>
          </FormControl>

          <Button
            fullWidth
            variant="contained"
            component="label"
            startIcon={<AddPhotoAlternateOutlinedIcon />}
          >
            subir una imagen
            <input type="file" hidden id="image" onChange={changeData} />
          </Button>
          {fileName && (
            <div className="uploaded-image">
              <IconButton
                aria-label="delete"
                onClick={deleteImage}
                className="uploaded-image__button"
              >
                <DeleteOutlineIcon />
              </IconButton>
              <p>{fileName}</p>
            </div>
          )}

          <Typography
            variant="h4"
            component="h2"
            className="addEdit_section-tittle"
          >
            Dirección
          </Typography>
          <FormControl variant="outlined">
            <InputLabel htmlFor="adress" error={errors.adress}>
              Dirección
            </InputLabel>
            <OutlinedInput
              id="adress"
              type="text"
              label="Dirección"
              onChange={changeData}
              value={formData.adress}
              error={errors.adress}
            />
            <FormHelperText id="adress-helpertext" error={errors.adress}>
              {errors.adress ? "La dirección es obligatoria" : " "}
            </FormHelperText>
          </FormControl>

          <FormControl variant="outlined">
            <InputLabel htmlFor="municipality" error={errors.municipality}>
              Municipio
            </InputLabel>
            <OutlinedInput
              id="municipality"
              type="text"
              label="Dirección"
              onChange={changeData}
              value={formData.municipality}
              error={errors.municipality}
            />
            <FormHelperText
              id="municipality-helpertext"
              error={errors.municipality}
            >
              {errors.municipality ? "El municipio es obligatorio" : " "}
            </FormHelperText>
          </FormControl>
          <FormControl variant="outlined">
            <InputLabel htmlFor="region" error={errors.region}>
              Provincia
            </InputLabel>
            <OutlinedInput
              id="region"
              type="text"
              label="Dirección"
              onChange={changeData}
              value={formData.region}
              error={errors.region}
            />
            <FormHelperText id="region-helpertext" error={errors.region}>
              {errors.region ? "La provincia es obligatoria" : " "}
            </FormHelperText>
          </FormControl>
          <Typography
            variant="h4"
            component="h2"
            className="addEdit_section-tittle"
          >
            Información de contacto
          </Typography>
          <FormControl variant="outlined">
            <InputLabel htmlFor="phone">Teléfono</InputLabel>
            <OutlinedInput
              id="phone"
              type="number"
              label="Teléfono"
              onChange={changeData}
              value={formData.phone}
            />
            <FormHelperText id="phone-helpertext"> </FormHelperText>
          </FormControl>
          <FormControl variant="outlined">
            <InputLabel htmlFor="email">Correo electrónico</InputLabel>
            <OutlinedInput
              id="email"
              type="text"
              label="Correo electrónico"
              onChange={changeData}
              value={formData.email}
            />
            <FormHelperText id="email-helpertext"> </FormHelperText>
          </FormControl>
          <FormControl variant="outlined">
            <InputLabel htmlFor="website">Página web</InputLabel>
            <OutlinedInput
              id="website"
              type="text"
              label="Página web"
              onChange={changeData}
              value={formData.website}
            />
            <FormHelperText id="website-helpertext"> </FormHelperText>
          </FormControl>
          {establishmentId ? (
            <LoadingButton
              fullWidth
              size="large"
              type="submit"
              variant="contained"
              loading={loading}
            >
              editar establecimiento
            </LoadingButton>
          ) : (
            <LoadingButton
              fullWidth
              size="large"
              type="submit"
              variant="contained"
              loading={loading}
            >
              creaer establecimiento
            </LoadingButton>
          )}
        </Stack>
      </form>
    </AddEditFormStyle>
  );
};

export default AddEditForm;