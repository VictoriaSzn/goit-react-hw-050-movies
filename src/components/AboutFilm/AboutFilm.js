import styles from "../AboutFilm/AboutFilm.module.css";
import PropTypes from 'prop-types';
import noPoster from "../../components/noPoster.png";

export const AboutFilm = ({
  poster_path,
  title,
  vote_average,
  overview,
  genres,
}) => {
  return (
    <div className={styles.div}>
      <div>
      <img
        src={
          poster_path === null
            ? noPoster
            : `https://image.tmdb.org/t/p/w500/${poster_path}`
        }
        alt={title}
        width="300"
      />
      </div>
      <div >
        
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.text_score}>
          User Score: {Math.round(vote_average * 10)}%
        </p>
        <h2 className={styles.title_overview_genres}>Overview</h2>
        <p className={styles.text}>{overview}</p>
        <h2 className={styles.title_overview_genres}>Genres</h2>
        <ul className={styles.list}>
          {genres?.map(({ id, name }) => (
            <li key={id}>{name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

AboutFilm.propTypes = {
  poster_path: PropTypes.string,
  title: PropTypes.string,
  overview: PropTypes.string,
  genres: PropTypes.arrayOf(PropTypes.shape),
};