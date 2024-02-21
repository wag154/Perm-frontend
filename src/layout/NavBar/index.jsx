import React, { useContext , useEffect, useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import styles from "./index.module.css";
import { useAccount } from '../../context';

export default function NavBar() {

   const {accountDetails, setAccountDetails} = useAccount()
   const [dropdown, setDropdown] = useState(false)
    
   useEffect(()=>{console.log(accountDetails)},[])
  return (
<>
    <nav className= {styles["NavBarContainer"]}>
        <ul>
            <h1>Welcome </h1>
        </ul>
        <ul>
            <NavLink to = "/" > Home </NavLink>
        </ul>
        <ul className = {styles["DropDownContainer"]} onClick={()=>{setDropdown(!dropdown)}}>
            { dropdown ? null :
                (

                    <div className={styles["DropDown"]}>    
                {Object.keys(accountDetails).length === 0 ? 
                <NavLink to = "/Login" className={styles["AccountDisplay"]}>Login</NavLink>
                :
                <label className={styles["AccountDisplay"]}>
                        {accountDetails["username"]}
                    </label>
                }
                    </div>
                        )
                    }
        </ul>
    </nav>
    <Outlet />
</>
  )
}
