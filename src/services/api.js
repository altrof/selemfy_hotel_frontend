import axios from "axios";

export default (url = import.meta.env.VITE_API_URL) => {
  return axios.create({
    baseURL: url,
  });
};
