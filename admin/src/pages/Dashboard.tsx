import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { useAppDispatch } from "../store/hooks";
import { fetchPaymentPrice, fetchInitPrice } from "../features/statistiscal/statististicalSlice";
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
  const dispatch = useAppDispatch();
  const [paymentPrice, setPaymentPrice] = useState<number[]>([]);
  const [initPrice, setInitPrice] = useState<number[]>([]);
  useEffect(() => {
    const fetchAllInitPrices = async () => {
      const prices = [];
      for (let i = 1; i < 13; i++) {
        const res = await dispatch(fetchInitPrice({ year: 2024, month: i })).then((res: any)=>{
          return res.payload;
        });
        prices.push(res);
      }
      setInitPrice(prices);
    };
  
    fetchAllInitPrices();
  }, [dispatch]); 
  useEffect(() => {
    const fetchAllPaymentPrices = async () => {
      const prices = [];
      for (let i = 1; i < 13; i++) {
        const res = await dispatch(fetchPaymentPrice({ year: 2024, month: i })).then((res: any)=>{
          return res.payload;
        });
        prices.push(res);
      }
      setPaymentPrice(prices);
    };
  
    fetchAllPaymentPrices();
  }, [dispatch]); 
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
        data: initPrice,
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Tiền hàng bán",
        data: paymentPrice,
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
