import Establishment from "../../components/Establishment/Establishment";
import Loader from "../../components/Layout/Loader/Loader";
import { useAppSelector } from "../../redux/hooks";
import { IEstablishment } from "../../types/establishmentInterface";
import {
  EstablishmentListStyle,
  EstablishmentPageStyle,
} from "./EstablishmentPageStyle";

const EstablishmentListPage = (): JSX.Element => {
  const { loading } = useAppSelector((state) => state.ui);
  const { establishments } = useAppSelector((state) => state.establishments);

  return (
    <EstablishmentPageStyle>
      {loading ? (
        <Loader />
      ) : (
        <EstablishmentListStyle>
          {establishments.map((establishment: IEstablishment) => (
            <li key={establishment.id}>
              <Establishment establishment={establishment} />
            </li>
          ))}
        </EstablishmentListStyle>
      )}
    </EstablishmentPageStyle>
  );
};

export default EstablishmentListPage;
