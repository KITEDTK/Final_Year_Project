// import { Link } from "react-router-dom";
export function Dashboard() {
  return (
    <>
      <main className="main">
        <div className="intro-slider-container">
          <div
            className="intro-slider owl-carousel owl-theme owl-nav-inside owl-light"
            data-toggle="owl"
            data-owl-options='{
                        "dots": false,
                        "nav": false, 
                        "responsive": {
                            "992": {
                                "nav": true
                            }
                        }
                    }'
          >
            <div
              className="intro-slide"
              style={{
                backgroundImage:
                  "url(assets/images/demos/demo-6/slider/slide-1.jpg)",
              }}
            >
              <div className="container intro-content text-center">
                <h3 className="intro-subtitle text-white">
                  You're Looking Good
                </h3>
                {/* End .h3 intro-subtitle */}
                <h1 className="intro-title text-white">New Lookbook</h1>
                {/* End .intro-title */}

                <a href="category.html" className="btn btn-outline-white-4">
                  <span>Discover More</span>
                </a>
              </div>
              {/* End .intro-content */}
            </div>
            {/* End .intro-slide */}

            <div
              className="intro-slide"
              style={{
                backgroundImage:
                  "url(assets/images/demos/demo-6/slider/slide-2.jpg)",
              }}
            >
              <div className="container intro-content text-center">
                <h3 className="intro-subtitle text-white">Don’t Miss</h3>
                {/* End .h3 intro-subtitle */}
                <h1 className="intro-title text-white">Mysrety Deals</h1>
                {/* End .intro-title */}

                <a href="category.html" className="btn btn-outline-white-4">
                  <span>Discover More</span>
                </a>
              </div>
              {/* End .intro-content */}
            </div>
            {/* End .intro-slide */}
          </div>
          {/* End .intro-slider owl-carousel owl-theme */}

          <span className="slider-loader"></span>
          {/* End .slider-loader */}
        </div>
        {/* End .intro-slider-container */}

        <div className="pt-2 pb-3">
          <div className="container">
            <div className="row">
              <div className="col-sm-6">
                <div className="banner banner-overlay">
                  <a href="#">
                    <img
                      src="assets/images/demos/demo-6/banners/banner-1.jpg"
                      alt="Banner"
                    />
                  </a>

                  <div className="banner-content banner-content-center">
                    <h4 className="banner-subtitle text-white">
                      <a href="#">New in</a>
                    </h4>
                    {/* End .banner-subtitle */}
                    <h3 className="banner-title text-white">
                      <a href="#" />
                      <strong>Women’s</strong>
                    </h3>
                    {/* End .banner-title */}
                    <a
                      href="#"
                      className="btn btn-outline-white banner-link underline"
                    >
                      Shop Now
                    </a>
                  </div>
                  {/* End .banner-content */}
                </div>
                {/* End .banner */}
              </div>
              {/* End .col-sm-6 */}

              <div className="col-sm-6">
                <div className="banner banner-overlay">
                  <a href="#">
                    <img
                      src="assets/images/demos/demo-6/banners/banner-2.jpg"
                      alt="Banner"
                    />
                  </a>

                  <div className="banner-content banner-content-center">
                    <h4 className="banner-subtitle text-white">
                      <a href="#">New in</a>
                    </h4>
                    {/* End .banner-subtitle */}
                    <h3 className="banner-title text-white">
                      <a href="#">
                        <strong>Men’s</strong>
                      </a>
                    </h3>
                    {/* End .banner-title */}
                    <a
                      href="#"
                      className="btn btn-outline-white banner-link underline"
                    >
                      Shop Now
                    </a>
                  </div>
                  {/* End .banner-content */}
                </div>
                {/* End .banner */}
              </div>
              {/* End .col-sm-6 */}
            </div>
            {/* End .row */}
            <hr className="mt-0 mb-0" />
          </div>
          {/* End .container */}
        </div>
        {/* End .bg-gray */}

        <div className="mb-5"></div>
        {/* End .mb-5 */}
        <div className="container">
          <div className="heading heading-center mb-3">
            <h2 className="title">Trending</h2>
            {/* End .title */}

            <ul className="nav nav-pills justify-content-center" role="tablist">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  id="trending-all-link"
                  data-toggle="tab"
                  href="#trending-all-tab"
                  role="tab"
                  aria-controls="trending-all-tab"
                  aria-selected="true"
                >
                  All
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  id="trending-women-link"
                  data-toggle="tab"
                  href="#trending-women-tab"
                  role="tab"
                  aria-controls="trending-women-tab"
                  aria-selected="false"
                >
                  Women
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  id="trending-men-link"
                  data-toggle="tab"
                  href="#trending-men-tab"
                  role="tab"
                  aria-controls="trending-men-tab"
                  aria-selected="false"
                >
                  Men
                </a>
              </li>
            </ul>
          </div>
          {/* End .heading */}

          <div className="tab-content tab-content-carousel">
            <div
              className="tab-pane p-0 fade show active"
              id="trending-all-tab"
              role="tabpanel"
              aria-labelledby="trending-all-link"
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
                                        "nav": true,
                                        "dots": false
                                    }
                                }
                            }'
              >
                <div className="product product-7 text-center">
                  <figure className="product-media">
                    <a href="product.html">
                      <img
                        src="assets/images/demos/demo-6/products/product-1-1.jpg"
                        alt="Product image"
                        className="product-image"
                      />
                      <img
                        src="assets/images/demos/demo-6/products/product-1-2.jpg"
                        alt="Product image"
                        className="product-image-hover"
                      />
                    </a>

                    <div className="product-action-vertical">
                      <a
                        href="#"
                        className="btn-product-icon btn-wishlist btn-expandable"
                      >
                        <span>add to wishlist</span>
                      </a>
                    </div>
                    {/* End .product-action-vertical */}

                    <div className="product-action">
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
                      <a href="product.html">Denim jacket</a>
                    </h3>
                    {/* End .product-title */}
                    <div className="product-price">$19.99</div>
                    {/* End .product-price */}

                    <div className="product-nav product-nav-thumbs">
                      <a href="#" className="active">
                        <img
                          src="assets/images/demos/demo-6/products/product-1-thumb.jpg"
                          alt="product desc"
                        />
                      </a>
                      <a href="#">
                        <img
                          src="assets/images/demos/demo-6/products/product-1-2-thumb.jpg"
                          alt="product desc"
                        />
                      </a>
                      <a href="#">
                        <img
                          src="assets/images/demos/demo-6/products/product-1-3-thumb.jpg"
                          alt="product desc"
                        />
                      </a>
                    </div>
                    {/* End .product-nav */}
                  </div>
                  {/* End .product-body */}
                </div>
                {/* End .product */}

                <div className="product product-7 text-center">
                  <figure className="product-media">
                    <a href="product.html">
                      <img
                        src="assets/images/demos/demo-6/products/product-2-1.jpg"
                        alt="Product image"
                        className="product-image"
                      />
                      <img
                        src="assets/images/demos/demo-6/products/product-2-2.jpg"
                        alt="Product image"
                        className="product-image-hover"
                      />
                    </a>

                    <div className="product-action-vertical">
                      <a
                        href="#"
                        className="btn-product-icon btn-wishlist btn-expandable"
                      >
                        <span>add to wishlist</span>
                      </a>
                    </div>
                    {/* End .product-action-vertical */}

                    <div className="product-action">
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
                    <div className="product-price">$24.99</div>
                    {/* End .product-price */}
                  </div>
                  {/* End .product-body */}
                </div>
                {/* End .product */}

                <div className="product product-7 text-center">
                  <figure className="product-media">
                    <span className="product-label label-sale">sale</span>
                    <a href="product.html">
                      <img
                        src="assets/images/demos/demo-6/products/product-3-1.jpg"
                        alt="Product image"
                        className="product-image"
                      />
                      <img
                        src="assets/images/demos/demo-6/products/product-3-2.jpg"
                        alt="Product image"
                        className="product-image-hover"
                      />
                    </a>

                    <div className="product-action-vertical">
                      <a
                        href="#"
                        className="btn-product-icon btn-wishlist btn-expandable"
                      >
                        <span>add to wishlist</span>
                      </a>
                    </div>
                    {/* End .product-action-vertical */}

                    <div className="product-action">
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
                      <a href="product.html">Printed sweatshirt</a>
                    </h3>
                    {/* End .product-title */}
                    <div className="product-price">
                      <span className="new-price">Now $7.99</span>
                      <span className="old-price">Was $12.99</span>
                    </div>
                    {/* End .product-price */}
                  </div>
                  {/* End .product-body */}
                </div>
                {/* End .product */}

                <div className="product product-7 text-center">
                  <figure className="product-media">
                    <a href="product.html">
                      <img
                        src="assets/images/demos/demo-6/products/product-4-1.jpg"
                        alt="Product image"
                        className="product-image"
                      />
                      <img
                        src="assets/images/demos/demo-6/products/product-4-2.jpg"
                        alt="Product image"
                        className="product-image-hover"
                      />
                    </a>

                    <div className="product-action-vertical">
                      <a
                        href="#"
                        className="btn-product-icon btn-wishlist btn-expandable"
                      >
                        <span>add to wishlist</span>
                      </a>
                    </div>
                    {/* End .product-action-vertical */}

                    <div className="product-action">
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
                      <a href="product.html">Linen-blend paper bag trousers</a>
                    </h3>
                    {/* End .product-title */}
                    <div className="product-price">$17.99</div>
                    {/* End .product-price */}

                    <div className="product-nav product-nav-thumbs">
                      <a href="#" className="active">
                        <img
                          src="assets/images/demos/demo-6/products/product-4-thumb.jpg"
                          alt="product desc"
                        />
                      </a>
                      <a href="#">
                        <img
                          src="assets/images/demos/demo-6/products/product-4-2-thumb.jpg"
                          alt="product desc"
                        />
                      </a>
                    </div>
                    {/* End .product-nav */}
                  </div>
                  {/* End .product-body */}
                </div>
                {/* End .product */}

                <div className="product product-7 text-center">
                  <figure className="product-media">
                    <a href="product.html">
                      <img
                        src="assets/images/demos/demo-6/products/product-1-1.jpg"
                        alt="Product image"
                        className="product-image"
                      />
                      <img
                        src="assets/images/demos/demo-6/products/product-1-2.jpg"
                        alt="Product image"
                        className="product-image-hover"
                      />
                    </a>

                    <div className="product-action-vertical">
                      <a
                        href="#"
                        className="btn-product-icon btn-wishlist btn-expandable"
                      >
                        <span>add to wishlist</span>
                      </a>
                    </div>
                    {/* End .product-action-vertical */}

                    <div className="product-action">
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
                      <a href="product.html">Denim jacket</a>
                    </h3>
                    {/* End .product-title */}
                    <div className="product-price">$19.99</div>
                    {/* End .product-price */}

                    <div className="product-nav product-nav-thumbs">
                      <a href="#" className="active">
                        <img
                          src="assets/images/demos/demo-6/products/product-1-thumb.jpg"
                          alt="product desc"
                        />
                      </a>
                      <a href="#">
                        <img
                          src="assets/images/demos/demo-6/products/product-1-2-thumb.jpg"
                          alt="product desc"
                        />
                      </a>
                      <a href="#">
                        <img
                          src="assets/images/demos/demo-6/products/product-1-3-thumb.jpg"
                          alt="product desc"
                        />
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
              id="trending-women-tab"
              role="tabpanel"
              aria-labelledby="trending-women-link"
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
                                        "items":0
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
                                        "nav": true,
                                        "dots": false
                                    }
                                }
                            }'
              >
                <div className="product product-7 text-center">
                  <figure className="product-media">
                    <span className="product-label label-sale">sale</span>
                    <a href="product.html">
                      <img
                        src="assets/images/demos/demo-6/products/product-3-1.jpg"
                        alt="Product image"
                        className="product-image"
                      />
                      <img
                        src="assets/images/demos/demo-6/products/product-3-2.jpg"
                        alt="Product image"
                        className="product-image-hover"
                      />
                    </a>

                    <div className="product-action-vertical">
                      <a
                        href="#"
                        className="btn-product-icon btn-wishlist btn-expandable"
                      >
                        <span>add to wishlist</span>
                      </a>
                    </div>
                    {/* End .product-action-vertical */}

                    <div className="product-action">
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
                      <a href="product.html">Printed sweatshirt</a>
                    </h3>
                    {/* End .product-title */}
                    <div className="product-price">
                      <span className="new-price">Now $7.99</span>
                      <span className="old-price">Was $12.99</span>
                    </div>
                    {/* End .product-price */}
                  </div>
                  {/* End .product-body */}
                </div>
                {/* End .product */}

                <div className="product product-7 text-center">
                  <figure className="product-media">
                    <a href="product.html">
                      <img
                        src="assets/images/demos/demo-6/products/product-4-1.jpg"
                        alt="Product image"
                        className="product-image"
                      />
                      <img
                        src="assets/images/demos/demo-6/products/product-4-2.jpg"
                        alt="Product image"
                        className="product-image-hover"
                      />
                    </a>

                    <div className="product-action-vertical">
                      <a
                        href="#"
                        className="btn-product-icon btn-wishlist btn-expandable"
                      >
                        <span>add to wishlist</span>
                      </a>
                    </div>
                    {/* End .product-action-vertical */}

                    <div className="product-action">
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
                      <a href="product.html">Linen-blend paper bag trousers</a>
                    </h3>
                    {/* End .product-title */}
                    <div className="product-price">$17.99</div>
                    {/* End .product-price */}

                    <div className="product-nav product-nav-thumbs">
                      <a href="#" className="active">
                        <img
                          src="assets/images/demos/demo-6/products/product-4-thumb.jpg"
                          alt="product desc"
                        />
                      </a>
                      <a href="#">
                        <img
                          src="assets/images/demos/demo-6/products/product-4-2-thumb.jpg"
                          alt="product desc"
                        />
                      </a>
                    </div>
                    {/* End .product-nav */}
                  </div>
                  {/* End .product-body */}
                </div>
                {/* End .product */}

                <div className="product product-7 text-center">
                  <figure className="product-media">
                    <a href="product.html">
                      <img
                        src="assets/images/demos/demo-6/products/product-1-1.jpg"
                        alt="Product image"
                        className="product-image"
                      />
                      <img
                        src="assets/images/demos/demo-6/products/product-1-2.jpg"
                        alt="Product image"
                        className="product-image-hover"
                      />
                    </a>

                    <div className="product-action-vertical">
                      <a
                        href="#"
                        className="btn-product-icon btn-wishlist btn-expandable"
                      >
                        <span>add to wishlist</span>
                      </a>
                    </div>
                    {/* End .product-action-vertical */}

                    <div className="product-action">
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
                      <a href="product.html">Denim jacket</a>
                    </h3>
                    {/* End .product-title */}
                    <div className="product-price">$19.99</div>
                    {/* End .product-price */}

                    <div className="product-nav product-nav-thumbs">
                      <a href="#" className="active">
                        <img
                          src="assets/images/demos/demo-6/products/product-1-thumb.jpg"
                          alt="product desc"
                        />
                      </a>
                      <a href="#">
                        <img
                          src="assets/images/demos/demo-6/products/product-1-2-thumb.jpg"
                          alt="product desc"
                        />
                      </a>
                      <a href="#">
                        <img
                          src="assets/images/demos/demo-6/products/product-1-3-thumb.jpg"
                          alt="product desc"
                        />
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
              id="trending-men-tab"
              role="tabpanel"
              aria-labelledby="trending-men-link"
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
                                        "items":0
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
                                        "nav": true,
                                        "dots": false
                                    }
                                }
                            }'
              >
                <div className="product product-7 text-center">
                  <figure className="product-media">
                    <span className="product-label label-sale">sale</span>
                    <a href="product.html">
                      <img
                        src="assets/images/demos/demo-6/products/product-3-1.jpg"
                        alt="Product image"
                        className="product-image"
                      />
                      <img
                        src="assets/images/demos/demo-6/products/product-3-2.jpg"
                        alt="Product image"
                        className="product-image-hover"
                      />
                    </a>

                    <div className="product-action-vertical">
                      <a
                        href="#"
                        className="btn-product-icon btn-wishlist btn-expandable"
                      >
                        <span>add to wishlist</span>
                      </a>
                    </div>
                    {/* End .product-action-vertical */}

                    <div className="product-action">
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
                      <a href="product.html">Printed sweatshirt</a>
                    </h3>
                    {/* End .product-title */}
                    <div className="product-price">
                      <span className="new-price">Now $7.99</span>
                      <span className="old-price">Was $12.99</span>
                    </div>
                    {/* End .product-price */}
                  </div>
                  {/* End .product-body */}
                </div>
                {/* End .product */}
              </div>
              {/* End .owl-carousel */}
            </div>
            {/* .End .tab-pane */}
          </div>
          {/* End .tab-content */}
        </div>
        {/* End .container */}

        <div className="mb-5"></div>
        {/* End .mb-5 */}

        <div
          className="deal bg-image pt-8 pb-8"
          style={{
            backgroundImage: "url(assets/images/demos/demo-6/deal/bg-1.jpg)",
          }}
        >
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-sm-12 col-md-8 col-lg-6">
                <div className="deal-content text-center">
                  <h4>Limited quantities. </h4>
                  <h2>Deal of the Day</h2>
                  <div className="deal-countdown" data-until="+10h"></div>
                  {/* End .deal-countdown */}
                </div>
                {/* End .deal-content */}
                <div className="row deal-products">
                  <div className="col-6 deal-product text-center">
                    <figure className="product-media">
                      <a href="product.html">
                        <img
                          src="assets/images/demos/demo-6/deal/product-1.jpg"
                          alt="Product image"
                          className="product-image"
                        />
                      </a>
                    </figure>
                    {/* End .product-media */}

                    <div className="product-body">
                      <h3 className="product-title">
                        <a href="product.html">Elasticated cotton shorts</a>
                      </h3>
                      {/* End .product-title */}
                      <div className="product-price">
                        <span className="new-price">Now $24.99</span>
                        <span className="old-price">Was $30.99</span>
                      </div>
                      {/* End .product-price */}
                    </div>
                    {/* End .product-body */}
                    <a href="category.html" className="action">
                      shop now
                    </a>
                  </div>
                  <div className="col-6 deal-product text-center">
                    <figure className="product-media">
                      <a href="product.html">
                        <img
                          src="assets/images/demos/demo-6/deal/product-2.jpg"
                          alt="Product image"
                          className="product-image"
                        />
                      </a>
                    </figure>
                    {/* End .product-media */}

                    <div className="product-body">
                      <h3 className="product-title">
                        <a href="product.html">Fine-knit jumper</a>
                      </h3>
                      {/* End .product-title */}
                      <div className="product-price">
                        <span className="new-price">Now $8.99</span>
                        <span className="old-price">Was $17.99</span>
                      </div>
                      {/* End .product-price */}
                    </div>
                    {/* End .product-body */}
                    <a href="category.html" className="action">
                      shop now
                    </a>
                  </div>
                </div>
              </div>
              {/* End .col-lg-5 */}
            </div>
            {/* End .row */}
          </div>
          {/* End .container */}
        </div>
        {/* End .deal */}

        <div className="pt-4 pb-3" style={{ backgroundColor: "#222" }}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-3 col-sm-6">
                <div className="icon-box text-center">
                  <span className="icon-box-icon">
                    <i className="icon-truck"></i>
                  </span>
                  <div className="icon-box-content">
                    <h3 className="icon-box-title">Payment & Delivery</h3>
                    {/* End .icon-box-title */}
                    <p>Free shipping for orders over $50</p>
                  </div>
                  {/* End .icon-box-content */}
                </div>
                {/* End .icon-box */}
              </div>
              {/* End .col-lg-3 col-sm-6 */}

              <div className="col-lg-3 col-sm-6">
                <div className="icon-box text-center">
                  <span className="icon-box-icon">
                    <i className="icon-rotate-left"></i>
                  </span>
                  <div className="icon-box-content">
                    <h3 className="icon-box-title">Return & Refund</h3>
                    {/* End .icon-box-title */}
                    <p>Free 100% money back guarantee</p>
                  </div>
                  {/* End .icon-box-content */}
                </div>
                {/* End .icon-box */}
              </div>
              {/* End .col-lg-3 col-sm-6 */}

              <div className="col-lg-3 col-sm-6">
                <div className="icon-box text-center">
                  <span className="icon-box-icon">
                    <i className="icon-unlock"></i>
                  </span>
                  <div className="icon-box-content">
                    <h3 className="icon-box-title">Secure Payment</h3>
                    {/* End .icon-box-title */}
                    <p>100% secure payment</p>
                  </div>
                  {/* End .icon-box-content */}
                </div>
                {/* End .icon-box */}
              </div>
              {/* End .col-lg-3 col-sm-6 */}

              <div className="col-lg-3 col-sm-6">
                <div className="icon-box text-center">
                  <span className="icon-box-icon">
                    <i className="icon-headphones"></i>
                  </span>
                  <div className="icon-box-content">
                    <h3 className="icon-box-title">Quality Support</h3>
                    {/* End .icon-box-title */}
                    <p>Alway online feedback 24/7</p>
                  </div>
                  {/* End .icon-box-content */}
                </div>
                {/* End .icon-box */}
              </div>
              {/* End .col-lg-3 col-sm-6 */}
            </div>
            {/* End .row */}
          </div>
          {/* End .container */}
        </div>
        {/* End .bg-light pt-2 pb-2 */}

        <div className="mb-6"></div>
        {/* End .mb-5 */}

        <div className="container">
          <h2 className="title text-center mb-4">New Arrivals</h2>
          {/* End .title text-center */}

          <div className="products">
            <div className="row justify-content-center">
              <div className="col-6 col-md-4 col-lg-3">
                <div className="product product-7 text-center">
                  <figure className="product-media">
                    <span className="product-label label-sale">Sale</span>
                    <a href="product.html">
                      <img
                        src="assets/images/demos/demo-6/products/product-5-1.jpg"
                        alt="Product image"
                        className="product-image"
                      />
                      <img
                        src="assets/images/demos/demo-6/products/product-5-2.jpg"
                        alt="Product image"
                        className="product-image-hover"
                      />
                    </a>

                    <div className="product-action-vertical">
                      <a
                        href="#"
                        className="btn-product-icon btn-wishlist btn-expandable"
                      >
                        <span>add to wishlist</span>
                      </a>
                    </div>
                    {/* End .product-action-vertical */}

                    <div className="product-action">
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
                      <a href="product.html">Tie-detail top</a>
                    </h3>
                    {/* End .product-title */}
                    <div className="product-price">
                      <span className="new-price">Now $3.99</span>
                      <span className="old-price">Was $6.99</span>
                    </div>
                    {/* End .product-price */}
                  </div>
                  {/* End .product-body */}
                </div>
                {/* End .product */}
              </div>
              {/* End .col-sm-6 col-md-4 col-lg-3 */}

              <div className="col-6 col-md-4 col-lg-3">
                <div className="product product-7 text-center">
                  <figure className="product-media">
                    <a href="product.html">
                      <img
                        src="assets/images/demos/demo-6/products/product-6-1.jpg"
                        alt="Product image"
                        className="product-image"
                      />
                      <img
                        src="assets/images/demos/demo-6/products/product-6-2.jpg"
                        alt="Product image"
                        className="product-image-hover"
                      />
                    </a>

                    <div className="product-action-vertical">
                      <a
                        href="#"
                        className="btn-product-icon btn-wishlist btn-expandable"
                      >
                        <span>add to wishlist</span>
                      </a>
                    </div>
                    {/* End .product-action-vertical */}

                    <div className="product-action">
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
                    <div className="product-price">$12.99</div>
                    {/* End .product-price */}
                  </div>
                  {/* End .product-body */}
                </div>
                {/* End .product */}
              </div>
              {/* End .col-sm-6 col-md-4 col-lg-3 */}

              <div className="col-6 col-md-4 col-lg-3">
                <div className="product product-7 text-center">
                  <figure className="product-media">
                    <a href="product.html">
                      <img
                        src="assets/images/demos/demo-6/products/product-7-1.jpg"
                        alt="Product image"
                        className="product-image"
                      />
                      <img
                        src="assets/images/demos/demo-6/products/product-7-2.jpg"
                        alt="Product image"
                        className="product-image-hover"
                      />
                    </a>

                    <div className="product-action-vertical">
                      <a
                        href="#"
                        className="btn-product-icon btn-wishlist btn-expandable"
                      >
                        <span>add to wishlist</span>
                      </a>
                    </div>
                    {/* End .product-action-vertical */}

                    <div className="product-action">
                      <a href="#" className="btn-product btn-cart">
                        <span>add to cart</span>
                      </a>
                    </div>
                    {/* End .product-action */}
                  </figure>
                  {/* End .product-media */}

                  <div className="product-body">
                    <div className="product-cat">
                      <a href="#">Bags</a>
                    </div>
                    {/* End .product-cat */}
                    <h3 className="product-title">
                      <a href="product.html">Small bucket bag</a>
                    </h3>
                    {/* End .product-title */}
                    <div className="product-price">$14.99</div>
                    {/* End .product-price */}

                    <div className="product-nav product-nav-thumbs">
                      <a href="#" className="active">
                        <img
                          src="assets/images/demos/demo-6/products/product-7-thumb.jpg"
                          alt="product desc"
                        />
                      </a>
                      <a href="#">
                        <img
                          src="assets/images/demos/demo-6/products/product-7-2-thumb.jpg"
                          alt="product desc"
                        />
                      </a>
                    </div>
                    {/* End .product-nav */}
                  </div>
                  {/* End .product-body */}
                </div>
                {/* End .product */}
              </div>
              {/* End .col-sm-6 col-md-4 col-lg-3 */}

              <div className="col-6 col-md-4 col-lg-3">
                <div className="product product-7 text-center">
                  <figure className="product-media">
                    <a href="product.html">
                      <img
                        src="assets/images/demos/demo-6/products/product-8-1.jpg"
                        alt="Product image"
                        className="product-image"
                      />
                      <img
                        src="assets/images/demos/demo-6/products/product-8-2.jpg"
                        alt="Product image"
                        className="product-image-hover"
                      />
                    </a>

                    <div className="product-action-vertical">
                      <a
                        href="#"
                        className="btn-product-icon btn-wishlist btn-expandable"
                      >
                        <span>add to wishlist</span>
                      </a>
                    </div>
                    {/* End .product-action-vertical */}

                    <div className="product-action">
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
                      <a href="product.html">Denim jacket</a>
                    </h3>
                    {/* End .product-title */}
                    <div className="product-price">$34.99</div>
                    {/* End .product-price */}
                  </div>
                  {/* End .product-body */}
                </div>
                {/* End .product */}
              </div>
              {/* End .col-sm-6 col-md-4 col-lg-3 */}

              <div className="col-6 col-md-4 col-lg-3">
                <div className="product product-7 text-center">
                  <figure className="product-media">
                    <a href="product.html">
                      <img
                        src="assets/images/demos/demo-6/products/product-9-1.jpg"
                        alt="Product image"
                        className="product-image"
                      />
                      <img
                        src="assets/images/demos/demo-6/products/product-9-2.jpg"
                        alt="Product image"
                        className="product-image-hover"
                      />
                    </a>

                    <div className="product-action-vertical">
                      <a
                        href="#"
                        className="btn-product-icon btn-wishlist btn-expandable"
                      >
                        <span>add to wishlist</span>
                      </a>
                    </div>
                    {/* End .product-action-vertical */}

                    <div className="product-action">
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
                      <a href="product.html">BShort wrap dress</a>
                    </h3>
                    {/* End .product-title */}
                    <div className="product-price">$17.99</div>
                    {/* End .product-price */}
                  </div>
                  {/* End .product-body */}
                </div>
                {/* End .product */}
              </div>
              {/* End .col-sm-6 col-md-4 col-lg-3 */}

              <div className="col-6 col-md-4 col-lg-3">
                <div className="product product-7 text-center">
                  <figure className="product-media">
                    <a href="product.html">
                      <img
                        src="assets/images/demos/demo-6/products/product-10-1.jpg"
                        alt="Product image"
                        className="product-image"
                      />
                      <img
                        src="assets/images/demos/demo-6/products/product-10-2.jpg"
                        alt="Product image"
                        className="product-image-hover"
                      />
                    </a>

                    <div className="product-action-vertical">
                      <a
                        href="#"
                        className="btn-product-icon btn-wishlist btn-expandable"
                      >
                        <span>add to wishlist</span>
                      </a>
                    </div>
                    {/* End .product-action-vertical */}

                    <div className="product-action">
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
                      <a href="product.html">Biker jacket</a>
                    </h3>
                    {/* End .product-title */}
                    <div className="product-price">$34.99</div>
                    {/* End .product-price */}

                    <div className="product-nav product-nav-thumbs">
                      <a href="#" className="active">
                        <img
                          src="assets/images/demos/demo-6/products/product-10-thumb.jpg"
                          alt="product desc"
                        />
                      </a>
                      <a href="#">
                        <img
                          src="assets/images/demos/demo-6/products/product-10-2-thumb.jpg"
                          alt="product desc"
                        />
                      </a>
                    </div>
                    {/* End .product-nav */}
                  </div>
                  {/* End .product-body */}
                </div>
                {/* End .product */}
              </div>
              {/* End .col-sm-6 col-md-4 col-lg-3 */}

              <div className="col-6 col-md-4 col-lg-3">
                <div className="product product-7 text-center">
                  <figure className="product-media">
                    <a href="product.html">
                      <img
                        src="assets/images/demos/demo-6/products/product-11-1.jpg"
                        alt="Product image"
                        className="product-image"
                      />
                      <img
                        src="assets/images/demos/demo-6/products/product-11-2.jpg"
                        alt="Product image"
                        className="product-image-hover"
                      />
                    </a>

                    <div className="product-action-vertical">
                      <a
                        href="#"
                        className="btn-product-icon btn-wishlist btn-expandable"
                      >
                        <span>add to wishlist</span>
                      </a>
                    </div>
                    {/* End .product-action-vertical */}

                    <div className="product-action">
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
                      <a href="product.html">Loafers</a>
                    </h3>
                    {/* End .product-title */}
                    <div className="product-price">$9.99</div>
                    {/* End .product-price */}
                  </div>
                  {/* End .product-body */}
                </div>
                {/* End .product */}
              </div>
              {/* End .col-sm-6 col-md-4 col-lg-3 */}

              <div className="col-6 col-md-4 col-lg-3">
                <div className="product product-7 text-center">
                  <figure className="product-media">
                    <span className="product-label label-sale">sale</span>
                    <a href="product.html">
                      <img
                        src="assets/images/demos/demo-6/products/product-12-1.jpg"
                        alt="Product image"
                        className="product-image"
                      />
                      <img
                        src="assets/images/demos/demo-6/products/product-12-2.jpg"
                        alt="Product image"
                        className="product-image-hover"
                      />
                    </a>

                    <div className="product-action-vertical">
                      <a
                        href="#"
                        className="btn-product-icon btn-wishlist btn-expandable"
                      >
                        <span>add to wishlist</span>
                      </a>
                    </div>
                    {/* End .product-action-vertical */}

                    <div className="product-action">
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
                      <a href="product.html">Super Skinny High Jeggings</a>
                    </h3>
                    {/* End .product-title */}
                    <div className="product-price">
                      <span className="new-price">Now $12.99</span>
                      <span className="old-price">Was $17.99</span>
                    </div>
                    {/* End .product-price */}
                  </div>
                  {/* End .product-body */}
                </div>
                {/* End .product */}
              </div>
              {/* End .col-sm-6 col-md-4 col-lg-3 */}
            </div>
            {/* End .row */}
          </div>
          {/* End .products */}

          <div className="more-container text-center mt-2">
            <a href="#" className="btn btn-outline-dark-2 btn-more">
              <span>show more</span>
            </a>
          </div>
          {/* End .more-container */}
        </div>
        {/* End .container */}

        <div className="pb-3">
          <div className="container brands pt-5 pt-lg-7 ">
            <h2 className="title text-center mb-4">shop by brands</h2>
            {/* End .title text-center */}

            <div
              className="owl-carousel owl-simple"
              data-toggle="owl"
              data-owl-options='{
                            "nav": false, 
                            "dots": false,
                            "margin": 30,
                            "loop": false,
                            "responsive": {
                                "0": {
                                    "items":2
                                },
                                "420": {
                                    "items":3
                                },
                                "600": {
                                    "items":4
                                },
                                "900": {
                                    "items":5
                                },
                                "1024": {
                                    "items":6
                                }
                            }
                        }'
            >
              <a href="#" className="brand">
                <img src="assets/images/brands/1.png" alt="Brand Name" />
              </a>

              <a href="#" className="brand">
                <img src="assets/images/brands/2.png" alt="Brand Name" />
              </a>

              <a href="#" className="brand">
                <img src="assets/images/brands/3.png" alt="Brand Name" />
              </a>

              <a href="#" className="brand">
                <img src="assets/images/brands/4.png" alt="Brand Name" />
              </a>

              <a href="#" className="brand">
                <img src="assets/images/brands/5.png" alt="Brand Name" />
              </a>

              <a href="#" className="brand">
                <img src="assets/images/brands/6.png" alt="Brand Name" />
              </a>

              <a href="#" className="brand">
                <img src="assets/images/brands/7.png" alt="Brand Name" />
              </a>
            </div>
            {/* End .owl-carousel */}
          </div>
          {/* End .container */}

          <div className="mb-5 mb-lg-7"></div>
          {/* End .mb-5 */}

          <div className="container newsletter">
            <div className="row">
              <div className="col-lg-6 banner-overlay-div">
                <div className="banner banner-overlay">
                  <a href="#">
                    <img
                      src="assets/images/demos/demo-6/banners/banner-3.jpg"
                      alt="Banner"
                    />
                  </a>

                  <div className="banner-content banner-content-center">
                    <h4 className="banner-subtitle text-white">
                      <a href="#">Limited time only.</a>
                    </h4>
                    {/* End .banner-subtitle */}
                    <h3 className="banner-title text-white">
                      <a href="#">
                        End of Season
                        <br />
                        save 50% off
                      </a>
                    </h3>
                    {/* End .banner-title */}
                    <a
                      href="#"
                      className="btn btn-outline-white banner-link underline"
                    >
                      Shop Now
                    </a>
                  </div>
                  {/* End .banner-content */}
                </div>
                {/* End .banner */}
              </div>
              {/* End .col-lg-6 */}

              <div className="col-lg-6 d-flex align-items-stretch subscribe-div">
                <div className="cta cta-box">
                  <div className="cta-content">
                    <h3 className="cta-title">Subscribe To Our Newsletter</h3>
                    {/* End .cta-title */}
                    <p>
                      Sign up now for{" "}
                      <span className="primary-color">10% discount</span> on
                      first order. Customise my news:
                    </p>

                    <form action="#">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Enter your Email Address"
                        aria-label="Email Adress"
                        required
                      />
                      <div className="text-center">
                        <button
                          className="btn btn-outline-dark-2"
                          type="submit"
                        >
                          <span>subscribe</span>
                        </button>
                      </div>
                      {/* End .text-center */}
                    </form>
                  </div>
                  {/* End .cta-content */}
                </div>
                {/* End .cta */}
              </div>
              {/* End .col-lg-6 */}
            </div>
            {/* End .row */}
          </div>
          {/* End .container */}
        </div>
        {/* End .bg-gray */}

        <div className="mb-2"></div>
        {/* End .mb-5 */}

        <div className="container"></div>
        {/* End .container */}

        <div className="blog-posts mb-5">
          <div className="container">
            <h2 className="title text-center mb-4">From Our Blog</h2>
            {/* End .title text-center */}

            <div
              className="owl-carousel owl-simple mb-3"
              data-toggle="owl"
              data-owl-options='{
                            "nav": false, 
                            "dots": true,
                            "items": 3,
                            "margin": 20,
                            "loop": false,
                            "responsive": {
                                "0": {
                                    "items":1
                                },
                                "600": {
                                    "items":2
                                },
                                "992": {
                                    "items":3
                                }
                            }
                        }'
            >
              <article className="entry">
                <figure className="entry-media">
                  <a href="single.html">
                    <img
                      src="assets/images/demos/demo-6/blog/post-1.jpg"
                      alt="image desc"
                    />
                  </a>
                </figure>
                {/* End .entry-media */}

                <div className="entry-body text-center">
                  <div className="entry-meta">
                    <a href="#">Nov 22, 2018</a>, 1 Comments
                  </div>
                  {/* End .entry-meta */}

                  <h3 className="entry-title">
                    <a href="single.html">Sed adipiscing ornare.</a>
                  </h3>
                  {/* End .entry-title */}

                  <div className="entry-content">
                    <a href="single.html" className="read-more">
                      Read More
                    </a>
                  </div>
                  {/* End .entry-content */}
                </div>
                {/* End .entry-body */}
              </article>
              {/* End .entry */}

              <article className="entry">
                <figure className="entry-media">
                  <a href="single.html">
                    <img
                      src="assets/images/demos/demo-6/blog/post-2.jpg"
                      alt="image desc"
                    />
                  </a>
                </figure>
                {/* End .entry-media */}

                <div className="entry-body text-center">
                  <div className="entry-meta">
                    <a href="#">Dec 12, 2018</a>, 0 Comments
                  </div>
                  {/* End .entry-meta */}

                  <h3 className="entry-title">
                    <a href="single.html">Fusce lacinia arcuet nulla.</a>
                  </h3>
                  {/* End .entry-title */}

                  <div className="entry-content">
                    <a href="single.html" className="read-more">
                      Read More
                    </a>
                  </div>
                  {/* End .entry-content */}
                </div>
                {/* End .entry-body */}
              </article>
              {/* End .entry */}

              <article className="entry">
                <figure className="entry-media">
                  <a href="single.html">
                    <img
                      src="assets/images/demos/demo-6/blog/post-3.jpg"
                      alt="image desc"
                    />
                  </a>
                </figure>
                {/* End .entry-media */}

                <div className="entry-body text-center">
                  <div className="entry-meta">
                    <a href="#">Dec 19, 2018</a>, 2 Comments
                  </div>
                  {/* End .entry-meta */}

                  <h3 className="entry-title">
                    <a href="single.html">Quisque volutpat mattis eros.</a>
                  </h3>
                  {/* End .entry-title */}

                  <div className="entry-content">
                    <a href="single.html" className="read-more">
                      Read More
                    </a>
                  </div>
                  {/* End .entry-content */}
                </div>
                {/* End .entry-body */}
              </article>
              {/* End .entry */}
            </div>
            {/* End .owl-carousel */}
          </div>
          {/* End .container */}
        </div>
        {/* End .blog-posts */}
      </main>
      {/* End .main */}
    </>
  );
}

