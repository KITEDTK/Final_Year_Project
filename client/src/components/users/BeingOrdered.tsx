import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { fetchBeingOrderedItem } from "../../features/secondhandCarts/secondHandCartSlice";
import { formatMoney } from "../../utils/formatMoney";
import { BeingOrderedItem } from "../../features/secondhandCarts/secondHandCartTypes";
const socket = io("http://localhost:4000");

export const BeingOrdered = () => {
  const dispatch = useAppDispatch();
  const auth = useAppSelector((state) => state.auth.auth);
  const [beingOrderedItems, setBeingOrderedItems] = useState<
    BeingOrderedItem[]
  >([]);
  useEffect(() => {
    if (auth?.id) {
      dispatch(fetchBeingOrderedItem(auth.id)).then((res: any) => {
        setBeingOrderedItems(res.payload);
      });
      socket.emit("join_user", { userId: auth.id });
    }
  }, [dispatch, auth]);
  useEffect(() => {
    socket.emit("join_anyone", "anyone");
    socket.on("update_secondhand_item", (data: { secondhandId: string }) => {
      if (auth?.id) {
        dispatch(fetchBeingOrderedItem(auth.id)).then((res: any) => {
          setBeingOrderedItems(res.payload);
          console.log(data);
        });
      }
    });
  });
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
            beingOrderedItems &&
            beingOrderedItems.length > 0 &&
            beingOrderedItems.map((item, index) => (
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
                        {item.seconHands.wardrobe.clothDetails.cloth.name}
                        <br />
                        {item.seconHands.wardrobe.clothDetails.color.name}/
                        {item.seconHands.wardrobe.clothDetails.size.name}
                      </a>
                    </h3>
                  </div>
                </td>
                <td className="price-col">
                  {formatMoney(item.seconHands.amount)}đ
                </td>
                <td className="price-col">{item.seconHands.amount}</td>
                <td className="stock-col">
                  <span className="in-stock">
                    <div className="btn-wrap">
                      <div className="btn btn-primary btn-round">Xem</div>
                    </div>
                    <div className="btn-wrap">
                      <div className="btn btn-primary btn-round">Duyệt</div>
                    </div>
                  </span>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
};
