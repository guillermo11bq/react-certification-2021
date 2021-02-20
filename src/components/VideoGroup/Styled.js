import styled from 'styled-components';

const container = styled.div`
  margin: 0;
  padding: 2rem;
  width: 100%;
`;

const video = styled.div`
  display: inline-block;
  width: 45%;
  margin-right: 2rem;

  &:nth-child(2n) {
    margin-right: 0;
  }
`;

export default { container, video };
