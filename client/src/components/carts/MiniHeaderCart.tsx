import { useEffect, useState } from "react";
import { BaseCart } from "../../features/carts/cartsType";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import {
  fetchDeleteItemInCart,
  fetchItemInCart,
  removeItemFromLocalCart,
  resetLocalCarts
} from "../../features/carts/cartsSlice";
import { formatMoney } from "../../utils/formatMoney";
import {showToast} from "../../utils/showToast";
import { Link } from "react-router-dom";
export const MiniHeaderCart = () => {
  const dispatch = useAppDispatch();
  const auth = useAppSelector((state) => state.auth.auth);
  const authCarts = useAppSelector((state) => state.carts.carts);
  const LocalCarts = useAppSelector((state) => state.carts.localCarts);
  const [authTotalAmount, setAuthTotalAmount] = useState<number>(0);
  const [authTotalPrice, setAuthTotalPrice] = useState<number>(0);
  useEffect(() => {
    if (auth && authCarts) {
      const totalAmount: number = authCarts.reduce(
        (accumulator, currentValue) => accumulator + currentValue.amount,
        0,
      );
      const totalPrice: number = authCarts.reduce(
        (accumulator, currentValue) => accumulator + currentValue.amount*currentValue.clothDetails.cloth.price,
        0,
      );
      setAuthTotalAmount(totalAmount);
      setAuthTotalPrice(totalPrice);
    } else {
      setAuthTotalAmount(0);
      setAuthTotalPrice(0);
    }
  }, [auth, authCarts]);
  useEffect(() => {
    if (auth) {
      dispatch(fetchItemInCart({ userId: auth.id }));
    }
  }, [dispatch, auth]);
  const deleteItemFromAuthCart = async (cartId: string) => {
    if (auth && auth !== null) {
      try {
        console.log(authCarts);
        await dispatch(
          fetchDeleteItemInCart({ userId: auth.id, cartId: cartId })
        ).unwrap();
       showToast("Đã xóa sản phẩm khỏi giỏ hàng","info")
      } catch (err) {
       showToast("Lỗi khi thêm sản phẩm","error")
      }
    }
  };
  const deleteItemFromLocalCart = async (clothDetailId: string) => {
    try {
      await dispatch(removeItemFromLocalCart(clothDetailId));
      showToast("Đã xóa sản phẩm khỏi giỏ hàng","info")
    } catch (err) {
      showToast("Lỗi khi thêm sản phẩm","error")
    }
  };
  const handleOnClickCheckout = ()=>{
    dispatch(resetLocalCarts());
  }
  return (
    <>
      <div className="dropdown cart-dropdown">
        <Link
          to={'/carts'}
          className="dropdown-toggle"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
          data-display="static"
        >
          <Link
          to={'/carts'} className="icon-shopping-cart"></Link>
          {auth ? (
            <>
              <span className="cart-count">{authTotalAmount}</span>
              <span className="cart-txt">{formatMoney(authTotalPrice)}đ</span>
            </>
          ) : (
            <>
              <span className="cart-count">{LocalCarts.totalAmount}</span>
              <span className="cart-txt">
                {LocalCarts.totalPrice !== 0
                  ? `${formatMoney(LocalCarts.totalPrice)}đ`
                  : null}
              </span>
            </>
          )}
        </Link>

        <div className="dropdown-menu dropdown-menu-right">
          <div className="dropdown-cart-products">
            {auth ? (
              authCarts !== null && authCarts.length > 0 ? (
                authCarts.map((ac: BaseCart) => (
                  <>
                    {/* Start .product */}
                    <div className="product" key={ac.id}>
                      <div className="product-cart-details">
                        <h4 className="product-title">
                          <a href="product.html">
                          {ac.clothDetails.cloth.name }
                          </a>
                        </h4>

                        <span className="cart-product-info">
                          <span className="cart-product-qty"></span>
                          {ac.clothDetails.color.name }/
                          {ac.clothDetails.size.name }
                          <br />
                          <span className="cart-product-qty">{ac.amount}</span>x
                          {formatMoney(ac.clothDetails.cloth.price)}đ
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
                      <a
                        onClick={() => deleteItemFromAuthCart(ac.id)}
                        className="btn-remove"
                        title="Remove Product"
                      >
                        <i className="icon-close"></i>
                      </a>
                    </div>
                    {/* End .product-cart-details */}
                  </>
                ))
              ) : (
                <>
                  <div>Giỏ hàng của bạn đang trống</div>
                </>
              )
            ) : (
              <>
                {LocalCarts &&
                LocalCarts.items &&
                LocalCarts.items.length > 0 ? (
                  LocalCarts.items.map((lc) => (
                    <>
                      {/* Start .product */}
                      <div className="product">
                        <div className="product-cart-details">
                          <h4 className="product-title">
                            <a href="product.html">{lc.clothesName}</a>
                          </h4>

                          <span className="cart-product-info">
                            <span className="cart-product-qty"></span>
                            {lc.colorName}/{lc.sizeName}
                            <br />
                            <span className="cart-product-qty">
                              {lc.amount}
                            </span>
                            x{formatMoney(lc.price)}đ
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
                        <a
                          onClick={() =>
                            deleteItemFromLocalCart(lc.clothDetailId)
                          }
                          className="btn-remove"
                          title="Remove Product"
                        >
                          <i className="icon-close"></i>
                        </a>
                      </div>
                      {/* End .product-cart-details */}
                    </>
                  ))
                ) : (
                  <>
                    <div>Giỏ hàng của bạn đang trống</div>
                  </>
                )}
              </>
            )}
            {/* End .product */}
          </div>
          {/* End .cart-product */}

          <div className="dropdown-cart-total">
            <span>Tổng giá:</span>
            {auth ? (<span className="cart-total-price">{formatMoney(authTotalPrice)}đ</span>) : (<span className="cart-total-price">{formatMoney(LocalCarts.totalPrice)}đ</span>)}
            
          </div>
          {/* End .dropdown-cart-total */}

          <div className="dropdown-cart-action">
            <Link to={'/carts'} className="btn btn-primary">
              View Cart
            </Link>
            <a onClick={()=>handleOnClickCheckout()} className="btn btn-outline-primary-2">
              <span>Checkout</span>
              <i className="icon-long-arrow-right"></i>
            </a>
          </div>
          {/* End .dropdown-cart-total */}
        </div>
        {/* End .dropdown-menu */}
      </div>
    </>
  );
};
