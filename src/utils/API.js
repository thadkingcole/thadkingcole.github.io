import axios from "axios";

export default {
  // get info from repo
  getRepo: (repo) => {
    return axios.get(`https://api.github.com/repos/thadkingcole/${repo}`);
  },
};
