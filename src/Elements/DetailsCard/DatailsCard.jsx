import React  from 'react';
import {Link} from 'react-router-dom'

const DetailsCard = ({film,id}) => {
  const filmforRender = film.map(({ budget, companies, coutriesProducion,
    genresFilm, original_title, overview, poster, release_date, vote_average }) => <section>
      <img src={poster} alt={original_title} />
      <h2>{original_title}</h2>
        Companies:
      <ul>
        {companies ? companies.map((company, index) => <li key={index}>{company}</li>) : ""}
      </ul>
      Genres:
      <ul>
        {genresFilm ? genresFilm.map((genr, index) => <li key={index}>{genr}</li>) : ""}
      </ul>
      Countries:
      <ul>
        {coutriesProducion ? coutriesProducion.map((country, index) => <li key={index}>{country}</li>): ""}
      </ul>
      <p>Budget:{budget}</p>
      <p>{overview}</p>
      <p>Date of realese:{release_date}</p>
      <p>Vote by viewers: {vote_average}</p>
      <Link  to={`/moviedetails/${id}/actors`}>Actors</Link>
      <br/>
      <Link  to={ `/moviedetails/${id}/reviews`}>Reviews</Link>
    </section>)
  return (
    <>
      {filmforRender}
      </>
  )
}
export default DetailsCard