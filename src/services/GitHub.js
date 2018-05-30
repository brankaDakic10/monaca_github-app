
import axios from 'axios'

export default class GitHub {
  constructor () {
                                             
    axios.defaults.baseURL = `https://api.github.com/`
  }
  getRepos (username){
      return axios.get(`users/${username}/repos`, username)
  }
 

}
export const github = new GitHub()


 