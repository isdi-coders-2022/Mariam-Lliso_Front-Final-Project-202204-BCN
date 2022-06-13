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
`;

export default AddEditFormStyle;
