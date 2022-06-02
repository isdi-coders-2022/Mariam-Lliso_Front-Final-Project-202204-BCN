import styled from "styled-components";


const AlertCustomStyle = styled.div`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba( 255, 255, 255, 0.8);
  padding: 1.5rem clamp(1rem, 5%, 3rem)
`;

export default AlertCustomStyle;
