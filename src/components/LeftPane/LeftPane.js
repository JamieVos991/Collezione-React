// Import React
import { useState } from "react";

// Import styling files
import "./LeftPane.scss";
import Me from "../../Img/Me.jpg";

// Import Routers
import { Link } from "react-router-dom";

const LeftPane = (props) => {
    const [inputName, setInputName] = useState("");
    const [inputContext, setInputContext] = useState("");
    const [inputPrice, setInputPrice] = useState("");

  const [editMode, setEditMode] = useState(false);
  const [cardInfo, setCardInfo] = useState(true);
  const [showPopup, setShowPopup] = useState(false);

  const handleClick = () => setShowPopup(true);
  const handleClose = () => setShowPopup(false);

  const inputEventName = (event) => setInputName(event.target.value);
  const inputEventContext = (event) => setInputContext(event.target.value);
  const inputEventPrice = (event) => setInputPrice(event.target.value);

  const editProduct = () => {
    if (editMode && inputName !== "" && inputContext !== "" && inputPrice !== "") {
      props.editButtonClicked(inputName, inputContext, inputPrice);
      setEditMode(false);
      setCardInfo(true);
      setInputName("");
      setInputContext("");
      setInputPrice("");
    }
  };

  const editButtonClicked = () => {
    setEditMode(!editMode);
    setCardInfo(!cardInfo);
    setInputName(props.cardClicked.name);
    setInputContext(props.cardClicked.context);
    setInputPrice(props.cardClicked.price);
  };

  const copyToClipboard = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url);
  };

  return (
    <>
      <section className="leftpane__wrapper">
        <header className="leftpane__header">
          <Link to="/">
            <button className="leftpane__button">Go back</button>
          </Link>

          <button className="leftpane__button" onClick={handleClick}>
            Share
          </button>

          {!editMode && (
            <button className="leftpane__button" onClick={editButtonClicked}>
              Edit
            </button>
          )}
        </header>
        <article className="leftpane__form">
          {cardInfo ? (
            <>
              <div className="leftpane__form-user">
                <img className="leftpane__form-me" src={Me} alt="User"></img>
                <p>
                  Uploaded by <span className="leftpnae__form-bold">Jamie</span>
                </p>
              </div>
              <div className="leftpane__form--backgroundImage">
                <img className="leftpane__form-img" src={props.cardClicked.img} alt="Product"></img>
              </div>
              <div className="leftpane__form-context">
                <p className="leftpane__form-name">{props.cardClicked.name}</p>
                <p className="leftpane__form-info">{props.cardClicked.context}</p>
              </div>
              <div className="leftpane__form-catergory">
                <p>{props.cardClicked.price}</p>
                <p>{props.cardClicked.category}</p>
              </div>
            </>
          ) : null}

                    {editMode && (
                        <section className="leftpane__section-input">
                            <input
                                maxLength="10"
                                onChange={inputEventName}
                                type="text"
                                placeholder={props.cardClicked.name}
                                value={inputName}
                                className="leftpane__input"
                                id="name"
                            ></input>
                            <input
                                maxLength="80"
                                onChange={inputEventContext}
                                type="text"
                                placeholder={props.cardClicked.context}
                                value={inputContext}
                                className="leftpane__input"
                                id="context"
                            ></input>
                            <input
                                maxLength="4"
                                onChange={inputEventPrice}
                                type="text"
                                placeholder={props.cardClicked.price}
                                value={inputPrice}
                                className="leftpane__input"
                                id="price"
                            ></input>
                            <button className="leftpane__button" onClick={editProduct}>Done</button>
                        </section>
                    )}

                </article>
            </section>

            {showPopup && (
        <section className="leftpane__section-share">
          <figure className="leftpane__figure">
            <div>Current URL: {window.location.href}</div>
            <div className="buttons">
              <button className="leftpane__button" onClick={handleClose}>
                Close
              </button>
              <button className="leftpane__button" onClick={copyToClipboard}>
                Copy
              </button>
            </div>
          </figure>
        </section>
      )}
    </>
  );
};

export default LeftPane;