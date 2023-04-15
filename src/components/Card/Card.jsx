import { useState } from 'react';
import logo from '../../images/CardLogo.svg';
import {
  CardBtn,
  CardLogo,
  CardWrap,
  CenterPart,
  LowPart,
  LowPartText,
  UpperPart,
  UserImg,
  UserImgThumb,
} from './Card.styled';
export const Card = ({
  followingUser,
  setFollowing,
  photo,
  tweets,
  followers,
  id,
}) => {
  const [btnIsHovered, setBtnIsHovered] = useState(false);
  const followUser = () => {
    if (!followingUser) {
      setFollowing(prev => [...prev, id]);
    } else {
      setFollowing(prev => prev.filter(element => element !== id));
    }
  };

  const handleHover = () => {
    setBtnIsHovered(true);
  };

  const handleLeave = () => {
    setBtnIsHovered(false);
  };

  return (
    <CardWrap>
      <UpperPart>
        <CardLogo src={logo} alt="logo GoIt" />
      </UpperPart>
      <CenterPart>
        <UserImgThumb btnIsHovered={btnIsHovered}>
          <UserImg src={photo} alt="UserPhoto" />
        </UserImgThumb>
      </CenterPart>
      <LowPart>
        <LowPartText>{tweets.toLocaleString('en-US') + ' Tweets'}</LowPartText>
        <LowPartText>
          {(!followingUser
            ? followers.toLocaleString('en-US')
            : (followers + 1).toLocaleString('en-US')) + ' Followers'}
        </LowPartText>
        <CardBtn
          type="button"
          onClick={followUser}
          followingUser={followingUser}
          onMouseEnter={handleHover}
          onMouseLeave={handleLeave}
        >
          {followingUser ? 'Following' : 'Follow'}
        </CardBtn>
      </LowPart>
    </CardWrap>
  );
};
