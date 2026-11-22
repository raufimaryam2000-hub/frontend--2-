import { useState, useEffect } from "react";
import { Link } from "react-router-dom"; 

function RecipeList() {
  const [recipes, setRecipes] = useState([]);

  // Den här delen är redan klar: vi hämtar 12 recept från API:et.
  useEffect(() => {
    fetch("https://dummyjson.com/recipes?limit=12")
      .then((res) => res.json())
      .then((data) => setRecipes(data.recipes));
  }, []);

  return (
     <div>
      <h1>Recept</h1>
      <ul className="recipe-list">
        {recipes.map((recipe) => (
          <li key={recipe.id}>
            <img src={recipe.image} alt={recipe.name} />
            <Link to={`/recipes/${recipe.id}`}>{recipe.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  ); 
} 

    

export default RecipeList;
