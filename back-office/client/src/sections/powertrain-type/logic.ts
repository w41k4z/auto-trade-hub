import { FieldValues } from "react-hook-form";
import axios from "../../axios";
import { type PowertrainType } from "./type";

export const fetchData = async (callBack: (data: PowertrainType[]) => void) => {
  await axios
    .get("/powertrain-types")
    .then((response) => {
      const resp = response.data;
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

export const updatePowertrainType = async (data: FieldValues) => {
  await axios
    .put("/powertrain-types", data)
    .then((response) => {
      if (response.data.status === 200) {
        alert("Type de transmission modifié");
      } else {
        alert(response.data.message);
      }
    })
    .catch((error) => {
      alert(error);
    });
};

export const deletePowertrainType = async (data: any) => {
  await axios
    .delete(`/powertrain-types/${data.id}`)
    .then((response) => {
      if (response.data.status === 200) {
        alert("Type de transmission supprimé");
      } else {
        alert(response.data.message);
      }
    })
    .catch((error) => {
      alert(error);
    });
};
