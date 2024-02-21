import React, { useContext , useEffect, useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import styles from "./index.module.css";
import { useAccount } from '../../context';

export default function NavBar() {

   const {accountDetails, setAccountDetails} = useAccount()
    
  return (
<>
    <nav className= {styles["NavBarContainer"]}>
        <ul>
            <h1>Welcome </h1>
        </ul>
        <ul>
            <NavLink to = "/" > Home </NavLink>
        </ul>
        <ul className = {styles["DropDownContainer"]}>

                {Object.keys(accountDetails).length === 0 ? 
                <NavLink to = "/Login" className={styles["AccountDisplay"]}>Login</NavLink>
                :
                <label className={styles["AccountDisplay"]}>
                        {accountDetails["username"]}
                    </label>
                }
        </ul>
    </nav>
    <Outlet />
</>
  )
}
