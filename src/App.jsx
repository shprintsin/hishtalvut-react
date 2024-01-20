import Layout from './layout/Layout'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import './assets/styles/globals.css'
import SideBar from './layout/sidebar/SideBar';
// import styles from "./layout/block/block.module.css";
import { pages } from './pages';

function App() {
  return (
    <>
{/* <Layout> </Layout> */}
  <BrowserRouter>
     <Routes>
     <Route path={"/layout"} element={<Layout><>center</></Layout>} />
      {Object.values(pages).map(({ component, path ,index}) => <Route path={path} key={index} element={<Layout>{component}</Layout>} />)}
    </Routes>

      </BrowserRouter>


    </>
  )
}

export default App
