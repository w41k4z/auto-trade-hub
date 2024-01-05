import { useEffect, useState } from "react";
import { PowertrainType } from "./type";
import { fetchData } from "./logic";

const usePowertrainType = () => {
  const [loading, setLoading] = useState(false);
  const [powertrainTypes, setPowertrainTypes] = useState<PowertrainType[]>([]);
  useEffect(() => {
    setLoading(true);
    fetchData((data: PowertrainType[]) => {
      setPowertrainTypes(data);
      setLoading(false);
    });
  }, []);

  return { loading, powertrainTypes };
};

export default usePowertrainType;
