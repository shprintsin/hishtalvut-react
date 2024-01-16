import TutorialCard from "./TutorialCard";
import styles from "./Card.module.css"
import { FaGraduationCap } from "react-icons/fa";
export function TutorialBlock({ block }) {
  const { title, content } = block;
  return (
    <>
   <div className={styles.container}>
        <div className={styles.wrapper}>
            <h1 className={styles.title}>
                <FaGraduationCap className={styles.icon} />
                המדריך להשכלה
            </h1>
            <div className={styles.content}>
                {content.map((tutorial, index) => {
                    return (
                        <TutorialCard
                            className={styles.Card}
                            key={index}
                            tutorial={tutorial}
                        />
                    );
                })}
            </div>
        </div>
</div>
    </>
  );
}
