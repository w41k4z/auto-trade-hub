import { FieldValues } from "react-hook-form";
import axios from "../../axios";
import { type Commission } from "./type";

const originEndPoint = "/api/v1/category";

export const fetchData = async (callBack: (data: Commission[]) => void) => {
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

export const addCategory = async (data: any) => {
  await axios
    .post(originEndPoint, data)
    .then((response) => {
      if (response.data.status === 201) {
        alert("Categorie ajoutée");
      } else {
        alert(response.data.message);
      }
    })
    .catch((error) => {
      alert(error);
    });
};

export const updateCategory = async (data: FieldValues) => {
  await axios
    .put(originEndPoint, data)
    .then((response) => {
      if (response.data.status === 200) {
        alert("Categories modifiée");
      } else {
        alert(response.data.message);
      }
    })
    .catch((error) => {
      alert(error);
    });
};

export const deleteCategory = async (data: any) => {
  await axios
    .delete(`${originEndPoint}/${data.id}`)
    .then((response) => {
      if (response.data.status === 200) {
        alert("Categorie supprimée");
      } else {
        alert(response.data.message);
      }
    })
    .catch((error) => {
      alert(error);
    });
};
