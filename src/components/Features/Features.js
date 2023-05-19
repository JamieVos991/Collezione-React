import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "../Display/Display.css";
import Products, { Products as ProductsArray } from "../../Data/Products";

const Display = (props) => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const filteredGames = useSelector((state) => state.filteredGames);
  const navigate = useNavigate();

  const handleProductSelect = (event) => {
    const productId = parseInt(event.target.value);
    const selectedProduct = ProductsArray.find((product) => product.id === productId);
    setSelectedProduct(selectedProduct);
  };

  const handleProductClick = () => {
    if (localStorage.getItem("isLoggedIn") === "true") {
      navigate("/Collezione");
    } else {
      navigate("/Login");
    }
  };

  const titlesToBeRendered = filteredGames && filteredGames.map((product, index) => {
    return (
      <section key={index} className="display" onClick={handleProductClick}>
        <h2>{product.name}</h2>
      </section>
    );
  });

  return (
    <section className="display__section">
      <select onChange={handleProductSelect}>
        <option value="">Select a product</option>
        {ProductsArray.map((product) => (
          <option key={product.id} value={product.id}>
            {product.name}
          </option>
        ))}
      </select>
      {selectedProduct && (
        <div>
          <h2>{selectedProduct.name}</h2>
          <img src={selectedProduct.img} alt={selectedProduct.name} />
          <p>{selectedProduct.context}</p>
          <p>{selectedProduct.price}</p>
          <p>{selectedProduct.category}</p>
        </div>
      )}
      {titlesToBeRendered}
    </section>
  );
};

export default Display;
