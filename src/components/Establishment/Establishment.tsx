import { Typography } from "@mui/material";
import { IEstablishment } from "../../types/establishmentInterface";
import EstablishmentStyle from "./EstablishmentStyle";
import theme from "../../theme/theme";
import NearMeOutlinedIcon from '@mui/icons-material/NearMeOutlined';

interface Props {
  establishment: IEstablishment;
}

const Establishment = (props: Props): JSX.Element => {
  return (
      <EstablishmentStyle>
        <div className="establishment__header">
          <div className="establishment__labels">
            {props.establishment.establishmentType.map((type) => 
              <span className="establishment__label" key={type.code}>{type.description}</span>
            )}
          </div>
          <div className="establishment__image">
            <img src="/image/establishment_default.jpg" alt=""/>
          </div>
        </div>
        <div className="establishment__container">
          <Typography variant="h2" component="h2" className="establishment_tittle">
            {props.establishment.name}
          </Typography>
          <Typography variant="subtitle1" component="h3" color={theme.palette.primary.main} className="establishment_subtittle">
            {props.establishment.cusine}
          </Typography>
          <div className="establishment_location">
          <NearMeOutlinedIcon /> 
          <Typography variant="body1" component="h4" className="establishment_location-tittle">
            {`${props.establishment.adress}, ${props.establishment.municipality}, ${props.establishment.region}`}
          </Typography>
          </div>
        </div>
        <div className="establishment__footer">
          <p>hola</p>
        </div>
      </EstablishmentStyle>
  )
}

export default Establishment;
