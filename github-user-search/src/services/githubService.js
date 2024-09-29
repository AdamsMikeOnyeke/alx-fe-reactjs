import axios from 'axios';

const fetchUserData = async (username, location, minRepos) => {
  // Construct the query string based on user inputs
  const query = `${username}${location ? `+location:${location}` : ''}${minRepos ? `+repos:>=${minRepos}` : ''}`;
  const url = `https://api.github.com/search/users?q=${encodeURIComponent(query)}`;

  try {
    const response = await axios.get(url);
    return response.data.items; // Return the list of users
  } catch (error) {
    throw error; // Throw error to be handled in the component
  }
};

export { fetchUserData };
