import { Card } from 'components/Card/Card';
import {
  EmptinessFild,
  HomeLink,
  LoadMoreArrow,
  LoadMoreBtn,
  TweetsActions,
  TweetsArrow,
  TweetsBlock,
  TweetsContainer,
} from './Tweets.styled';
import { useEffect } from 'react';
import { useState } from 'react';
import { getUsers } from 'service/reqestApi';
import DropDown from 'components/DropDown/DropDown';
import { filterUsers } from 'service/filterUsers';
import { paginationUsers } from 'service/paginationUsers';
import { Loader } from 'components/Loader/Loader';

const Tweets = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [following, setFollowing] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [page, setPage] = useState(1);
  const perPage = 12;

  useEffect(() => {
    async function getAllUsers() {
      try {
        setIsLoading(true);
        const allUsers = await getUsers();
        setUsers(allUsers);
      } catch (error) {
        alert(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    getAllUsers();
    const savedArray = JSON.parse(localStorage.getItem('followingArray'));
    setFollowing(savedArray);
  }, []);

  useEffect(() => {
    if (following !== null) localStorage.setItem('followingArray', JSON.stringify(following));
  }, [following]);

  const loadMore = () => {
    setPage(prev => ++prev);
  };

  const filtredUsers = filterUsers(users, following, selectedOption);

  return (
    <TweetsContainer>
      <TweetsActions>
        <HomeLink to="/">
          <TweetsArrow />
          Go Home
        </HomeLink>
        <DropDown selected={selectedOption} setSelected={setSelectedOption} />
      </TweetsActions>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {filtredUsers.length === 0 ? (
            <EmptinessFild>Nothing new here yet...</EmptinessFild>
          ) : (
            <TweetsBlock>
              {paginationUsers(filtredUsers, page, perPage).map(user => (
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
          )}
          {filtredUsers.length > page * perPage && (
            <LoadMoreBtn type="button" onClick={loadMore}>
              Load more <LoadMoreArrow />
            </LoadMoreBtn>
          )}
        </>
      )}
    </TweetsContainer>
  );
};

export default Tweets;
