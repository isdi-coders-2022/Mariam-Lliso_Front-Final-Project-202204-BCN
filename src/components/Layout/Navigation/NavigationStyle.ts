import styled from "styled-components";
import theme from "../../../theme/theme";

const NavigationStyle = styled.div`
  .Mui-focusVisible {
    color: ${theme.palette.primary.main};
  }

  .MuiButton-root {
    color: ${theme.palette.grey[900]};
  }

  .navigation__tab {
    cursor: pointer;
    background-color: none;
    border: none;
    user-select: none;
  }

  .navigation__tab:focus {
    color: green;
  }

  @media only screen and (max-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: space-around;

    .navigation__tab {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .navigation__icon {
      margin-bottom: -5px;
    }
  }

  @media only screen and (min-width: 769px) {
    .navigation__tab {
      align-items: center;
    }

    .navigation__icon {
      margin-right: 10px;
    }
  }
`;

export default NavigationStyle;
