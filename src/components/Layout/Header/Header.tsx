import { Box, Typography } from "@mui/material";
import Navigation from "../Navigation/Navigation";
import HeaderStyle from "./HeaderStyle";

const Header = (): JSX.Element => {
  return (
    <HeaderStyle>
      <Box className="header">
        <Typography variant="h3" component="h1">
          Valencia Sin Gluten
        </Typography>
        <div className="header__navigation">
          <Navigation />
        </div>
      </Box>
    </HeaderStyle>
  )
}

export default Header;
