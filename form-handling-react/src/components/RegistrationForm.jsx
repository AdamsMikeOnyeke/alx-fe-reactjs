import React from 'react'
import React, { useState } from 'react';

const RegistrationForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();

    // Reset errors
    setErrors({});

    // Basic validation
    const newErrors = {};
    if (!username) {
      newErrors.username = 'Username is required'; // Validation for username
    }
    if (!email) {
      newErrors.email = 'Email is required'; // Validation for email
    }
    if (!password) {
      newErrors.password = 'Password is required'; // Validation for password
    }

    // If there are errors, set them and return
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Submit logic here (e.g., API call)
    console.log('Form submitted:', { username, email, password });

    // Clear form fields
    setUsername('');
    setEmail('');
    setPassword('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
        {errors.username && <p style={{ color: 'red' }}>{errors.username}</p>} {/* Error message for username */}
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>} {/* Error message for email */}
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>} {/* Error message for password */}
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;

