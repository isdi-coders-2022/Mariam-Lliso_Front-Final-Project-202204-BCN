import styled from "styled-components";
import theme from "../../../theme/theme";


const HeaderStyle = styled.header`
  padding: 1rem clamp(1rem, 5%, 3rem);
  background: rgba( 255, 255, 255, 0.8);
  backdrop-filter: blur( 3.5px );
  border-radius: 0 0 10px 10px;

  .header {
    display: flex;
    justify-content: space-between;
    background-color: ${theme.palette.grey[100]};
    padding: 0.5rem clamp(1rem, 5%, 3rem);
    border-radius: 10px;
    box-shadow: 0px 4px 2px 0px rgb(0 0 0 / 5%);
    color: ${theme.palette.grey[900]}
  }

  @media only screen and (max-width: 768px) {
    .header__navigation {
      display: none;
    }
  }

  @media only screen and (min-width: 769px) {
    .header__navigation {
      //flex: 1;
    }
  }
`;

export default HeaderStyle;
