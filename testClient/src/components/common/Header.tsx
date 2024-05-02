import { Navbar } from "../categories/Navbar";
export function Header(){
    return (
        <>
        {/* <button onClick={()=> handleLogout()}>signOut</button> */}
          <header className="header header-6">
            <div className="header-top">
              <div className="container">
                <div className="header-left">
                  <ul className="top-menu top-link-menu d-none d-md-block">
                    <li>
                      <a href="#">Links</a>
                      <ul>
                        <li>
                          <a href="tel:#">
                            <i className="icon-phone"></i>Call: +0123 456 789
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  {/* End .top-menu */}
                </div>
                {/* End .header-left */}
    
                <div className="header-right">
                  <div className="social-icons social-icons-color">
                    <a
                      href="#"
                      className="social-icon social-facebook"
                      title="Facebook"
                      target="_blank"
                    >
                      <i className="icon-facebook-f"></i>
                    </a>
                    <a
                      href="#"
                      className="social-icon social-twitter"
                      title="Twitter"
                      target="_blank"
                    >
                      <i className="icon-twitter"></i>
                    </a>
                    <a
                      href="#"
                      className="social-icon social-pinterest"
                      title="Instagram"
                      target="_blank"
                    >
                      <i className="icon-pinterest-p"></i>
                    </a>
                    <a
                      href="#"
                      className="social-icon social-instagram"
                      title="Pinterest"
                      target="_blank"
                    >
                      <i className="icon-instagram"></i>
                    </a>
                  </div>
                  {/* End .soial-icons */}
                  <ul className="top-menu top-link-menu">
                    <li>
                      <a href="#">Links</a>
                      <ul>
                        <li>
                          {/* {isAuthenticated === true && userInfoAndToken && userInfoAndToken.user ?  (
                            // If isAuthenticated is true, render the link to the user profile
                            <Link  to="/login" data-toggle="modal">
                              <i className="icon-user"></i>{userInfoAndToken.user.username}
                            </Link>
                          ) : (
                            // If isAuthenticated is false or undefined, render the link to the login page
                            <Link to="/login" data-toggle="modal">
                              <i className="icon-user"></i>Login
                            </Link>
                          )} */}
                        </li>
                      </ul>
                    </li>
                  </ul>
                  {/* End .top-menu */}
    
                  <div className="header-dropdown">
                    <a href="#">USD</a>
                    <div className="header-menu">
                      <ul>
                        <li>
                          <a href="#">Eur</a>
                        </li>
                        <li>
                          <a href="#">Usd</a>
                        </li>
                      </ul>
                    </div>
                    {/* End .header-menu */}
                  </div>
                  {/* End .header-dropdown */}
    
                  <div className="header-dropdown">
                    <a href="#">Eng</a>
                    <div className="header-menu">
                      <ul>
                        <li>
                          <a href="#">English</a>
                        </li>
                        <li>
                          <a href="#">French</a>
                        </li>
                        <li>
                          <a href="#">Spanish</a>
                        </li>
                      </ul>
                    </div>
                    {/* End .header-menu */}
                  </div>
                  {/* End .header-dropdown */}
                </div>
                {/* End .header-right */}
              </div>
            </div>
            <div className="header-middle">
              <div className="container">
                <div className="header-left">
                  <div className="header-search header-search-extended header-search-visible d-none d-lg-block">
                    <a href="#" className="search-toggle" role="button">
                      <i className="icon-search"></i>
                    </a>
                    <form action="#" method="get">
                      <div className="header-search-wrapper search-wrapper-wide">
                        <label htmlFor="q" className="sr-only">
                          Search
                        </label>
                        <button className="btn btn-primary" type="submit">
                          <i className="icon-search"></i>
                        </button>
                        <input
                          type="search"
                          className="form-control"
                          name="q"
                          id="q"
                          placeholder="Search product ..."
                          required
                        />
                      </div>
                      {/* End .header-search-wrapper */}
                    </form>
                  </div>
                  {/* End .header-search */}
                </div>
                <div className="header-center">
                  {/* <Link to="/" className="logo">
                    <img
                      src="assets/images/demos/demo-6/logo.png"
                      alt="Molla Logo"
                      width="82"
                      height="20"
                    />
                  </Link> */}
                </div>
                {/* End .header-left */}
    
                <div className="header-right">
                  <a href="wishlist.html" className="wishlist-link">
                    <i className="icon-heart-o"></i>
                    <span className="wishlist-count">3</span>
                    <span className="wishlist-txt">My Wishlist</span>
                  </a>
    
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
                        <div className="product">
                          <div className="product-cart-details">
                            <h4 className="product-title">
                              <a href="product.html">
                                Beige knitted elastic runner shoes
                              </a>
                            </h4>
    
                            <span className="cart-product-info">
                              <span className="cart-product-qty">1</span>x $84.00
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
                          <a href="#" className="btn-remove" title="Remove Product">
                            <i className="icon-close"></i>
                          </a>
                        </div>
                        {/* End .product */}
    
                        <div className="product">
                          <div className="product-cart-details">
                            <h4 className="product-title">
                              <a href="product.html">
                                Blue utility pinafore denim dress
                              </a>
                            </h4>
    
                            <span className="cart-product-info">
                              <span className="cart-product-qty">1</span>x $76.00
                            </span>
                          </div>
                          {/* End .product-cart-details */}
    
                          <figure className="product-image-container">
                            <a href="product.html" className="product-image">
                              <img
                                src="assets/images/products/cart/product-2.jpg"
                                alt="product"
                              />
                            </a>
                          </figure>
                          <a href="#" className="btn-remove" title="Remove Product">
                            <i className="icon-close"></i>
                          </a>
                        </div>
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
                        <a
                          href="checkout.html"
                          className="btn btn-outline-primary-2"
                        >
                          <span>Checkout</span>
                          <i className="icon-long-arrow-right"></i>
                        </a>
                      </div>
                      {/* End .dropdown-cart-total */}
                    </div>
                    {/* End .dropdown-menu */}
                  </div>
                  {/* End .cart-dropdown */}
                </div>
              </div>
              {/* End .container */}
            </div>
            {/* End .header-middle */}
    
            <Navbar/>
            {/* End .header-bottom */}
          </header>
          {/* End .header */}
        </>
      );
}