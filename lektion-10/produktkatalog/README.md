# Övning: Produktkatalog med React Router

I den här övningen bygger du en produktsida som visar **rätt produkt** beroende på vilket id som står i URL:en.

Du tränar på:

- Route med parameter (`/products/:id`)
- `Link` med id i URL:en
- `useParams`
- `fetch` med id:t i en `useEffect`

Vi använder ett gratis test-API: https://dummyjson.com

Öppna gärna https://dummyjson.com/products/1 i webbläsaren först, så ser du hur datan för en produkt ser ut.

---

## Kom igång

1. Packa upp zip-filen och öppna mappen i VS Code.
2. Öppna terminalen och skriv:

```
npm install
npm run dev
```

3. Öppna länken som visas i terminalen (oftast http://localhost:5173).

Startsidan och produktlistan fungerar redan. Det är produktsidan du ska bygga.

Alla ställen du ska ändra är markerade med `TODO` i koden.

---

## Steg 1 – Lägg till en route med parameter

**Fil:** `src/App.jsx`

1. Importera `ProductDetails`.
2. Lägg till en ny `Route` med `path="/products/:id"` som visar `<ProductDetails />`.

✅ **Testa:** Skriv `localhost:5173/products/1` i adressfältet. Du ska se rubriken ”Produktsida”.

---

## Steg 2 – Gör produkterna till länkar

**Fil:** `src/pages/ProductList.jsx`

1. Importera `Link` från `"react-router-dom"`.
2. Gör om varje produkttitel till en `Link`.
3. Länken ska gå till `/products/` + produktens id.

Tips: använd en template literal (backticks):

```jsx
to={`/products/${product.id}`}
```

✅ **Testa:** Klicka på en produkt i listan. URL:en ska ändras till t.ex. `/products/3`.

---

## Steg 3 – Läs av id:t med useParams

**Fil:** `src/pages/ProductDetails.jsx`

1. Importera `useParams` från `"react-router-dom"`.
2. Hämta id:t:

```jsx
const { id } = useParams();
```

3. Visa id:t på sidan, t.ex. ”Du tittar på produkt 3”.

✅ **Testa:** Klicka på olika produkter. Siffran på sidan ska ändras.

> Fungerar det inte? Kolla att namnet är **samma** på båda ställena: `:id` i path och `{ id }` i useParams.

---

## Steg 4 – Hämta produkten från API:et

**Fil:** `src/pages/ProductDetails.jsx`

1. Importera `useState` och `useEffect` från `"react"`.
2. Skapa ett state för produkten med startvärdet `null`.
3. Hämta produkten i en `useEffect`. URL:en är:

```
https://dummyjson.com/products/ + id
```

4. Glöm inte `[id]` sist i `useEffect`.
5. Om produkten inte har kommit än: visa ”Laddar...”.
6. När produkten har kommit: visa
   - titel (`product.title`)
   - bild (`product.thumbnail`)
   - beskrivning (`product.description`)
   - pris (`product.price`)

✅ **Testa:** Klicka på olika produkter. Rätt titel, bild och pris ska visas.

> Fastnar du? Skriv `console.log(id)` och `console.log(product)` och titta i konsolen (F12).

---

## Extrauppgifter (om du blir klar)

1. **Tillbaka-länk:** Lägg till en `Link` på produktsidan som går tillbaka till `/products`.
2. **Nästa produkt:** Lägg till en länk till nästa produkt. Tips: `Number(id) + 1`. Klicka på den – byts produkten? Om inte: kolla `[id]` i din `useEffect`.
3. **Mer info:** Visa även kategori (`product.category`) och betyg (`product.rating`).
4. **Produkten finns inte:** Testa `/products/9999`. Visa texten ”Produkten hittades inte” i stället. Tips: kolla `res.ok` i din fetch.
