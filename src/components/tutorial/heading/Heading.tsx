import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import styles from './Heading.module.css'
export function Heading({ name,icon,uri }: { name: string,count:number,icon:string,uri:string }) {
  return (
    <>
       <Link to={uri} className={styles.wrapper}>
            <span className={styles.title}>{name}</span>
        <span className={styles.icon}><i className={icon}></i></span>
    <a className={styles.Link} href={"/"}>
      <span className={"text-xs mx-2"}><FaBars/></span>
      <span className="mx-2 w-fit">guide 46</span>
    </a>
      </Link>

    </>
  );
}

export default Heading;
