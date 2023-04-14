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
export const Card = ({ photo, tweets, followers }) => {
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
        <LowPartText>{followers + ' Followers'}</LowPartText>
        <CardBtn type="button">Follow</CardBtn>
      </LowPart>
    </CardWrap>
  );
};
