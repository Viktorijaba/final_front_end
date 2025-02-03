import React, { useState } from "react";

const Product = ({ recipes }) => {
    const [trigger, setTrigger] = useState(false);

    return (
        <div
            className="recipe-card"
            style={{
                backgroundColor: trigger ? "#acefac" : "white",
                transition: "background-color 0.3s ease"
            }}
        >
            <p className="recipe-id">{recipes.id}</p>
            <img src={recipes.image} alt={recipes.name} className="recipe-image" />
            <h4 className="recipe-name">{recipes.name}</h4>
            <p className="recipe-ingredients">
                <strong>Ingredients:</strong> {recipes.ingredients.join(", ")}
            </p>
            <p className="instructions">
                <strong>Instructions:</strong> {recipes.instructions}
            </p>
            <p className="recipe-cooking">
                <strong>Prep Time:</strong> {recipes.prepTimeMinutes} minutes <br />
                <strong>Cook Time:</strong> {recipes.cookTimeMinutes} minutes <br />
                <strong>Servings:</strong> {recipes.servings} <br />
                <strong>Difficulty:</strong> {recipes.difficulty} <br />
                <strong>Cuisine:</strong> {recipes.cuisine} <br />
                <strong>Calories per Serving:</strong> {recipes.calories}
            </p>
            <p className="recipe-tags">
                <strong>Tags:</strong> {recipes.tags.join(", ")}
            </p>
            <p className="recipe-meal-type">
                <strong>Meal Type:</strong> {recipes.mealType.join(", ")}
            </p>
            <p className="recipe-rating">
                <strong>Rating:</strong> {recipes.rating} ({recipes.reviewCount} reviews)
            </p>
            <p className="userID">
                <strong>User ID:</strong> {recipes.userId}
            </p>
            <button onClick={() => setTrigger(!trigger)}>Completed</button>
        </div>
    );
};

export default Product;
