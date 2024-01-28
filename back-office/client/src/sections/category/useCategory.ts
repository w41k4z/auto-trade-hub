import { useEffect, useState } from "react";
import { Category } from "./type";
import { fetchData } from "./logic";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/features/User/selector";
import { RootState } from "../../redux/features/User/type";

const useCategory = () => {
  const user = useSelector((state: RootState) => selectUser(state));
  const token = user?.accessToken ? user?.accessToken : "";
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState<Category[]>([]);
  useEffect(() => {
    setLoading(true);
    fetchData((data: Category[]) => {
      setCategories(data);
      setLoading(false);
    }, token);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { loading, categories, token };
};

export default useCategory;
