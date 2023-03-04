import React, {useState} from 'react';
import {GoDiffAdded} from "react-icons/go";
import "./addUserCard.scss"
import Modal from "react-modal";
import UserForm from "../UserForm/UserForm";

function AddUserCard() {
    Modal.setAppElement("#root")
    const [isOpenModal, setIsOpenModal] = useState(false)
    const openModal = () => {
        setIsOpenModal(true)
    }
    const closeModal = () => {
        setIsOpenModal(false)
    }

    return (
        <div className="addUserCard">
            <div className="btn" onClick={openModal}>
                <GoDiffAdded className="img"/>
                <div className="fieldset"></div>
            </div>
            <Modal
                closeTimeoutMS={500}
                overlayClassName="overlay"
                className="modal"
                isOpen={isOpenModal}
                onRequestClose={closeModal}
            >
                <UserForm/>
                <button className="close" onClick={closeModal}>Close</button>
            </Modal>
        </div>
    );
}

export default AddUserCard;