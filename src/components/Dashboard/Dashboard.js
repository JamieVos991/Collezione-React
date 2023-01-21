// Import React
import React, { useState, useEffect } from "react";

// Import styling files 
import "./Dashboard.css";

// Import Data
import ProductsObject from "../../Data/Products";

// Import components
import RightPane from "../RightPane/RightPane";
import Popup from "../LeftPane/LeftPane";

const Dashboard = () => {

    const [productCards, setProductCards] = useState([]);
    const [cardClicked, setCardClicked] = useState({});
    const [editMode, setEditMode] = useState(false);

    useEffect(() => {
        console.log(productCards);
        // Check for data in local storage
        let storedProductCards = JSON.parse(localStorage.getItem('productCards'));
        if (storedProductCards) {
            setProductCards(storedProductCards);
        } else {
            setProductCards(ProductsObject.Products);
            localStorage.setItem('productCards', JSON.stringify(ProductsObject.Products));
        }
        setCardClicked(ProductsObject.Products[0])
    }, [])
      

    const editButtonClicked = (inputFromPopup, inputFromPopup2, inputFromPopup3) => {
        setProductCards(productCards);
        let newState = productCards.map(product => {
            if (cardClicked.id === product.id) {
                product.name = inputFromPopup;
                product.context = inputFromPopup2;
                product.price = inputFromPopup3
                return product;
            }
            else {
                return product;
            }
        });
        setProductCards(newState);
        localStorage.setItem('productCards', JSON.stringify(newState));
    }

    const onCardClicked = (idFromCard) => {
        setEditMode(true);
        setCardClicked(productCards[idFromCard - 1]);
    }

    return (
        <section className="section__dashboard">
            <article className="dashboard">
                <Popup editButtonClicked={editButtonClicked} editMode={editMode} cardClicked={cardClicked} />
                <RightPane onProductCardClicked={onCardClicked} productCards={productCards} />
            </article>
        </section>
    );
}

export default Dashboard;