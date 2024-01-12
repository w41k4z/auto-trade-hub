import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:8080/auto-trade-hub/api/v1/",
  headers: {
    "Content-type": "application/json",
  },
});
