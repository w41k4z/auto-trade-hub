import AnnualSales from "./AnnualSales";
import MonthlySales from "./MonthlySales";

const Sales = () => {
  return (
    <>
      <MonthlySales />
      <AnnualSales className="mt-5" />
    </>
  );
};

export default Sales;
