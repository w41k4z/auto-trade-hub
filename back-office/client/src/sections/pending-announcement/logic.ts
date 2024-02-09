import axios from "../../axios";
import { Announcement } from "./type";

const originEndPoint = "/api/v1/announcement";

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

export const acceptAnnouncement = async (
  id: string,
  announcements: Announcement[],
  callBack: (data: Announcement[]) => void,
  token: string
) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  await axios
    .put(`${originEndPoint}/accept/${id}`, {}, config)
    .then((response) => {
      const resp = response.data;
      if (resp.status === 200) {
        const newAnnouncements = announcements.filter(
          (announcement) => announcement.id.toString() !== id
        );
        callBack(newAnnouncements);
      } else {
        alert(resp.message);
      }
    })
    .catch((error) => {
      alert(error);
    });
};

export const rejectAnnouncement = async (
  id: string,
  announcements: Announcement[],
  callBack: (data: Announcement[]) => void,
  token: string
) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  await axios
    .put(`${originEndPoint}/reject/${id}`, {}, config)
    .then((response) => {
      const resp = response.data;
      if (resp.status === 200) {
        const newAnnouncements = announcements.filter(
          (announcement) => announcement.id.toString() !== id
        );
        callBack(newAnnouncements);
      } else {
        alert(resp.message);
      }
    })
    .catch((error) => {
      alert(error);
    });
};
