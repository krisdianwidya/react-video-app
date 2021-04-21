import axios from "axios";

const KEY = "AIzaSyCvYpNgnqMGaOdJ0WtZL8USRz3xdp4ik68";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
