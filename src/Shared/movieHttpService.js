import axios from 'axios'

axios.defaults.baseURL = 'https://developers.themoviedb.org/3'

class MovieHttpServise {
  static API_KEY = '923c2cf88ec4338da74c768a045101f0'
  async get({ endpoint, options: { page, query } }) {
    try {
      const params = this.createParams(page, query)
      const { data } = await axios.get({ endpoint, params })
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }
  createParams(params) {
    return {
      ...params,
      api_key:MovieHttpServise.API_KEY
    }
  }
  

}
export default MovieHttpServise