import { useEffect, useState } from "react";
import { CarModel } from "./type";
import { fetchData } from "./logic";
import useBrand from "../brand/useBrand";
import useCategory from "../category/useCategory";

const useCarModel = () => {
  const { brands, token } = useBrand();
  const { categories } = useCategory();
  const [carModels, setCarModels] = useState<CarModel[]>([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetchData((data: CarModel[]) => {
      setCarModels(data);
      setLoading(false);
    }, token);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { loading, carModels, brands, categories, token };
};

export default useCarModel;
