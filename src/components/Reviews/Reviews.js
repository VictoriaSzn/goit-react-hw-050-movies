import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import  Loader  from '../../components/Loader/Loader';
import { ReviewsGallery } from '../../components/ReviewsGallery/ReviewsGallery';

import { ReviewsApi } from "./ReviewsApi";

const Reviews = () => {
    const [reviews, setMovieReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    setIsLoading(true);
    ReviewsApi(movieId)
      .then(response => {
        setMovieReviews(response);
      })
      .catch(error => setError(error.message))
      .finally(() => {
        setIsLoading(false);
      });
  }, [movieId]);

  return (
    <>
      {isLoading && <Loader />}
      {error && <p>Oops, some error:{error}</p>}
      <ReviewsGallery reviews={reviews} />
      
    </>
  );
};

export default Reviews;