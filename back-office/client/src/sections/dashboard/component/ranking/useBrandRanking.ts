import { useEffect, useState } from "react";
import { BrandRanking } from "../../type";
import { fetchBrandRanking } from "../../logic";

const useBrandRanking = (token: string, month: number, year: number) => {
  const [brandRanking, setBrandRanking] = useState<BrandRanking[]>([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetchBrandRanking(setBrandRanking, token, year, month).then(() =>
      setLoading(false)
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [month, year]);

  return { brandRanking, loading };
};

export default useBrandRanking;
