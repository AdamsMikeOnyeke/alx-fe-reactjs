import React from 'react'
 // RecipeList component
 import { useRecipeStore } from './recipeStore';
 import { Link } from 'react-router-dom';

 const RecipeList = () => {
   const recipes = useRecipeStore(state => state.recipes);

   return (
    <div>
      {filteredRecipes.length > 0 ? (
        filteredRecipes.map((recipe) => (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
            {/* Link to view details of each recipe */}
            <Link to={`/recipe/${recipe.id}`}>View Recipe</Link>
          </div>
        ))
      ) : (
        <p>No recipes found.</p>
      )}
    </div>
  );
};

 // AddRecipeForm component
 import { useState } from 'react';
 import { useRecipeStore } from './recipeStore';

 const AddRecipeForm = () => {
   const addRecipe = useRecipeStore(state => state.addRecipe);
   const [title, setTitle] = useState('');
   const [description, setDescription] = useState('');

   const handleSubmit = (event) => {
     event.preventDefault();
     addRecipe({ id: Date.now(), title, description });
     setTitle('');
     setDescription('');
   };

   return (
     <form onSubmit={handleSubmit}>
       <input
         type="text"
         value={title}
         onChange={(e) => setTitle(e.target.value)}
         placeholder="Title"
       />
       <textarea
         value={description}
         onChange={(e) => setDescription(e.target.value)}
         placeholder="Description"
       />
       <button type="submit">Add Recipe</button>
     </form>
   );
 };

export default RecipeList;

