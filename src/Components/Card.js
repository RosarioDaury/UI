import { useContext } from "react";
import { DataContext } from "../Context/dataContext";
import "./card.css"

const Card = ({data}) => {
    const {deleteData} = useContext(DataContext);
    let {avatar, name, matricula, id} = data;

    return(
        <div className="card">
            <img src={avatar} alt="profile"/>
            <h3>{name}</h3>
            <h3>{matricula}</h3>
            <button onClick={() => deleteData(id)}>Delete Student</button>
        </div>
    )
}

export default Card;