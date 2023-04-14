import styled, { keyframes } from 'styled-components';
import { NavLink } from 'react-router-dom';
import { AiOutlineArrowDown } from 'react-icons/ai';

export const HomeContainer = styled.div`
  padding-top: 20px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: calc(100%-40px);
`;

export const HomeText = styled.p`
  margin-bottom: 20px;
`;

export const TweetsLink = styled(NavLink)`
  border-radius: 10px;
  padding: 14px 39px;
  background-color: #5cd3a8;
`;

const arrowAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(10px);
  }
  100% {
    transform: translateY(0);
  }
`;

export const HomeArrow = styled(AiOutlineArrowDown)`
  animation: ${arrowAnimation} 1s infinite;
`;
