import { Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";
import styles from "../Layout/Layout.module.css";

export const Layout = () => {
   
  return (
    <div>
      <header className={styles.header}>
        <ul className={styles.ul}>
          <li><NavLink to="/"  className={({ isActive }) => isActive ? styles.active : styles.link} >Home</NavLink></li>
          <li><NavLink to="/movies" className={({ isActive }) => isActive ? styles.active : styles.link} >Movies</NavLink></li>
          {/* <li><NavLink to="/movies/:movieId">MovieDetails</NavLink></li> */}
        </ul>
      </header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
      
    </div>)
}
