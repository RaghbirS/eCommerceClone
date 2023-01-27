
import { createContext, useState } from "react";

export let AuthContext = createContext()

export default function ContextProvider({children}){
    // For login
    const [state, setState] = useState(JSON.parse(localStorage.getItem("loginStatus")) || false);
    const [alertVal,setAlertVal] = useState(false);
    const [userCreated, setUserCreated] = useState(false);
    const [userExists, setUserExists] = useState(false);
    const [cartItems,setCartItems] = useState([]);
    const [loginUserID,setLoginUserID] = useState( JSON.parse(localStorage.getItem("loginUserID")) || {} )
    let [cartLength,setCartLength] = useState(0);
    let [sortBasis,setSortBasis] = useState("Default")
    let [total, setTotal] = useState(0)
    function Login(){
        setState(true);
        localStorage.setItem("loginStatus",JSON.stringify(true))
    }
    function LogOut(){
        setState(false)
        localStorage.setItem("loginStatus",JSON.stringify(false))
    }
    return <AuthContext.Provider value={{state,Login, LogOut,alertVal,setAlertVal, userCreated,setUserCreated,userExists, setUserExists,cartItems,setCartItems,loginUserID,setLoginUserID,cartLength,setCartLength,sortBasis,setSortBasis, total, setTotal}}>{children}</AuthContext.Provider>
}