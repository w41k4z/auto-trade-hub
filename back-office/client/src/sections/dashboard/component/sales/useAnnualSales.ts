import { useEffect, useState } from "react";
import { AnnualSales } from "../../type";
import { fetchAnnualSales } from "../../logic";

const useAnnualSales = (token: string) => {
  const [annualSales, setAnnualSales] = useState<AnnualSales[]>([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetchAnnualSales(setAnnualSales, token).then(() => setLoading(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { annualSales, loading };
};

export default useAnnualSales;
