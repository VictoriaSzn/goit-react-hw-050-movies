import { useEffect, useState } from "react";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { MoviesApi } from "../Movies/MoviesApi";
import Loader from "../../components/Loader/Loader";
import styles from "../Movies/Movies.module.css";

const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [notFound, setNotFound] = useState(false);
    const [movieInput, setMovieInput] = useState('');
    
    const location = useLocation();
    const [ searchParams, setSearchParams ] = useSearchParams();
    const movieId = searchParams.get('query')??'';//прочитать из url тут хранится фильтр
//console.log(searchParams.get('a'));
    
    //из запроса приходит колллекция сохраняестя в стейт 
      useEffect(() => {
       if (!movieId) return;
        setNotFound(false);
        setError(null);
          setIsLoading(true);
          
    MoviesApi(movieId)
      .then(response => {
        setMovies(response);
        if (response.length === 0) setNotFound(true);
      })
      .catch(error => setError(error.message))
      .finally(() => {
        setIsLoading(false);
      });
  }, [movieId]);   
    
    // const updateQueryString = evt => {
    // const serchMovie = evt.target.value;
    //     if (serchMovie ==='') {
    //         return setSearchParams({});
    //     }
    //     setSearchParams({ movieId: serchMovie });
    // };
     const handleInputChange = evt => {
    const { value } = evt.target;
    setMovieInput(value);
  };
    const onFormSubmit = evt => {
        evt.preventDefault();
        setSearchParams(movieInput!==""?{ query: movieInput.trim() }:{});
        setMovieInput('');
    };
    
    //const visibleMovies = movies.filter(movie => movie.includes(movieId));
    //тыкаешь навлинк изменяется юрл, раут по урл ищет компонент который он должен отрендерить
    return (
            <div className={styles.section}>
                <form onSubmit={onFormSubmit} className={styles.searchForm}>
                    <input
                    name="searchInput"
                    type="text"
                    value={movieInput}
                    onChange={handleInputChange}
                    className={ styles.input} />
                    <button className={styles.Button}>serch</button>
            </form>
            
                {error && <p>Oops, some error:{error}</p>}

            {movies.length > 0 && (
                <>
                <h2 className={styles.title}>Search results</h2>
                <ul className={styles.list}>
                    {movies.map(movie => {
                        return (
                            <li key={movie.id} className={styles.item}>
                                <Link to={`/movies/${movie.id}`} state={{from: location}} className={styles.link}>
                                    {movie.title}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
                </>
            )}
                {notFound && (
                    <p className={styles.p}>Nothing found. Try again.</p>
                )}

                {isLoading && <Loader />}   
            </div>
      
    )
};
export default Movies;
