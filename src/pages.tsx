import { FaBook, FaFileAlt, FaGraduationCap, FaHome, FaInfo, FaInfoCircle, FaQuestion, FaQuestionCircle, FaRegChartBar, FaSchool, FaStackExchange } from "react-icons/fa";
import { SiteStructure } from "./data/FetchData.tsx";
import WelcomeBlock from "./components/blocks/welcomeblock/WelcomeBlock.tsx";
import { TutorialBlock } from "./components/tutorial/TutorialBlock.tsx";
import {BsGraphUp} from "react-icons/bs";
import BlankBlock from "./components/blocks/blank/blankBlock.tsx";

const Structure = SiteStructure();
import React from 'react'

export  function AllComp() {
  return (
<>
<div className={"flex flex-col"}>
  <div className={"flex flex-row w-100"}><WelcomeBlock block={Structure.blocks.welcome}></WelcomeBlock></div>
  <div className={"flex flex-row w-100"}><TutorialBlock block={Structure.blocks.tutorials}/>E</div>
  
  </div>
</>  )
}

export const pages = {
  WelcomeBlock: {
    component:<><WelcomeBlock block={Structure.blocks.welcome}></WelcomeBlock>  </>,
    label: "בית",
    icon: <FaHome />,
    path: "/",
  },
  TutorialBlock: {
    component: <TutorialBlock block={Structure.blocks.tutorials}/>,
    label: "המכינה המשולבת",
    icon: <FaSchool />,
    path: "/tutorials",
  },
Education:{
  component: <TutorialBlock block={Structure.blocks.tutorials}/>,
  label: "המדריך להשכלה",
  icon: <FaGraduationCap />,
  path: "/tutorials",
}
,
Volenteer:{
  component: <TutorialBlock block={Structure.blocks.tutorials}/>,
  label: "פרסומים",
  icon: <FaFileAlt />,
  path: "/tutorials",
},
Volenteer_2:{
  component: <TutorialBlock block={Structure.blocks.tutorials}/>,
  label: "לוח נתונים",
  icon: <BsGraphUp />,
  path: "/tutorials",
},
// Volenteer_3:{
//   component: <TutorialBlock block={Structure.blocks.tutorials}/>,
//   label: "ספריה",
//   icon: <FaBook />,
//   path: "/tutorials",
// },
page5:{
  component: <TutorialBlock block={Structure.blocks.tutorials}/>,
  label: "קצת עלינו",
  icon: <FaInfoCircle />,
  path: "/tutorials",
},
page6:{
  component: <BlankBlock/>,
  label: "סקר מכינות",
  icon: "",
  path: "/blank",
},

};
