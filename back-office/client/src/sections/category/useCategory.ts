import { useEffect, useState } from "react";
import { Category } from "./type";
import { fetchData } from "./logic";

const useCategory = () => {
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState<Category[]>([]);
  useEffect(() => {
    setLoading(true);
    fetchData((data: Category[]) => {
      setCategories(data);
      setLoading(false);
    });
  }, []);

  return { loading, categories };
};

export default useCategory;
