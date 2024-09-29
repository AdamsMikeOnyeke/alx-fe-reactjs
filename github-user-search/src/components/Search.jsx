import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState('');
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setUser(null);  // Reset user data on new search

    try {
      const userData = await fetchUserData(username);
      setUser(userData);  // Set user data on successful fetch
    } catch (err) {
      setError('Looks like we can’t find the user');  // Handle error
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter GitHub username"
          required
        />
        <button type="submit">Search</button>
      </form>

      {loading && <p>Loading...</p>} {/* Show loading message */}
      {error && <p>{error}</p>} {/* Show error message */}
      {user && (  // Display user info if fetched successfully
        <div>
          <img src={user.avatar_url} alt={user.login} width={100} /> {/* User's avatar */}
          <h2>{user.name || user.login}</h2> {/* User's name or login */}
          <a href={user.html_url} target="_blank" rel="noopener noreferrer">View Profile</a>
        </div>
      )}
    </div>
  );
};

export default Search;

