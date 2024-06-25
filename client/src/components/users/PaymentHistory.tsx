import { fetchHistoryPayment } from "../../features/payments/paymentsSlice";
import { PaymentHistory as PaymentHistoryType } from "../../features/payments/paymentsType";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { useEffect, useState } from "react";
import { formatMoney } from "../../utils/formatMoney";
export const PaymentHistory = () => {
  const dispatch = useAppDispatch();
  const auth = useAppSelector((state) => state.auth.auth);
  const [paymentHistory, setPaymentHistory] = useState<PaymentHistoryType[]>(
    []
  );
  useEffect(() => {
    if (auth) {
      dispatch(fetchHistoryPayment(auth.id)).then((res: any) => {
        setPaymentHistory(res.payload);
      });
    }
  }, [dispatch, auth]);
  return (
    <>
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
                        <a href="#">{itemm.clothDetail.cloth.name}<br/>{itemm.clothDetail.color.name}/{itemm.clothDetail.size.name}</a>
                      </h3>
                      {/* End .product-title */}
                    </div>
                    {/* End .product */}
                  </td>
                  <td className="price-col">{formatMoney(itemm.amount * itemm.clothDetail.cloth.price)}đ</td>
                  <td className="price-col">{itemm.amount}</td>
                  <td className="stock-col">
                    <span className="in-stock">{item.status}</span>
                  </td>
                </tr>
              ))
            )}
        </tbody>
      </table>
    </>
  );
};
