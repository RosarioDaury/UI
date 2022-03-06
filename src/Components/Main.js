import { useContext } from "react";
import { DataContext } from "../Context/dataContext";
import { LogInContext } from "../Context/logInContext";
import { ModalContext } from "../Context/modalContext";
import Card from "./Card";
import { Form } from "./Form";
import "./main.css";
import Modal from "./Modal";

const MainPage = () => {
    const {handleLogOut} = useContext(LogInContext);
    const {data} = useContext(DataContext);
    const {modal} = useContext(ModalContext);

    return(
        <>
            <div className="logOut">
                <div className="title">
                    <h2>Students List</h2>
                </div>  
                <div className="log-out-button">
                    <button onClick={handleLogOut}>Log Out</button>   
                </div>
            </div>
            <Form/>
            {modal && <Modal/>}
            <br/>
            <div className="cards-grid">
                {data ? data.map(el => <Card key={el.id} data={el}/>) : <h2>There is not Data</h2>}
            </div>
        </> 
    )
};

export default MainPage;