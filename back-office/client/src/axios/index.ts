import axios from "axios";

export default axios.create({
  baseURL: "https://auto-trade-hub-production-f644.up.railway.app/back-office",
  headers: {
    "Content-type": "application/json",
  },
});
