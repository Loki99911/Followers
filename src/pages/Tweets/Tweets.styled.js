import styled, { keyframes } from 'styled-components';
import { NavLink } from 'react-router-dom';
import { AiOutlineArrowDown, AiOutlineArrowLeft } from 'react-icons/ai';

export const TweetsContainer = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
`;

export const HomeLink = styled(NavLink)`
  display: inline-flex;
  border-radius: 10px;
  padding: 14px 39px;
  background-color: #5cd3a8;
  margin-right: 20px;
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
  margin-right: 5px;
`;

export const TweetsBlock = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
  margin-bottom: 20px;
  row-gap: 20px;
  grid-template-columns: 1fr;

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (min-width: 1280px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const TweetsActions = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const LoadMoreBtn = styled.button`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  color: #373737;
  display: inline;
  height: 50px;
  width: 200px;
  margin: 0 auto;
  padding: 15px;
  border-radius: 10px;
  background-color: #5cd3a8;
`;

const arrowAnimationLoadMore = keyframes`
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

export const LoadMoreArrow = styled(AiOutlineArrowDown)`
  animation: ${arrowAnimationLoadMore} 1s infinite;
`;

export const EmptinessFild = styled.p`
  margin: 0 auto;
`;
