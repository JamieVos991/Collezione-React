// CSS
import "./Dashboard.css";

// Import React
import { React, useState, useEffect } from "react";

// Data 
import ProductsObject from "../../Data/Products";

// Helper 
import ChooseImage from "../../Helpers/ChooseImage";

// Components
import RightPane from "../RightPane/RightPane";
import Popup from "../LeftPane/LeftPane";

const Dashboard = (props) => {

    const [productCards, setProductCards] = useState([]);
    const [cardClicked, setCardClicked] = useState({});
    const [editMode, setEditMode] = useState(false);

    useEffect(() => {
        setProductCards(ProductsObject.Products);
        setCardClicked(ProductsObject.Products[0])
    }, [])

    const editButtonClicked = (inputFromPopup, inputFromPopup2) => {
        setProductCards(productCards);
        let newState = productCards.map(product => {
            if (cardClicked.id === product.id) {
                product.name = inputFromPopup;
                product.context = inputFromPopup2
                return product;
            }
            else {
                return product;
            }
        });
        setProductCards(newState);
    }

    const onCardClicked = (idFromCard) => { 
        setEditMode(true);
        setCardClicked(productCards[idFromCard - 1]);
    }


    return (
        <section className="section__dashboard">
            <article className="dashboard">
                <Popup editButtonClicked={editButtonClicked} editMode={editMode} cardClicked={cardClicked}  />
                <RightPane onProductCardClicked={onCardClicked} productCards={productCards} />
            </article>
        </section>

    );



}

export default Dashboard;