import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Display.css";
import Me from "../../Img/Me.jpg";
import { Products } from "../../Data/Products";

const Display = () => {
  const [selectedName, setSelectedName] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * Products.length);
    const randomProduct = Products[randomIndex];
    setSelectedProduct(randomProduct);
  }, []);

  const handleNameSelect = (event) => {
    const name = event.target.value;
    setSelectedName(name);
    const selectedOption = Products.find((product) => product.name === name);
    setSelectedProduct(selectedOption);
  };

  const handleProductSelect = () => {
    const filteredProducts = Products.filter((product) => {
      if (selectedName) {
        return product.name === selectedName;
      }
      return true;
    });

    const randomIndex = Math.floor(Math.random() * filteredProducts.length);
    const randomProduct = filteredProducts[randomIndex];
    setSelectedProduct(randomProduct);
  };

  const handleProductClick = () => {
    if (localStorage.getItem("isLoggedIn") === "true") {
      navigate("/Collezione");
    } else {
      navigate("/Login");
    }
  };

  const namesToBeRendered = Products.map((product) => (
    <option key={product.id} value={product.name}>
      {product.name}
    </option>
  ));

  const titlesToBeRendered = Products.map((product) => (
    <article
      key={product.id}
     
      onClick={() => handleProductClick(product)}
    >
   
    </article>
  ));

  return (
    <>
      <section className="select__section">
        <select className="select" value={selectedName} onChange={handleNameSelect}>
     
          {namesToBeRendered}
        </select>

        <button className="rightpane__button long" onClick={handleProductSelect}>
          Go to Product
        </button>
      </section>

      <article className="display__section">
        {selectedProduct && (
          <article className={`leftpane__form margin ${selectedProduct.name === selectedName ? "active" : ""}`}>
            <div className="leftpane__form-user">
              <img className="leftpane__form-me" src={Me} alt="User" />
              <p>
                Uploaded by <span className="leftpane__form-bold">Jamie</span>
              </p>
            </div>
            <div className="leftpane__form--backgroundImage">
              <img className="leftpane__form-img" src={selectedProduct.img} alt={selectedProduct.name} />
            </div>
            <div className="leftpane__form-context">
              <h2>{selectedProduct.name}</h2>
              <p>{selectedProduct.context}</p>
            </div>
            <div className="leftpane__form-catergory">
              <p>{selectedProduct.price}</p>
              <p>{selectedProduct.category}</p>
            </div>
          </article>
        )}
        {titlesToBeRendered}
      </article>
    </>
  );
};

export default Display;
