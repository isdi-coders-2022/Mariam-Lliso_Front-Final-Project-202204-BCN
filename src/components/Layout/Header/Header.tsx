import { Box, Typography } from "@mui/material";
import HeaderStyle from "./HeaderStyle";

const Header = (): JSX.Element => {
  return (
    <HeaderStyle>
      <Box className="header">
        <Typography variant="h3" component="h1">
          Valencia Sin Gluten
        </Typography>
      </Box>
    </HeaderStyle>
  )
}

export default Header;
