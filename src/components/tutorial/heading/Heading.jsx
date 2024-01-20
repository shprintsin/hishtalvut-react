import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import styles from './Heading.module.css'
import PropTypes from 'prop-types';

Heading.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  uri: PropTypes.string.isRequired,
};

export function Heading({ name,icon,uri }) {
  return (
    <>
       <Link to={uri} className={styles.wrapper}>
            <span className={styles.title}>{name}</span>
        <span className={styles.icon}><i className={icon}></i></span>
    <a className={styles.Link} href={"/"}>
      <span className={"text-xs mx-2"}><FaBars/></span>
      <span className="mx-2 w-fit">5 מאמרים</span>
    </a>
      </Link>

    </>
  );
}

export default Heading;