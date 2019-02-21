import styled from 'styled-components';

export const MainGrid = styled.div`
  display: grid;
  grid-template-columns: 30% 1fr;
  grid-gap: 20px;
`;

export const MainContentColumn = styled.main`
  border: 1px solid #eee;
  border-radius: 10px;
  padding: 2rem;
`;
