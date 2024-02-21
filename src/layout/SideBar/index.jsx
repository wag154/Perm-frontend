import React, { useState } from 'react'
import styles from "./index.module.css"
import { NavLink, Outlet } from 'react-router-dom';
import { RxHamburgerMenu } from 'react-icons/rx';
import homeImg from "./home.png";
import containerImg from "./carton-box.png";

export default function SideBar() {
  const [closed, setClosed] = useState(false);
  return (
    <>
    <nav className={`${ closed ?styles["SideNavClosed"] : styles["SideNavOpen"]} `}>
        <ul className={styles["HamburgerContainer"]}>
          <RxHamburgerMenu className ={styles["MenuButton"]} onClick={()=>{setClosed(!closed)}} />

        </ul>
        <ul>
          <NavLink to = "/worked" className={styles["HomeContainer"]}><img src = {homeImg} className={styles["HomeIconDisplay"]} /> {closed ? null : "Dashboard"} </NavLink>
        </ul>
        <ul>
          <NavLink to = "" className={styles["ContentContainer"]}><img src = {containerImg} className={styles["ContainerIconDisplay"]}/> {closed ? null : "Resources"}</NavLink>
        </ul>
    </nav>
    <Outlet />
    </>
  )
}
