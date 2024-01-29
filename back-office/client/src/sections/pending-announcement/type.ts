import { CarModel } from "../car-model/type";
import { PowertrainType } from "../powertrain-type/type";
import { Province } from "../province/type";
import { TransmissionType } from "../transmission-type/type";

export type AnnouncementPicture = {
  id: number;
  path: string;
};

export type User = {
  id: number;
  name: string;
  firstName: string;
  birthDate: Date;
  email: string;
  phoneNumber: string;
  genre: number;
  province: Province;
};

export type Announcement = {
  id: number;
  mileage: number;
  price: number;
  announcement_date: Date;
  description: string;
  years: number;
  phone_number: string;
  car_model: CarModel;
  powertrain_type: PowertrainType;
  transmission_type: TransmissionType;
  commission: number;
  users: User;
  announcement_picture: AnnouncementPicture[];
};
