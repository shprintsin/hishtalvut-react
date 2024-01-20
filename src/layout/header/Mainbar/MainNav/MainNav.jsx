import { Link } from "react-router-dom";
import styles from './MainNav.module.css'
import { NavItem } from "react-bootstrap";
import { FaUser } from "react-icons/fa";
import { MainMenuData } from "../../../../data/MainMenu";
import React from 'react'
export default function MainNav() {
  return (
    <>
    <nav className={styles.container}>  
    <Link className={styles.logo}to={"/"}><img
          alt={"logo"}
          src="./logo.png"
          width="150"
          height="auto"
          className=""
        /></Link>
    <div className={styles.navigation}>
    {MainMenuData.map((data, index) => {
      const { label, uri } = data;
      return (<Link key={index} className={styles.navLink} href={uri}>{label}</Link>);
    })}    </div>
    <div className={styles.login}>
    <Link to={"/login"} className={styles.loginLink}>
      <span><FaUser/></span>
      <span>התחברות</span>
      </Link>
    </div>
</nav>

    </>
  );
}
