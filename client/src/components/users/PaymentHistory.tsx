import { fetchHistoryPayment } from "../../features/payments/paymentsSlice";
import { PaymentHistory as PaymentHistoryType } from "../../features/payments/paymentsType";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { useEffect, useState } from "react";
import { formatMoney } from "../../utils/formatMoney";
import { io } from "socket.io-client";
const socket = io("http://localhost:4000");
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { fetchAddSecondHand } from "../../features/secondHand/secondHandSlice";
export const PaymentHistory = () => {
  const dispatch = useAppDispatch();
  const auth = useAppSelector((state) => state.auth.auth);
  const [paymentHistory, setPaymentHistory] = useState<PaymentHistoryType[]>(
    []
  );
  useEffect(() => {
    if (auth?.id) {
      dispatch(fetchHistoryPayment(auth.id)).then((res: any) => {
        setPaymentHistory(res.payload);
      });
      //join users
      socket.emit("join_user", { userId: auth.id });
    }
  }, [dispatch, auth]);
  useEffect(() => {
    socket.on(
      "receive_payment_status",
      (data: { paymentId: string; status: string }) => {
        setPaymentHistory((prev) => {
          return prev.map((item) => {
            if (item.id === data.paymentId) {
              return {
                ...item,
                status: data.status,
              };
            }
            return item;
          });
        });
      }
    );
  }, [paymentHistory]);

  const [showModal, setShowModal] = useState<boolean>(false);
  const [quantityToSell, setQuantityToSell]= useState<number>(0);
  const [paymentDetailIdToSell, setPaymentDetialIdToSell] = useState<string>('');
  const handleShowModalSell = (paymentDetailId: string) => {
    setShowModal(true);
    setPaymentDetialIdToSell(paymentDetailId);
  };
  const handleOnHideModal = () => {
    setShowModal(false);
  };
  const handleSell = () => {
    dispatch(fetchAddSecondHand({paymentDetailId: paymentDetailIdToSell, amount: quantityToSell})).then(()=>{
      setShowModal(false);
    })
  }
  return (
    <>
      <Modal show={showModal} onHide={handleOnHideModal}>
        <Modal.Header closeButton>
          <Modal.Title>Nhập số lượng sản phẩm muốn bán lại</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="singin-email-2"
                name="singin-email"
                onChange={(event)=>setQuantityToSell(parseInt(event.target.value))}
                required
              />
            </div>
          </form>
        {/* End .form-choice */}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={()=>setShowModal(false)} variant="secondary">Đóng</Button>
          <Button onClick={()=>handleSell()} variant="primary">Bán lại trên web</Button>
        </Modal.Footer>
      </Modal>
      <table className="table table-wishlist table-mobile">
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Số lượng</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {auth &&
            auth !== null &&
            paymentHistory &&
            paymentHistory.length > 0 &&
            paymentHistory.map((item) =>
              item.paymentDetails.map((itemm, index) => (
                <tr key={index}>
                  <td className="product-col">
                    <div className="product">
                      <figure className="product-media">
                        <a href="#">
                          <img
                            src="assets/images/products/table/product-1.jpg"
                            alt="Product image"
                          />
                        </a>
                      </figure>

                      <h3 className="product-title">
                        <a href="#">
                          {itemm.clothDetail.cloth.name}
                          <br />
                          {itemm.clothDetail.color.name}/
                          {itemm.clothDetail.size.name}
                        </a>
                      </h3>
                      {/* End .product-title */}
                    </div>
                    {/* End .product */}
                  </td>
                  <td className="price-col">
                    {formatMoney(itemm.amount * itemm.clothDetail.cloth.price)}đ
                  </td>
                  <td className="price-col">{itemm.amount}</td>
                  <td className="stock-col">
                    <span className="in-stock">
                      {item.status === "Khách đã nhận" ? (
                        <>
                          <div className="col-6 col-lg-4 col-xl-2">
                            <div className="btn-wrap">
                              <div
                                onClick={() => handleShowModalSell( itemm.id)}
                                className="btn btn-primary btn-round"
                              >
                                Bán lại
                              </div>
                            </div>
                          </div>
                        </>
                      ) : (
                        item.status
                      )}
                    </span>
                  </td>
                </tr>
              ))
            )}
        </tbody>
      </table>
    </>
  );
};
