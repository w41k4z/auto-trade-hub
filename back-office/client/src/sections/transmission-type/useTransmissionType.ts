import { useEffect, useState } from "react";
import { TransmissionType } from "./type";
import { fetchData } from "./logic";

const useTransmissionType = () => {
  const [loading, setLoading] = useState(false);
  const [transmissionTypes, setTransmissionTypes] = useState<TransmissionType[]>([]);
  useEffect(() => {
    setLoading(true);
    fetchData((data: TransmissionType[]) => {
      setTransmissionTypes(data);
      setLoading(false);
    });
  }, []);

  return { loading, transmissionTypes };
};

export default useTransmissionType;
