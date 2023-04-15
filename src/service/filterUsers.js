export const filterUsers = (users, followingArr, filter) => {
  switch (filter) {
    case 'showAll':
      return users;
    case 'follow':
      return users.filter(user => !followingArr.includes(user.id));
    case 'followings':
      return users.filter(user => followingArr.includes(user.id));
    default:
      return users;
  }
};
