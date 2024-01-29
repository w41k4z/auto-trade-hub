import { useSelector } from "react-redux";
import { selectUser } from "../../redux/features/User/selector";
import { RootState } from "../../redux/features/User/type";

const useDashboard = () => {
  const user = useSelector((state: RootState) => selectUser(state));
  const token = user?.accessToken ? user?.accessToken : "";

  return { token };
};

export default useDashboard;
