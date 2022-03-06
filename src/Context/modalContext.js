import { createContext, useState } from "react";

const ModalContext = createContext();

const ModalProvider = ({children}) => {
    const [modal, setModal] = useState(false)

    const renderModal = () => {
        setModal(true)
    }

    const closeModal = () => {
        setModal(false);
    }

    const data = {modal, renderModal, closeModal};

    return <ModalContext.Provider value={data}>{children}</ModalContext.Provider>
}

export {ModalContext, ModalProvider};