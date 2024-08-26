// eslint-disable-next-line no-unused-vars
import React from "react";

// eslint-disable-next-line react/prop-types
export const GenreFilter = ({ genres, onGenreSelect }) => {
  return (
    <div className="container bg-light">
      <h1 className="font-weight-bolder mt-4">Filter by Genre</h1>
      {
        // eslint-disable-next-line react/prop-types
        genres.map((genre, index) => (
          <button
            className="btn btn-secondary  m-3 p-2"
            key={index}
            onClick={() => onGenreSelect(genre)}
          >
            {genre}
          </button>
        ))
      }
    </div>
  );
};
export default GenreFilter;
