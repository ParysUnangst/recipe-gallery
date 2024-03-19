import React from 'react';
import carbonaraImage from './images/speghetti.jpg';
import alfredoImage from './images/alfredo.jpg';
import stirFryImage from './images/stirfry.jpg';

const recipes = [
  { id: 1, title: "Spaghetti Carbonara", ingredients: ["Pasta", "Eggs", "Cheese", "Bacon"], image: carbonaraImage },
  { id: 2, title: "Chicken Alfredo", ingredients: ["Chicken", "Pasta", "Cream", "Parmesan"], image: alfredoImage },
  { id: 3, title: "Vegetable Stir Fry", ingredients: ["Broccoli", "Carrots", "Bell Peppers", "Soy Sauce"], image: stirFryImage  }
];

function RecipeGallery() {
  return (
    <div className="recipe-gallery">
      {recipes.map(recipe => (
        <div key={recipe.id} className="recipe-card">
          <h2>{recipe.title}</h2>
          <img src={recipe.image} alt={recipe.title} />
          <ul>
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default RecipeGallery;
