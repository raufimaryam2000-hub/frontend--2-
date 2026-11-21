import { useState, useEffect } from "react";
import { Link } from "react-router-dom"; 

function ProductList() {
  const [products, setProducts] = useState([]);

  // Den här delen är redan klar: vi hämtar 10 produkter från API:et.
  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=10")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  return (
    <div>
      <h1>Produkter</h1>
      <ul className="product-list">
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>{product.title}</Link>
          </li>
        ))}
      </ul>
    </div> 
  ); 
}

export default ProductList;
