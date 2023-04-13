import { HomeContainer, HomeText, TweetsLink } from "./Home.styled";

const Home = () => {
  return (
    <HomeContainer>
      <HomeText>
        Welcome to Tweet Counter! To start viewing new users, click the button
        below
      </HomeText>
      <TweetsLink to="/tweets">View users</TweetsLink>
    </HomeContainer>
  );
};

export default Home;
