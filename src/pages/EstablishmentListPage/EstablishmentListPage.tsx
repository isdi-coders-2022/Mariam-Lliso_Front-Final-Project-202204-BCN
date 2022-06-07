import { DotPulse } from "@uiball/loaders";
import Establishment from "../../components/Establishment/Establishment";
import { useAppSelector } from "../../redux/hooks";
import theme from "../../theme/theme";
import { IEstablishment } from "../../types/establishmentInterface";
import EstablishmentPageStyle from "./EstablishmentPageStyle";

const EstablishmentListPage = (): JSX.Element => {
  const { loading } = useAppSelector((state) => state.ui);
  const { establishments } = useAppSelector((state) => state.establishment);

  return (
    <EstablishmentPageStyle>
    {
      loading ?
      (<div className="loading">
        <DotPulse size={50} speed={1} color={theme.palette.primary.main} />
      </div>) :
      (
        <ul>
          {establishments.map((establishment: IEstablishment) =>
            <li key={establishment.name}>
              <Establishment establishment={establishment} />
            </li>
          )}
        </ul>
      )
    }
    </EstablishmentPageStyle>
  );
};

export default EstablishmentListPage;
