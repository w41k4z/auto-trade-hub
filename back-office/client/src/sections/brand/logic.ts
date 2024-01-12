import { FieldValues } from "react-hook-form";
import axios from "../../axios";
import { type Brand } from "./type";

const originEndPoint = "/api/v1/brand";

export const fetchData = async (callBack: (data: Brand[]) => void) => {
  await axios
    .get(originEndPoint)
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

export const addBrand = async (data: any) => {
  await axios
    .post(originEndPoint, data)
    .then((response) => {
      if (response.data.status === 201) {
        alert("Marque ajoutée");
      } else {
        alert(response.data.message);
      }
    })
    .catch((error) => {
      alert(error);
    });
};

export const updateBrand = async (data: FieldValues) => {
  await axios
    .put(originEndPoint, data)
    .then((response) => {
      if (response.data.status === 200) {
        alert("Marque modifiée");
      } else {
        alert(response.data.message);
      }
    })
    .catch((error) => {
      alert(error);
    });
};

export const deleteBrand = async (data: any) => {
  await axios
    .delete(`${originEndPoint}/${data.id}`)
    .then((response) => {
      if (response.data.status === 200) {
        alert("Marque supprimé");
      } else {
        alert(response.data.message);
      }
    })
    .catch((error) => {
      alert(error);
    });
};
