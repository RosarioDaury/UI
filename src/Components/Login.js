import "./login.css"

const Login = () => {
    return(
        <div className="login-conteiner">
            <div className="logo">
                <img src="https://politecnicoitla.edu.do/wp-content/uploads/2018/07/Escudo_ITLA-PNG.png" alt="logo"/>
            </div>
            <div className="login">
                <h2>Title Log In</h2>
                <form>
                    <input name="email" id="email" placeholder="E-mail"/>
                    <input name="pass" id="pass" placeholder="PassWord"/>
                </form>
                <br/>
                <button className="log">Log In</button>
                <a href="/#">Forgot Password</a>
                <br/>
                <hr/>
                <button className="sign">Sign In</button>
            </div>
        </div>      
    )
}

export default Login;