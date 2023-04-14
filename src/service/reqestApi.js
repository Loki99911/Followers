import axios from 'axios';
axios.defaults.baseURL = 'https://6436fad18205915d3401dcba.mockapi.io';

export const getUsers = async () => {
  try {
    const response = await axios.get(`/users`);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
