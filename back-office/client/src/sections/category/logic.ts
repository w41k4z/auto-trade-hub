import { FieldValues } from "react-hook-form";
import axios from "../../axios";
import { type Category } from "./type";

export const fetchData = async (callBack: (data: Category[]) => void) => {
  await axios
    .get("/categories")
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
    .post("/categories", data)
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

export const updateCategory = async (data: FieldValues) => {
  await axios
    .put("/categories", data)
    .then((response) => {
      if (response.data.status === 200) {
        alert("Categorie modifiée");
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
    .delete(`/categories/${data.id}`)
    .then((response) => {
      if (response.data.status === 200) {
        alert("Categporie supprimée");
      } else {
        alert(response.data.message);
      }
    })
    .catch((error) => {
      alert(error);
    });
};
