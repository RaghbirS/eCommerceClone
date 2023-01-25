
import { createContext, useState } from "react";

export let AuthContext = createContext()

export default function ContextProvider({children}){
    const [state, setState] = useState(false);
    const [alertVal,setAlertVal] = useState(false);
    const [userCreated, setUserCreated] = useState(false);
    const [userExists, setUserExists] = useState(false);
    const [cartItems,setCartItems] = useState([]);
    function Login(){
        setState(true)
    }
    function LogOut(){
        setState(false)
    }
    return <AuthContext.Provider value={{state,Login, LogOut,alertVal,setAlertVal, userCreated,setUserCreated,userExists, setUserExists,cartItems,setCartItems}}>{children}</AuthContext.Provider>
}