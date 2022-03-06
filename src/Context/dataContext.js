import { createContext, useEffect, useState } from "react";
import { helperHttps } from "../Helper/Https";

const DataContext = createContext();
const endpoint = "http://localhost:5000/students";


const DataProvider = ({children}) => {
    const [data, setData] = useState(undefined);

    useEffect(() => {
        helperHttps().get(endpoint)
        .then(res => {
            setData(res)
        })
        .catch(err => console.log("Error Ocurred"))
    },[endpoint])

    const addData = (form) => {
        form.id = Date.now();
        form.avatar = "https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg";
        console.log(form);

        
        let options = {
            body : form,
            headers : {"content-type" : "application/json"}
          }  

        helperHttps().post(endpoint, options)
        .then((res) =>{
            console.log(res)
            setData([...data, res])
        }
        )
        .catch((err) => console.log(err))
    }

    const deleteData = (id) => {
        let confirmation = window.confirm("Are you sure you want to delete this student?")
        let url = `${endpoint}/${id}`;
        console.log(url);

        if (confirmation){
            helperHttps().del(url)
            .then((res) => {
                let newData = data.filter(el => el.id !== id);
                setData(newData);
            })
            .catch((err) => console.log(err))
        }
        
    }

    const value = {data, addData, deleteData}
    return <DataContext.Provider value={value}>{children}</DataContext.Provider>
}

export {DataContext, DataProvider};