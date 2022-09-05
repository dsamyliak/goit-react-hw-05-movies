import styled from 'styled-components';

export const Container = styled.div`
  display: inline-flex;
  // grid-template-columns: repeat(auto-fit, 200px);
  // gap: 16px;
`;

export const CardWrapper = styled.div`
  display: block;
  padding: 30px;

  // border: 1px solid black;
  // border-radius: 4px;

  > a {
    text-decoration: none;
  }
`;
export const ImageBlock = styled.img`
  display: inline-flex;
  width: 30%;
`;
export const Header1 = styled.h1`
  padding: 0;
  margin: 0;
  border: 0;
`;
