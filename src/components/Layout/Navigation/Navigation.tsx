import NavigationStyle from "./NavigationStyle";
import StorefrontIcon from '@mui/icons-material/Storefront';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import { Button, Typography } from "@mui/material";

const Navigation = () => {

  return (
  <NavigationStyle>
    <Button variant="text" className="navigation__tab">
      <div className="navigation__icon">
        <StorefrontIcon />
      </div>
      <Typography variant="overline" display="block">
        lugares
      </Typography>
    </Button>
    <Button className="navigation__tab">
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
