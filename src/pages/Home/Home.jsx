import { HomeArrow, HomeContainer, HomeText, TweetsLink } from "./Home.styled";

const Home = () => {
  return (
    <HomeContainer>
      <HomeText>
        Welcome to Tweet-follower! To start viewing new users, click the button
        below <HomeArrow />
      </HomeText>
      <TweetsLink to="/tweets">View users</TweetsLink>
    </HomeContainer>
  );
};

export default Home;
