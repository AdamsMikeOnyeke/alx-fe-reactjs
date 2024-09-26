import React from 'react'
import { create } from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [],
  addRecipe: (newRecipe) => set((state) => ({
    recipes: [...state.recipes, newRecipe]
  })),
  setRecipes: (recipes) => set({ recipes })
}));

export { useRecipeStore };
