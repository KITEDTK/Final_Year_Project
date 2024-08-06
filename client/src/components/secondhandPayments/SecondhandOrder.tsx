import { resetLocal2handCarts } from "../../features/secondhandCarts/secondHandCartSlice";
import { fetchAdd2handPayment, fetchAddLocal2handPayment } from "../../features/secondhandPayments/secondhandPaymentsSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { showToast } from "../../utils/showToast";
import { io } from "socket.io-client";
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
  const local2handPaymentInfo = useAppSelector((state)=>state.secondhandPayments.local2handPaymentInfo);
  const handleOnClickCreatePayment = () => {
    if(auth && auth!== null){
      const secondhandCartInfo = auth2handCarts.map((item)=>{return {
        secondhandId: item.seconHands.id,
        amount: item.amount,
        price: 0
      }});
      const secondhandSellerIds = auth2handCarts.map((item)=>{
        return item.seconHands.wardrobe.userId;
      });
      dispatch(fetchAdd2handPayment({
        buyerId: auth.id,
        address: 'Ha Noi',
        buyerName: auth.fullname,
        phoneNumber: auth.phoneNumber,
        status: 'Chưa thanh toán',
        secondhandCartInfo: secondhandCartInfo
      })).then(()=>{
        showToast('Bạn đã đặt hàng thành công','success');
        socket.emit('order_items',{sellerIds: secondhandSellerIds});
        window.location.href = 'http://localhost:3000/secondhand';
      })
    }else{
      const secondhandIds = local2handCarts.items.map((item)=>{
        return {
          secondhandId: item.secondhandId,
          amount: item.amount
        };
      });
      dispatch(fetchAddLocal2handPayment({
        address: local2handPaymentInfo.address,
        buyerName: local2handPaymentInfo.fullName,
        phoneNumber: local2handPaymentInfo.phoneNumber,
        status: 'Chưa thanh toán',
        local2handCarts: secondhandIds
      })).then(()=>{
        showToast('Bạn đã đặt hàng thành công','success'); 
        dispatch(resetLocal2handCarts());
        window.location.href = 'http://localhost:3000/secondhand';
      })
    }
  }
  return (
    <>
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
                {auth2handCarts.map((item)=>{
                  return (<>
                  <tr>
                  <td>
                    <a href="#">{item.seconHands.wardrobe.clothDetails.cloth.name}</a>
                    <br />
                    <a href="#">{item.seconHands.wardrobe.clothDetails.color.name}/{item.seconHands.wardrobe.clothDetails.size.name}</a>
                  </td>
                  <td>$84.00</td>
                </tr>
                  </>)
                })}
                <tr className="summary-subtotal">
                  <td>Tổng giỏ hàng:</td>
                  <td>$160.00</td>
                </tr>
                {/* End .summary-subtotal */}.
                <tr className="summary-total">
                  <td>Tổng hóa đơn:</td>
                  <td>$160.00</td>
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
                {local2handCarts && local2handCarts.items.map((item)=>{
                  return (<>
                  <tr>
                  <td>
                    <a href="#">{item.clothName}</a>
                    <br />
                    <a href="#">{item.color}/{item.size}</a>
                  </td>
                  <td>$84.00</td>
                </tr></>)
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
            onClick={()=>{handleOnClickCreatePayment()}}
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
