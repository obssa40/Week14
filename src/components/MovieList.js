

import React from "react";
import Movie from "./Movie";

const MovieList = (props) => {
  return (
    <div>
      {props.movies.map((movie) => {
        return (<Movie movie={movie} key={movie.id} />
        )
      })}
    </div>
  );
};

export default MovieList;
