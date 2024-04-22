import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllCategories } from "../../counter/categoriesSlice";
export function Navbar() {
    const dispatch = useDispatch();
    const categories = useSelector((state)=> state.categories.categories);
    useEffect(()=>{
        dispatch(fetchAllCategories());
        console.log(categories)
    },[dispatch]);
    //console.log(categories);
  return (
    <>
      <div className="header-bottom sticky-header">
        <div className="container">
          <div className="header-left">
            <nav className="main-nav">
              <ul className="menu sf-arrows">
                {/* start component */}
                <li className="megamenu-container">
                  <Link to='/shoplist'  className="sf-with-ul">
                    Shop
                  </Link>

                  <div className="megamenu megamenu-md active">
                    <div className="row no-gutters">
                      <div className="col-md-8">
                        <div className="menu-col">
                          <div className="row">
                            <div className="col-md-6">
                              <div className="menu-title">
                                Shop with sidebar
                              </div>
                              {/* End .menu-title */}
                              <ul>
                                <li>
                                  <a href="category-list.html">Shop List</a>
                                </li>
                                <li>
                                  <a href="category-2cols.html">
                                    Shop Grid 2 Columns
                                  </a>
                                </li>
                                <li>
                                  <a href="category.html">
                                    Shop Grid 3 Columns
                                  </a>
                                </li>
                                <li>
                                  <a href="category-4cols.html">
                                    Shop Grid 4 Columns
                                  </a>
                                </li>
                                <li>
                                  <a href="category-market.html">
                                    <span>
                                      Shop Market
                                      <span className="tip tip-new">New</span>
                                    </span>
                                  </a>
                                </li>
                              </ul>

                              <div className="menu-title">Shop no sidebar</div>
                              {/* End .menu-title */}
                              <ul>
                                <li>
                                  <a href="category-boxed.html">
                                    <span>
                                      Shop Boxed No Sidebar
                                      <span className="tip tip-hot">Hot</span>
                                    </span>
                                  </a>
                                </li>
                                <li>
                                  <a href="category-fullwidth.html">
                                    Shop Fullwidth No Sidebar
                                  </a>
                                </li>
                              </ul>
                            </div>
                            {/* End .col-md-6 */}

                            <div className="col-md-6">
                              <div className="menu-title">Product Category</div>
                              {/* End .menu-title */}
                              <ul>
                                <li>
                                  <a href="product-category-boxed.html">
                                    Product Category Boxed
                                  </a>
                                </li>
                                <li>
                                  <a href="product-category-fullwidth.html">
                                    <span>
                                      Product Category Fullwidth
                                      <span className="tip tip-new">New</span>
                                    </span>
                                  </a>
                                </li>
                              </ul>
                              <div className="menu-title">Shop Pages</div>
                              {/* End .menu-title */}
                              <ul>
                                <li>
                                  <a href="cart.html">Cart</a>
                                </li>
                                <li>
                                  <a href="checkout.html">Checkout</a>
                                </li>
                                <li>
                                  <a href="wishlist.html">Wishlist</a>
                                </li>
                                <li>
                                  <a href="dashboard.html">My Account</a>
                                </li>
                                <li>
                                  <a href="#">Lookbook</a>
                                </li>
                              </ul>
                            </div>
                            {/* End .col-md-6 */}
                          </div>
                          {/* End .row */}
                        </div>
                        {/* End .menu-col */}
                      </div>
                      {/* End .col-md-8 */}

                      <div className="col-md-4">
                        <div className="banner banner-overlay">
                          <a
                            href="category.html"
                            className="banner banner-menu"
                          >
                            <img
                              src="assets/images/menu/banner-1.jpg"
                              alt="Banner"
                            />

                            <div className="banner-content banner-content-top">
                              <div className="banner-title text-white">
                                Last <br />
                                Chance
                                <br />
                                <span>
                                  <strong>Sale</strong>
                                </span>
                              </div>
                              {/* End .banner-title */}
                            </div>
                            {/* End .banner-content */}
                          </a>
                        </div>
                        {/* End .banner banner-overlay */}
                      </div>
                      {/* End .col-md-4 */}
                    </div>
                    {/* End .row */}
                  </div>
                  {/* End .megamenu */}
                </li>
                {/* End component */}
              </ul>
              {/* End .menu */}
            </nav>
            {/* End .main-nav */}

            <button className="mobile-menu-toggler">
              <span className="sr-only">Toggle mobile menu</span>
              <i className="icon-bars"></i>
            </button>
          </div>
          {/* End .header-left */}

          <div className="header-right">
            <i className="la la-lightbulb-o"></i>
            <p>Clearance Up to 30% Off</p>
          </div>
        </div>
        {/* End .container */}
      </div>
    </>
  );
}
