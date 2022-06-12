import styled from "styled-components";
import theme from "../../theme/theme";

const UserProfilePageStyle = styled.div`
  background-color: ${theme.palette.primary.light};
  height: 100vh;
  padding: 1.5rem clamp(1rem, 5%, 3rem);
`;
export default UserProfilePageStyle;
