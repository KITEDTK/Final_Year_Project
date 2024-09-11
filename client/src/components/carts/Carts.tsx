import { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { formatMoney } from "../../utils/formatMoney";
import {
  fetchUpdateCartQuantity,
  updateQuantityInLocalCart,
} from "../../features/carts/cartsSlice";
import { Link } from "react-router-dom";
import { fetchAllClothDetails } from "../../features/products/clothesSlice";
export const Carts = () => {
  const auth = useAppSelector((state) => state.auth.auth);
  const dispatch = useAppDispatch();
  const authCarts = useAppSelector((state) => state.carts.carts);
  const localCarts = useAppSelector((state) => state.carts.localCarts);
  const [authTotalPrice, setAuthTotalPrice] = useState<number>(0);
  const clothDetails = useAppSelector((state) => state.clothes.allClothDetails);
  useEffect(() => {
    dispatch(fetchAllClothDetails());
  }, [dispatch]);
  useEffect(() => {
    if (auth && authCarts) {
      const totalPrice: number = authCarts.reduce(
        (accumulator, currentValue) =>
          accumulator +
          currentValue.amount * currentValue.clothDetails.cloth.price,
        0
      );
      setAuthTotalPrice(totalPrice);
    } else {
      setAuthTotalPrice(0);
    }
  }, [auth, authCarts]);

  const [localQuantities, setLocalQuantities] = useState(() =>
    localCarts.items.map((item) => ({
      clothDetailId: item.clothDetailId,
      quantity: item.amount,
    }))
  );

  const handleOnclickAuthQuantities = (
    cartId: string,
    clothDetailId: string,
    amount: number
  ) => {
    const singleProduct = clothDetails.find(
      (item) => item.id === clothDetailId
    );
    const maxQuantity = singleProduct !== undefined ? singleProduct.amount : 0;
    const itemInCart = authCarts.find((item) => item.id === cartId);

    if (itemInCart) {
      let amountUpdate = itemInCart.amount + amount;
      if (amountUpdate > maxQuantity) {
        amountUpdate = maxQuantity;
      }
      if (amountUpdate < 1) {
        amountUpdate = 1;
      }
      dispatch(
        fetchUpdateCartQuantity({ cartId: cartId, amount: amountUpdate })
      );
    }
  };
  const handleOnclickLocalQuantities = (
    clothDetailId: string,
    amount: number
  ) => {
    //console.log(clothDetails);
    const itemInCart = clothDetails.find((item) => item.id === clothDetailId);
    const maxQuantity = itemInCart !== undefined ? itemInCart.amount : 0;
    setLocalQuantities((prevQuantities) => {
      const updatedQuantities = prevQuantities.map((item) =>
        item.clothDetailId === clothDetailId
          ? {
              ...item,
              quantity: Math.max(
                1,
                Math.min(maxQuantity, item.quantity + amount)
              ),
            }
          : item
      );

      const localQuantityClothDetail = updatedQuantities.find(
        (item) => item.clothDetailId === clothDetailId
      );

      if (localQuantityClothDetail) {
        dispatch(
          updateQuantityInLocalCart({
            clothDetailId,
            amount: localQuantityClothDetail.quantity,
          })
        );
      }

      return updatedQuantities;
    });
  };
  const handleOnChangeLocalQuantity = (
    event: React.ChangeEvent<HTMLInputElement>,
    clothDetailId: string
  ) => {
    const newQuantity = parseInt(event.target.value, 10);
    const itemInCart = clothDetails.find((item) => item.id === clothDetailId);
    const maxQuantity = itemInCart !== undefined ? itemInCart.amount : 0;
    const validatedQuantity =
      isNaN(newQuantity) || newQuantity < 1
        ? 1
        : Math.min(newQuantity, maxQuantity);

    setLocalQuantities((prevQuantities) =>
      prevQuantities.map((item) =>
        item.clothDetailId === clothDetailId
          ? { ...item, quantity: validatedQuantity }
          : item
      )
    );
    const localQuantityClothDetail = localQuantities.find(
      (item) => item.clothDetailId === clothDetailId
    );
    if (localQuantityClothDetail) {
      dispatch(
        updateQuantityInLocalCart({ clothDetailId, amount: validatedQuantity })
      );
    }
  };
  const handleOnChangeAuthQuantity = (
    event: React.ChangeEvent<HTMLInputElement>,
    cartId: string,
    clothDetailId: string
  ) => {
    const newQuantity = parseInt(event.target.value, 10);
    const singleProduct = clothDetails.find(
      (item) => item.id === clothDetailId
    );
    const maxQuantity = singleProduct !== undefined ? singleProduct.amount : 0;
    const itemInCart = authCarts.find((item) => item.id === cartId);
    if (itemInCart) {
      let amountUpdate = newQuantity;
      if (newQuantity > maxQuantity) {
        amountUpdate = maxQuantity;
      } else if (newQuantity < 1) {
        amountUpdate = 1;
      }
      dispatch(
        fetchUpdateCartQuantity({ cartId: cartId, amount: amountUpdate })
      );
    }
  };
  return (
    <>
      <main className="main">
        <div
          className="page-header text-center"
          style={{
            backgroundImage: "url('assets/images/page-header-bg.jpg')",
            backgroundSize: "cover", // Thêm thuộc tính nếu cần
            backgroundPosition: "center", // Thêm thuộc tính nếu cần
          }}
        >
          <div className="container">
            <h1 className="page-title">
              Giỏ hàng<span>KITE SHOP</span>
            </h1>
          </div>
          {/* End .container */}
        </div>
        {/* End .page-header */}
        <nav aria-label="breadcrumb" className="breadcrumb-nav">
          <div className="container">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="index.html">Home</a>
              </li>
              <li className="breadcrumb-item">
                <a href="#">Shop</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Shopping Cart
              </li>
            </ol>
          </div>
          {/* End .container */}
        </nav>
        {/* End .breadcrumb-nav */}

        <div className="page-content">
          <div className="cart">
            <div className="container">
              <div className="row">
                <div className="col-lg-9">
                  <table className="table table-cart table-mobile">
                    <thead>
                      {auth && auth !== null ? (
                        authCarts && authCarts.length > 0 ? (
                          <>
                            {" "}
                            <tr>
                              <th>Sản phẩm</th>
                              <th>Giá</th>
                              <th>Số lượng</th>
                              <th>Tổng Giá</th>
                              <th></th>
                            </tr>
                          </>
                        ) : (
                          <>Vui lòng thêm sản phẩm vào giỏ hàng</>
                        )
                      ) : localCarts &&
                        localCarts.items &&
                        localCarts.items.length > 0 ? (
                        <>
                          {" "}
                          <tr>
                            <th>Sản phẩm</th>
                            <th>Giá</th>
                            <th>Số lượng</th>
                            <th>Tổng Giá</th>
                            <th></th>
                          </tr>
                        </>
                      ) : (
                        <>Vui lòng thêm sản phẩm vào giỏ hàng</>
                      )}
                    </thead>

                    <tbody>
                      {auth && auth !== null
                        ? authCarts && authCarts.length > 0
                          ? authCarts.map((ac) => (
                              <>
                                <tr>
                                  <td className="product-col">
                                    <div className="product">
                                      <figure className="product-media">
                                        <a href="#">
                                          <img
                                            style={{ width: 60, height: 60 }}
                                            src={`http://localhost:4000/images/${ac.clothDetails.image1}`}
                                            alt="Product image"
                                          />
                                        </a>
                                      </figure>

                                      <h3 className="product-title">
                                        <a href="#">
                                          {ac.clothDetails.cloth.name}
                                          <br />
                                          {ac.clothDetails.color.name}/
                                          {ac.clothDetails.size.name}
                                        </a>
                                      </h3>
                                      {/* End .product-title */}
                                    </div>
                                    {/* End .product */}
                                  </td>
                                  <td className="price-col">
                                    {formatMoney(ac.clothDetails.cloth.price)} đ
                                  </td>
                                  <td className="quantity-col">
                                    <div className="cart-product-quantity">
                                      <div className="input-group input-spinner">
                                        <div className="input-group-prepend">
                                          <button
                                            onClick={() =>
                                              handleOnclickAuthQuantities(
                                                ac.id,
                                                ac.clothDetailId,
                                                -1
                                              )
                                            }
                                            style={{ minWidth: "26px" }}
                                            className="btn btn-decrement btn-spinner"
                                            type="button"
                                          >
                                            <i className="icon-minus"></i>
                                          </button>
                                        </div>
                                        <input
                                          onChange={(event) =>
                                            handleOnChangeAuthQuantity(
                                              event,
                                              ac.id,
                                              ac.clothDetailId
                                            )
                                          }
                                          type="text"
                                          style={{ textAlign: "center" }}
                                          className="form-control"
                                          value={ac.amount}
                                          required
                                          placeholder=""
                                        />
                                        <div className="input-group-append">
                                          <button
                                            onClick={() =>
                                              handleOnclickAuthQuantities(
                                                ac.id,
                                                ac.clothDetailId,
                                                1
                                              )
                                            }
                                            style={{ minWidth: "26px" }}
                                            className="btn btn-increment btn-spinner"
                                            type="button"
                                          >
                                            <i className="icon-plus"></i>
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                    {/* End .cart-product-quantity */}
                                  </td>
                                  <td className="total-col">
                                    {formatMoney(
                                      ac.clothDetails.cloth.price * ac.amount
                                    )}
                                    đ
                                  </td>
                                  <td className="remove-col">
                                    <button className="btn-remove">
                                      <i className="icon-close"></i>
                                    </button>
                                  </td>
                                </tr>
                              </>
                            ))
                          : "Giỏ hàng của bạn đang trống"
                        : localCarts && localCarts.items.length > 0
                        ? localCarts.items.map((lc) => (
                            <tr>
                              <td className="product-col">
                                <div className="product">
                                  <figure className="product-media">
                                    <a href="#">
                                      <img
                                        style={{width: 60, height: 60}}
                                        src={`http://localhost:4000/images/${lc.image1}`}
                                        alt="Product image"
                                      />
                                    </a>
                                  </figure>

                                  <h3 className="product-title">
                                    <a href="#">
                                      {lc.clothesName}
                                      <br />
                                      {lc.colorName}/{lc.sizeName}
                                    </a>
                                  </h3>
                                  {/* End .product-title */}
                                </div>
                                {/* End .product */}
                              </td>
                              <td className="price-col">
                                {formatMoney(lc.price)}đ
                              </td>
                              <td className="quantity-col">
                                <div className="cart-product-quantity">
                                  <div className="input-group input-spinner">
                                    <div className="input-group-prepend">
                                      <button
                                        onClick={() =>
                                          handleOnclickLocalQuantities(
                                            lc.clothDetailId,
                                            -1
                                          )
                                        }
                                        style={{ minWidth: "26px" }}
                                        className="btn btn-decrement btn-spinner"
                                        type="button"
                                      >
                                        <i className="icon-minus"></i>
                                      </button>
                                    </div>
                                    <input
                                      onChange={(event) =>
                                        handleOnChangeLocalQuantity(
                                          event,
                                          lc.clothDetailId
                                        )
                                      }
                                      type="text"
                                      style={{ textAlign: "center" }}
                                      className="form-control"
                                      value={
                                        localQuantities.find(
                                          (item) =>
                                            item.clothDetailId ===
                                            lc.clothDetailId
                                        )?.quantity
                                      }
                                      required
                                      placeholder=""
                                    />
                                    <div className="input-group-append">
                                      <button
                                        onClick={() =>
                                          handleOnclickLocalQuantities(
                                            lc.clothDetailId,
                                            1
                                          )
                                        }
                                        style={{ minWidth: "26px" }}
                                        className="btn btn-increment btn-spinner"
                                        type="button"
                                      >
                                        <i className="icon-plus"></i>
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </td>
                              <td className="total-col">
                                {formatMoney(lc.amount * lc.price)}đ
                              </td>
                              <td className="remove-col">
                                <button className="btn-remove">
                                  <i className="icon-close"></i>
                                </button>
                              </td>
                            </tr>
                          ))
                        : "Giỏ hàng của bạn đang trống"}
                    </tbody>
                  </table>
                  {/* End .table table-wishlist */}

                  <div className="cart-bottom">
                    <div className="cart-discount">
                      <form action="#">
                        <div className="input-group">
                          <input
                            type="text"
                            className="form-control"
                            required
                            placeholder="coupon code"
                          />
                          <div className="input-group-append">
                            <button
                              className="btn btn-outline-primary-2"
                              type="submit"
                            >
                              <i className="icon-long-arrow-right"></i>
                            </button>
                          </div>
                          {/* .End .input-group-append */}
                        </div>
                        {/* End .input-group */}
                      </form>
                    </div>
                    {/* End .cart-discount */}
                  </div>
                  {/* End .cart-bottom */}
                </div>
                {/* End .col-lg-9 */}
                <aside className="col-lg-3">
                  <div className="summary summary-cart">
                    <h3 className="summary-title">Cart Total</h3>
                    {/* End .summary-title */}

                    <table className="table table-summary">
                      <tbody>
                        <tr className="summary-subtotal">
                          <td>Tổng giá trị:</td>
                          <td>
                            {auth && auth !== null ? (
                              <>{formatMoney(authTotalPrice)}đ</>
                            ) : (
                              <>{formatMoney(localCarts.totalPrice)}đ</>
                            )}
                          </td>
                        </tr>
                        {/* End .summary-subtotal */}

                        {/* End .summary-shipping-row */}

                        {/* End .summary-shipping-row */}

                        {/* End .summary-shipping-row */}

                        {/* End .summary-shipping-estimate */}

                        <tr className="summary-total">
                          <td>Tổng giá trị giỏ hàng:</td>
                          <td> {auth && auth !== null ? (
                              <>{formatMoney(authTotalPrice)}đ</>
                            ) : (
                              <>{formatMoney(localCarts.totalPrice)}đ</>
                            )}</td>
                        </tr>
                        {/* End .summary-total */}
                      </tbody>
                    </table>
                    {/* End .table table-summary */}

                    <Link
                      to="/checkout"
                      className="btn btn-outline-primary-2 btn-order btn-block"
                    >
                      PROCEED TO CHECKOUT
                    </Link>
                  </div>
                  {/* End .summary */}

                  <a
                    href="category.html"
                    className="btn btn-outline-dark-2 btn-block mb-3"
                  >
                    <span>CONTINUE SHOPPING</span>
                    <i className="icon-refresh"></i>
                  </a>
                </aside>
                {/* End .col-lg-3 */}
              </div>
              {/* End .row */}
            </div>
            {/* End .container */}
          </div>
          {/* End .cart */}
        </div>
        {/* End .page-content */}
      </main>
    </>
  );
};
