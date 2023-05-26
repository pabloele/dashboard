import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
  Title,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
  Title
);

const BarChart = () => {
  const [chartData, setChartData] = useState({ datasets: [] });
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    setChartData({
      labels: ["L", "M", "Mi", "J", "V", "S", "D"],
      datasets: [
        {
          label: "Ventas $",
          data: [18000, 22000, 19400, 24180, 22500, 10000, 15000],
          borderColor: "rgb(53,162,235)",
          backgroundColor: "rgb(53,162,235,0.4)",
        },
      ],
    });
    setChartOptions({
      plugins: {
        legend: {
          position: "top",
        },
        title: {
          display: true,
          text: "Ingresos diarios",
        },
        mantainAspectRatio: false,
        responsive: true,
      },
    });
  }, []);
  return (
    <>
      <div className="w-full md:col-span-2 lg:h-[70vh] h-[50vh] m-auto p-4 rouded-lg bg-white">
        <Bar data={chartData} options={chartOptions} />
      </div>
    </>
  );
};

export default BarChart;
