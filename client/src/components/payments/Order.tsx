import { useAppSelector } from "../../store/hooks";
import { formatMoney } from "../../utils/formatMoney";
import { useEffect, useState } from "react";
import { useAppDispatch } from "../../store/hooks";
import { fetchPaybyVNPAY, fetchPayWhenReceive } from "../../features/payments/paymentsSlice";
import { showToast } from "../../utils/showToast";
interface clothDetailItem {
  id: string;
  amount: number;
}
export const Order = () => {
  const dispatch = useAppDispatch();
  const auth = useAppSelector((state) => state.auth.auth);
  const authCart = useAppSelector((state) => state.carts.carts);
  const localCart = useAppSelector((state) => state.carts.localCarts);
  const [authTotalPrice, setAuthTotalPrice] = useState<number>(0);
  const [paymentType, setPaymentType] = useState<string>('vnpay'); 
  const localPaymentInfo = useAppSelector(
    (state) => state.payments.localPaymentInfo
  );
  const handleChoosePaymentType = (type: string) =>{
    setPaymentType(type);
    if(type === paymentType){
      setPaymentType('');
    }
  }
  const handleSubmitButton = async () => {
    if (auth && auth !== null) {
      const authClothDetail: clothDetailItem[] = authCart.map((item) => {
        return {
          id: item.clothDetailId,
          amount: item.amount,
        };
      });
      if(paymentType === 'vnpay'){
        dispatch(
          fetchPaybyVNPAY({
            userId: auth.id,
            total: authTotalPrice,
            address: "Hà Nội",
            email: auth.email,
            phoneNumber: auth.phoneNumber,
            fullName: auth.fullname,
            clothDetail: authClothDetail,
          })
        );
      }
      else if(paymentType === 'pay_when_receive'){
        dispatch(
          fetchPayWhenReceive({
            userId: auth.id,
            total: authTotalPrice,
            address: "Hà Nội",
            email: auth.email,
            phoneNumber: auth.phoneNumber,
            fullName: auth.fullname,
            clothDetail: authClothDetail,
          })
        ).then((res)=>{
          window.location.href = res.payload; 
      });
      }else if(paymentType === ''){
        showToast('Vui lòng chọn kiểu thanh toán','error');
      }
    } else {
      const hasEmptyField = Object.values(localPaymentInfo).some(
        (value) => value === ""
      );
      if (hasEmptyField) {
        showToast("Vui lòng điền đủ thông tin cá nhân", "error");
      } else {
        const localClothDetail: clothDetailItem[] = localCart.items.map(
          (item) => {
            return {
              id: item.clothDetailId,
              amount: item.amount,
            };
          }
        );
        if(paymentType === 'vnpay'){
          dispatch(
            fetchPaybyVNPAY({
              total: localCart.totalPrice,
              ...localPaymentInfo,
              clothDetail: localClothDetail,
            })
          );
        }else if(paymentType === 'pay_when_receive'){
          dispatch(
            fetchPayWhenReceive({
              total: localCart.totalPrice,
              ...localPaymentInfo,
              clothDetail: localClothDetail,
            })
          ).then((res)=>{
              window.location.href = res.payload; 
          });
        }else if(paymentType === ''){
          showToast('Vui lòng chọn kiểu thanh toán','error');
        }
      }
    }
  };

  useEffect(() => {
    if (auth && authCart) {
      const totalPrice: number = authCart.reduce(
        (accumulator, currentValue) =>
          accumulator +
          currentValue.amount * currentValue.clothDetails.cloth.price,
        0
      );
      setAuthTotalPrice(totalPrice);
    } else {
      setAuthTotalPrice(0);
    }
  }, [auth, authCart]);
  return (
    <>
      <aside className="col-lg-3">
        <div className="summary">
          <h3 className="summary-title">Hóa đơn của bạn</h3>
          <table className="table table-summary">
            <thead>
              <tr>
                <th>Sản phẩm</th>
                <th>Total</th>
              </tr>
            </thead>
            {auth && auth !== null && authCart ? (
              <tbody>
                {authCart.map((item) => (
                  <>
                    <tr>
                      <td>
                        <a href="#">{item.clothDetails.cloth.name}</a>
                        <div>
                          {item.clothDetails.color.name}/
                          {item.clothDetails.size.name}
                        </div>
                        <div>
                          {item.amount} x{" "}
                          {formatMoney(item.clothDetails.cloth.price)}đ
                        </div>
                      </td>
                      <td>
                        {formatMoney(
                          item.amount * item.clothDetails.cloth.price
                        )}
                        đ
                      </td>
                    </tr>
                  </>
                ))}
                <tr className="summary-subtotal">
                  <td>Tổng giỏ hàng:</td>
                  <td>{formatMoney(authTotalPrice)}đ</td>
                </tr>
                {/* End .summary-subtotal */}
                <tr>
                  <td>Shipping:</td>
                  <td>Free shipping</td>
                </tr>
                <tr className="summary-total">
                  <td>Tổng hóa đơn:</td>
                  <td>{formatMoney(authTotalPrice)}đ</td>
                </tr>
                {/* End .summary-total */}
              </tbody>
            ) : (
              <tbody>
                {localCart &&
                  localCart.items &&
                  localCart.items.length > 0 &&
                  localCart.items.map((item) => (
                    <>
                      <tr>
                        <td>
                          <a href="#">{item.clothesName}</a>
                          <div>
                            {item.colorName}/{item.sizeName}
                          </div>
                          <div>
                            {item.amount} x{formatMoney(item.price)}đ
                          </div>
                        </td>
                        <td>{formatMoney(item.amount * item.price)}đ</td>
                      </tr>
                    </>
                  ))}

                <tr className="summary-subtotal">
                  <td>Subtotal:</td>
                  <td>{formatMoney(localCart.totalPrice)}đ</td>
                </tr>
                {/* End .summary-subtotal */}
                <tr>
                  <td>Shipping:</td>
                  <td>Free shipping</td>
                </tr>
                <tr className="summary-total">
                  <td>Total:</td>
                  <td>{formatMoney(localCart.totalPrice)}đ</td>
                </tr>
                {/* End .summary-total */}
              </tbody>
            )}
          </table>
          <div className="accordion-summary" id="accordion-payment">
            <div className="card">
              <div className="card-header" id="heading-1">
                <h2 className="card-title">
                  <a
                    onClick={()=>handleChoosePaymentType('vnpay')}
                    role="button"
                    data-toggle="collapse"
                    href="#collapse-1"
                    aria-expanded={paymentType === 'vnpay' ? true : false}
                    aria-controls="collapse-1"
                  >
                    Thanh toán online
                  </a>
                </h2>
              </div>
              {/* End .card-header */}
              <div
                id="collapse-1"
                className="collapse show"
                aria-labelledby="heading-1"
                data-parent="#accordion-payment"
              >
                <div className="card-body">
                  Thanh toán qua cổng thông tin VNpay
                </div>
                {/* End .card-body */}
              </div>
              {/* End .collapse */}
            </div>
            {/* End .card */}

            <div className="card">
              <div className="card-header" id="heading-2">
                <h2 className="card-title">
                  <a
                  onClick={()=>handleChoosePaymentType('pay_when_receive')}
                    className="collapsed"
                    role="button"
                    data-toggle="collapse"
                    href="#collapse-2"
                    aria-expanded={paymentType === 'pay_when_receive' ? true : false}
                    aria-controls="collapse-2"
                  >
                    Thanh toán khi nhận hàng
                  </a>
                </h2>
              </div>
              {/* End .card-header */}
              <div
                id="collapse-2"
                className="collapse"
                aria-labelledby="heading-2"
                data-parent="#accordion-payment"
              >
                <div className="card-body">
                  Vui lòng điền đúng và đầy đủ thông tin 
                </div>
                {/* End .card-body */}
              </div>
              {/* End .collapse */}
            </div>
            {/* End .card */}
            {/* End .card */}
          </div>
          {/* End .accordion */}

          <button
            onClick={() => handleSubmitButton()}
            type="button"
            className="btn btn-outline-primary-2 btn-order btn-block"
          >
            <span className="btn-text">Đặt hàng</span>
            <span className="btn-hover-text">Thanh toán</span>
          </button>
        </div>
        {/* End .summary */}
      </aside>
    </>
  );
};
