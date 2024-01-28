import axios from "../../axios";
import { Announcement } from "./type";

const originEndPoint = "/api/v1/provinces";

export const fetchData = async (
  callBack: (data: Announcement[]) => void,
  token: string
) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  await axios
    .get(originEndPoint, config)
    .then((response) => {
      const resp = response.data;
      if (resp.status === 200) {
        callBack(resp.payload);
      } else {
        alert(resp.message);
      }
    })
    .catch((error) => {
      alert(error);
    });
};
