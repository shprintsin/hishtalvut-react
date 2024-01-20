import styles from './AboutBlock.module.css'
import * as matter from 'gray-matter';

import { MemberComponent, SmarkDown } from './MemberComponent';
const data =[{
  "id":0,
  "name": "שניאור שפרינצין",
  "role": "מייסד",
  "description": "סטודנט לפכ'מ באוניברסיטה העברית בירושלים",
  "avatarUrl": "./images/knesset.jpg"
},
{
  "id":1,
  "name": "יוסף ברנשטיין",
  "role": "מייסד",
  "description": "סטודנט לפכ'מ באוניברסיטה העברית בירושלים",
  "avatarUrl": "https://leshinuy.org/wp-content/uploads/2023/02/140740047_1626124317776747_5115241000436537517_n-e1690467732623.jpg"
},
{
  "id":2,
  "name": "שלמה שירר",
  "role": "מייסד",
  "description": "סטודנט לרפואה באוניברסיטה העברית בירושלים",
  "avatarUrl": "https://www.w3schools.com/howto/img_avatar.png"
}]
export default function AboutComponent() {
  return (
    <div className={styles.box}>  
{/* <SmarkDown /> */}
<div className={styles.Row}>
    <h3>הפורום</h3>
    <div className={styles.content}>    
    <p>הפורום להשתלבות היא יוזמה של יוצאי החברה החרדית לטובת עידוד וקידום השתלבות צעירים מהחברה החרדית בהשכלה איכותית על ידי יצירת מוסדות שיאפשרו השתלבות איכותית ושוויונית לכלל בוגרי החינוך החרדי לאורך זמן.</p>
</div>
</div>
<div className={styles.Row}>
<h3>חברי הפורום</h3>
<div className={styles.members}>
{data.map((member) => {
                    return (<MemberComponent key={member.id} className={styles.Card} {...member}/>);
                })}
</div>


     </div>
  
         
   
        </div>
  )
}
