import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from "../Trending/trending.module.css";

export const Trending = ({ trending }) => {
  return (
    <>
      {trending.map(({id, title}) => (
        <li key={id} className={styles.li}>
          <Link to={`movies/${id}`} className={styles.link}>{title}</Link>
        </li>
      ))}
    </>
  );
};

 Trending.propTypes = {
   trending: PropTypes.arrayOf(PropTypes.shape()).isRequired,
 };