import { useEffect, useState } from "react";
import { GlobalStat } from "../../type";
import { fetchGlobalStat } from "../../logic";

const useGlobalStat = (token: string) => {
  const [globalStat, setGlobalStat] = useState<GlobalStat>();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetchGlobalStat(setGlobalStat, token).then(() => setLoading(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { globalStat, loading };
};

export default useGlobalStat;
