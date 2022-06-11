import styled from "styled-components";
import theme from "../../theme/theme";

const EstablishmentStyle = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background: ${theme.palette.grey[100]};
  backdrop-filter: blur(3.5px);
  border-radius: 10px;
  box-shadow: 0px 4px 2px 0px rgb(0 0 0 / 5%);
  padding: 1rem clamp(1rem, 5%, 3rem);

  .establishment__container {
    flex-grow: 1;
  }

  .establishment__header {
    overflow: hidden;
    height: 150px;
    border-radius: 5px;
    position: relative;
    margin-bottom: 15px;
  }

  .establishment__image {
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .establishment__image img {
    height: auto;
    width: 100%;
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

  .establishment_location-tittle {
    margin-left: 10px;
  }

  .establishment_tittle {
    margin-bottom: 4px;
  }

  .establishment_subtittle {
    margin-bottom: 15px;
  }
`;

export default EstablishmentStyle;
