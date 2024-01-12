import { useEffect, useState } from "react";
import { CarModel } from "./type";
import { fetchData } from "./logic";
import useBrand from "../brand/useBrand";
import useCategory from "../category/useCategory";

const useCarModel = () => {
  const { brands } = useBrand();
  const { categories } = useCategory();
  const [carModels, setCarModels] = useState<CarModel[]>([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetchData((data: CarModel[]) => {
      setCarModels(data);
      setLoading(false);
    });
  }, []);

  return { loading, carModels, brands, categories };
};

export default useCarModel;
