import React from "react";
import { SecondHand } from "../../features/secondHand/secondHandTypes";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  addItemInLocal2handCart,
  fetchAddItemTo2handCart,
} from "../../features/secondhandCarts/secondHandCartSlice";
import { showToast } from "../../utils/showToast";
import { formatMoney } from '../../utils/formatMoney';
interface Props {
  secondhand: SecondHand;
}
export const SingleClothSecondHand: React.FC<Props> = ({ secondhand }) => {
  const { wardrobe } = secondhand;
  const dispatch = useAppDispatch();
  const auth = useAppSelector((state) => state.auth.auth);
  const local2handCarts = useAppSelector(
    (state) => state.secondHandCart.local2handCarts
  );
  const auth2handCarts = useAppSelector((state)=>state.secondHandCart.secondhandCarts);
  const { clothDetails } = wardrobe;
  const addItemTo2handCart = async () => {
    if (auth && auth !== null) {
      const checkExist = auth2handCarts.find((item)=>item.seconHands.id === secondhand.id);
      if (checkExist && checkExist.amount + 1 > secondhand.amount) {
        showToast("Số lượng sản phẩm không đủ", "info");
        console.log(auth.id);
      } else if (secondhand.wardrobe.userId === auth.id) {
        showToast("Bạn không thể mua sản phẩm của chính mình", "info");
      } else {
        dispatch(
          fetchAddItemTo2handCart({
            userId: auth.id,
            secondhandId: secondhand.id,
            amount: 1,
          })
        ).then(() => {
          showToast("Đã thêm sản phẩm vào giỏ hàng", "success");
        });
      }
    } else {
      try {
        const checkExist = local2handCarts.items.find(
          (item) => item.secondhandId === secondhand.id
        );
        if (checkExist && checkExist.amount + 1 > secondhand.amount) {
          showToast("Số lượng sản phẩm không đủ", "info");
        } else {
          await dispatch(
            addItemInLocal2handCart({
              secondhandId: secondhand.id,
              amount: 1,
              size: secondhand.wardrobe.clothDetails.size.name,
              color: secondhand.wardrobe.clothDetails.color.name,
              clothName: secondhand.wardrobe.clothDetails.cloth.name,
            })
          );
          showToast("Đã thêm sản phẩm vào giỏ hàng", "success");
        }
      } catch (error) {
        console.error("Error adding item to cart:", error);
      }
    }
  };
  return (
    <>
      <div className="col-6 col-md-4 col-lg-4">
        <div className="product product-7 text-center">
          <figure className="product-media">
            <span className="product-label label-new">New</span>
            <div>
              <img
                src={`http://localhost:4000/images/${clothDetails.image1}`}
                style={{ width: "280px", height: "280px" }}
                alt="Product image"
                className="product-image"
              />
            </div>

            <div className="product-action-vertical">
              <a className="btn-product-icon btn-wishlist btn-expandable">
                <span>add to wishlist</span>
              </a>
              <a className="btn-product-icon btn-quickview" title="Quick view">
                <span>Quick view</span>
              </a>
              <a
                href="#"
                className="btn-product-icon btn-compare"
                title="Compare"
              >
                <span>Compare</span>
              </a>
            </div>
            {/* End .product-action-vertical */}
            <div className="product-action action-icon-top">
              <a
                className="btn-product btn-cart"
                onClick={() => addItemTo2handCart()}
                style={{ cursor: "pointer" }}
              >
                <span>size: {clothDetails.size.name}</span>
              </a>
            </div>
            {/* End .product-action */}
          </figure>
          {/* End .product-media */}

          <div className="product-body">
            <div className="product-cat">
              <a href="#">Người bán: {secondhand.wardrobe.users.fullname}
              </a>
            </div>
            {/* End .product-cat */}
            <h3 className="product-title">{clothDetails.cloth.name}</h3>
            {/* End .product-title */}
            <div className="product-price">{formatMoney(secondhand.price)} đ</div>
            {/* End .product-price */}
            <div className="ratings-container">
              <div className="ratings">
                <div className="ratings-val" style={{ width: "20%" }}></div>
                {/* End .ratings-val */}
              </div>
              {/* End .ratings */}
              <span className="ratings-text">( 2 Reviews )</span>
            </div>
            {/* End .rating-container */}

            <div className="product-nav product-nav-thumbs">
              <a
                className={"active"}
                style={{
                  border: "2px solid black",
                }}
              >
                <img
                  src={`http://localhost:4000/images/${clothDetails.image1}`}
                  alt="product desc"
                  style={{
                    border: `2px solid ${clothDetails.color.name}`,
                    width: "40px",
                    height: "40px",
                  }}
                />
              </a>
            </div>
            {/* End .product-nav */}
          </div>
          {/* End .product-body */}
        </div>
        {/* End .product */}
      </div>
    </>
  );
};
