import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import useBrandRanking from "./useBrandRanking";

ChartJS.register(ArcElement, Tooltip, Legend);

const Brand = ({
  className,
  token,
  month,
  year,
}: {
  className?: string;
  token: string;
  month: number;
  year: number;
}) => {
  const { brandRanking, loading } = useBrandRanking(token, month, year);

  let brands: string[] = [];
  let soldCounts: number[] = [];
  brandRanking.forEach((brand, index) => {
    if (index < 5) {
      brands.push(brand.brandName);
      soldCounts.push(brand.soldCount);
    }
  });

  const data = {
    labels: brands,
    datasets: [
      {
        label: "# de Ventes",
        data: soldCounts,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className={`card table-card ${className}`}>
      {loading ? (
        <div className="card-header">
          <h5>Loading...</h5>
        </div>
      ) : (
        <>
          <div className="card-header">
            <h5>Top 5 marques</h5>
          </div>
          <div className="card-block">
            <Pie data={data} />
          </div>
        </>
      )}
    </div>
  );
};

export default Brand;
