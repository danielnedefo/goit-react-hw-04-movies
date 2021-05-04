import React, { Component } from 'react';
import axios from 'axios'
import { movieReviews } from '../../../ParamForFilm/filmsParams'
import Review from '../../../Elements/Reviews/Review'
class Reviews extends Component{
  state = {
    reviews: [],
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
      this.fetchFilmReview()
    }
  }
 async fetchFilmReview () {
    const endpointReview = movieReviews(this.state.filmId)
    const review = await axios.get(endpointReview, { params: { api_key: "923c2cf88ec4338da74c768a045101f0" } })
      .then(({ data }) => {
        const { results } = data
      return results
      })
   this.setState(({ reviews }) => {
     return {
       loading: false,
       reviews:review
     }
   })
 }
  render() {
    const {reviews} = this.state
    console.log(reviews)
    return (
      <>
        {reviews.length > 0 ? <Review review={reviews}/> : <p>Sorry,there is no review</p>}
        </>
   )
 }
}
export default Reviews