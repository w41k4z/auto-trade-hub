import { useEffect, useState } from "react";
import { TransmissionType } from "./type";
import { fetchData } from "./logic";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/features/User/selector";
import { RootState } from "../../redux/features/User/type";

const useTransmissionType = () => {
  const user = useSelector((state: RootState) => selectUser(state));
  const token = user?.accessToken ? user?.accessToken : "";
  const [loading, setLoading] = useState(false);
  const [transmissionTypes, setTransmissionTypes] = useState<
    TransmissionType[]
  >([]);
  useEffect(() => {
    setLoading(true);
    fetchData((data: TransmissionType[]) => {
      setTransmissionTypes(data);
      setLoading(false);
    }, token);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { loading, transmissionTypes, token };
};

export default useTransmissionType;
