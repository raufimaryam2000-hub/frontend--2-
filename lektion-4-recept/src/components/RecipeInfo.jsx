function RecipeInfo() {
    const dish = "Pasta Carbonara";
    const author = "Maryam"; 
    const time = "30 minuter";

    return (
        <section className="recipe-info">
            <h1>{dish}</h1>
            <p>Recept av {author} · {time}</p>
        </section>
    );
} 

export default RecipeInfo; 