import {
  fetchPullItems,
  fetchSellingItems,
} from "../../features/secondHand/secondHandSlice";
import { SellingSecondhandProducts } from "../../features/secondHand/secondHandTypes";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { useEffect, useState } from "react";
import { io } from "socket.io-client";
const socket = io("http://localhost:4000");

export const SellingProducts = () => {
  const dispatch = useAppDispatch();
  const auth = useAppSelector((state) => state.auth.auth);
  const [sellingItems, setSellingItems] = useState<SellingSecondhandProducts[]>(
    []
  );
  useEffect(() => {
    if (auth?.id) {
      dispatch(fetchSellingItems(auth.id)).then((res: any) => {
        setSellingItems(res.payload);
      });
      socket.emit("join_user", { userId: auth.id });
    }
  }, [dispatch, auth]);
  useEffect(() => {
    socket.on("update_user_selling_items", () => {
      if (auth) {
        dispatch(fetchSellingItems(auth.id)).then((res: any) => {
          setSellingItems(res.payload);
        });
      }
    });
  });
  const handleOnClickPullItems = (secondhandId: string) => {
    dispatch(fetchPullItems(secondhandId)).then(() => {
      if (auth?.id) {
        dispatch(fetchSellingItems(auth.id)).then((res: any) => {
          setSellingItems(res.payload);
        })
      }
      socket.emit('pull_selling_item',{secondhandId: secondhandId});
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
            <th>Thu hồi</th>
          </tr>
        </thead>
        <tbody>
          {auth &&
            auth !== null &&
            sellingItems &&
            sellingItems.length > 0 &&
            sellingItems.map((item, index) => (
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
                        {item.wardrobe.clothDetails.cloth.name}
                        <br />
                        {item.wardrobe.clothDetails.color.name}/
                        {item.wardrobe.clothDetails.size.name}
                      </a>
                    </h3>
                    {/* End .product-title */}
                  </div>
                  {/* End .product */}
                </td>
                <td className="price-col">Chưa làm</td>
                <td className="price-col">{item.amount}</td>
                <td className="stock-col">
                  <span className="in-stock">
                    <>
                      <div className="col-6 col-lg-4 col-xl-2">
                        <div  className="btn-wrap">
                          <div onClick={()=>handleOnClickPullItems(item.id)} className="btn btn-primary btn-round">
                            Thu hồi
                          </div>
                        </div>
                      </div>
                    </>
                  </span>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
};
