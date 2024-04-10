import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'

function TrendyProducts() {
  
  return (
    <>
      <div className="container">
        <div className="heading heading-center mb-3">
          <h2 className="title">Trendy Products</h2>
          {/* End .title */}

          <ul className="nav nav-pills justify-content-center" role="tablist">
            <li className="nav-item">
              <a
                className="nav-link active"
                id="trendy-all-link"
                data-toggle="tab"
                href="#trendy-all-tab"
                role="tab"
                aria-controls="trendy-all-tab"
                aria-selected="true"
              >
                All
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="trendy-women-link"
                data-toggle="tab"
                href="#trendy-women-tab"
                role="tab"
                aria-controls="trendy-women-tab"
                aria-selected="false"
              >
                Women
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="trendy-men-link"
                data-toggle="tab"
                href="#trendy-men-tab"
                role="tab"
                aria-controls="trendy-men-tab"
                aria-selected="false"
              >
                Men
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="trendy-access-link"
                data-toggle="tab"
                href="#trendy-access-tab"
                role="tab"
                aria-controls="trendy-access-tab"
                aria-selected="false"
              >
                Accessories
              </a>
            </li>
          </ul>
        </div>
        {/* End .heading */}

        <div className="tab-content tab-content-carousel">
          <div
            className="tab-pane p-0 fade show active"
            id="trendy-all-tab"
            role="tabpanel"
            aria-labelledby="trendy-all-link"
          >
            <div
              className="owl-carousel owl-simple carousel-equal-height carousel-with-shadow"
              data-toggle="owl"
              data-owl-options='{
                                "nav": false, 
                                "dots": true,
                                "margin": 20,
                                "loop": false,
                                "responsive": {
                                    "0": {
                                        "items":2
                                    },
                                    "480": {
                                        "items":2
                                    },
                                    "768": {
                                        "items":3
                                    },
                                    "992": {
                                        "items":4
                                    },
                                    "1200": {
                                        "items":4,
                                        "nav": true
                                    }
                                }
                            }'
            >
              <div className="product product-2">
                <figure className="product-media">
                  <a href="product.html">
                    <img
                      src="assets/images/demos/demo-5/products/product-1-1.jpg"
                      alt="Product image"
                      className="product-image"
                    />
                    <img
                      src="assets/images/demos/demo-5/products/product-1-2.jpg"
                      alt="Product image"
                      className="product-image-hover"
                    />
                  </a>

                  <div className="product-action-vertical">
                    <a
                      href="#"
                      className="btn-product-icon btn-wishlist btn-expandable"
                      title="Add to wishlist"
                    >
                      <span>add to wishlist</span>
                    </a>
                  </div>
                  {/* End .product-action */}

                  <div className="product-action product-action-transparent">
                    <a href="#" className="btn-product btn-cart">
                      <span>add to cart</span>
                    </a>
                  </div>
                  {/* End .product-action */}
                </figure>
                {/* End .product-media */}

                <div className="product-body">
                  <div className="product-cat">
                    <a href="#">Clothing</a>
                  </div>
                  {/* End .product-cat */}
                  <h3 className="product-title">
                    <a href="product.html">Vest dress</a>
                  </h3>
                  {/* End .product-title */}
                  <div className="product-price">$9.99</div>
                  {/* End .product-price */}

                  <div className="product-nav product-nav-dots">
                    <a
                      href="#"
                      className="active"
                      style={{ background: "#2d272b" }}
                    >
                      <span className="sr-only">Color name</span>
                    </a>
                    <a href="#" style={{ background: "#8f957d" }}>
                      <span className="sr-only">Color name</span>
                    </a>
                  </div>
                  {/* End .product-nav */}
                </div>
                {/* End .product-body */}
              </div>
              {/* End .product */}

              <div className="product product-2">
                <figure className="product-media">
                  <a href="product.html">
                    <img
                      src="assets/images/demos/demo-5/products/product-2-1.jpg"
                      alt="Product image"
                      className="product-image"
                    />
                    <img
                      src="assets/images/demos/demo-5/products/product-2-2.jpg"
                      alt="Product image"
                      className="product-image-hover"
                    />
                  </a>

                  <div className="product-action-vertical">
                    <a
                      href="#"
                      className="btn-product-icon btn-wishlist btn-expandable"
                      title="Add to wishlist"
                    >
                      <span>add to wishlist</span>
                    </a>
                  </div>
                  {/* End .product-action */}

                  <div className="product-action product-action-transparent">
                    <a href="#" className="btn-product btn-cart">
                      <span>add to cart</span>
                    </a>
                  </div>
                  {/* End .product-action */}
                </figure>
                {/* End .product-media */}

                <div className="product-body">
                  <div className="product-cat">
                    <a href="#">Clothing</a>
                  </div>
                  {/* End .product-cat */}
                  <h3 className="product-title">
                    <a href="product.html">Dress with a belt</a>
                  </h3>
                  {/* End .product-title */}
                  <div className="product-price">$29.99</div>
                  {/* End .product-price */}
                </div>
                {/* End .product-body */}
              </div>
              {/* End .product */}

              <div className="product product-2">
                <figure className="product-media">
                  <a href="product.html">
                    <img
                      src="assets/images/demos/demo-5/products/product-3-1.jpg"
                      alt="Product image"
                      className="product-image"
                    />
                    <img
                      src="assets/images/demos/demo-5/products/product-3-2.jpg"
                      alt="Product image"
                      className="product-image-hover"
                    />
                  </a>

                  <div className="product-action-vertical">
                    <a
                      href="#"
                      className="btn-product-icon btn-wishlist btn-expandable"
                      title="Add to wishlist"
                    >
                      <span>add to wishlist</span>
                    </a>
                  </div>
                  {/* End .product-action */}

                  <div className="product-action product-action-transparent">
                    <a href="#" className="btn-product btn-cart">
                      <span>add to cart</span>
                    </a>
                  </div>
                  {/* End .product-action */}
                </figure>
                {/* End .product-media */}

                <div className="product-body">
                  <div className="product-cat">
                    <a href="#">Shoes</a>
                  </div>
                  {/* End .product-cat */}
                  <h3 className="product-title">
                    <a href="product.html">Sandals</a>
                  </h3>
                  {/* End .product-title */}
                  <div className="product-price">
                    <span className="new-price">Now $24.99</span>
                    <span className="old-price">Was $30.99</span>
                  </div>
                  {/* End .product-price */}
                </div>
                {/* End .product-body */}
              </div>
              {/* End .product */}

              <div className="product product-2">
                <figure className="product-media">
                  <a href="product.html">
                    <img
                      src="assets/images/demos/demo-5/products/product-4-1.jpg"
                      alt="Product image"
                      className="product-image"
                    />
                    <img
                      src="assets/images/demos/demo-5/products/product-4-2.jpg"
                      alt="Product image"
                      className="product-image-hover"
                    />
                  </a>

                  <div className="product-action-vertical">
                    <a
                      href="#"
                      className="btn-product-icon btn-wishlist btn-expandable"
                      title="Add to wishlist"
                    >
                      <span>add to wishlist</span>
                    </a>
                  </div>
                  {/* End .product-action */}

                  <div className="product-action product-action-transparent">
                    <a href="#" className="btn-product btn-cart">
                      <span>add to cart</span>
                    </a>
                  </div>
                  {/* End .product-action */}
                </figure>
                {/* End .product-media */}

                <div className="product-body">
                  <div className="product-cat">
                    <a href="#">Handbags</a>
                  </div>
                  {/* End .product-cat */}
                  <h3 className="product-title">
                    <a href="product.html">Bucket bag</a>
                  </h3>
                  {/* End .product-title */}
                  <div className="product-price">$17.99</div>
                  {/* End .product-price */}
                </div>
                {/* End .product-body */}
              </div>
              {/* End .product */}
              <div className="product product-2">
                <figure className="product-media">
                  <a href="product.html">
                    <img
                      src="assets/images/demos/demo-5/products/product-1-1.jpg"
                      alt="Product image"
                      className="product-image"
                    />
                    <img
                      src="assets/images/demos/demo-5/products/product-1-2.jpg"
                      alt="Product image"
                      className="product-image-hover"
                    />
                  </a>

                  <div className="product-action-vertical">
                    <a
                      href="#"
                      className="btn-product-icon btn-wishlist btn-expandable"
                      title="Add to wishlist"
                    >
                      <span>add to wishlist</span>
                    </a>
                  </div>
                  {/* End .product-action */}

                  <div className="product-action product-action-transparent">
                    <a href="#" className="btn-product btn-cart">
                      <span>add to cart</span>
                    </a>
                  </div>
                  {/* End .product-action */}
                </figure>
                {/* End .product-media */}

                <div className="product-body">
                  <div className="product-cat">
                    <a href="#">Clothing</a>
                  </div>
                  {/* End .product-cat */}
                  <h3 className="product-title">
                    <a href="product.html">Vest dress</a>
                  </h3>
                  {/* End .product-title */}
                  <div className="product-price">$9.99</div>
                  {/* End .product-price */}

                  <div className="product-nav product-nav-dots">
                    <a
                      href="#"
                      className="active"
                      style={{ background: "#2d272b" }}
                    >
                      <span className="sr-only">Color name</span>
                    </a>
                    <a href="#" style={{ background: "#8f957d" }}>
                      <span className="sr-only">Color name</span>
                    </a>
                  </div>
                  {/* End .product-nav */}
                </div>
                {/* End .product-body */}
              </div>
              {/* End .product */}
            </div>
            {/* End .owl-carousel */}
          </div>
          {/* .End .tab-pane */}
          <div
            className="tab-pane p-0 fade"
            id="trendy-women-tab"
            role="tabpanel"
            aria-labelledby="trendy-women-link"
          >
            <div
              className="owl-carousel owl-simple carousel-equal-height carousel-with-shadow"
              data-toggle="owl"
              data-owl-options='{
                                "nav": false, 
                                "dots": true,
                                "margin": 20,
                                "loop": false,
                                "responsive": {
                                    "0": {
                                        "items":2
                                    },
                                    "480": {
                                        "items":2
                                    },
                                    "768": {
                                        "items":3
                                    },
                                    "992": {
                                        "items":4
                                    },
                                    "1200": {
                                        "items":4,
                                        "nav": true
                                    }
                                }
                            }'
            ></div>
            {/* End .owl-carousel */}
          </div>
          {/* .End .tab-pane */}
          <div
            className="tab-pane p-0 fade"
            id="trendy-men-tab"
            role="tabpanel"
            aria-labelledby="trendy-men-link"
          >
            <div
              className="owl-carousel owl-simple carousel-equal-height carousel-with-shadow"
              data-toggle="owl"
              data-owl-options='{
                                "nav": false, 
                                "dots": true,
                                "margin": 20,
                                "loop": false,
                                "responsive": {
                                    "0": {
                                        "items":2
                                    },
                                    "480": {
                                        "items":2
                                    },
                                    "768": {
                                        "items":3
                                    },
                                    "992": {
                                        "items":4
                                    },
                                    "1200": {
                                        "items":4,
                                        "nav": true
                                    }
                                }
                            }'
            ></div>
            {/* End .owl-carousel */}
          </div>
          {/* .End .tab-pane */}
          <div
            className="tab-pane p-0 fade"
            id="trendy-access-tab"
            role="tabpanel"
            aria-labelledby="trendy-access-link"
          >
            <div
              className="owl-carousel owl-simple carousel-equal-height carousel-with-shadow"
              data-toggle="owl"
              data-owl-options='{
                                "nav": false, 
                                "dots": true,
                                "margin": 20,
                                "loop": false,
                                "responsive": {
                                    "0": {
                                        "items":2
                                    },
                                    "480": {
                                        "items":2
                                    },
                                    "768": {
                                        "items":3
                                    },
                                    "992": {
                                        "items":4
                                    },
                                    "1200": {
                                        "items":4,
                                        "nav": true
                                    }
                                }
                            }'
            ></div>
            {/* End .owl-carousel */}
          </div>
          {/* .End .tab-pane */}
        </div>
        {/* End .tab-content */}
      </div>
    </>
  );
}
export default TrendyProducts;
