import "./App.css";
import {
  BrowserRouter, Route, Routes,
} from "react-router-dom";
import styles from "./layout/block/block.module.css";
import { pages } from "./pages.tsx";
import { SiteStructure } from "./data/FetchData.tsx";
import SideBar from "./layout/sidebar/SideBar.tsx";
import Layout from "./layout/Layout.tsx";
export const Structure = SiteStructure();
function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
        <div className={styles.container}>
    <div className={styles.sidebar}><SideBar/></div>
     <div className={styles.Blocks}>
     <Routes>
      {Object.values(pages).map(({ component, path }) => <Route path={path} element={component} />)}
    </Routes>
      </div>
    </div>

        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;


