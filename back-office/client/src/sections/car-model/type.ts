import { Brand } from "../brand/type";
import { Category } from "../category/type";

export type CarModel = {
  id: number;
  name: string;
  brand: Brand;
  brandName?: string;
  category: Category;
  categoryName?: string;
};
