import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import useMonthlySales from "./useMonthlySales";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
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
      text: "Ventes mensuelles",
    },
  },
};

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "Novembre",
  "December",
];

const MonthlySales = ({
  className = "",
  token,
}: {
  className?: string;
  token: string;
}) => {
  const { monthlySales, loading } = useMonthlySales(token);

  const data = {
    months,
    datasets: [
      {
        label: "Vente",
        data: monthlySales?.map((sale) => sale.totalSales) || [],
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Revenue",
        data: monthlySales?.map((sale) => sale.totalCommissions) || [],
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  return (
    <>
      {loading ? (
        <div className="text-center">Loading...</div>
      ) : (
        <Bar options={options} data={data} className={className} />
      )}
    </>
  );
};

export default MonthlySales;
