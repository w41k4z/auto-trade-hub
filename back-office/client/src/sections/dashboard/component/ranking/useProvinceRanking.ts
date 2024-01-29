import { useEffect, useState } from "react";
import { ProvinceRanking } from "../../type";
import { fetchProvinceRanking } from "../../logic";

const useProvinceRanking = (token: string, month: number, year: number) => {
  const [provinceRanking, setProvinceRanking] = useState<ProvinceRanking[]>([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetchProvinceRanking(setProvinceRanking, token, year, month).then(() =>
      setLoading(false)
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { provinceRanking, loading };
};

export default useProvinceRanking;
