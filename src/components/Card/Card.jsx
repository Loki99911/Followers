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
  const followUser = () => {
    if (!followingUser) {
      setFollowing(prev => [...prev, id]);
    } else {
      setFollowing(prev => prev.filter(element => element !== id));
    }
  };

  return (
    <CardWrap>
      <UpperPart>
        <CardLogo src={logo} alt="logo GoIt" />
      </UpperPart>
      <CenterPart>
        <UserImgThumb>
          <UserImg src={photo} alt="UserPhoto" />
        </UserImgThumb>
      </CenterPart>
      <LowPart>
        <LowPartText>{tweets + ' Tweets'}</LowPartText>
        <LowPartText>
          {(!followingUser ? followers : followers + 1) + ' Followers'}
        </LowPartText>
        <CardBtn
          type="button"
          onClick={followUser}
          followingUser={followingUser}
        >
          {followingUser ? 'Following' : 'Follow'}
        </CardBtn>
      </LowPart>
    </CardWrap>
  );
};
