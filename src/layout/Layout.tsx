import { Row } from "react-bootstrap";
import { SiteStructure } from "../data/FetchData";
import { FooterLinks } from "./Footer/FooterLinks";
import MainNav from "./header/Mainbar/MainNav/MainNav";
import STRUCTURE from '../data/data.json';
import { mainMenu } from "../data/MainMenu";

    export default function Layout({children}:{children:React.ReactNode}) {
        const SiteLayout = SiteStructure();

    return(
    <>
          <header >
            <MainNav Nav={mainMenu} ></MainNav>
          </header>
          <body>
    {children}
          </body>
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


