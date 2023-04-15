import styled, { keyframes } from 'styled-components';
import { AiOutlineTwitter } from 'react-icons/ai';

export const HeaderContainer = styled.header`
  display: flex;
  height: 100px;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(30deg, #5cd3a8, #ebd8ff 50%, #5736a3);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

export const HeaderText = styled.h1`
  font-size: 36px;
  color: #373737;
`;

const svgColorAnimation = keyframes`
  0% {
    fill: red;
  }
  20% {
    fill: orange;
  }
  40% {
    fill: yellow;
  }
  60% {
    fill: green;
  }
  80% {
    fill: blue;
  }
  100% {
    fill: violet;
  }
`;

export const HeaderIcon = styled(AiOutlineTwitter)`
  width: 36px;
  height: 36px;
  margin-right: 20px;
  animation: ${svgColorAnimation} 5s infinite alternate;
`;
