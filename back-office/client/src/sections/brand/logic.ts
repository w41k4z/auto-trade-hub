import { FieldValues } from "react-hook-form";
import axios from "../../axios";
import { type Brand } from "./type";

const originEndPoint = "/api/v1/brand";

export const fetchData = async (
  callBack: (data: Brand[]) => void,
  token: string
) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  await axios
    .get(originEndPoint, config)
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

export const addBrand = async (data: any, token: string) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  await axios
    .post(originEndPoint, data, config)
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

export const updateBrand = async (data: FieldValues, token: string) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  await axios
    .put(originEndPoint, data, config)
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

export const deleteBrand = async (data: any, token: string) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  await axios
    .delete(`${originEndPoint}/${data.id}`, config)
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
