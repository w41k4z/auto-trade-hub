import { useEffect, useState } from "react";
import { MonthlySales } from "../../type";
import { fetchMonthlySales } from "../../logic";

const useMonthlySales = (token: string) => {
  const [monthlySales, setMonthlySales] = useState<MonthlySales[]>([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetchMonthlySales(setMonthlySales, token).then(() => setLoading(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { monthlySales, loading };
};

export default useMonthlySales;
