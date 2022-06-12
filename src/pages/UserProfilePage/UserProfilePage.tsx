import UserProfile from "../../components/UserProfile/UserProfile";
import { useAppSelector } from "../../redux/hooks";
import { IUserInterface } from "../../types/uiInterfaces";
import UserProfilePageStyle from "./UserProfilePageStyle";
import Loader from "../../components/Layout/Loader/Loader";

const UserProfilePage = () => {
  const { loadingUser } = useAppSelector<IUserInterface>((state) => state.ui);

  return (
    <UserProfilePageStyle>
      {loadingUser ? <Loader /> : <UserProfile />}
    </UserProfilePageStyle>
  );
};

export default UserProfilePage;
