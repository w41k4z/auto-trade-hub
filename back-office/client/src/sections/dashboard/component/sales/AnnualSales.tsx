import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import useAnnualSales from "./useAnnualSales";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Ventes annuelles",
    },
  },
};

const AnnualSales = ({
  className = "",
  token,
}: {
  className?: string;
  token: string;
}) => {
  const { annualSales, loading } = useAnnualSales(token);

  const data = {
    labels: annualSales?.map((sale) => sale.year) || [],
    datasets: [
      {
        label: "Vente",
        data: annualSales?.map((sale) => sale.totalSales) || [],
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Revenue",
        data: annualSales?.map((sale) => sale.totalCommissions) || [],
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  return (
    <>
      {loading ? (
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : (
        <Line options={options} data={data} className={className} />
      )}
    </>
  );
};

export default AnnualSales;
