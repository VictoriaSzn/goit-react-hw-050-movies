import { useEffect, useState } from "react";
import Loader from "../../components/Loader/Loader";
import styles from "../Home/Home.module.css";
import { Trending } from "../../components/Trending/Trending";
import { TrendingApi } from "../../components/Trending/TrendingApi";

const Home = () => {
  const [trending, setTrending] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
     TrendingApi()
      .then(response => {
        setTrending(response);
      })
      .catch(error => setError(error.message))
      .finally(() => {
        setIsLoading(false);
      });
  }, [])
  //<div>список компонентов который я хочу рендерить по этому пути</div> 
  return (
    <>
        {error && <p className={styles.text}>Oops, some error:{error}</p>}
        <h2 className={styles.title}>Trending today</h2>
        <ul className={styles.list}>
          {trending && <Trending trending={trending} />}
        </ul>
        {isLoading && <Loader />}
    </>
  );
};
export default Home;