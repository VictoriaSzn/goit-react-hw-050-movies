import { Suspense, useEffect, useRef, useState } from "react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { MovieDetailsApi } from "../MovieDetails/MovieDetailsApi";
import Loader from "../../components/Loader/Loader";
import { AboutFilm } from "../../components/AboutFilm/AboutFilm";
import styles from "../MovieDetails/MovieDetails.module.css";

const MovieDetails = () => {
    const location = useLocation ();
    const backLinkRef = useRef(location.state?.from ?? "/");
    const { movieId } = useParams();

    const [movieDetails, setMovieDetails] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

     useEffect(() => {
         setIsLoading(true);
       MovieDetailsApi(movieId)
      .then(response => {
        setMovieDetails(response);
      })
      .catch(error => setError(error.message))
      .finally(() => {
        setIsLoading(false);
      });
     }, [movieId]);
    
    const { poster_path, title, vote_average, overview, genres } = movieDetails;
        
    return (
        <div className={styles.section}>
           
            <div className={styles.goBack}>
            {location.state ? (
                <Link to={backLinkRef.current} className={styles.linkGo}>Go back</Link>
            ) : (
                <Link to="/movies" className={styles.linkGo}>Go back</Link>
                )}
            </div>

            {isLoading && <Loader />}
            {error && <p>Oops, some error:{error}</p>}       

             {movieDetails && (
            <AboutFilm
              poster_path={poster_path}
              title={title}
              vote_average={vote_average}
              overview={overview}
              genres={genres}
            />
            )}
            <h3 className={styles.add_title}>Additional information</h3>
             <ul className={styles.add_list}>
                <li className={styles.add_item}>
                    <Link to="cast" className={styles.link}>Cast</Link>
                </li>
                <li className={styles.add_item}>
                    <Link to="reviews" className={styles.link}>Reviews</Link>
                </li>
            </ul>
            <Suspense fallback={<div>LOADING...</div>}>
                <Outlet />
            </Suspense>
        </div>)
}
export default MovieDetails;