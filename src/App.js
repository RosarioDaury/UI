import { useContext } from "react";
import Footer from "./Components/Footer";
import Login from "./Components/Login";
import MainPage from "./Components/Main";
import { DataProvider } from "./Context/dataContext";
import { LogInContext } from "./Context/logInContext";
import { ModalProvider } from "./Context/modalContext";
function App() {
  const {auth} = useContext(LogInContext);
  console.log(auth);
  return (
    <div className="App">
        {!auth && <Login/>}
        {!auth && <Footer/>}
      <ModalProvider>
      <DataProvider>
        {auth && <MainPage/>}
      </DataProvider>
      </ModalProvider>
    </div>
  );
}

export default App;
