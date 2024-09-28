import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import data from '../data.json'; // Adjust the path as necessary

function HomePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // Fetching mock recipe data from the data.json
    const fetchData = async () => {
      const response = await fetch('/data.json'); // If your JSON is hosted, adjust the path accordingly
      const jsonData = await response.json();
      setRecipes(jsonData);
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Recipe List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {recipes.map((recipe) => (
          <Link to={`/recipe/${recipe.id}`} key={recipe.id} className="block">
            <div className="bg-white shadow-lg rounded-lg p-4 hover:shadow-xl transition-shadow duration-300">
              <img
                src={recipe.image}
                alt={recipe.title}
                className="rounded-lg h-32 w-full object-cover mb-2"
              />
              <h2 className="text-xl font-semibold">{recipe.title}</h2>
              <p className="text-gray-600">{recipe.summary}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
