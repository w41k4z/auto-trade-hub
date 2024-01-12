import { useEffect, useState } from "react";
import { Brand } from "./type";
import { fetchData } from "./logic";

const useBrand = () => {
  const [loading, setLoading] = useState(false);
  const [brands, setBrands] = useState<Brand[]>([]);
  useEffect(() => {
    setLoading(true);
    fetchData((data: Brand[]) => {
      setBrands(data);
      setLoading(false);
    });
  }, []);

  return { loading, brands };
};

export default useBrand;
