import Establishment from "../../components/Establishment/Establishment";
import Loader from "../../components/Layout/Loader/Loader";
import { useAppSelector } from "../../redux/hooks";
import { IEstablishment } from "../../types/establishmentInterface";
import EstablishmentPageStyle from "./EstablishmentPageStyle";

const EstablishmentListPage = (): JSX.Element => {
  const { loading } = useAppSelector((state) => state.ui);
  const { establishments } = useAppSelector((state) => state.establishment);

  return (
    <EstablishmentPageStyle>
    {
      loading ?
      (<Loader />) :
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
