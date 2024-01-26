import axios from "../../axios";
import { CarModel } from "../car-model/type";
import { type Commission } from "./type";

const originEndPoint = "/api/v1/commissions";

export const fetchData = async (callBack: (data: Commission[]) => void) => {
  await axios
    .get(originEndPoint)
    .then((response) => {
      const resp = response.data;
      if (resp.status === 200) {
        const data = resp.payload;
        data.forEach((element: Commission) => {
          element.carModelName = element.carModel.name;
          element.carModelCategory = element.carModel.category.name;
          element.carModelBrand = element.carModel.brand.name;
        });
        callBack(data);
      } else {
        alert(resp.message);
      }
    })
    .catch((error) => {
      alert(error);
    });
};

export const addCommission = async (data: any) => {
  const carModel: CarModel = {
    id: data.carModelId,
    name: "",
    brand: {
      id: -1,
      name: "",
    },
    category: {
      id: -1,
      name: "",
    },
  };
  data.carModel = carModel;
  await axios
    .post(originEndPoint, data)
    .then((response) => {
      if (response.data.status === 201) {
        alert("Commission parametrée");
      } else {
        alert(response.data.message);
      }
    })
    .catch((error) => {
      alert(error);
    });
};

export const addGlobalCommission = async (data: any) => {
  await axios
    .post(originEndPoint + "/global", data)
    .then((response) => {
      if (response.data.status === 201) {
        alert("Commission globale parametrée");
      } else {
        alert(response.data.message);
      }
    })
    .catch((error) => {
      alert(error);
    });
};
