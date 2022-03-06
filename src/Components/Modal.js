import { useContext } from "react";
import { ModalContext } from "../Context/modalContext";
import "./modal.css"
const Modal = () => {
    const {closeModal} = useContext(ModalContext);
    return(
        <div className="modal">
            <div>
                <button onClick={closeModal}>X</button>
                <p>Name: The name may only have letters</p>
                <p>Matricula: The matricula may only have numbers</p>
            </div>
        </div>
    )
}

export default Modal;