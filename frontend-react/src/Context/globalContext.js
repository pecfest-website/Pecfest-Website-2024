import React, { useState, useContext } from "react"


const GlobalContext = React.createContext()

export const GlobalProvider = ({children}) =>{
    const [homeload, setHomeLoad] = useState(false)
    const handleSetHomeLoad = () => {
        // console.log(homeload);
        setHomeLoad(true);
        
    };
    
    return(
        <GlobalContext.Provider value = {{
            handleSetHomeLoad,
            homeload,
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () =>{
    return useContext(GlobalContext)
}