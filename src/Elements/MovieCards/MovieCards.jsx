import React from 'react';
import {Link} from 'react-router-dom'
  // backdrop_path,genre_ids,id,original_title,vote_average,release_date

const MovieCards = ({ films }) => {
  const trendFilm = films.map(({ poster, filtergenre, id, filmname, vote_average, truedate }) =>
    <li id={id} key={id}>
   
    <img src={poster}
    alt={filmname} />
    <h2>{filmname}</h2>
    <ul>
      {filtergenre ? filtergenre.map((genr,index) => <li key={index}>{genr}</li>) : ""}
    </ul>
    <p>{vote_average}</p>
    <p>{truedate}</p>
     <Link to={ `/moviedetails/${id}`}>О фильме</Link>
  </li>)
  return (
    <>
      {trendFilm}
      </>
   );
}
 
export default MovieCards;