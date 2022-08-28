import styled from 'styled-components';
import { FcSearch } from 'react-icons/fc';

export const Wrapper = styled.div`
  display: inline-flex;
  align-items: center;
  position: relative;
  margin-bottom: 16px;
  text-transform: uppercase;
`;

export const Input = styled.input`
  padding: 8px 32px 8px 8px;
  border-radius: 10px;
  font: inherit;
  border: 1px gray dotted;
`;

export const Icon = styled(FcSearch)`
  width: 20px;
  height: 20px;
  position: absolute;
  right: 6px;
`;
