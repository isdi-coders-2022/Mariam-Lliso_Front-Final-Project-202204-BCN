import { Button, Typography } from "@mui/material";
import { IEstablishment } from "../../types/establishmentInterface";
import EstablishmentStyle from "./EstablishmentStyle";
import NearMeOutlinedIcon from "@mui/icons-material/NearMeOutlined";
import { rolAdmin } from "../../utils/userRols";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { IUserState } from "../../types/userInterfaces";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { deleteEstablishmentThunk } from "../../redux/thunks/establishmentsThunks/establishmentsThunks";
import { useNavigate } from "react-router-dom";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import AlternateEmailOutlinedIcon from "@mui/icons-material/AlternateEmailOutlined";

interface Props {
  establishment: IEstablishment;
}

const Establishment = (props: Props): JSX.Element => {
  const { userData } = useAppSelector<IUserState>((state) => state.user);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const deleteEstablishment = () => {
    dispatch(deleteEstablishmentThunk(props.establishment.id));
  };

  const editEstablisment = () => {
    navigate(`/establishment/edit/${props.establishment.id}`);
  };

  return (
    <EstablishmentStyle>
      <div className="establishment__header">
        <div className="establishment__labels">
          {props.establishment.establishmentType.map((type) => (
            <span className="establishment__label" key={type.code}>
              {type.description}
            </span>
          ))}
        </div>
        <div className="establishment__image">
          <img
            src={
              props.establishment.pictureBackup
                ? props.establishment.pictureBackup
                : "/image/establishment_default.jpg"
            }
            alt={props.establishment.name}
            width="900"
            height="400"
          />
        </div>
      </div>
      <div className="establishment__container">
        <Typography
          variant="h2"
          component="h2"
          className="establishment_tittle"
        >
          {props.establishment.name}
        </Typography>
        <Typography
          variant="subtitle1"
          component="h3"
          className="establishment_subtittle"
        >
          {props.establishment.cusine}
        </Typography>
        <div className="establishment_location">
          <NearMeOutlinedIcon />
          <Typography
            variant="body1"
            component="h4"
            className="establishment_location-tittle"
          >
            {`${props.establishment.adress}, ${props.establishment.municipality}, ${props.establishment.region}`}
          </Typography>
        </div>
        {props.establishment.phone && (
          <div className="establishment_location">
            <LocalPhoneOutlinedIcon />
            <Typography
              variant="body1"
              component="h4"
              className="establishment_location-tittle"
            >
              {`${props.establishment.phone}`}
            </Typography>
          </div>
        )}
        {props.establishment.email && (
          <div className="establishment_location">
            <AlternateEmailOutlinedIcon />
            <Typography
              variant="body1"
              component="h4"
              className="establishment_location-tittle"
            >
              {`${props.establishment.email}`}
            </Typography>
          </div>
        )}
        {props.establishment.website && (
          <div className="establishment_location">
            <LanguageOutlinedIcon />
            <Typography
              variant="body1"
              component="h4"
              className="establishment_location-tittle"
            >
              {`${props.establishment.website}`}
            </Typography>
          </div>
        )}
      </div>
      <div className="establishment__footer">
        <div className="establishment__footer-actions">
          {userData.userRol === rolAdmin && (
            <>
              <Button
                fullWidth
                size="large"
                type="submit"
                variant="contained"
                startIcon={<EditOutlinedIcon />}
                className="establishment__footer-actions--edit"
                onClick={editEstablisment}
              >
                editar
              </Button>
              <Button
                onClick={deleteEstablishment}
                fullWidth
                size="large"
                type="submit"
                variant="contained"
                startIcon={<DeleteOutlinedIcon />}
                className="establishment__footer-actions--delete"
              >
                eliminar
              </Button>
            </>
          )}
        </div>
      </div>
    </EstablishmentStyle>
  );
};

export default Establishment;
