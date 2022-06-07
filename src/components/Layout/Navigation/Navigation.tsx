import NavigationStyle from "./NavigationStyle";
import StorefrontIcon from '@mui/icons-material/Storefront';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
  const navigate = useNavigate();

  const navigateToEstablishmentList = () => {
    navigate("/establishment/list");
  };

  const navigateToLogin = () => {
    navigate("/login");
  };

  return (
  <NavigationStyle>
    <Button className="navigation__tab" onClick={navigateToEstablishmentList}>
      <div className="navigation__icon">
        <StorefrontIcon />
      </div>
      <Typography variant="overline" display="block">
        lugares
      </Typography>
    </Button>
    <Button className="navigation__tab" onClick={navigateToLogin}>
      <div className="navigation__icon">
        <PermIdentityIcon />
      </div>
      <Typography variant="overline" display="block">
        perfil
      </Typography>
    </Button>
  </NavigationStyle>
  )
}

export default Navigation;
