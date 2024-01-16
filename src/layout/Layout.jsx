import MainNav from "./header/Mainbar/MainNav/MainNav";

    export default function Layout({children}) {

    return(
    <>
          <header >
            <MainNav></MainNav>
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


