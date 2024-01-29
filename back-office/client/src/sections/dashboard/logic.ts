import axios from "../../axios";
import {
  AnnualSales,
  ProvinceRanking,
  BrandRanking,
  GlobalStat,
  MonthlySales,
} from "./type";

const originEndPoint = "/api/v1/stats";

export const fetchGlobalStat = async (
  callBack: (data: GlobalStat) => void,
  token: string
) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  await axios
    .get(originEndPoint + "/global", config)
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

export const fetchAnnualSales = async (
  callBack: (data: AnnualSales[]) => void,
  token: string
) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  await axios
    .get(originEndPoint + "/annual-sales", config)
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

export const fetchMonthlySales = async (
  callBack: (data: MonthlySales[]) => void,
  token: string
) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  await axios
    .get(originEndPoint + "/monthly-sales", config)
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

export const fetchProvinceRanking = async (
  callBack: (data: ProvinceRanking[]) => void,
  token: string,
  year: number,
  month: number
) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  await axios
    .post(
      originEndPoint + "/province-ranking",
      {
        year: year,
        month: month,
      },
      config
    )
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

export const fetchBrandRanking = async (
  callBack: (data: BrandRanking[]) => void,
  token: string,
  year: number,
  month: number
) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  await axios
    .post(
      originEndPoint + "/brand-ranking",
      {
        year: year,
        month: month,
      },
      config
    )
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
