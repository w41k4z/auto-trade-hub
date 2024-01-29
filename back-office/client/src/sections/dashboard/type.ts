export type GlobalStat = {
  totalSales: number;
  totalCommissions: number;
  usersCount: number;
  pendingAnnouncementCount: number;
};

export type AnnualSales = {
  year: number;
  totalSales: number;
  totalCommissions: number;
};

export type MonthlySales = {
  month: number;
  totalSales: number;
  totalCommissions: number;
  year: number;
};

export type BrandRanking = {
  brandId: number;
  brandName: string;
  soldCount: number;
  totalSales: number;
  totalCommissions: number;
  month: number;
  year: number;
};

export type ProvinceRanking = {
  provinceId: number;
  provinceName: string;
  soldCount: number;
  totalSales: number;
  totalCommissions: number;
  month: number;
  year: number;
};
