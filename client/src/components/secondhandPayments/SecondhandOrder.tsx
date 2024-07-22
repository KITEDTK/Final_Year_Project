import { useAppSelector } from "../../store/hooks";


export const SecondhandOrder = () => {
    const local2handCarts = useAppSelector((state) => state.secondHandCart.local2handCarts);
    const auth2handCarts = useAppSelector((state)=>state.secondHandCart.secondhandCarts);

  return (
    <>
      <aside className="col-lg-3">
        <div className="summary">
          <h3 className="summary-title">Hóa đơn của bạn</h3>
          {/* End .summary-title */}

          <table className="table table-summary">
            <thead>
              <tr>
                <th>Sản phẩm</th>
                <th>Tổng</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>
                  <a href="#">Beige knitted elastic runner shoes</a>
                </td>
                <td>$84.00</td>
              </tr>

              <tr>
                <td>
                  <a href="#">Blue utility pinafore denimdress</a>
                </td>
                <td>$76,00</td>
              </tr>
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
