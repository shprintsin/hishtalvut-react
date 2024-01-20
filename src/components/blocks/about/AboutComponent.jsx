import styles from './AboutBlock.module.css'
import * as matter from 'gray-matter';

import { MemberComponent, SmarkDown } from './MemberComponent';

export default function AboutComponent() {
  return (
    <div className={styles.box}>  
{/* <SmarkDown /> */}
<div className={styles.Row}>
    <h3>הפורום</h3>
    <div className={styles.content}>    
    <p>הפורום להשתלבות הוא ארגון ללא מטרות רווח</p>
</div>
</div>

<div className={styles.Row}>
<h3>הפורום</h3>
<div className={styles.members}>
 <MemberComponent 
  name="שניאור שפרינצין" 
  role="מייסד" 
  description="סטודנט לפכ'מ באוניברסיטה העברית בירושלים" 
  avatarUrl="https://www.w3schools.com/howto/img_avatar.png" 
/>
 <MemberComponent 
  name="שניאור שפרינצין" 
  role="מייסד" 
  description="סטודנט לפכ'מ באוניברסיטה העברית בירושלים" 
  avatarUrl="https://www.w3schools.com/howto/img_avatar.png" 
/>
 <MemberComponent 
  name="שניאור שפרינצין" 
  role="מייסד" 
  description="סטודנט לפכ'מ באוניברסיטה העברית בירושלים" 
  avatarUrl="https://www.w3schools.com/howto/img_avatar.png" 
/>
</div>


     </div>
  
         
   
        </div>
  )
}
