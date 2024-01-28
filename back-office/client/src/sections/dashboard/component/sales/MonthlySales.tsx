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

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
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
      text: "Ventes mensuelles",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "Vente",
      data: [2000000, 1500000, 2800000, 2500000, 3000000, 6500000, 4500000],
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Revenue",
      data: [800000, 650000, 1200000, 1000000, 1500000, 3250000, 2250000],
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

const MonthlySales = ({ className = "" }: { className?: string }) => {
  return <Bar options={options} data={data} className={className} />;
};

export default MonthlySales;
