import AnnualSales from "./AnnualSales";
import MonthlySales from "./MonthlySales";

const Sales = ({ token }: { token: string }) => {
  return (
    <>
      <MonthlySales token={token} />
      <AnnualSales token={token} className="mt-5" />
    </>
  );
};

export default Sales;
