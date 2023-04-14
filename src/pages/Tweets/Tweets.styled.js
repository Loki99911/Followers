import styled, { keyframes } from 'styled-components';
import { NavLink } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai';

export const TweetsContainer = styled.div`
  padding-top: 20px;
  display: flex;
  flex-direction: column;
`;

export const HomeLink = styled(NavLink)`
  display: inline-flex;
  border-radius: 10px;
  padding: 14px 39px;
  background-color: #5cd3a8;
  margin-bottom: 20px;
`;

const arrowAnimation = keyframes`
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(-10px);
  }
  100% {
    transform: translateX(0);
  }
`;

export const TweetsArrow = styled(AiOutlineArrowLeft)`
  animation: ${arrowAnimation} 1s infinite;
`;

export const TweetsBlock = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
  row-gap:20px;
  grid-template-columns: 1fr;

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (min-width: 1280px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;
