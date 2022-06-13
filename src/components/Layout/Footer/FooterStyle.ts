import styled from "styled-components";
import theme from "../../../theme/theme";

const FooterStyle = styled.footer`
  @media only screen and (max-width: 768px) {
    z-index: 9;
    position: sticky;
    bottom: 0;
    padding: 1rem clamp(1rem, 5%, 3rem);
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(3.5px);
    border-radius: 10px 10px 0 0;

    .nav {
      background-color: ${theme.palette.grey[100]};
      border-radius: 10px;
      box-shadow: 0px 4px 2px 0px rgb(0 0 0 / 5%);
      color: ${theme.palette.grey[900]};
    }
  }

  @media only screen and (min-width: 769px) {
    .nav {
      display: none;
    }
  }
`;

export default FooterStyle;
