import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AddEditForm from "../../components/AddEditForm/AddEditForm";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { RootState } from "../../redux/store/store";
import { loadSingleEstablishmentThunk } from "../../redux/thunks/singleEstablishmentThunks/singleEstalbishmentThunks";
import { IUserState } from "../../types/userInterfaces";
import AddEditPagePageStyle from "./AddEditPageStyle";

const AddEditPage = (): JSX.Element => {
  const { logged }: IUserState = useAppSelector(
    (state: RootState) => state.user
  );
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { establishmentId } = useParams();

  useEffect(() => {
    if (logged) {
      if (establishmentId) {
        console.log("hola");
        dispatch(loadSingleEstablishmentThunk(establishmentId));
        navigate(`/establishment/edit/${establishmentId}`);
      } else {
        navigate("/establishment/add");
      }
    }
  }, [navigate, logged, establishmentId, dispatch]);

  return (
    <AddEditPagePageStyle>
      <AddEditForm />
    </AddEditPagePageStyle>
  );
};

export default AddEditPage;
