import axios from 'axios';

const apiKey = import.meta.env.VITE_GITHUB_API_KEY;  // Access the GitHub API key

export const searchGitHubUsers = async (username) => {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}`, {
      headers: {
        Authorization: `token ${apiKey}`  // Use the API key in the request header if required
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching GitHub user data:', error);
    throw error;
  }
};
