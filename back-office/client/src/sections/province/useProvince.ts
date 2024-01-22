import { useEffect, useState } from "react";
import { fetchData } from "./logic";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/features/User/selector";
import { RootState } from "../../redux/features/User/type";
import { Province } from "./type";

const useProvince = () => {
  const user = useSelector((state: RootState) => selectUser(state));
  const token = user?.accessToken ? user?.accessToken : "";
  const [loading, setLoading] = useState(false);
  const [provinces, setProvinces] = useState<Province[]>([]);
  useEffect(() => {
    setLoading(true);
    fetchData((data: Province[]) => {
      setProvinces(data);
      setLoading(false);
    }, token);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { token, loading, provinces };
};

export default useProvince;
