import React, { useState, useContext, createContext, Children } from "react";

const AccountContext = createContext();

export const AccountProvider = ({children}) =>{
    const [accountDetails, setAccountDetails] = useState({})

    return (
        <AccountContext.Provider value = {{accountDetails, setAccountDetails}}>
            {children}
        </AccountContext.Provider>
    )
}

export const useAccount = () =>  useContext(AccountContext)