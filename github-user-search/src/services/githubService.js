import axios from 'axios';

const fetchUserData = async (username) => {
  const url = `https://api.github.com/users/${username}`;
  try {
    const response = await axios.get(url);
    return response.data;  // Return the user data
  } catch (error) {
    throw error;  // Throw error to be handled in the component
  }
};

export { fetchUserData };
