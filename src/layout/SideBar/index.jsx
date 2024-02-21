import React, { useState } from 'react'
import styles from "./index.module.css"
import { NavLink, Outlet } from 'react-router-dom';
import { RxHamburgerMenu } from 'react-icons/rx';

export default function SideBar() {
  const [closed, setClosed] = useState(false);
  console.log(closed)
  return (
    <>
    <nav className={`${ closed ?styles["SideNavClosed"] : styles["SideNavOpen"]} `}>
        <ul className={styles["HamburgerContainer"]}>
          <RxHamburgerMenu className ={styles["MenuButton"]} onClick={()=>{setClosed(!closed)}} />
        </ul>
        <ul>
          no
        </ul>
    </nav>
    <Outlet />
    </>
  )
}
