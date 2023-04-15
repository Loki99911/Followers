export const paginationUsers = (users, page, perPage) => {
  // if (users.length > perPage * page) {
  //   console.log(users.slice(0, perPage * page));
  //   return users.slice(0, perPage * page);
  // }

  // return users;
  return users.slice(0, perPage * page);
};
