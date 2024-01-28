import { useEffect, useState } from "react";
import { fetchData } from "./logic";
import { Commission } from "./type";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/features/User/selector";
import { RootState } from "../../redux/features/User/type";

const useCommission = () => {
  const user = useSelector((state: RootState) => selectUser(state));
  const token = user?.accessToken ? user?.accessToken : "";
  const [commissions, setCommissions] = useState<Commission[]>([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetchData((data: Commission[]) => {
      setCommissions(data);
      setLoading(false);
    });
  }, []);

  return { loading, commissions, token };
};

export default useCommission;
