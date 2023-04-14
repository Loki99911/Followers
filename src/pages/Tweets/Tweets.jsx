import { Card } from 'components/Card/Card';
import {
  HomeLink,
  TweetsArrow,
  TweetsBlock,
  TweetsContainer,
} from './Tweets.styled';
import { useEffect } from 'react';
import { useState } from 'react';
import { getUsers } from 'service/reqestApi';

const Tweets = () => {
  const [users, setUsers] = useState([]);
  const [following, setFollowing] = useState([]);

  useEffect(() => {
    getUsers().then(res => {
      setUsers(res);
    });
    const savedArray = JSON.parse(localStorage.getItem('followingArray'));
    if (savedArray.length > 0) {
      setFollowing(savedArray);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('followingArray', JSON.stringify(following));
  }, [following]);

  return (
    <TweetsContainer>
      <div>
        <HomeLink to="/">
          <TweetsArrow />
          Go Home
        </HomeLink>
      </div>
      <TweetsBlock>
        {users.map(user => (
          <Card
            followingUser={following.includes(user.id)}
            setFollowing={setFollowing}
            key={user.id}
            photo={user.avatar}
            tweets={user.tweets}
            followers={user.followers}
            id={user.id}
          />
        ))}
      </TweetsBlock>
    </TweetsContainer>
  );
};

export default Tweets;
