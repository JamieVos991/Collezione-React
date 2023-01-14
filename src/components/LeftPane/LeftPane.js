import "./LeftPane.scss";
import { useEffect, useState } from "react";

const LeftPane = (props) => {

    const [inputName, setInputName] = useState("");
    const [inputContext, setInputContext] = useState("");
    const [editMode, setEditMode] = useState(false);
    const [cardInfo, setCardInfo] = useState(true);

    useEffect(() => {

    }, []);

    const inputEventName = (event) => {
        setInputName(event.target.value);
    }

    const inputEventContext = (event) => {
        setInputContext(event.target.value);
    }

    const editProduct = () => {
        if (editMode == true & inputName > "" & inputContext > "") {
            props.editButtonClicked(inputName, inputContext);
            setEditMode(false);
            setCardInfo(true);
            setInputName("");
            setInputContext("");
        }
    }

    const editButtonClicked = () => {
        setEditMode(!editMode)
        setCardInfo(!cardInfo)
        setInputName(props.cardClicked.name);
        setInputContext(props.cardClicked.context);
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
                            <p>{props.cardClicked.context}</p>
                        </>
                    }

                    {editMode &&
                        <>
                            <input onChange={inputEventName} type="text" placeholder={props.cardClicked.name} value={inputName} className="popup_input" id="name" ></input>
                            <input onChange={inputEventContext} type="text" placeholder={props.cardClicked.context} value={inputContext} className="popup_input" id="context" ></input>
                            <div className="pokeball_middle">
                                <div onClick={editProduct} className="pokeball_button"></div>
                            </div>
                        </>
                    }

                    {editMode || <button onClick={editButtonClicked} className="edit__popup">Edit</button>}

                </div>
            </section>
        </>
    );
}


export default LeftPane;
