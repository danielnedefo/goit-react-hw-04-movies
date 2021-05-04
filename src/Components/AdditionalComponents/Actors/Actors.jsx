import React, { Component } from 'react';
import axios from 'axios'
import { actorsFilm } from '../../../ParamForFilm/filmsParams'
import ActorsCast from '../../../Elements/ActorsCast/ActorsCast'
class Actors extends Component{
  state = {
    actor:[],
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
    console.log(this.state.filmId)
  }
  componentDidUpdate() {
    const { loading } = this.state
    if (loading) {
      this.fetchActorsForFilm()
    }
  }
 async fetchActorsForFilm() {
    const endpointForActors = actorsFilm(this.state.filmId)
    const actors = await axios.get(endpointForActors, { params: { api_key: "923c2cf88ec4338da74c768a045101f0" } })
      .then(({ data }) => {
        const {cast} = data
         return cast
      })
   this.setState(({ actor }) => {
     return {
       actor: actors,
       loading:false
       }
     })
  }
  render() {
    const {actor} = this.state
    return (
      <>
        <ActorsCast actors={actor}/>
        </>
   )
 }
}
export default Actors