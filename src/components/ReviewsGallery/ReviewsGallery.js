import PropTypes from 'prop-types';
import styles from "../ReviewsGallery/ReviewsGallery.module.css";

export const ReviewsGallery = ({ reviews }) => {
  return (
    <>
      <h3 className={styles.title}>Reviews</h3>
      <ul className={styles.list}>
        {reviews.length === 0 ? (
          <p className={styles.text_empty}>We don't have any reviews for this movie.</p>
        ) : (
          reviews.map(({ id, author, content }) => {
            return (
              <li key={id}>
                <p className={styles.text_author}>Author: {author}</p>
                <p className={styles.text_content}>{content}</p>
              </li>
            );
          })
        )}
      </ul>
    </>
  );
};

ReviewsGallery.propTypes={
  reviews:PropTypes.arrayOf(PropTypes.shape())
}
