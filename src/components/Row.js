import React, { useEffect, useState } from 'react';
import axios from '../function-modules/axios';
import './Row.css';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

function Row({ title, fetchUrl, isLargerRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

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

  const opts = {
    height: "300",
    width: "100%",
    playerVars: {
      autoplay: 1,
    }
  }
  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || movie?.orignal_name || movie?.title || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get('v'));
        }).catch((error) => {
          console.log(error);
        })
    }
  }

  return (
    <div>
      <div className="row">
        <h2>{title}</h2>
        <div className="row_posters">
          {/* row posters */}
          {movies.map(movie => (
            <img
              onClick={() => handleClick(movie)}
              key={movie.id}
              className={`row_poster ${isLargerRow && "row_poster_large"}`}
              src={`${base_url}${isLargerRow ? movie.poster_path : movie.backdrop_path || movie.poster_path}`}
              alt={movie.name}
            />
          ))}
        </div>
      </div>

      {/* Container -> posters */}
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}

    </div>
  )
}

export default Row
