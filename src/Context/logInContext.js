import { createContext, useState } from "react";

const LogInContext = createContext();

const LogInProvider = ({children}) => {
    const [auth, setAuth] = useState(false);

    const handleAuth = (form) => {

        if(form.email === "admin@gmail.com" && form.pass === "12345" && auth === false){
            setAuth(true)
        }else{
            window.alert("Email: admin@gmail.com And Password: 12345");
            setAuth(false)
        }

    }

    const handleLogOut = () => {
        setAuth(false);
    }

    const data = {auth, handleAuth, handleLogOut};

    return <LogInContext.Provider value={data}>{children}</LogInContext.Provider>
}

export {LogInContext, LogInProvider};