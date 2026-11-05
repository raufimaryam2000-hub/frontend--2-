import IngredientItem from "./IngredientItem";

function Ingredients() {
  const ingredients = ["400 g spaghetti", "150 g bacon", "3 ägg", "100 g parmesan"];

  return (
    <section>
      <h2>Ingredienser</h2>
      <ul>
        {ingredients.map((item) => (
          <IngredientItem key={item} ingredient={item} />
        ))}
      </ul>
    </section>
  );
}

export default Ingredients; 