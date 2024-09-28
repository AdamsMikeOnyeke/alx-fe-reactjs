import React, { useState, useEffect } from 'react';
import data from '../data.json'; // Importing the mock data

function HomePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // Simulating fetching data from an API
    setRecipes(data);
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-4">Recipe Sharing Platform</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img src={recipe.image} alt={recipe.title} className="rounded-t-lg w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{recipe.title}</h2>
              <p className="text-gray-600">{recipe.summary}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
