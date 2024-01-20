import styles from './AboutBlock.module.css'
import { FaGraduationCap, FaUser } from 'react-icons/fa'
import AboutComponent from './AboutComponent'
export default function AboutBlock() {
  return (
    <div className={styles.container}>
    <div className={styles.wrapper}>
      
        <h1 className={styles.title}>
           <FaUser/>
          מי אנחנו?
        </h1>
        <AboutComponent />  
    </div>
</div>
  )
}
