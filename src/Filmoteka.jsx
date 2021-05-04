import React, { Component } from 'react';
import axios from 'axios'
import SearchFilms from './Components/SearchFilms/SearchFilms'
import { trending,genres,actorsFilm,filmAdditionalInfo,movieReviews,filmForSearch } from './ParamForFilm/filmsParams'
axios.defaults.baseURL = 'https://api.themoviedb.org/3'
// import MovieHttpService from './Shared/movieHttpService'
class Filmoteka extends Component{
  state = {
    films:[],
    page: 1,
    query: "",
    filmId:567189,
  }
   fetchTrendingFilms = () => {
     const req = axios.get( trending , { params: {  page: this.state.page, api_key: "923c2cf88ec4338da74c768a045101f0" } })
     req.then(({data}) => console.log(data))
  }
  fetchFilmByKeyword = () => {
    const req = axios.get(filmForSearch, { params: { query: this.state.query, page: this.state.page, api_key: "923c2cf88ec4338da74c768a045101f0" } })
    .then(({data}) => console.log(data))
  }
  fetchGenresOfFilms = () => {
    const genre = axios.get(genres, { params: { api_key: "923c2cf88ec4338da74c768a045101f0" } })
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
  fetchActorsForFilm = () => {
    const endpointForActors = actorsFilm(this.state.filmId)
    const actors = axios.get(endpointForActors, { params: { api_key: "923c2cf88ec4338da74c768a045101f0" } })
    .then(({data})=> console.log(data.cast))
  }
  fetchFilmAdditionalInfo = () => {
    const enpointForAdditionalInfo = filmAdditionalInfo(this.state.filmId)
    const fullFilmInfo = axios.get(enpointForAdditionalInfo, { params: { api_key: "923c2cf88ec4338da74c768a045101f0" } })
    .then(({data}) => console.log(data))
  }
  fetchFilmReview = () => {
    const endpointReview = movieReviews(this.state.filmId)
    const review = axios.get(endpointReview, { params: { api_key: "923c2cf88ec4338da74c768a045101f0" } })
    .then(({data}) => console.log( data))
  }
  componentDidMount() {
    this.fetchTrendingFilms()
    this.fetchGenresOfFilms()
    this.fetchActorsForFilm()
    this.fetchFilmAdditionalInfo()
    this.fetchFilmReview()
    this.fetchFilmByKeyword()
  }
  render() {
    return (
      <>
      </>
    )
  }
}
export default Filmoteka