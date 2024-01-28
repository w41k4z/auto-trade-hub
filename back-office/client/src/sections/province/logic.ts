import { FieldValues } from "react-hook-form";
import axios from "../../axios";
import { type Province } from "./type";

const originEndPoint = "/api/v1/provinces";

export const fetchData = async (
  callBack: (data: Province[]) => void,
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

export const addProvince = async (data: any, token: string) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  await axios
    .post(originEndPoint, data, config)
    .then((response) => {
      if (response.data.status === 201) {
        alert("Province ajoutée");
      } else {
        alert(response.data.message);
      }
    })
    .catch((error) => {
      alert(error);
    });
};

export const updateProvince = async (data: FieldValues, token: string) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  await axios
    .put(originEndPoint, data, config)
    .then((response) => {
      if (response.data.status === 200) {
        alert("Province modifiée");
      } else {
        alert(response.data.message);
      }
    })
    .catch((error) => {
      alert(error);
    });
};

export const deleteProvince = async (data: any, token: string) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  await axios
    .delete(`${originEndPoint}/${data.id}`, config)
    .then((response) => {
      if (response.data.status === 200) {
        alert("Province supprimé");
      } else {
        alert(response.data.message);
      }
    })
    .catch((error) => {
      alert(error);
    });
};
