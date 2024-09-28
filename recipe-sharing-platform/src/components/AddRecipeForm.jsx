import React, { useState } from 'react';

function AddRecipeForm() {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !ingredients || !instructions) {
      setError('All fields are required!');
      return;
    }

    // Here you can handle the submission (e.g., send data to an API)
    console.log({ title, ingredients, instructions });
    // Clear form
    setTitle('');
    setIngredients('');
    setInstructions('');
    setError('');
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Add a New Recipe</h1>
      {error && <p className="text-red-500">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-2">Recipe Title</label>
          <input 
            type="text" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
            className="border rounded p-2 w-full"
            required 
          />
        </div>
        <div>
          <label className="block mb-2">Ingredients (separated by commas)</label>
          <textarea 
            value={ingredients} 
            onChange={(e) => setIngredients(e.target.value)} 
            className="border rounded p-2 w-full"
            required 
          />
        </div>
        <div>
          <label className="block mb-2">Cooking Instructions</label>
          <textarea 
            value={instructions} 
            onChange={(e) => setInstructions(e.target.value)} 
            className="border rounded p-2 w-full"
            required 
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white rounded p-2">
          Add Recipe
        </button>
      </form>
    </div>
  );
}

export default AddRecipeForm;
