import { useEffect, useState } from "react";
import { Brand } from "./type";
import { fetchData } from "./logic";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/features/User/selector";
import { RootState } from "../../redux/features/User/type";

const useBrand = () => {
  const user = useSelector((state: RootState) => selectUser(state));
  const token = user?.accessToken ? user?.accessToken : "";
  const [loading, setLoading] = useState(false);
  const [brands, setBrands] = useState<Brand[]>([]);
  useEffect(() => {
    setLoading(true);
    fetchData((data: Brand[]) => {
      setBrands(data);
      setLoading(false);
    }, token);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { token, loading, brands };
};

export default useBrand;
