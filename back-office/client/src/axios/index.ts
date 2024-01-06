import axios from "axios";

export default axios.create({
  baseURL: "https://auto-trade-hub-production.up.railway.app/auto-trade-hub",
  headers: {
    "Content-type": "application/json",
  },
});
