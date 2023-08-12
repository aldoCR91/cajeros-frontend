const { createContext, useState } = require("react");

export const UserContext = createContext();

export const UserProvider = ({children}) => {

    const [persona, setPersona] = useState({
        name:"Karen",
        apellido:"Camacho"
    });
    
    return(
        <UserContext.Provider value={{persona,setPersona}}>
            {children}
        </UserContext.Provider>
    )
}