import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["Toyota", "Renault", "Mercedes-Benz", "Mitsubishi", "Citroen"],
  datasets: [
    {
      label: "# de Ventes",
      data: [2503, 1520, 900, 509, 204],
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

const Brand = ({ className }: { className?: string }) => {
  return (
    <div className={`card table-card ${className}`}>
      <div className="card-header">
        <h5>Top 5 marques</h5>
      </div>
      <div className="card-block">
        <Pie data={data} />
      </div>
    </div>
  );
};

export default Brand;
