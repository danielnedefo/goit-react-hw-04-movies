import React, { Component } from 'react';
import axios from 'axios'
import { filmAdditionalInfo, apiKey } from '../../ParamForFilm/filmsParams'
import DetailsCard from '../../Elements/DetailsCard/DatailsCard'
axios.defaults.baseURL = 'https://api.themoviedb.org/3'

class MovieDetailsPage extends Component{
   state = {
    film:[],
     filmId: "",
     loading:false
  }
  componentDidMount() {
    this.setState(({ filmId }) => {
      return {
        filmId: this.props.match.params.id,
        loading:true
      }
    })
  }
  componentDidUpdate() {
    const { loading } = this.state
    if (loading) {
      this.fetchFilmAdditionalInfo()
    }
    
  }
 async fetchFilmAdditionalInfo () {
    const enpointForAdditionalInfo = filmAdditionalInfo(this.state.filmId)
    const fullFilmInfo = await axios.get(enpointForAdditionalInfo, { params: { api_key: apiKey } })
      .then(({ data }) => {
        const { backdrop_path, budget, genres, original_title, overview, vote_average, production_companies, release_date, production_countries } = data
        const genresFilm = genres.map(film => film.name)
        const companies = production_companies.map(companies => companies.name)
        const coutriesProducion = production_countries.map(countries => countries.name)
        const poster = "https://image.tmdb.org/t/p/w500/" + backdrop_path;
        console.log(coutriesProducion)
        return {
          poster,
          coutriesProducion,
          companies,
          genresFilm,
          budget,
          original_title,
          overview,
          vote_average,
          release_date
      }
      })
   this.setState(({ film }) => {
     return {
     loading:false, 
     film:[fullFilmInfo]
     }
   })
  }
  handleGoBack = () => {
    const { location, history } = this.props
    if(location.state && location.state.from){
      return history.push(location.state.from)
    }
    history.push("/")
  }
  render() {
    console.log(this.props.location)
    const {film,filmId} = this.state
    return (
      <>
        <button type="button" onClick={this.handleGoBack}>Go back</button>
        <DetailsCard  id={filmId} film={film}/>
        
        {/* <h2>Movie Details {this.props.match.params.id}</h2> */}
        </>
    )
  }
}
export default MovieDetailsPage;