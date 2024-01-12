import axios from "../../axios";
import { type CarModel } from "./type";

const originEndPoint = "/api/v1/car-models";

export const fetchData = async (callBack: (data: CarModel[]) => void) => {
  await axios
    .get(originEndPoint)
    .then((response) => {
      const resp = response.data;
      if (resp.status === 200) {
        resp.payload.forEach((element: CarModel) => {
          element.brandName = element.brand.name;
          element.categoryName = element.category.name;
        });
        callBack(resp.payload);
      } else {
        alert(resp.message);
      }
    })
    .catch((error) => {
      alert(error);
    });
};

export const addCarModel = async (data: any) => {
  let carModel = {
    name: data.name,
    brand: {id: data.brandId},
    category: {id: data.categoryId},
  };
  await axios
    .post(originEndPoint, carModel)
    .then((response) => {
      if (response.data.status === 201) {
        alert("Car model added");
      } else {
        alert(response.data.message);
      }
    })
    .catch((error) => {
      alert(error);
    });
};

export const deleteCarModel = async (data: any) => {
  await axios
    .delete(`${originEndPoint}/${data.id}`)
    .then((response) => {
      if (response.data.status === 200) {
        alert("Car model deleted");
      } else {
        alert(response.data.message);
      }
    })
    .catch((error) => {
      alert(error);
    });
};
