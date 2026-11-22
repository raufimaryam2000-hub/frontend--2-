import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function RecipeDetails() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/recipes/${id}`)
      .then((res) => res.json())
      .then((data) => setRecipe(data));
  }, [id]);

  if (!recipe) {
    return <p>Laddar...</p>;
  }

  return (
    <div>
      <h1>{recipe.name}</h1>
      <img src={recipe.image} alt={recipe.name} />
      <p>Kök: {recipe.cuisine}</p>
      <p>Svårighetsgrad: {recipe.difficulty}</p>
    </div>
  );
}

export default RecipeDetails; 