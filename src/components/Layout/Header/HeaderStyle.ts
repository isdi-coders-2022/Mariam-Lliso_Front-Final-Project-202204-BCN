import styled from "styled-components";
import theme from "../../../theme/theme";


const HeaderStyle = styled.header`
  padding: 1.5rem clamp(1rem, 5%, 3rem);
  background: rgba( 255, 255, 255, 0.8);
  box-shadow: 0 4px 4px 0 rgb(0 0 0 / 10%);
  backdrop-filter: blur( 3.5px );
  border-radius: 0 0 10px 10px;

  .header {
    background-color: ${theme.palette.grey[100]};
    padding: 1rem clamp(1rem, 5%, 3rem);
    border-radius: 10px;
    box-shadow: 0px 4px 2px 0px rgb(0 0 0 / 5%);
    color: ${theme.palette.grey[900]}
  }

  .header__title {
      font-size: 20px
  }
`;

export default HeaderStyle;
