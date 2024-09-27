import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Profile from './components/Profile';
import NotFound from './components/NotFound';
import ProtectedRoute from './components/ProtectedRoute';
import BlogPost from './components/BlogPost';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/profile/*" element={<Profile />} />

        <Route path="*" element={<NotFound />} />

        <Route path="/blog/:Id" element={<BlogPost />} />

        <Route
          path="/profile/*"
          element={
            <ProtectedRoute isAuth={isAuthenticated}>
              <Profile />
            </ProtectedRoute>
          }
        />

      </Routes>
    </Router>
  );
}

export default App;
