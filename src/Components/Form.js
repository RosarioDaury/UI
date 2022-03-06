import { useContext, useState } from "react"
import { DataContext } from "../Context/dataContext";
import { ModalContext } from "../Context/modalContext";
import "./form.css";

const initialForm = {
    id: null,
    name : "",
    matricula: "",
    avatar: ""
}

export const Form = () => {
    const [form, setForm] = useState(initialForm);
    const {addData} = useContext(DataContext);
    const {renderModal} = useContext(ModalContext);

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let regex_name = new RegExp(`^[a-zA-Z ]+$`);
        let regex_matri = new RegExp(`^[0-9]`)

        if(!form.name || !form.matricula){
            renderModal();
            return;
        }

        if(!regex_name.exec(form.name)){
            renderModal();
            return;
        }

        if(!regex_matri.exec(form.matricula)){
            renderModal();
            return;
        }


        if(form.id === null){
            addData(form);
            setForm(initialForm);
        }
    }

    return(
        <div className="form-conteiner">
            <form>
                <input type="text" name="name" placeholder="name" pattern="^[a-zA-Z\s]+$" value={form.name} onChange={handleChange}/>
                <input type="text" name="matricula" placeholder="matricula" value={form.matricula} onChange={handleChange}/>
                <input type="submit" value="Add" onClick={handleSubmit}/>
            </form>
        </div>
    )
}