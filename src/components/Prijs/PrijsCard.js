import React from 'react'
import { useState } from 'react';
import Modal from "react-overlays/Modal";

function PrijsCard(props) {

    const [showModal, setShowModal] = useState(false);

    const renderBackdrop = (props) => <div className="backdrop" {...props} />;

    var handleClose = () => setShowModal(false);
  
    var handleSuccess = () => {
      console.log("success");
    };

  return (
    <>
        <div className='product' onClick={() => setShowModal(true)} style={{backgroundImage: `url(${props.backgroundImage})`}}></div>

        <Modal
            className="modal"
            show={showModal}
            onHide={handleClose}
            renderBackdrop={renderBackdrop}
                    >
            <div>
            <div className="modal-header">
                <div className="modal-title">
                    <h1>{props.title}</h1>
                </div>
            </div>
            <div className="modal-desc">
                <p>{props.subText}</p>
            </div>
            <div className="modal-footer">
            </div>
            </div>
        </Modal>    
    </>
  )
}

export default PrijsCard