import styled from "styled-components";
import theme from "../../theme/theme";

const AddEditFormStyle = styled.div`
  .addEdit_tittle {
    margin-bottom: 20px;
  }

  .uploaded-image {
    background-color: ${theme.palette.primary.light};
    margin-top: 10px;
    padding: 5px;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .uploaded-image__button {
    margin: 0 20px;
  }

  .custom-select,
  .error {
    line-height: 1.4375em;
    font-size: 1rem;
    font-family: Poppins, sans-serif;
    font-weight: 400;
    color: #212b36;
    border-radius: 10px;
    font-weight: 500;
    padding: 15.5px 14px;
    border-color: ${theme.palette.grey[400]};
    box-sizing: border-box;
  }

  .custom-select {
    border-color: ${theme.palette.grey[400]};
  }

  .custom-select:hover {
    outline: none;
    border: 1px solid black;
  }

  .custom-select:active {
    outline: none;
    border: 2px solid ${theme.palette.primary.main};
  }

  .custom-select:focus {
    outline: none;
    border: 2px solid ${theme.palette.primary.main};
  }

  .error {
    border-color: ${theme.palette.error.main};
  }

  .error:hover,
  .error:active,
  .error:focus {
    outline: none;
    border: 2px solid ${theme.palette.error.main};
  }
`;

export default AddEditFormStyle;
