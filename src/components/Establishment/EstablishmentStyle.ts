import styled from "styled-components";
import theme from "../../theme/theme";

const EstablishmentStyle = styled.div`
  padding: 1rem clamp(1rem, 5%, 3rem);
  background: ${theme.palette.grey[100]};
  backdrop-filter: blur(3.5px);
  border-radius: 10px;
  margin-bottom: 30px;
  box-shadow: 0px 4px 2px 0px rgb(0 0 0 / 5%);

  @media only screen and (min-width: 769px) {
    display: flex;
    gap: 40px;

    .establishment__header {
      flex: 2;
    }

    .establishment__container {
      flex: 2;
    }
  }

  .establishment__header {
    overflow: hidden;
    height: 150px;
    border-radius: 5px;
    position: relative;
    display: flex;
    align-items: center;
    margin-bottom: 15px;
  }

  .establishment__image {
    width: -moz-available;
    width: -webkit-fill-available;
    width: fill-available;
  }

  .establishment__labels {
    position: absolute;
    top: 8px;
    left: 8px;
  }

  .establishment__label {
    background-color: ${theme.palette.primary.main};
    margin-right: 4px;
    padding: 0px 15px;
    border-radius: 50px;
    text-transform: uppercase;
    color: white;
  }

  .establishment_location {
    display: flex;
    align-items: center;
  }

  .establishment_tittle {
    margin-bottom: 4px;
  }

  .establishment_subtittle {
    margin-bottom: 15px;
  }

  .establishment_location-tittle {
    margin-left: 10px;
  }
`;

export default EstablishmentStyle;
