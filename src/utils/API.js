import axios from "axios";

export const getRepo = (repo) =>
  axios.get(`https://api.github.com/repos/thadkingcole/${repo}`);
