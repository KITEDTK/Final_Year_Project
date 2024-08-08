import {
  fetch2handCartByUser,
  fetchDeleteItemIn2handCart,
  removeItemFromLocal2handCart,
} from "../../features/secondhandCarts/secondHandCartSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { useEffect } from "react";
import { showToast } from "../../utils/showToast";
import { Link } from "react-router-dom";
import { io } from "socket.io-client";
const socket = io("http://localhost:4000");
export const Mini2handHeaderCart = () => {
  const dispatch = useAppDispatch();
  const auth = useAppSelector((state) => state.auth.auth);
  useEffect(() => {
    if (auth) {
      dispatch(fetch2handCartByUser({ userId: auth.id }));
    }
  }, [dispatch, auth]);
  const local2handCarts = useAppSelector(
    (state) => state.secondHandCart.local2handCarts
  );
  const auth2handCarts = useAppSelector(
    (state) => state.secondHandCart.secondhandCarts
  );
  const maxQuantityAuthCart = auth2handCarts.reduce(
    (accumulator, currentValue) => accumulator + currentValue.amount,
    0
  );
  const handleDeleteAuthCartItem = (secondhandCartId: string) => {
    dispatch(
      fetchDeleteItemIn2handCart({ secondhandCartId: secondhandCartId })
    ).then(() => {
      showToast("Đã xóa sản phẩm khỏi giỏ hàng 2hand", "error");
    });
  };
  useEffect(() => {
    socket.emit("join_anyone", "anyone");
    socket.on("update_secondhand_item", (data: { secondhandId: string }) => {
      if (auth && auth !== null) {
        const checkExist = auth2handCarts.find(
          (item) => item.seconHands.id === data.secondhandId
        );
        if (checkExist) {
          dispatch(fetch2handCartByUser({ userId: auth.id }));
          showToast("Người bán vừa thu hồi lại sản phẩm khỏi website", "info");
        }
      } else {
        const checkExist = local2handCarts.items.find(
          (item) => item.secondhandId === data.secondhandId
        );
        if (checkExist) {
          dispatch(removeItemFromLocal2handCart(data.secondhandId));
          showToast("Người bán vừa thu hồi lại sản phẩm khỏi website", "info");
        }
      }
    });
  });
  return (
    <>
      <div className="dropdown cart-dropdown">
        <a
          href="#"
          className="dropdown-toggle"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
          data-display="static"
        >
          {auth && auth !== null && (
            <>
              <i className="icon-random"></i>
              <span className="cart-count">
                {auth && auth !== null && maxQuantityAuthCart}
              </span>
            </>
          )}
        </a>
        <div className="dropdown-menu dropdown-menu-right">
          <div className="dropdown-cart-products">
            {auth &&
              auth !== null &&
              auth2handCarts &&
              auth2handCarts.length > 0 &&
              auth2handCarts.map((item) => {
                return (
                  <>
                    <div className="product">
                      <div className="product-cart-details">
                        <h4 className="product-title">
                          <a href="product.html">
                            {item.seconHands.wardrobe.clothDetails.cloth.name}
                          </a>
                        </h4>

                        <span className="cart-product-info">
                          <span className="cart-product-qty">
                            {item.amount}
                          </span>
                          x $84.00
                        </span>
                      </div>
                      {/* End .product-cart-details */}

                      <figure className="product-image-container">
                        <a href="product.html" className="product-image">
                          <img
                            src="assets/images/products/cart/product-1.jpg"
                            alt="product"
                          />
                        </a>
                      </figure>
                      <div
                        onClick={() => handleDeleteAuthCartItem(item.id)}
                        className="btn-remove"
                        title="Remove Product"
                      >
                        <i className="icon-close"></i>
                      </div>
                    </div>
                  </>
                );
              })}

            {/* End .product */}

            {/* End .product */}
          </div>
          {/* End .cart-product */}

          <div className="dropdown-cart-total">
            <span>Total</span>

            <span className="cart-total-price">$160.00</span>
          </div>
          {/* End .dropdown-cart-total */}

          <div className="dropdown-cart-action">
            <a href="cart.html" className="btn btn-primary">
              View Cart
            </a>
            <Link
              to="/secondhand-checkout"
              className="btn btn-outline-primary-2"
            >
              <span>Checkout</span>
              <i className="icon-long-arrow-right"></i>
            </Link>
          </div>
          {/* End .dropdown-cart-total */}
        </div>
        {/* End .dropdown-menu */}
      </div>
      {/* End .cart-dropdown */}
    </>
  );
};
