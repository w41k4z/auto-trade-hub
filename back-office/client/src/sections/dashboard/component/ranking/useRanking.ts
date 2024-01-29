import { useState } from "react";

const useRanking = () => {
  const [month, setMonth] = useState<number>(new Date().getMonth() + 1);
  const [year, setYear] = useState<number>(new Date().getFullYear());

  return { month, year, setMonth, setYear };
};

export default useRanking;
