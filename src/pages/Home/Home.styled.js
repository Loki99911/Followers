import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HomeContainer = styled.div`
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
  text-decoration: none;
  border-radius: 10px;
  padding: 14px 39px;
  background-color: #5cd3a8;
`;
