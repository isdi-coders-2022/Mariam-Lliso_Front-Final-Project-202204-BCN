import styled from "styled-components";

export const EstablishmentPageStyle = styled.div`
  padding: 1.5rem clamp(1rem, 5%, 3rem);
`;

export const EstablishmentListStyle = styled.ul`
  display: grid;
  grid-gap: 2rem;

  @media (min-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }

  @media (min-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  li {
    position: relative;
    width: 100%;
  }
`;
