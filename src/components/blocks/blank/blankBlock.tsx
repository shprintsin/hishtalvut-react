import React from 'react'
import styles from './bankBlock.module.css'
import { FaGraduationCap } from 'react-icons/fa'
import SurveyPage from '../../surveyjs/SurveyPage'
export default function BlankBlock() {
  return (
    <div className={styles.container}>
    <div className={styles.wrapper}>
        <h1 className={styles.title}>
            <FaGraduationCap className={styles.icon} />
          title
        </h1>
        <div className={styles.content}>           
            <SurveyPage/>
        </div>
    </div>
</div>
  )
}
