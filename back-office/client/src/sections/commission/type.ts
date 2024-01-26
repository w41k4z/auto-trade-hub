import { CarModel } from "../car-model/type";

export type Commission = {
  id: number;
  fromDate: Date;
  percentage: number;
  carModel: CarModel;
  carModelName: string;
  carModelCategory: string;
  carModelBrand: string;
};
