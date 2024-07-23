import { useAppSelector } from "../../store/hooks";

export const SecondhandOrder = () => {
  const auth = useAppSelector((state) => state.auth.auth);
  const local2handCarts = useAppSelector(
    (state) => state.secondHandCart.local2handCarts
  );
  const auth2handCarts = useAppSelector(
    (state) => state.secondHandCart.secondhandCarts
  );

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
            type="submit"
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
