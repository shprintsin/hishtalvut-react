import MainNav from "./header/Mainbar/MainNav/MainNav";
// import styles from './Layout.module.css'
import styles from './mobile.module.css'
import SideBar from "./sidebar/SideBar";
import { useState } from "react";
    export default function Layout({children}) {
const [Alert,setAlert]=useState(true) 
    return(
    <>
     <div className={styles.container}>
              <div className={styles.navbar}>
              {/* <div className={styles.logo}><GetLogo/></div> */}
              <div className={styles.navigation}>
             <MainNav/>
              </div>
              </div>      
              <div className={styles.body}>
              <div className={styles.sidebar}><SideBar/></div>
                <div className={styles.block}>
                {children}
                </div>
             
                </div>
                {Alert&&(

<div className={styles.footer}>
    <button onClick={()=>setAlert(!Alert)}>X</button>
    <p>האתר בשלבי פיתוח, חלק מהפונקציות לא עובדות כעת, בשלב זה, האתר הוא לצורך הדמיה</p>
    <div></div>
</div>
                )}
      </div> 
{/* 
          <header >
          </header>
   <div className={styles.container}>
    <div className={styles.sidebar}></div>
     <div className={styles.Blocks}>

    </div>
    </div> */}
       
          {/* <footer>
        <div className={"bg-SLATEBLUE text-white container-fluid py-3 px-5"}>
            <Row className={"flex justify-between"}>
                <FooterLinks Links={SiteLayout.Footer.Links}></FooterLinks>
            </Row>
            <Row className={"FooterSocial d-flex justify-content-between"}>
                <div className={"divider"}>	</div>
            </Row>
        </div>

    </footer> */}
    </>
    )}


