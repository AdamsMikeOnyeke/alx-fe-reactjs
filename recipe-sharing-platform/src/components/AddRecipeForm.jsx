import React, { useState } from 'react';

const AddRecipeForm = () => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      // Handle successful form submission (e.g., send data to server)
      console.log('Recipe Submitted:', { title, ingredients, steps });
      // Reset form fields
      setTitle('');
      setIngredients('');
      setSteps('');
      setErrors({});
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!title) errors.title = 'Title is required';
    if (!ingredients || ingredients.split(',').length < 2) {
      errors.ingredients = 'At least two ingredients are required';
    }
    if (!steps) errors.steps = 'Preparation steps are required';
    return errors;
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg mt-10">
      <h1 className="text-2xl font-bold mb-4">Add New Recipe</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="title">
            Recipe Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={`mt-1 block w-full p-2 border border-gray-300 rounded-md ${
              errors.title ? 'border-red-500' : ''
            }`}
            required
          />
          {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="ingredients">
            Ingredients (comma-separated)
          </label>
          <textarea
            id="ingredients"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className={`mt-1 block w-full p-2 border border-gray-300 rounded-md ${
              errors.ingredients ? 'border-red-500' : ''
            }`}
            rows="4"
            required
          ></textarea>
          {errors.ingredients && <p className="text-red-500 text-sm">{errors.ingredients}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="steps">
            Preparation Steps
          </label>
          <textarea
            id="steps"
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            className={`mt-1 block w-full p-2 border border-gray-300 rounded-md ${
              errors.steps ? 'border-red-500' : ''
            }`}
            rows="4"
            required
          ></textarea>
          {errors.steps && <p className="text-red-500 text-sm">{errors.steps}</p>}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200"
        >
          Add Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
