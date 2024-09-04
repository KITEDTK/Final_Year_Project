import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { formatMoney } from "../../utils/formatMoney";
import { Odering2handItems } from "../../features/secondhandPayments/secondhandPaymentType";
import { useEffect, useState } from "react";
import {
  fetchOderingItems,
  ftechPassSecondhandItems,
} from "../../features/secondhandPayments/secondhandPaymentsSlice";
import { io } from "socket.io-client";
const socket = io("http://localhost:4000");
export const OrderingProducts = () => {
  const dispatch = useAppDispatch();
  const auth = useAppSelector((state) => state.auth.auth);
  const [orderingItems, setOrderingItems] = useState<Odering2handItems[]>();
  useEffect(() => {
    if (auth) {
      dispatch(fetchOderingItems(auth.id)).then((res: any) => {
        setOrderingItems(res.payload);
      });
      socket.emit("join_user", { userId: auth.id });
    }
  }, [dispatch, auth]);
  useEffect(() => {
    socket.emit("join_anyone", "anyone");
    socket.on("update_odering",()=>{
      if (auth) {
        dispatch(fetchOderingItems(auth.id)).then((res: any) => {
          setOrderingItems(res.payload);
        });
      }
    });
    socket.on("update_ordering_items", () => {
      if (auth) {
        dispatch(fetchOderingItems(auth.id)).then((res: any) => {
          setOrderingItems(res.payload);
        });
      }
    });
    return () => {
      socket.off("update_odering"); // Clean up the event listener
      socket.off("update_ordering_items");
    };
  });
  const handleOnClickRecieve = (
    buyerId: string,
    secondhandPaymentDetailId: string
  ) => {
    dispatch(
      ftechPassSecondhandItems({ buyerId: buyerId, secondhandPaymentDetailId })
    ).then(() => {
      socket.emit("join_user_wardrobe", { userId: buyerId });
      const sellerId: string | undefined = orderingItems
        ?.find((item) => {
          const result = item.SecondhandPaymentDetails.find(
            (itemm) => itemm.id === secondhandPaymentDetailId
          );
          return result !== undefined;
        })
        ?.SecondhandPaymentDetails.find(
          (itemm) => itemm.id === secondhandPaymentDetailId
        )?.secondhand.wardrobe.userId;
      socket.emit("join_user_being_ordered_item", { sellerId: sellerId });
      socket.emit("join_user_selling_items",{userId: sellerId});
      if (auth) {
        dispatch(fetchOderingItems(auth.id)).then((res: any) => {
          setOrderingItems(res.payload);
        });
      }
    });
  };
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
            orderingItems &&
            orderingItems.length > 0 &&
            orderingItems.map((item) =>
              item.SecondhandPaymentDetails.map((itemm, index) => (
                <>
                  <tr key={index}>
                    <td className="product-col">
                      <div className="product">
                        <figure className="product-media">
                          <a href="#">
                            <img
                              style={{width: 60, height: 60}}
                              src={`http://localhost:4000/images/${itemm.secondhand.wardrobe.clothDetails.image1}`}
                              alt="Product image"
                            />
                          </a>
                        </figure>

                        <h3 className="product-title">
                          <a href="#">
                            {itemm.secondhand.wardrobe.clothDetails.cloth.name}
                            <br />
                            {itemm.secondhand.wardrobe.clothDetails.color.name}/
                            {itemm.secondhand.wardrobe.clothDetails.size.name}
                          </a>
                        </h3>
                        {/* End .product-title */}
                      </div>
                      {/* End .product */}
                    </td>
                    <td className="price-col">
                      {formatMoney(itemm.amount * itemm.secondhand.price)}đ
                    </td>
                    <td className="price-col">{itemm.amount}</td>
                    <td className="stock-col">
                      <span className="in-stock">{itemm.status}</span>
                      <div className="btn-wrap">
                        <div
                          onClick={() =>
                            handleOnClickRecieve(auth.id, itemm.id)
                          }
                          className="btn btn-primary btn-round"
                        >
                          Đã nhận hàng
                        </div>
                      </div>
                    </td>
                  </tr>
                </>
              ))
            )}
        </tbody>
      </table>
    </>
  );
};
