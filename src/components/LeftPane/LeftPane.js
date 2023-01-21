// Import React 
import { useEffect, useState } from "react";

// Import styling files 
import "./LeftPane.scss";

// Import Routers
import { Link } from "react-router-dom";

const LeftPane = (props) => {

    const [inputName, setInputName] = useState("");
    const [inputContext, setInputContext] = useState("");
    const [inputPrice, setInputPrice] = useState("");

    const [editMode, setEditMode] = useState(false);
    const [cardInfo, setCardInfo] = useState(true);

    const [showPopup, setShowPopup] = useState(false);

    const handleClick = () => {
        setShowPopup(true);
    };

    const handleClose = () => {
        setShowPopup(false);
    };

    const inputEventName = (event) => {
        setInputName(event.target.value);
    }

    const inputEventContext = (event) => {
        setInputContext(event.target.value);
    }

    const inputEventPrice = (event) => {
        setInputPrice(event.target.value);
    }

    const editProduct = () => {
        if (
            editMode == true &
            inputName > "" &
            inputContext > "" &
            inputPrice > ""
        ) {
            props.editButtonClicked(inputName, inputContext, inputPrice);
            setEditMode(false);
            setCardInfo(true);
            setInputName("");
            setInputContext("");
            setInputPrice("");
        }
    }

    const editButtonClicked = () => {
        setEditMode(!editMode)
        setCardInfo(!cardInfo)
        setInputName(props.cardClicked.name);
        setInputContext(props.cardClicked.context);
        setInputPrice(props.cardClicked.price);
    }

    const onFilterClick1 = () => {
        console.log("filter1");
    }

    const onFilterClick2 = () => {
        console.log("filter2");
    }

    return (
        <>
            <section className="dashboard__wrapper">
                <div className="buttons__section">

                    <button onClick={handleClick}>Show Popup</button>

                    <Link to="/"><button>Go back</button></Link>
                    <button onClick={onFilterClick1} className="filter__1">
                        filter#1
                    </button>
                    <button onClick={onFilterClick2} className="filter__2">
                        filter#2
                    </button>
                </div>
                <div className="dashboard__form">

                    {cardInfo &&
                        <>
                            <p>{props.cardClicked.name}</p>
                            <p className="dashboard__form--info">{props.cardClicked.context}</p>
                            <p>{props.cardClicked.price}</p>
                        </>
                    }

                    {editMode &&
                        <>
                            <input maxlength="10" onChange={inputEventName} type="text" placeholder={props.cardClicked.name} value={inputName} className="popup_input" id="name" ></input>
                            <input maxlength="80" onChange={inputEventContext} type="text" placeholder={props.cardClicked.context} value={inputContext} className="popup_input" id="context" ></input>
                            <input maxlength="4" onChange={inputEventPrice} type="text" placeholder={props.cardClicked.price} value={inputPrice} className="popup_input" id="price" ></input>
                            <div className="pokeball_middle">
                                <button onClick={() => { editProduct(); }} className="pokeball_button"></button>
                            </div>
                        </>
                    }

                    {editMode || <button onClick={editButtonClicked} className="edit__popup">Edit</button>}

                </div>
            </section>

            {showPopup && (
                <div className="popup">
                    <div>Current URL: {window.location.href}</div>
                    <button onClick={handleClose}>Close</button>
                </div>
            )}
        </>
    );
}


export default LeftPane;
