import React,{useState, createContext} from "react";

export const AuthContext = createContext();

const AuthContextProvider = ({children})=>{
    const [userRole,setUserRole] = useState(null)
    const [isLoggin,setIsLogin] = useState(false)


    return(<AuthContext.Provider value={{userRole,setUserRole,isLoggin,setIsLogin}}>
        {children}
    </AuthContext.Provider>
)}

export default AuthContextProvider;




