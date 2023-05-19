// Import React
import React, { useState, useEffect } from "react";

// Import styling files 
import "./Dashboard.css";

// Import Routers
import { useNavigate } from "react-router-dom/dist";

// Import Redux
import { useSelector } from "react-redux";

// Import Data
import ProductsObject from "../../Data/Products";

// Import components
import RightPane from "../RightPane/RightPane";
import LeftPane from "../LeftPane/LeftPane";

const Dashboard = () => {
    const [productCards, setProductCards] = useState([]);
    const [cardClicked, setCardClicked] = useState({});
    const [editMode, setEditMode] = useState(false);
    const [filter, setFilter] = useState("");
    
    const navigate = useNavigate();

    useEffect(() => {
        let storedProductCards = JSON.parse(localStorage.getItem('productCards'));
        if (storedProductCards) {
            setProductCards(storedProductCards);
            setCardClicked(storedProductCards[0]);
        } else {
            // localStorage.setItem('productCards', JSON.stringify(ProductsObject.Products));
            setProductCards(ProductsObject.Products);
            setCardClicked(ProductsObject.Products[0]);
        }

        if (localStorage.getItem("isLoggedIn") === "true") {
            return;
          } else {
            navigate('/Login');
          }
    }, [])
    
    const editButtonClicked = (inputFromPopup, inputFromPopup2, inputFromPopup3) => {
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

    const handleFilter = (filterOption) => {
        setFilter(filterOption);
    }

    let filteredProducts = productCards;
    switch (filter) {
        case "price":
            filteredProducts = productCards.filter(card => parseFloat(card.price) < 100);
            break;
        case "name":
            filteredProducts = productCards.filter(card => card.category === "High");
            console.log(productCards);
            break;
        case "all":
            filteredProducts = productCards;
            break;
        default:
            filteredProducts = productCards;
    }


    return (
        <section className="section__dashboard">
            <article className="dashboard">
                <LeftPane editButtonClicked={editButtonClicked} editMode={editMode} cardClicked={cardClicked} />
                <RightPane onProductCardClicked={onCardClicked} productCards={filteredProducts} filter={filter} handleFilter={handleFilter}/>
            </article>
        </section>
    );
}

export default Dashboard;