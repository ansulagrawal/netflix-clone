import React, { useEffect, useState } from 'react'
import axios from '../function-modules/axios';
import './Row.css'
function Row({ title, fetchUrl, isLargerRow }) {
  const [movies, setMovies] = useState([]);
  const base_url = "https://www.themoviedb.org/t/p/original";

  // A snippet of  code which is based on a specific condition / variable.
  useEffect(() => {
    //  if [],  runs once when the row loads, and don't run it again.
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl])

  // console.table(movies);
  return (
    <div>
      <div className="row">
        <h2>{title}</h2>
        <div className="row_posters">
          {/* row posters */}
          {movies.map(movie => (
            <img
              key={movie.id}
              className={`row_poster ${isLargerRow && "row_poster_large"}`}
              src={`${base_url}${isLargerRow ? movie.poster_path : movie.backdrop_path}`}
              alt={movie.name}
            />
          ))}
        </div>
      </div>

      {/* Container -> posters */}

    </div>
  )
}

export default Row
