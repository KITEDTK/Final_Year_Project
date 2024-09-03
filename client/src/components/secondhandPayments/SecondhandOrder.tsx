import { useEffect, useState } from "react";
import { fetchAdd2handPayment } from "../../features/secondhandPayments/secondhandPaymentsSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { showToast } from "../../utils/showToast";
import { io } from "socket.io-client";
import { SecondHand } from "../../features/secondHand/secondHandTypes";
import { fetchAllItemsSecondhand } from "../../features/secondHand/secondHandSlice";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { formatMoney } from "../../utils/formatMoney";
const socket = io("http://localhost:4000");
export const SecondhandOrder = () => {
  const auth = useAppSelector((state) => state.auth.auth);
  const dispatch = useAppDispatch();
  const local2handCarts = useAppSelector(
    (state) => state.secondHandCart.local2handCarts
  );
  const auth2handCarts = useAppSelector(
    (state) => state.secondHandCart.secondhandCarts
  );
  const [showModal, setShowModal] = useState<boolean>(false);
  const [allSecondhandItems, setAllSecondhandItems] = useState<SecondHand[]>(
    []
  );
  useEffect(() => {
    dispatch(fetchAllItemsSecondhand()).then((res: any) => {
      setAllSecondhandItems(res.payload);
    });
  }, [dispatch]);
  const handleOnHideModal = () => {
    setShowModal(false);
  };
  const handleOnClickCreatePayment = () => {
    dispatch(fetchAllItemsSecondhand())
      .then((res: any) => {
        setAllSecondhandItems(res.payload);
      })
      .then(() => {
        if (auth && auth !== null) {
          let validCart: boolean = true;
          const secondhandCartInfo = auth2handCarts
            .map((item) => {
              const checkAmount = allSecondhandItems.find(
                (itemm) => itemm.id === item.seconHands.id
              )?.amount;
              if (checkAmount && checkAmount < item.amount) {
                setShowModal(true);
                validCart = false; // Mark as invalid if any item doesn't meet the condition
                return null;
              } else {
                return {
                  secondhandId: item.seconHands.id,
                  amount: item.amount,
                  price: 0,
                };
              }
            })
            .filter((item) => item !== null);
          if (validCart) {
            const secondhandSellerIds = auth2handCarts.map((item) => {
              return item.seconHands.wardrobe.userId;
            });
            dispatch(
              fetchAdd2handPayment({
                buyerId: auth.id,
                address: "Ha Noi",
                buyerName: auth.fullname,
                phoneNumber: auth.phoneNumber,
                status: "Chưa thanh toán",
                secondhandCartInfo: secondhandCartInfo,
              })
            ).then(() => {
              showToast("Bạn đã đặt hàng thành công", "success");
              secondhandSellerIds.forEach((item) => {
                socket.emit("join_user_being_ordered_item", { sellerId: item });
              });
              window.location.href = "http://localhost:3000/secondhand";
            });
          } else {
            showToast("Vui lòng đăng nhập để sử dụng chức năng này", "info");
          }
        }
      });
  };
  const handleChooseChange = (option: boolean) => {
    if (option === false) {
      setShowModal(false);
    } else {
      dispatch(fetchAllItemsSecondhand())
        .then((res: any) => {
          setAllSecondhandItems(res.payload);
        })
        .then(() => {
          if (auth && auth !== null) {
            const secondhandCartInfo = auth2handCarts.map((item) => {
              const checkAmount = allSecondhandItems.find(
                (itemm) => itemm.id === item.seconHands.id
              )?.amount;
              if (checkAmount && checkAmount < item.amount) {
                return {
                  secondhandId: item.seconHands.id,
                  amount: checkAmount,
                  price: item.seconHands.price,
                };
              } else {
                return {
                  secondhandId: item.seconHands.id,
                  amount: item.amount,
                  price: item.seconHands.price,
                };
              }
            });
            const secondhandSellerIds = auth2handCarts.map((item) => {
              return item.seconHands.wardrobe.userId;
            });
            dispatch(
              fetchAdd2handPayment({
                buyerId: auth.id,
                address: "Ha Noi",
                buyerName: auth.fullname,
                phoneNumber: auth.phoneNumber,
                status: "Chưa thanh toán",
                secondhandCartInfo: secondhandCartInfo,
              })
            ).then(() => {
              showToast("Bạn đã đặt hàng thành công", "success");
              secondhandSellerIds.forEach((item) => {
                socket.emit("join_user_being_ordered_item", { sellerId: item });
              });
              //window.location.href = "http://localhost:3000/secondhand";
            });
          } else {
            showToast("Vui lòng đăng nhập để sử dụng chức năng này", "info");
          }
        });
    }
  };
  const sumPrice = auth2handCarts.reduce(
    (accumulator, currentValue) => accumulator + (currentValue.amount * currentValue.seconHands.price),
    0,
  );
  return (
    <>
      <Modal show={showModal} onHide={handleOnHideModal}>
        <Modal.Header closeButton>
          <Modal.Title>Nhập số lượng sản phẩm muốn bán lại</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="form-group">
              Sản phẩm trong giỏ hàng đang không đủ số lượng. Bạn có muốn cập
              nhật lại số lượng và đặt hàng không ?
            </div>
          </form>
          {/* End .form-choice */}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => handleChooseChange(true)} variant="secondary">
            Đồng ý
          </Button>
          <Button onClick={() => handleChooseChange(false)} variant="primary">
            Hủy
          </Button>
        </Modal.Footer>
      </Modal>
      <aside className="col-lg-3">
        <div className="summary">
          <h3 className="summary-title">Hóa đơn của bạn</h3>
          {/* End .summary-title */}

          {auth && auth !== null && auth2handCarts ? (
            <table className="table table-summary">
              <thead>
                <tr>
                  <th>Sản phẩm</th>
                  <th>Tổng</th>
                </tr>
              </thead>

              <tbody>
                {auth2handCarts.map((item) => {
                  return (
                    <>
                      <tr>
                        <td>
                          <a href="#">
                            {item.seconHands.wardrobe.clothDetails.cloth.name}
                          </a>
                          <br />
                          <a href="#">
                            {item.seconHands.wardrobe.clothDetails.color.name}/
                            {item.seconHands.wardrobe.clothDetails.size.name} x {item.amount}
                          </a>
                        </td>
                        <td>{formatMoney(item.seconHands.price * item.amount)} đ</td>
                      </tr>
                    </>
                  );
                })}
                <tr className="summary-subtotal">
                  <td>Tổng giỏ hàng:</td>
                  <td>{formatMoney(sumPrice)}đ</td>
                </tr>
                {/* End .summary-subtotal */}.
                <tr className="summary-total">
                  <td>Tổng hóa đơn:</td>
                  <td>{formatMoney(sumPrice)}đ</td>
                </tr>
                {/* End .summary-total */}
              </tbody>
            </table>
          ) : (
            <table className="table table-summary">
              <thead>
                <tr>
                  <th>Sản phẩm</th>
                  <th>Tổng</th>
                </tr>
              </thead>

              <tbody>
                {local2handCarts &&
                  local2handCarts.items.map((item) => {
                    return (
                      <>
                        <tr>
                          <td>
                            <a href="#">{item.clothName}</a>
                            <br />
                            <a href="#">
                              {item.color}/{item.size}
                            </a>
                          </td>
                          <td>$84.00</td>
                        </tr>
                      </>
                    );
                  })}
                <tr className="summary-subtotal">
                  <td>Subtotal:</td>
                  <td>$160.00</td>
                </tr>
                {/* End .summary-subtotal */}
                <tr>
                  <td>Shipping:</td>
                  <td>Free shipping</td>
                </tr>
                <tr className="summary-total">
                  <td>Total:</td>
                  <td>$160.00</td>
                </tr>
                {/* End .summary-total */}
              </tbody>
            </table>
          )}

          {/* End .table table-summary */}

          {/* End .accordion */}

          <button
            type="button"
            onClick={() => {
              handleOnClickCreatePayment();
            }}
            className="btn btn-outline-primary-2 btn-order btn-block"
          >
            <span className="btn-text">Place Order</span>
            <span className="btn-hover-text">Proceed to Checkout</span>
          </button>
        </div>
        {/* End .summary */}
      </aside>
      {/* End .col-lg-3 */}
    </>
  );
};
