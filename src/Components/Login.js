import { useContext, useState } from "react";
import { LogInContext } from "../Context/logInContext";
import "./login.css"

const initialData =   {
    email:"",
    pass:""
}

const Login = () => {
    const [form, setForm] = useState(initialData);
    const {handleAuth} = useContext(LogInContext);

    const handleChange = (e) => {
        setForm(
            {
                ...form,
                [e.target.name] : e.target.value
            }
        )
    }

    return(
        <div className="login-conteiner">
            <div className="logo">
                <img src="https://politecnicoitla.edu.do/wp-content/uploads/2018/07/Escudo_ITLA-PNG.png" alt="logo"/>
            </div>
            <div className="login">
                <h2>Title Log In</h2>
                <form>
                    <input type="text" name="email" id="email" placeholder="E-mail" value={form.email} onChange={handleChange}/>
                    <input type="password" show="*" name="pass" id="pass" placeholder="PassWord" value={form.pass} onChange={handleChange}/>
                </form>
                <button className="log" onClick={() => handleAuth(form)}>Log In</button>
                <a href="/#">Forgot Password</a>
                <br/>
                <hr/>
                <button className="sign">Sign In</button>
            </div>
        </div>      
    )
}

export default Login;