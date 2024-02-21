import React, { useContext , useEffect, useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import styles from "./index.module.css";
import { useAccount } from '../../context';
import iconImage from "./icon.png"
export default function NavBar() {

   const {accountDetails, setAccountDetails} = useAccount()
    
  return (
<>
    <nav className= {styles["NavBarContainer"]}>
        <ul className={styles["IconContainer"]}>
            <img className={styles["IconImg"]} src = {iconImage} alt='icon'/>
            <label className={styles["IconText"]}> Icon Company</label>
        </ul>
        <ul>
            <NavLink className = {styles["TextDisplay"]}to = "/" > Home </NavLink>
        </ul>
        <ul className = {styles["DropDownContainer"]}>

                {Object.keys(accountDetails).length === 0 ? 
                <NavLink to = "/Login" className={styles["TextDisplay"]}>Sign Up / Login</NavLink>
                :
                <label className={styles["TextDisplay"]}>
                        {accountDetails["username"]}
                    </label>
                }
        </ul>
    </nav>
    <Outlet />
</>
  )
}
