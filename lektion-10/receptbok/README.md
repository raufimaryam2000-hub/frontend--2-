# Gruppövning: Receptbok med React Router

Ni bygger en sida som visar **rätt recept** beroende på vilket id som står i URL:en.

API: https://dummyjson.com/recipes (gratis, ingen nyckel behövs)

Öppna gärna https://dummyjson.com/recipes/1 i webbläsaren först, så ser ni hur datan för ett recept ser ut.

Instruktionerna för gruppövningen finns i Google-dokumentet från läraren. Stegen nedan är samma steg i kort form.

## Kom igång

```
npm install
npm run dev
```

Startsidan och listan med recept fungerar redan. Det är receptsidan ni ska bygga.
Alla ställen ni ska ändra är markerade med `TODO` i koden.

## Steg 1 – Route med parameter (`src/App.jsx`)

1. Importera `RecipeDetails`.
2. Lägg till en `Route` med `path="/recipes/:id"` som visar `<RecipeDetails />`.

✅ **Testa:** Gå till `localhost:5173/recipes/1`. Du ska se rubriken ”Receptsida”.

## Steg 2 – Länkar (`src/pages/RecipeList.jsx`)

1. Importera `Link` från `"react-router-dom"`.
2. Gör om varje receptnamn till en `Link` som går till `/recipes/` + receptets id.

```jsx
to={`/recipes/${recipe.id}`}
```

✅ **Testa:** Klicka på ett recept. URL:en ska ändras till t.ex. `/recipes/3`.

## Steg 3 – useParams (`src/pages/RecipeDetails.jsx`)

1. Importera `useParams`.
2. `const { id } = useParams();`
3. Visa id:t på sidan, t.ex. ”Du tittar på recept 3”.

✅ **Testa:** Klicka på olika recept. Siffran ska ändras.

## Steg 4 – Hämta receptet (`src/pages/RecipeDetails.jsx`)

1. Importera `useState` och `useEffect`.
2. Skapa ett state för receptet med startvärdet `null`.
3. Hämta från `https://dummyjson.com/recipes/` + id i en `useEffect`. Glöm inte `[id]`.
4. Visa ”Laddar...” tills datan har kommit.
5. Visa `name`, `image`, `cuisine` och `difficulty`.

✅ **Testa:** Klicka på olika recept. Rätt namn och bild ska visas.

## Extra

1. Lägg till en tillbaka-länk till `/recipes`.
2. Lägg till en länk till nästa recept. Tips: `Number(id) + 1`.
3. Visa ingredienserna som en lista med `.map()` (`recipe.ingredients`).
4. Visa total tid: `recipe.prepTimeMinutes + recipe.cookTimeMinutes` minuter.
