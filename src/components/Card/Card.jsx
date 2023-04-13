import logo from '../../../assets/CardLogo.svg';
export const Card = (photo, tweets, followers) => {
  return (
    <div>
      <div>
        <img src={logo} alt="logo" />
      </div>
      <div>
        <p>{tweets + ' TWEETS'}</p>
        <p>{followers + ' FOLLOWERS'}</p>
        <button type="button"></button>
      </div>
    </div>
  );
};
