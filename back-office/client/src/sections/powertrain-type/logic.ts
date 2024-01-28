import { FieldValues } from "react-hook-form";
import axios from "../../axios";
import { type PowertrainType } from "./type";

const originEndPoint = "/api/v1/powertrain-types";

export const fetchData = async (
  callBack: (data: PowertrainType[]) => void,
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

export const addPowertrainType = async (data: any, token: string) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  await axios
    .post(originEndPoint, data, config)
    .then((response) => {
      if (response.data.status === 201) {
        alert("Type d'energie ajouté");
      } else {
        alert(response.data.message);
      }
    })
    .catch((error) => {
      alert(error);
    });
};

export const updatePowertrainType = async (
  data: FieldValues,
  token: string
) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  await axios
    .put(originEndPoint, data, config)
    .then((response) => {
      if (response.data.status === 200) {
        alert("Type d'energie modifié");
      } else {
        alert(response.data.message);
      }
    })
    .catch((error) => {
      alert(error);
    });
};

export const deletePowertrainType = async (data: any, token: string) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  await axios
    .delete(`${originEndPoint}/${data.id}`, config)
    .then((response) => {
      if (response.data.status === 200) {
        alert("Type d'energie supprimé");
      } else {
        alert(response.data.message);
      }
    })
    .catch((error) => {
      alert(error);
    });
};
