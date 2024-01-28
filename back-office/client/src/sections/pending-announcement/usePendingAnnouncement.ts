import { useEffect, useState } from "react";
import { Announcement } from "./type";
import { fetchData } from "./logic";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/features/User/type";
import { selectUser } from "../../redux/features/User/selector";

const usePendingAnnouncement = () => {
  const user = useSelector((state: RootState) => selectUser(state));
  const token = user?.accessToken ? user?.accessToken : "";
  const [loading, setLoading] = useState(false);
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  useEffect(() => {
    setLoading(true);
    fetchData(setAnnouncements, token).then(() => {
      setLoading(false);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { loading, announcements };
};

export default usePendingAnnouncement;
