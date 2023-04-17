export const paginationUsers = (users, page, perPage) => {
  return users.slice(0, perPage * page);
};
