import axios from 'axios';
const apiUrl = process.env.REACT_APP_BASE_URL;
axios.defaults.baseURL = apiUrl;

export const getUsers = async () => {
  try {
    const response = await axios.get(`/users`);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
