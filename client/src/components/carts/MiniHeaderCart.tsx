import { useEffect } from "react";
import { BaseCart } from "../../features/carts/cartsType";
import { Bounce, toast } from "react-toastify";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { fetchDeleteItemInCart, fetchItemInCart } from "../../features/carts/cartsSlice";
export const MiniHeaderCart = () => {
  const dispatch = useAppDispatch();
  const auth = useAppSelector((state) => state.auth.auth);
  const authCarts = useAppSelector((state) => state.carts.carts);
  useEffect(() => {
    if (auth) {
      dispatch(fetchItemInCart({ userId: auth.id }));
    }
  }, [dispatch, auth]);
  const deleteItemFromCart = async (cartId: string) =>{
    if(auth && auth !== null){
      try{
        await dispatch(fetchDeleteItemInCart({userId: auth.id, cartId: cartId})).unwrap();
        toast.info('Đã xóa sản phẩm khỏi giỏ hàng', {
          position: "bottom-right",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
          });
      }catch(err){
        toast.error(<>{err}</>, {
          position: "bottom-right",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
          });
      }
      
    }else{
      console.log(auth);
    }
  }
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
          <i className="icon-shopping-cart"></i>
          <span className="cart-count">2</span>
          <span className="cart-txt">$ 164,00</span>
        </a>

        <div className="dropdown-menu dropdown-menu-right">
          <div className="dropdown-cart-products">
            {auth ? (
              authCarts && authCarts.length > 0 ? (
                authCarts.map((ac: BaseCart) => (
                  <>
                    {/* Start .product */}
                    <div className="product">
                      <div className="product-cart-details">
                        <h4 className="product-title">
                          <a href="product.html">{ac.clothDetails.cloth.name}</a>
                        </h4>

                        <span className="cart-product-info">
                          <span className="cart-product-qty"></span>{ac.clothDetails.color.name}/{ac.clothDetails.size.name}
                          <br />
                          <span className="cart-product-qty">{ac.amount}</span>x
                          $84.00
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
                      <a onClick={()=>deleteItemFromCart(ac.id)} className="btn-remove" title="Remove Product">
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
                <div>Bạn chưa đăng nhập</div>
              </>
            )}
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
            <a href="checkout.html" className="btn btn-outline-primary-2">
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
