import UserProfile from "../../components/UserProfile/UserProfile";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { IUserInterface } from "../../types/uiInterfaces";
import UserProfilePageStyle from "./UserProfilePageStyle";
import Loader from "../../components/Layout/Loader/Loader";
import { useEffect } from "react";
import { userProfileThunk } from "../../redux/thunks/userThunks/userThunks";
import { Token } from "../../types/userInterfaces";

const UserProfilePage = () => {
  const { loadingUser } = useAppSelector<IUserInterface>((state) => state.ui);

  return (
    <UserProfilePageStyle>
      {loadingUser ? <Loader /> : <UserProfile />}
    </UserProfilePageStyle>
  );
};

export default UserProfilePage;
