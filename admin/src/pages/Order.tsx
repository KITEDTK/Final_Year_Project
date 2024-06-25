import InfiniteScroll from "react-infinite-scroll-component";
import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { Payment, PaymentDetail } from "../features/payments/paymentTypes";
import {
  fetchAllPayments,
  fetchPaymentDetails,
  fetchQuantityPayment,
  fetchUpdatePaymentStatus,
} from "../features/payments/paymentSlice";
import { PaymentDetailModal } from "../components/payments/PaymentDetailModal";

import { io } from "socket.io-client";
const socket = io('http://localhost:4000');
export const Order = () => {
  const [page, setPage] = useState<number>(0);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const dispatch = useAppDispatch();
  const maxQuantity = useAppSelector((state) => state.payments.maxQuantity);
  const fetchMoreData = () => {
    setPage((prevPage) => prevPage + 1);
  };
  const [paymentItems, setPaymentItems] = useState<Payment[]>([]);
  const [paymentTypes, setPaymentTypes] = useState<string>("offlinePay");
  const handleButtonOnlinePay = () => {
    setPage(0);
    setHasMore(true);
    setPaymentTypes("onlinePay");
  };
  const handleButtonPayWhenReceived = () => {
    setPage(0);
    setHasMore(true);
    setPaymentTypes("offlinePay");
  };
  useEffect(() => {
    dispatch(fetchQuantityPayment(paymentTypes));
  }, [paymentTypes, dispatch]);
  useEffect(() => {
    dispatch(fetchAllPayments({ page: page, payType: paymentTypes })).then(
      (res: any) => {
        if (page === 0) {
          setPaymentItems(res.payload);
        } else {
          setPaymentItems((prev) => [...prev, ...res.payload]);
        }
      }
    );
  }, [page, paymentTypes, dispatch]);
  useEffect(() => {
    if (paymentItems.length === maxQuantity) {
      setHasMore(false);
    }
  }, [paymentItems, maxQuantity]);

  const [showDetailModal, setShowDetailModal] = useState<boolean>();
  const [paymentDetails, setPaymentDetails] = useState<PaymentDetail[]>([]);
  const handleOnClickShowModal = (paymentId: string) => {
    setShowDetailModal(true);
    dispatch(fetchPaymentDetails(paymentId)).then((res: any) => {
      setPaymentDetails(res.payload);
    });
  };
  const handleOnClickCloseModal = () => {
    setShowDetailModal(false);
  };
  const subStatuses = ["Duyệt đơn", "Vận chuyển", "Khách đã nhận"];
  const statuses = [
    "Chưa duyệt đơn",
    "Đã duyệt đơn",
    "Đang vận chuyển",
    "Khách đã nhận",
  ];
  const getNextStatus = (currentStatus: string) => {
    const currentStatusIndex = statuses.indexOf(currentStatus);
    return subStatuses[currentStatusIndex];
  };

  const handleOnClickChangeStatus = async (paymentId: string) => {
    const updatedItems = await Promise.all(
      paymentItems.map(async(item)=>{
        if (item.id === paymentId) {
          const nextStatusIndex = statuses.indexOf(item.status) + 1;
          const nextStatus = statuses[nextStatusIndex];
          socket.emit('update_payment_status', {paymentId: paymentId, userId: item.userId, status: nextStatus});
          await dispatch(fetchUpdatePaymentStatus({paymentId: paymentId, status: nextStatus}));
          return { ...item, status: nextStatus };
        }
        return item;
      })
    );
    setPaymentItems(updatedItems);
  };
  return (
    <>
      <section className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">
                    Bảng Hóa đơn /{" "}
                    {(paymentTypes === "onlinePay" && (
                      <>Khách hàng thanh toán online</>
                    )) ||
                      (paymentTypes === "offlinePay" && (
                        <>Khách hàng thanh toán khi nhận hàng</>
                      ))}
                  </h3>
                </div>
                <div className="card-body" style={{ minHeight: "101vh" }}>
                  <div
                    style={{
                      display: "flex",
                      gap: "10px",
                      justifyContent: "flex-end",
                      alignItems: "flex-end",
                    }}
                  >
                    <button
                      type="button"
                      onClick={handleButtonOnlinePay}
                      className="btn btn-block btn-success"
                      style={{
                        width: "20%",
                        height: "100%",
                        flex: "0 0 auto", // Thiết lập flex-grow, flex-shrink, và flex-basis cho nút thứ hai
                      }}
                    >
                      Khách hàng thanh toán online
                    </button>
                    <button
                      type="button"
                      onClick={handleButtonPayWhenReceived}
                      className="btn btn-block btn-success"
                      style={{
                        width: "25%",
                        height: "100%",
                        flex: "0 0 auto", // Thiết lập flex-grow, flex-shrink, và flex-basis cho nút thứ ba
                      }}
                    >
                      Khách hàng thanh toán khi nhận hàng
                    </button>
                  </div>

                  <br />
                  <InfiniteScroll
                    dataLength={paymentItems.length}
                    next={fetchMoreData}
                    hasMore={hasMore}
                    loader={<h4>Loading...</h4>}
                    endMessage={
                      <p style={{ textAlign: "center" }}>
                        <b>Đã hết dữ liệu để xem</b>
                      </p>
                    }
                  >
                    <table
                      id="clothes-table"
                      className="table table-bordered table-hover"
                    >
                      <thead>
                        <tr>
                          <th>STT</th>
                          <th>Tên khách hàng</th>
                          <th>email</th>
                          <th>Số điện thoại</th>
                          <th>Địa chỉ</th>
                          <th>Tổng tiền hàng</th>
                          <th>Trạng thái</th>
                          <th>Xem/Cập nhật trạng thái</th>
                        </tr>
                      </thead>
                      <tbody>
                        {paymentItems &&
                          paymentItems.length > 0 &&
                          paymentItems.map((item, index) => (
                            <>
                              <tr key={item.id}>
                                <td>{index + 1}</td>
                                <td>{item.fullname}</td>
                                <td>{item.email}</td>
                                <td>{item.phoneNumber}</td>
                                <td>{item.address}</td>
                                <td>{item.total}</td>
                                <td>{item.status}</td>
                                <td>
                                  <button
                                    onClick={() =>
                                      handleOnClickShowModal(item.id)
                                    }
                                    type="button"
                                    className="btn btn-block btn-outline-info"
                                  >
                                    Xem
                                  </button>
                                  {item.status !== "Khách đã nhận" && (
                                    <button
                                      type="button"
                                      onClick={() =>
                                        handleOnClickChangeStatus(item.id)
                                      }
                                      className="btn btn-block btn-outline-danger"
                                    >
                                      {getNextStatus(item.status)}
                                    </button>
                                  )}
                                </td>
                              </tr>
                            </>
                          ))}
                      </tbody>
                    </table>
                  </InfiniteScroll>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {showDetailModal === true && (
        <PaymentDetailModal
          show={showDetailModal}
          handleOnClickCloseModal={handleOnClickCloseModal}
          paymentDetails={paymentDetails}
        />
      )}
    </>
  );
};
