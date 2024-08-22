import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useEffect, useState, useCallback } from "react";
import { Bar } from "react-chartjs-2";
import { useAppDispatch } from "../store/hooks";
import _ from "lodash";
import {
  fetchPaymentPrice,
  fetchInitPrice,
} from "../features/statistiscal/statististicalSlice";
import { formatMoney } from "../../../client/src/utils/formatMoney";
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
  const [yearToStats, setYearToStats] = useState<number>(2024);
  useEffect(() => {
    const fetchAllInitPrices = async () => {
      const prices = [];
      for (let i = 1; i < 13; i++) {
        const res = await dispatch(
          fetchInitPrice({ year: yearToStats, month: i })
        ).then((res: any) => {
          return res.payload;
        });
        prices.push(res);
      }
      setInitPrice(prices);
    };

    fetchAllInitPrices();
  }, [dispatch, yearToStats]);
  useEffect(() => {
    const fetchAllPaymentPrices = async () => {
      const prices = [];
      for (let i = 1; i < 13; i++) {
        const res = await dispatch(
          fetchPaymentPrice({ year: yearToStats, month: i })
        ).then((res: any) => {
          return res.payload;
        });
        prices.push(res);
      }
      setPaymentPrice(prices);
    };

    fetchAllPaymentPrices();
  }, [dispatch, yearToStats]);
  const totalInitPrice = initPrice.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);
  const totalPaymentPrice = paymentPrice.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);
  const handleOnChangeYear = (data: number) => {
    debouncedSearch(data);
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedSearch = useCallback(
    _.debounce((year) => {
      setYearToStats(year);
    }, 300),
    [dispatch]
  );

  useEffect(() => {
    return () => {
      debouncedSearch.cancel();
    };
  }, [debouncedSearch]);
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Bảng thống kê doanh thu năm " + yearToStats,
      }, 
    },
  };
  const data = {
    labels,
    datasets: [
      {
        label: "Tổng tiền hàng nhập: " + formatMoney(totalInitPrice) + "đ",
        data: initPrice,
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Tổng tiền hàng bán: " + formatMoney(totalPaymentPrice) + "đ",
        data: paymentPrice,
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };
  return (
    <>
      <h5>Nhập năm bạn muốn thống kê</h5>
      <input
        type="text"
        className="form-control"
        onChange={(event) => handleOnChangeYear(parseInt(event.target.value))}
        style={{ width: 200 }}
      />
      <Bar options={options} data={data} />
    </>
  );
};
