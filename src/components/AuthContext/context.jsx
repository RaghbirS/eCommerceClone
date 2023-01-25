
import { createContext, useState } from "react";

export let AuthContext = createContext()

export default function ContextProvider({children}){
    const [state, setState] = useState(false);
    const [alertVal,setAlertVal] = useState(false)
    function Login(){
        setState(true)
    }
    function LogOut(){
        setState(false)
}
    return <AuthContext.Provider value={{state,Login, LogOut,alertVal,setAlertVal}}>{children}</AuthContext.Provider>
        
}