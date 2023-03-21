// import { useParams } from "react-router-dom";

//  const Cast = () => {
//     const { movieId } = useParams();
//     //  useEffect(() => {
//     //     //http zapros
//     // },[])
//     return (
//         <div>Cast: { movieId}<p>страница меняет разметку боьшей части вью порта, страница это контейнер который обычно не стилизируется, делает запрос только по тем данным которые ей нужны</p></div>
//     )
// }
// export default Cast;
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { CastGallery } from '../CastGallery/CastGallery';
import  Loader  from '../Loader/Loader';
import { CastApi } from './CactApi';


const Cast = () => {
  const [credits, setCredits] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    setIsLoading(true);
    CastApi(movieId)
      .then(response => {
        setCredits(response);
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
      <CastGallery credits={credits} />
      
    </>
  );
};

export default Cast;