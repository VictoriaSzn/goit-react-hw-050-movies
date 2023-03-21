import styles from "../CastGallery/CastGallery.module.css";
import noImage from "../../components/noImage.png"; 

export const CastGallery = ({ credits }) => {
  return (
    <>
      <ul className={styles.list}>
        {credits &&
          credits.map(({ id, profile_path, name, character }) => {
            return (
              <li key={id} >
                <img
                  src={
                    profile_path === null
                      ? noImage
                      : `https://image.tmdb.org/t/p/w500/${profile_path}`
                  }
                  alt={name}
                  className={styles.img}
                />
                <p className={styles.text}>{name}</p>
                <p className={styles.text}>Character: {character}</p>
              </li>
            );
          })}
      </ul>
    </>
  );
};