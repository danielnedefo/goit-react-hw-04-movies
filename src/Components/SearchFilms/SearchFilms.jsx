import React, { Component } from 'react';
import axios from 'axios'
import { filmForSearch, apiKey,genres } from '../../ParamForFilm/filmsParams'
import FormSearch from '../../Elements/FormSearch/FormForSearch'
import MovieCards from '../../Elements/MovieCards/MovieCards'
axios.defaults.baseURL = 'https://api.themoviedb.org/3'

class SearchFilms extends Component{
  state = {
    films:[],
    page: 1,
    query: "",
    filmId:"",
  }
  componentDidUpdate() {
    console.log(this.state.query)
    this.fetchFilmByKeyword()
  }
  onSubmitForm = (search) => {
    this.setState(({ query }) => {
      return {
        query:search
      }
    })
  }
  fetchFilmsByQuery = (e) => {
    e.preventDefault()
    console.log(e.target.value)
  }
 async fetchFilmByKeyword() {
    const genres = await this.fetchGenresOfFilms()
    const req = await axios.get(filmForSearch, { params: { query: this.state.query, page: this.state.page, api_key:apiKey } })
    .then(({ data }) => {
         const { results } = data
         console.log(results)
         const everyFilm = results.map(({ name,first_air_date,backdrop_path, genre_ids, id, original_title, vote_average, release_date }) => {
           const genre = genre_ids.map(id => {
            return genres[id]
           })
           const filmname = name || original_title
           const release = release_date || first_air_date
           const [truedate] = release.split("-")
           const filtergenre = genre.filter(genr => genr !== undefined)
           const poster = "https://image.tmdb.org/t/p/w500/" + backdrop_path;
           return {
             poster,
             filtergenre,
             id,
             filmname,
             vote_average,
             truedate
           }
         })
         this.setState(({ films }) => {
           const newFilms = everyFilm
           return {
             films:newFilms
           }
        })
       })
  }
  async fetchGenresOfFilms ()  {
    const genre = await axios.get(genres, { params: { api_key: "923c2cf88ec4338da74c768a045101f0" } })
      .then(({ data }) => {
        const { genres } = data
        const genreArr = genres.reduce((acc, { id, name }) => {

          acc[id] = name
          return acc;
        }, {})
        console.log(genreArr)
        return genreArr

      })
    return genre
  }
  render() {
    const {fetchFilmsByQuery,onSubmitForm} = this
    return (
      <>
        <FormSearch onSubmitForm={onSubmitForm} getQuery={fetchFilmsByQuery} />
        <MovieCards films={this.state.films}/>
      </>
    )
  }
}
export default SearchFilms