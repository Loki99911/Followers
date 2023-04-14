import { Card } from 'components/Card/Card';
import { HomeLink, TweetsArrow, TweetsContainer } from './Tweets.styled';

const cardExample = {
  photo:
    'https://play-lh.googleusercontent.com/UjaAdTYsArv7zAJbqGWjQw2ftuOtnAlvokffC3TQQ2K12mwk0YdXUF2wZBTBA2kDZIk',
  tweets: 777,
  followers: 100500,
};

const Tweets = () => {
  return (
    <TweetsContainer>
      <div>
        <HomeLink to="/">
          <TweetsArrow />
          Go Home
        </HomeLink>
      </div>
      <div>
        <Card
          photo={cardExample.photo}
          tweets={cardExample.tweets}
          followers={cardExample.followers}
        />
      </div>
    </TweetsContainer>
  );
};

export default Tweets;
