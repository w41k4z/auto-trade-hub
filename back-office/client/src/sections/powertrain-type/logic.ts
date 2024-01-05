import axios from "../../axios";
import { type PowertrainType } from "./type";

export const fetchData = async (callBack: (data: PowertrainType[]) => void) => {
  await axios
    .get("/powertrain-types")
    .then((response) => {
      console.log(response);
      const resp = response.data;
      console.log(resp);
      if (resp.status === 200) {
        callBack(resp.payload);
      } else {
        alert(resp.message);
      }
    })
    .catch((error) => {
      alert(error);
    });
};

export const addPowertrainType = async (data: any) => {
  await axios
    .post("/powertrain-types", data)
    .then((response) => {
      if (response.data.status === 201) {
        alert("Type de transmission ajouté");
      } else {
        alert(response.data.message);
      }
    })
    .catch((error) => {
      alert(error);
    });
};
