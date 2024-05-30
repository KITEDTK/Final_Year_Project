import { useAppSelector } from "../../store/hooks";
import { formatMoney } from '../../utils/formatMoney';
import { useEffect,useState } from "react";
export const Order = () => {
  const auth = useAppSelector((state) => state.auth.auth);
  const authCart = useAppSelector((state) => state.carts.carts);
  const [authTotalPrice, setAuthTotalPrice] = useState<number>(0);
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
      {auth && auth !== null && authCart ? (
        <table className="table table-summary">
          <thead>
            <tr>
              <th>Sản phẩm</th>
              <th>Total</th>
            </tr>
          </thead>

          <tbody>
            {authCart.map((item) => (
              <>
                <tr>
                  <td>
                    <a href="#">{item.clothDetails.cloth.name}</a>
                    <div>{item.clothDetails.color.name}/{item.clothDetails.size.name}</div>
                    <div>{item.amount} x {formatMoney(item.clothDetails.cloth.price)}đ</div>
                  </td>
                  <td>{formatMoney(item.amount * item.clothDetails.cloth.price)}đ</td>
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
        </table>
      ) : (
        <table className="table table-summary">
          <thead>
            <tr>
              <th>Product</th>
              <th>Total</th>
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
              <td>$76.00</td>
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
      )}
    </>
  );
};
