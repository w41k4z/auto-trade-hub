import { FieldValues } from "react-hook-form";
import axios from "../../axios";
import { type TransmissionType } from "./type";

export const fetchData = async (callBack: (data: TransmissionType[]) => void) => {
  await axios
    .get("/transmission-types")
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

export const addTransmissionType = async (data: any) => {
  await axios
    .post("/transmission-types", data)
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

export const updateTransmissionType = async (data: FieldValues) => {
  await axios
    .put("/transmission-types", data)
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

export const deleteTransmissionType = async (data: any) => {
  await axios
    .delete(`/transmission-types/${data.id}`)
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
