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

const labels = [
  "Tháng 1",
  "Tháng 2",
  "Tháng 3",
  "Tháng 4",
  "Tháng 5",
  "Tháng 6",
  "Tháng 7",
  "Tháng 8",
  "Tháng 9",
  "Tháng 10",
  "Tháng 11",
  "Tháng 12",
];

export const Dashboard = () => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Bảng thống kê doanh thu năm 2024",
      },
    },
  };
  const data = {
    labels,
    datasets: [
      {
        label: "Tiền hàng nhập",
        data: [2, "2", "3", "4", "5", "6", "7"],
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Tiền hàng bán",
        data: ["1", "2", "3", "4", "5", "6", "7"],
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };
  return (
    <>
      <Bar options={options} data={data} />
      <Bar options={options} data={data} />
    </>
  );
};
