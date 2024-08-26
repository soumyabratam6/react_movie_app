// eslint-disable-next-line no-unused-vars
import React from 'react'
// eslint-disable-next-line react/prop-types
const MovieList = ({movies}) => {
  return (
    <table className="table table-bordered ">
    <thead className='table-active'>
      <tr>
        <th>Title</th>
        <th>Genre</th>
        <th>Year</th>
      </tr>
    </thead>
    <tbody>
        {
           // eslint-disable-next-line react/prop-types
           movies.map((movie,index)=>(
            <tr key={index}>
            <td>{movie.title}</td>
            <td>{movie.genre}</td>
            <td>{movie.year}</td>
          </tr>
           )) 
        }
    </tbody>
  </table>
  )
}

export default MovieList