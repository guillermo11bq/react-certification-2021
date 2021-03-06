import styled from 'styled-components';

export const Container = styled.div`
  margin: 0;
  padding: 2rem;
  width: 100%;
`;

export const Video = styled.div`
  display: inline-block;
  width: 45%;
  margin-right: 2rem;

  &:nth-child(2n) {
    margin-right: 0;
  }
`;
