export const trending = "/trending/all/day"
export const apiKey = "923c2cf88ec4338da74c768a045101f0"
export const genres = "/genre/movie/list"
export const filmForSearch = "/search/movie"
export const actorsFilm = function(id){
  return `/movie/${id}/credits`
}
export const filmAdditionalInfo = function (id) {
  return `/movie/${id}`
}
export const movieReviews = function (id) {
  return `/movie/${id}/reviews`
}
