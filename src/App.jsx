import Layout from './layout/Layout'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import './assets/styles/globals.css'
import SideBar from './layout/sidebar/SideBar';
import styles from "./layout/block/block.module.css";
import { pages } from './pages';
function App() {
  return (
    <>
    <BrowserRouter>
        <Layout>
        <div className={styles.container}>
    <div className={styles.sidebar}><SideBar/></div>
     <div className={styles.Blocks}>
     <Routes>
      {Object.values(pages).map(({ component, path ,index}) => <Route path={path} key={index} element={component} />)}
    </Routes>
      </div>
    </div>

        </Layout>
      </BrowserRouter>
    </>
  )
}

export default App
