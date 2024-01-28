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

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
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

const labels = ["2021", "2022", "2023", "2024"];

export const data = {
  labels,
  datasets: [
    {
      label: "Vente",
      data: [4000000, 7500000, 8800000, 2500000],
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Revenue",
      data: [1600000, 3250000, 4400000, 1000000],
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

const AnnualSales = ({ className = "" }: { className?: string }) => {
  return <Line options={options} data={data} className={className} />;
};

export default AnnualSales;
