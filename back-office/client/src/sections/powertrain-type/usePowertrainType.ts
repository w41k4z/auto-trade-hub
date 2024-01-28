import { useEffect, useState } from "react";
import { PowertrainType } from "./type";
import { fetchData } from "./logic";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/features/User/selector";
import { RootState } from "../../redux/features/User/type";

const usePowertrainType = () => {
  const user = useSelector((state: RootState) => selectUser(state));
  const token = user?.accessToken ? user?.accessToken : "";
  const [loading, setLoading] = useState(false);
  const [powertrainTypes, setPowertrainTypes] = useState<PowertrainType[]>([]);
  useEffect(() => {
    setLoading(true);
    fetchData((data: PowertrainType[]) => {
      setPowertrainTypes(data);
      setLoading(false);
    }, token);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { loading, powertrainTypes, token };
};

export default usePowertrainType;
