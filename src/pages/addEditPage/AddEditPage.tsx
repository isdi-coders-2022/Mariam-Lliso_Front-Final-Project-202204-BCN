import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AddEditForm from "../../components/AddEditForm/AddEditForm";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { RootState } from "../../redux/store/store";
import { loadSingleEstablishmentThunk } from "../../redux/thunks/singleEstablishmentThunks/singleEstalbishmentThunks";
import { IUserState } from "../../types/userInterfaces";
import AddEditPagePageStyle from "./AddEditPageStyle";

const AddEditPage = (): JSX.Element => {
  const { logged }: IUserState = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const { establishmentId } = useParams();

  useEffect(() => {
    if (logged && establishmentId) {
      dispatch(loadSingleEstablishmentThunk(establishmentId));
    }
  }, [logged, establishmentId, dispatch]);

  return (
    <AddEditPagePageStyle>
      <AddEditForm />
    </AddEditPagePageStyle>
  );
};

export default AddEditPage;
