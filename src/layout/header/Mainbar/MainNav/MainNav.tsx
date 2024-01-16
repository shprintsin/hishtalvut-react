import MainBarItems from "../BarItems";
import NavBarSearch from "../MainNavSearch";
import { MainNavProps } from "../../HeaderProps";
import { Link } from "react-router-dom";
import styles from './MainNav.module.css'
import { Button, FormControl, NavItem } from "react-bootstrap";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaSignInAlt, FaUser } from "react-icons/fa";

export default function MainNav({ Nav: NavItems, children }: MainNavProps) {
  return (
    <>
    <div className={styles.container}>  
    <nav className={styles.navigation}>
 <Link to={"/"} className={styles.logo}><img
          alt={"logo"}
          src="./logo.png"
          width="auto"
          height="auto"
          className=""
        /></Link>
    <div className={styles.menu}>
    {NavItems.map((data, index) => {
          const { label, uri } = data;
          return (
            <NavItem key={index} className={" hvr-underline-from-center text-white"}>
              <Link className="nav-link text-white" href={uri}>{label}</Link>
            </NavItem>
          );
        })} 
    </div>
    <div className={styles.search}>
    <Link to={"/login"} className={styles.login}>
      <span><FaUser/></span>
      <span>התחברות</span>
      </Link>
    {/* <Link to={"/login"} className={styles.login}>
      <span><FaSignInAlt/></span>
      <span>הרשמה</span>
      </Link> */}


    <div className={"form-inputs"}>

    {/* <FormControl className={""} type={"search"}></FormControl>
    <Button className={"my-2 my-sm-0"}>
        <FontAwesomeIcon icon={faSearch}/>
    </Button> */}
</div>
    </div>
</nav>
</div>

    </>
  );
}
