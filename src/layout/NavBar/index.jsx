import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import styles from "./index.module.css";

export default function NavBar() {
  return (
<>
    <nav className= {styles["NavBarContainer"]}>
        <ul>
            <h1>Welcome </h1>
        </ul>
        <ul>
            <NavLink to = "/" > Home </NavLink>
        </ul>
        <ul>
            <NavLink to = "/Login">Login</NavLink>
        </ul>
    </nav>
    <Outlet />
</>
  )
}
