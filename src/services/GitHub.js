
import axios from 'axios'


const API_TOKEN='96352575dc9820e6b46298531017871732b49e7e'

export default class GitHub {
  constructor () {
                                             
    axios.defaults.baseURL = 'https://api.github.com/'
    // add token
    axios.defaults.headers.common['Authorization'] = `Bearer  ${API_TOKEN}`
  
  }
  getRepos (username){
      return axios.get(`users/${username}/repos`)
  }
  getProfile (username){
    return axios.get(`users/${username}`)
}

}
export const gitHub = new GitHub()


 