import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:8080/auto-trade-hub/",
  headers: {
    "Content-type": "application/json",
  },
});
