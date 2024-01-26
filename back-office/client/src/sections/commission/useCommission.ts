import { useEffect, useState } from "react";
import { fetchData } from "./logic";
import { Commission } from "./type";

const useCommission = () => {
  const [commissions, setCommissions] = useState<Commission[]>([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetchData((data: Commission[]) => {
      setCommissions(data);
      setLoading(false);
    });
  }, []);

  return { loading, commissions };
};

export default useCommission;
