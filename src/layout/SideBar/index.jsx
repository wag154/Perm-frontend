import React from 'react'
import styles from "./index.module.css"
import { NavLink, Outlet } from 'react-router-dom';
import { RxHamburgerMenu } from 'react-icons/rx';

export default function SideBar() {

  return (
    <>
    <nav className={styles["SideNav"]}>
        <ul>
               
        </ul>
    </nav>
    <Outlet />
    </>
  )
}
