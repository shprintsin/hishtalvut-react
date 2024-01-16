import styles from "./SideBar.module.css";
import { Link } from "react-router-dom";
import { pages } from "../../pages";
export default function SideBar() {
  return (
    <>    
    <div className={styles.wrapper}>

           {Object.values(pages).map(
             ({ label, icon, path,index }) => (        
               <Link
               key={index}
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
