import "./Prijs.scss";
import JSONDATA from '../../Data/DataShoes.json';
import { useState } from "react";
import Modal from "react-overlays/Modal";

const Prijs = (props) => {



    const [showModal, setShowModal] = useState(false);
    const [searchTerm, setSearchTerm] = useState('')

    const renderBackdrop = (props) => <div className="backdrop" {...props} />;

    var handleClose = () => setShowModal(false);
  
    var handleSuccess = () => {
      console.log("success");
    };

    return (
        <>
            <section id="3" className="section__searchfield">
                <div className="box">
                    <i className="fa fa-search" aria-hidden="true"></i>
                    <input type="text" onChange={event => setSearchTerm(event.target.value)}/>
                </div>
            </section>
            <section id="3" className="seciton__prijs">
                {JSONDATA.filter((val) => {
                    if(searchTerm == ""){
                        return val 
                    } else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())){
                        return val
                    }
                }).map((val, key) => {
                    return <div key={key} className="product" onClick={() => setShowModal(true)} style={{backgroundImage: `url(${val.picture})`}} />
                })}
            </section>
            <Modal
                className="modal"
                show={showModal}
                onHide={handleClose}
                renderBackdrop={renderBackdrop}
                        >
                <div>
                <div className="modal-header">
                    <div className="modal-title">Modal Heading</div>
                    <div>
                    <span className="close-button" onClick={handleClose}>
                        x
                    </span>
                    </div>
                </div>
                <div className="modal-desc">
                    <p>Modal body contains text.</p>
                </div>
                <div className="modal-footer">
                    <button className="secondary-button" onClick={handleClose}>
                    Close
                    </button>
                    <button className="primary-button" onClick={handleSuccess}>
                    Save Changes
                    </button>
                </div>
                </div>
            </Modal>
        </>
    );
}

export default Prijs;