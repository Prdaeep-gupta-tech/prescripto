import { useState } from "react";
import { createContext } from "react";

export const AdminContext = createContext()

const AdminContextProvider = (props)=>{
    // On reloading atoken is again reset to null causing error hence we check from local storage on reload if token is there add it to token state
    const [aToken, setAToken] = useState(localStorage.getItem('aToken')?localStorage.getItem('aToken'):'')
    const backendUrl = import.meta.env.VITE_BACKEND_URL

    const value = {
        aToken,setAToken,
        backendUrl
    }

    return (<AdminContext.Provider value={value}>
        {props.children}
    </AdminContext.Provider>)
}

export default AdminContextProvider

