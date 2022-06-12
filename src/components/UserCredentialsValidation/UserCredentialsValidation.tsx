import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";
import { RootState } from "../../redux/store/store";

interface Props {
  children: JSX.Element;
}

const UserCredentialsValidation = ({ children }: Props) => {
  const navigate = useNavigate();
  const { logged } = useAppSelector((state: RootState) => state.user);

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!logged || !token) navigate("/login");
  }, [logged, navigate, token]);

  if (token) {
    return children;
  } else {
    return null;
  }
};

export default UserCredentialsValidation;
