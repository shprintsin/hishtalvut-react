import styles from "./SideBar.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { pages } from "../../pages";
export default function SideBar() {
  const [pageName, setPageName] = useState("WelcomeBlock");
  return (
    <>    
    <div className={styles.wrapper}>

           {Object.values(pages).map(
             ({ component, label, icon, path }) => (        
               <Link
               to={path}
               title={label}
               // onClick={() => { setPageName(Name);
               className={styles.link}
               >
                {icon && <div className="pl-4">{icon}</div>}
                {label}
              </Link>
              )
              )}

              </div>
    </>
  );
}
