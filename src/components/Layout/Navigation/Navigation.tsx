import NavigationStyle from "./NavigationStyle";
import StorefrontIcon from "@mui/icons-material/Storefront";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { IUserState } from "../../../types/userInterfaces";
import { RootState } from "../../../redux/store/store";
import { useAppSelector } from "../../../redux/hooks";

const Navigation = () => {
  const { logged }: IUserState = useAppSelector(
    (state: RootState) => state.user
  );
  const navigate = useNavigate();

  const profile = () => {
    if (!logged) {
      navigate("/login");
    }

    if (logged) {
      navigate("/user/profile");
    }
  };

  return (
    <NavigationStyle>
      <Button
        className="navigation__tab"
        onClick={() => navigate("/establishment/list")}
      >
        <div className="navigation__icon">
          <StorefrontIcon />
        </div>
        <Typography variant="overline" display="block">
          lugares
        </Typography>
      </Button>
      <Button className="navigation__tab" onClick={profile}>
        <div className="navigation__icon">
          <PermIdentityIcon />
        </div>
        <Typography variant="overline" display="block">
          perfil
        </Typography>
      </Button>
    </NavigationStyle>
  );
};

export default Navigation;
