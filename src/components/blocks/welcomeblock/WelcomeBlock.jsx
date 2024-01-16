import { FaEnvelope, FaHeart, FaInfo } from 'react-icons/fa'
import styles from './WelcomeBlock.module.css'
import { WelcomePage } from '../../../data/welcomeBlock'

export default function WelcomeBlock() {
  return (
    <>
    <div className={styles.container}>
      {/* <div className={styles.wrapper}>
      <div className={styles.headingContainer}>
  <div className={styles.headingWrapper}>
    <div className={styles.svg}><img src="./student.svg" className={styles.image} /></div>
    <div className={styles.content}>
    </div>
    
  </div>
</div>

</div> */}
<div className={styles.footerContainer}>
         
            <div className={styles.footer}>
            <h2 className={styles.heading}>{WelcomePage.title}</h2>

               <div className={styles.search}><input type='search' placeholder='לחיפוש באתר' />   </div>
            
              <div className={styles.box}>
               
        <p className={styles.content}>{WelcomePage.text}</p>
                <div className={styles.links}>
                  <a href="#"><h2><FaEnvelope/>קצת עלינו</h2></a>
                  <a href="#"><h2><FaHeart/> תרומה</h2></a>
                  <a href="#"><h2><FaInfo/>יצירת קשר</h2></a>
              </div>
              
          
            </div>
    </div>
          </div>
        </div>
        </>
  )
}