import axios from "axios";

export default axios.create({
  baseURL: "https://auto-trade-hub-production-24e6.up.railway.app/back-office",
  headers: {
    "Content-type": "application/json",
  },
});
