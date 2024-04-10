import React from "react";
import TrendyProducts from "./TrendyProducts/TrendyProducts";

function Dashboard() {
  return (
    <>
      <main className="main">
        <div className="intro-slider-container mb-0">
          <div
            className="intro-slider owl-carousel owl-theme owl-nav-inside owl-light"
            data-toggle="owl"
            data-owl-options='{"nav": false, "dots": false}'
          >
            <div
              className="intro-slide"
              style={{
                backgroundImage:
                  "url(assets/images/demos/demo-5/slider/slide-1.jpg)",
              }}
            >
              <div className="container intro-content text-center">
                <h3 className="intro-subtitle text-white">Don’t Miss</h3>
                {/* End .h3 intro-subtitle */}
                <h1 className="intro-title text-white">Mystery Deals</h1>
                {/* End .intro-title */}
                <div className="intro-text text-white">Online Only</div>
                {/* End .intro-text */}
                <a href="category.html" className="btn btn-primary">
                  Discover NOW
                </a>
              </div>
              {/* End .intro-content */}
            </div>
            {/* End .intro-slide */}

            <div
              className="intro-slide"
              style={{
                backgroundImage:
                  "url(assets/images/demos/demo-5/slider/slide-2.jpg)",
              }}
            >
              <div className="container intro-content text-center">
                <h3 className="intro-subtitle text-white">Limited time only</h3>
                {/* End .h3 intro-subtitle */}
                <h1 className="intro-title text-white">Treat your self</h1>
                {/* End .intro-title */}
                <div className="intro-text text-white">Up to 50% off</div>
                {/* End .intro-text */}
                <a href="category.html" className="btn btn-primary">
                  Shop NOW
                </a>
              </div>
              {/* End .intro-content */}
            </div>
            {/* End .intro-slide */}
          </div>
          {/* End .intro-slider owl-carousel owl-theme */}

          <span className="slider-loader text-white"></span>
          {/* End .slider-loader */}
        </div>
        {/* End .intro-slider-container */}

        <div
          className="brands-border owl-carousel owl-simple mb-5"
          data-toggle="owl"
          data-owl-options='{
                    "nav": false, 
                    "dots": false,
                    "margin": 0,
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
                        },
                        "1360": {
                            "items":7
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

        <div className="container">
          <div className="banner-group">
            <div className="row">
              <div className="col-md-6">
                <div className="banner banner-border">
                  <a href="#">
                    <img
                      src="assets/images/demos/demo-5/banners/banner-1.jpg"
                      alt="Banner"
                    />
                  </a>

                  <div className="banner-content">
                    <h4 className="banner-subtitle">
                      <a href="#">Trending now</a>
                    </h4>
                    {/* End .banner-subtitle */}
                    <h3 className="banner-title">
                      <a href="#">
                        <span>
                          This Week's
                          <br />
                          Most Wanted
                        </span>
                      </a>
                    </h3>
                    {/* End .banner-title */}
                    <a
                      href="#"
                      className="btn btn-outline-primary-2 banner-link"
                    >
                      Discover Now<i className="icon-long-arrow-right"></i>
                    </a>
                  </div>
                  {/* End .banner-content */}
                </div>
                {/* End .banner */}
              </div>
              {/* End .col-md-6*/}

              <div className="col-md-6">
                <div className="banner banner-border-hover">
                  <a href="#">
                    <img
                      src="assets/images/demos/demo-5/banners/banner-2.jpg"
                      alt="Banner"
                    />
                  </a>

                  <div className="banner-content">
                    <h4 className="banner-subtitle">
                      <a href="#">Limited time only.</a>
                    </h4>
                    {/* End .banner-subtitle */}
                    <h3 className="banner-title">
                      <a href="#">
                        <span>
                          Trainers & Sportwear
                          <br />
                          Sale Up to 70% off
                        </span>
                      </a>
                    </h3>
                    {/* End .banner-title */}
                    <a
                      href="#"
                      className="btn btn-outline-primary-2 banner-link"
                    >
                      Shop Now<i className="icon-long-arrow-right"></i>
                    </a>
                  </div>
                  {/* End .banner-content */}
                </div>
                {/* End .banner */}

                <div className="banner banner-border-hover">
                  <a href="#">
                    <img
                      src="assets/images/demos/demo-5/banners/banner-3.jpg"
                      alt="Banner"
                    />
                  </a>

                  <div className="banner-content">
                    <h4 className="banner-subtitle">
                      <a href="#">This week we love...</a>
                    </h4>
                    {/* End .banner-subtitle */}
                    <h3 className="banner-title">
                      <a href="#">
                        <span>
                          Womens <br />
                          Holiday Clothes
                        </span>
                      </a>
                    </h3>
                    {/* End .banner-title */}
                    <a
                      href="#"
                      className="btn btn-outline-primary-2 banner-link"
                    >
                      Discover Now<i className="icon-long-arrow-right"></i>
                    </a>
                  </div>
                  {/* End .banner-content */}
                </div>
                {/* End .banner */}
              </div>
              {/* End .col-md-6 */}
            </div>
            {/* End .row */}
          </div>
          {/* End .banner-group */}
        </div>
        {/* End .container */}

        <div className="mb-4"></div>
        {/* End .mb-6 */}

        <TrendyProducts/>
        {/* End .container */}

        <div className="mb-5"></div>
        {/* End .mb-5 */}

        <div
          className="video-banner video-banner-bg bg-image text-center"
          style={{
            backgroundImage: "url(assets/images/demos/demo-5/bg-2.jpg)",
          }}
        >
          <div className="container">
            <h3 className="video-banner-title h1 text-white">
              <span>New Collection</span>
              <strong>
                Winter’19 <i>/</i> Spring’20
              </strong>
            </h3>
            {/* End .video-banner-title */}
            <a
              href="https://www.youtube.com/watch?v=vBPgmASQ1A0"
              className="btn-video btn-iframe"
            >
              <i className="icon-play"></i>
            </a>
          </div>
          {/* End .container */}
        </div>
        {/* End .video-banner bg-image */}

        <div className="pt-6 pb-6" style={{ backgroundColor: "#fff" }}>
          <div className="container">
            <div className="banner-set">
              <div className="row">
                <div className="col-lg-6">
                  <div className="banner-set-content text-center">
                    <div className="set-content-wrapper">
                      <h4>Special</h4>
                      <h2>Refine Your Style.</h2>

                      <p>
                        Get on our exclusive email list and be the first to hear
                        about sales, coupons, new arrivals and more!{" "}
                      </p>

                      <div className="banner-set-products">
                        <div className="row">
                          <div className="products">
                            <div className="col-6">
                              <div className="product product-2 text-center">
                                <figure className="product-media">
                                  <a href="product.html">
                                    <img
                                      src="assets/images/demos/demo-5/products/product-13.jpg"
                                      alt="Product image"
                                      className="product-image"
                                    />
                                  </a>
                                </figure>
                                {/* End .product-media */}

                                <div className="product-body">
                                  <h3 className="product-title">
                                    <a href="product.html">Rib-knit cardigan</a>
                                  </h3>
                                  {/* End .product-title */}
                                  <div className="product-price">$24.99</div>
                                  {/* End .product-price */}
                                </div>
                                {/* End .product-body */}
                              </div>
                              {/* End .product */}
                            </div>
                            {/* End .col-sm-6 */}

                            <div className="col-6">
                              <div className="product product-2 text-center">
                                <figure className="product-media">
                                  <a href="product.html">
                                    <img
                                      src="assets/images/demos/demo-5/products/product-14.jpg"
                                      alt="Product image"
                                      className="product-image"
                                    />
                                  </a>
                                </figure>
                                {/* End .product-media */}

                                <div className="product-body">
                                  <h3 className="product-title">
                                    <a href="product.html">
                                      Linen-blend trousers
                                    </a>
                                  </h3>
                                  {/* End .product-title */}
                                  <div className="product-price">$19.99</div>
                                  {/* End .product-price */}
                                </div>
                                {/* End .product-body */}
                              </div>
                              {/* End .product */}
                            </div>
                            {/* End .col-sm-6 */}
                          </div>
                        </div>
                        {/* End .row */}
                      </div>
                      {/* End .banner-set-products */}
                    </div>
                    {/* End .set-content-wrapper */}
                  </div>
                  {/* End .banner-set-content */}
                </div>
                {/* End .col-lg-6 */}
                <div className="col-lg-6">
                  <div className="banner-set-image banner-border-hover">
                    <a href="#">
                      <img
                        src="assets/images/demos/demo-5/banners/banner-4.jpg"
                        alt="banner"
                      />
                    </a>
                    <div className="banner-content">
                      <h3 className="banner-title">
                        <a href="#">
                          <span>
                            Casual basics and
                            <br />
                            trendy key pieces.
                          </span>
                        </a>
                      </h3>
                      {/* End .banner-title */}
                      <h4 className="banner-subtitle">in this look</h4>
                      {/* End .banner-subtitle */}
                      <h4 className="banner-detail">
                        • Rib-knit cardigan <br />• Linen-blend paper bag
                        trousers
                      </h4>
                      <h4 className="banner-price">$19.99 - $48.00</h4>
                      <a
                        href="#"
                        className="btn btn-outline-primary-2 banner-link"
                      >
                        buy all
                      </a>
                    </div>
                    {/* End .banner-content */}
                  </div>
                  {/* End .banner-set-image */}
                </div>
                {/* End .col-lg-6 */}
              </div>
              {/* End .row */}
            </div>
            {/* End .banner-set */}
          </div>
          {/* End .container */}
        </div>
        {/* End .bg-lighter pt6 pb-6 */}

        <div className="container pt-6 new-arrivals">
          <div className="heading heading-center mb-3">
            <h2 className="title">New Arrivals</h2>
            {/* End .title */}

            <ul className="nav nav-pills justify-content-center" role="tablist">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  id="new-all-link"
                  data-toggle="tab"
                  href="#new-all-tab"
                  role="tab"
                  aria-controls="new-all-tab"
                  aria-selected="true"
                >
                  All
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  id="new-cloth-link"
                  data-toggle="tab"
                  href="#new-cloth-tab"
                  role="tab"
                  aria-controls="new-cloth-tab"
                  aria-selected="false"
                >
                  Clothing
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  id="new-shoes-link"
                  data-toggle="tab"
                  href="#new-shoes-tab"
                  role="tab"
                  aria-controls="new-shoes-tab"
                  aria-selected="false"
                >
                  Shoes & Boots
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  id="new-access-link"
                  data-toggle="tab"
                  href="#new-access-tab"
                  role="tab"
                  aria-controls="new-access-tab"
                  aria-selected="false"
                >
                  Accessories
                </a>
              </li>
            </ul>
          </div>
          {/* End .heading */}

          <div className="tab-content">
            <div
              className="tab-pane p-0 fade show active"
              id="new-all-tab"
              role="tabpanel"
              aria-labelledby="new-all-link"
            >
              <div className="products">
                <div className="row justify-content-center">
                  <div className="col-6 col-md-4 col-lg-3">
                    <div className="product product-2">
                      <figure className="product-media">
                        <a href="product.html">
                          <img
                            src="assets/images/demos/demo-5/products/product-5-1.jpg"
                            alt="Product image"
                            className="product-image"
                          />
                          <img
                            src="assets/images/demos/demo-5/products/product-5-2.jpg"
                            alt="Product image"
                            className="product-image-hover"
                          />
                        </a>

                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist"
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
                          <a href="product.html">Linen-blend dress</a>
                        </h3>
                        {/* End .product-title */}
                        <div className="product-price">$60.00</div>
                        {/* End .product-price */}
                        <div className="product-nav product-nav-dots">
                          <a
                            href="#"
                            className="active"
                            style={{ background: "#e5dcb1" }}
                          >
                            <span className="sr-only">Color name</span>
                          </a>
                          <a href="#" style={{ background: "#b9cbd8" }}>
                            <span className="sr-only">Color name</span>
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
                    <div className="product product-2">
                      <figure className="product-media">
                        <a href="product.html">
                          <img
                            src="assets/images/demos/demo-5/products/product-6-1.jpg"
                            alt="Product image"
                            className="product-image"
                          />
                          <img
                            src="assets/images/demos/demo-5/products/product-6-2.jpg"
                            alt="Product image"
                            className="product-image-hover"
                          />
                        </a>

                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist"
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
                          <a href="product.html">Sandals with lacing</a>
                        </h3>
                        {/* End .product-title */}
                        <div className="product-price">
                          <span className="new-price">Now $70.00</span>
                          <span className="old-price">Was $155.00</span>
                        </div>
                        {/* End .product-price */}
                      </div>
                      {/* End .product-body */}
                    </div>
                    {/* End .product */}
                  </div>
                  {/* End .col-sm-6 col-md-4 col-lg-3 */}
                  <div className="col-6 col-md-4 col-lg-3">
                    <div className="product product-2">
                      <figure className="product-media">
                        <a href="product.html">
                          <img
                            src="assets/images/demos/demo-5/products/product-7-1.jpg"
                            alt="Product image"
                            className="product-image"
                          />
                          <img
                            src="assets/images/demos/demo-5/products/product-7-2.jpg"
                            alt="Product image"
                            className="product-image-hover"
                          />
                        </a>

                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist"
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
                          <a href="product.html">Paper bag trousers</a>
                        </h3>
                        {/* End .product-title */}
                        <div className="product-price">$60.00</div>
                        {/* End .product-price */}
                        <div className="product-nav product-nav-dots">
                          <a
                            href="#"
                            className="active"
                            style={{ background: "#9fac76" }}
                          >
                            <span className="sr-only">Color name</span>
                          </a>
                          <a href="#" style={{ background: "#333333" }}>
                            <span className="sr-only">Color name</span>
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
                    <div className="product product-2">
                      <figure className="product-media">
                        <a href="product.html">
                          <img
                            src="assets/images/demos/demo-5/products/product-8-1.jpg"
                            alt="Product image"
                            className="product-image"
                          />
                          <img
                            src="assets/images/demos/demo-5/products/product-8-2.jpg"
                            alt="Product image"
                            className="product-image-hover"
                          />
                        </a>

                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist"
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
                          <a href="product.html">Paper straw shopper</a>
                        </h3>
                        {/* End .product-title */}
                        <div className="product-price">$398.00</div>
                        {/* End .product-price */}
                      </div>
                      {/* End .product-body */}
                    </div>
                    {/* End .product */}
                  </div>
                  {/* End .col-sm-6 col-md-4 col-lg-3 */}
                  <div className="col-6 col-md-4 col-lg-3">
                    <div className="product product-2">
                      <figure className="product-media">
                        <a href="product.html">
                          <img
                            src="assets/images/demos/demo-5/products/product-9-1.jpg"
                            alt="Product image"
                            className="product-image"
                          />
                          <img
                            src="assets/images/demos/demo-5/products/product-9-2.jpg"
                            alt="Product image"
                            className="product-image-hover"
                          />
                        </a>

                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist"
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
                        <div className="product-price">$350.00</div>
                        {/* End .product-price */}
                        <div className="product-nav product-nav-dots">
                          <a
                            href="#"
                            className="active"
                            style={{ background: "#e3a84d" }}
                          >
                            <span className="sr-only">Color name</span>
                          </a>
                          <a href="#" style={{ background: "#f48a5b" }}>
                            <span className="sr-only">Color name</span>
                          </a>
                          <a href="#" style={{ background: "#333333" }}>
                            <span className="sr-only">Color name</span>
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
                    <div className="product product-2">
                      <figure className="product-media">
                        <a href="product.html">
                          <img
                            src="assets/images/demos/demo-5/products/product-10-1.jpg"
                            alt="Product image"
                            className="product-image"
                          />
                          <img
                            src="assets/images/demos/demo-5/products/product-10-2.jpg"
                            alt="Product image"
                            className="product-image-hover"
                          />
                        </a>

                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist"
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
                          <a href="product.html">Silk-blend kaftan</a>
                        </h3>
                        {/* End .product-title */}
                        <div className="product-price">Now $370.00</div>
                        {/* End .product-price */}
                      </div>
                      {/* End .product-body */}
                    </div>
                    {/* End .product */}
                  </div>
                  {/* End .col-sm-6 col-md-4 col-lg-3 */}
                  <div className="col-6 col-md-4 col-lg-3">
                    <div className="product product-2">
                      <figure className="product-media">
                        <a href="product.html">
                          <img
                            src="assets/images/demos/demo-5/products/product-11-1.jpg"
                            alt="Product image"
                            className="product-image"
                          />
                          <img
                            src="assets/images/demos/demo-5/products/product-11-2.jpg"
                            alt="Product image"
                            className="product-image-hover"
                          />
                        </a>

                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist"
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
                          <a href="product.html">Linen-blend jumpsuit</a>
                        </h3>
                        {/* End .product-title */}
                        <div className="product-price">$595.00</div>
                        {/* End .product-price */}
                      </div>
                      {/* End .product-body */}
                    </div>
                    {/* End .product */}
                  </div>
                  {/* End .col-sm-6 col-md-4 col-lg-3 */}
                  <div className="col-6 col-md-4 col-lg-3">
                    <div className="product product-2">
                      <figure className="product-media">
                        <a href="product.html">
                          <img
                            src="assets/images/demos/demo-5/products/product-12-1.jpg"
                            alt="Product image"
                            className="product-image"
                          />
                          <img
                            src="assets/images/demos/demo-5/products/product-12-2.jpg"
                            alt="Product image"
                            className="product-image-hover"
                          />
                        </a>

                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist"
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
                          <span className="new-price">Now $120.00</span>
                          <span className="old-price">Was $140.00</span>
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
            </div>
            {/* .End .tab-pane */}
            <div
              className="tab-pane p-0 fade"
              id="new-cloth-tab"
              role="tabpanel"
              aria-labelledby="new-cloth-link"
            >
              <div className="products">
                <div className="row justify-content-center">
                  <div className="col-6 col-md-4 col-lg-3">
                    <div className="product product-2">
                      <figure className="product-media">
                        <a href="product.html">
                          <img
                            src="assets/images/demos/demo-5/products/product-5-1.jpg"
                            alt="Product image"
                            className="product-image"
                          />
                          <img
                            src="assets/images/demos/demo-5/products/product-5-2.jpg"
                            alt="Product image"
                            className="product-image-hover"
                          />
                        </a>

                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist"
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
                          <a href="product.html">Linen-blend dress</a>
                        </h3>
                        {/* End .product-title */}
                        <div className="product-price">$60.00</div>
                        {/* End .product-price */}
                        <div className="product-nav product-nav-dots">
                          <a
                            href="#"
                            className="active"
                            style={{ background: "#e5dcb1" }}
                          >
                            <span className="sr-only">Color name</span>
                          </a>
                          <a href="#" style={{ background: "#b9cbd8" }}>
                            <span className="sr-only">Color name</span>
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
                    <div className="product product-2">
                      <figure className="product-media">
                        <a href="product.html">
                          <img
                            src="assets/images/demos/demo-5/products/product-7-1.jpg"
                            alt="Product image"
                            className="product-image"
                          />
                          <img
                            src="assets/images/demos/demo-5/products/product-7-2.jpg"
                            alt="Product image"
                            className="product-image-hover"
                          />
                        </a>

                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist"
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
                          <a href="product.html">Paper bag trousers</a>
                        </h3>
                        {/* End .product-title */}
                        <div className="product-price">$60.00</div>
                        {/* End .product-price */}
                        <div className="product-nav product-nav-dots">
                          <a
                            href="#"
                            className="active"
                            style={{ background: "#9fac76" }}
                          >
                            <span className="sr-only">Color name</span>
                          </a>
                          <a href="#" style={{ background: "#333333" }}>
                            <span className="sr-only">Color name</span>
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
                    <div className="product product-2">
                      <figure className="product-media">
                        <a href="product.html">
                          <img
                            src="assets/images/demos/demo-5/products/product-10-1.jpg"
                            alt="Product image"
                            className="product-image"
                          />
                          <img
                            src="assets/images/demos/demo-5/products/product-10-2.jpg"
                            alt="Product image"
                            className="product-image-hover"
                          />
                        </a>

                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist"
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
                          <a href="product.html">Silk-blend kaftan</a>
                        </h3>
                        {/* End .product-title */}
                        <div className="product-price">Now $370.00</div>
                        {/* End .product-price */}
                      </div>
                      {/* End .product-body */}
                    </div>
                    {/* End .product */}
                  </div>
                  {/* End .col-sm-6 col-md-4 col-lg-3 */}
                  <div className="col-6 col-md-4 col-lg-3">
                    <div className="product product-2">
                      <figure className="product-media">
                        <a href="product.html">
                          <img
                            src="assets/images/demos/demo-5/products/product-11-1.jpg"
                            alt="Product image"
                            className="product-image"
                          />
                          <img
                            src="assets/images/demos/demo-5/products/product-11-2.jpg"
                            alt="Product image"
                            className="product-image-hover"
                          />
                        </a>

                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist"
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
                          <a href="product.html">Linen-blend jumpsuit</a>
                        </h3>
                        {/* End .product-title */}
                        <div className="product-price">$595.00</div>
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
            </div>
            {/* .End .tab-pane */}
            <div
              className="tab-pane p-0 fade"
              id="new-shoes-tab"
              role="tabpanel"
              aria-labelledby="new-shoes-link"
            >
              <div className="products">
                <div className="row justify-content-center">
                  <div className="col-6 col-md-4 col-lg-3">
                    <div className="product product-2">
                      <figure className="product-media">
                        <a href="product.html">
                          <img
                            src="assets/images/demos/demo-5/products/product-6-1.jpg"
                            alt="Product image"
                            className="product-image"
                          />
                          <img
                            src="assets/images/demos/demo-5/products/product-6-2.jpg"
                            alt="Product image"
                            className="product-image-hover"
                          />
                        </a>

                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist"
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
                          <a href="product.html">Sandals with lacing</a>
                        </h3>
                        {/* End .product-title */}
                        <div className="product-price">
                          <span className="new-price">Now $70.00</span>
                          <span className="old-price">Was $155.00</span>
                        </div>
                        {/* End .product-price */}
                      </div>
                      {/* End .product-body */}
                    </div>
                    {/* End .product */}
                  </div>
                  {/* End .col-sm-6 col-md-4 col-lg-3 */}
                  <div className="col-6 col-md-4 col-lg-3">
                    <div className="product product-2">
                      <figure className="product-media">
                        <a href="product.html">
                          <img
                            src="assets/images/demos/demo-5/products/product-12-1.jpg"
                            alt="Product image"
                            className="product-image"
                          />
                          <img
                            src="assets/images/demos/demo-5/products/product-12-2.jpg"
                            alt="Product image"
                            className="product-image-hover"
                          />
                        </a>

                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist"
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
                          <span className="new-price">Now $120.00</span>
                          <span className="old-price">Was $140.00</span>
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
            </div>
            {/* .End .tab-pane */}
            <div
              className="tab-pane p-0 fade"
              id="new-access-tab"
              role="tabpanel"
              aria-labelledby="new-access-link"
            >
              <div className="products">
                <div className="row justify-content-center">
                  <div className="col-6 col-md-4 col-lg-3">
                    <div className="product product-2">
                      <figure className="product-media">
                        <a href="product.html">
                          <img
                            src="assets/images/demos/demo-5/products/product-8-1.jpg"
                            alt="Product image"
                            className="product-image"
                          />
                          <img
                            src="assets/images/demos/demo-5/products/product-8-2.jpg"
                            alt="Product image"
                            className="product-image-hover"
                          />
                        </a>

                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist"
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
                          <a href="product.html">Paper straw shopper</a>
                        </h3>
                        {/* End .product-title */}
                        <div className="product-price">$398.00</div>
                        {/* End .product-price */}
                      </div>
                      {/* End .product-body */}
                    </div>
                    {/* End .product */}
                  </div>
                  {/* End .col-sm-6 col-md-4 col-lg-3 */}
                  <div className="col-6 col-md-4 col-lg-3">
                    <div className="product product-2">
                      <figure className="product-media">
                        <a href="product.html">
                          <img
                            src="assets/images/demos/demo-5/products/product-9-1.jpg"
                            alt="Product image"
                            className="product-image"
                          />
                          <img
                            src="assets/images/demos/demo-5/products/product-9-2.jpg"
                            alt="Product image"
                            className="product-image-hover"
                          />
                        </a>

                        <div className="product-action-vertical">
                          <a
                            href="#"
                            className="btn-product-icon btn-wishlist"
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
                        <div className="product-price">$350.00</div>
                        {/* End .product-price */}
                        <div className="product-nav product-nav-dots">
                          <a
                            href="#"
                            className="active"
                            style={{ background: "#e3a84d" }}
                          >
                            <span className="sr-only">Color name</span>
                          </a>
                          <a href="#" style={{ background: "#f48a5b" }}>
                            <span className="sr-only">Color name</span>
                          </a>
                          <a href="#" style={{ background: "#333333" }}>
                            <span className="sr-only">Color name</span>
                          </a>
                        </div>
                        {/* End .product-nav */}
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
            </div>
            {/* .End .tab-pane */}
          </div>
          {/* End .tab-content */}

          <div className="more-container text-center mt-1 mb-3">
            <a
              href="#"
              className="btn btn-outline-primary-2 btn-round btn-more"
            >
              Load more
            </a>
          </div>
          {/* End .more-container */}
        </div>
        {/* End .container */}

        <div className="mb-2"></div>
        {/* End .mb-2 */}

        <div className="container">
          <div className="cta cta-separator mb-5">
            <div className="row">
              <div className="col-lg-6">
                <div className="cta-wrapper cta-text text-center">
                  <h3 className="cta-title">Shop Social</h3>
                  {/* End .cta-title */}
                  <p className="cta-desc">
                    Donec nec justo eget felis facilisis fermentum. Aliquam
                    porttitor mauris sit amet orci.{" "}
                  </p>
                  {/* End .cta-desc */}

                  <div className="social-icons social-icons-colored justify-content-center">
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
                      className="social-icon social-instagram"
                      title="Instagram"
                      target="_blank"
                    >
                      <i className="icon-instagram"></i>
                    </a>
                    <a
                      href="#"
                      className="social-icon social-youtube"
                      title="Youtube"
                      target="_blank"
                    >
                      <i className="icon-youtube"></i>
                    </a>
                    <a
                      href="#"
                      className="social-icon social-pinterest"
                      title="Pinterest"
                      target="_blank"
                    >
                      <i className="icon-pinterest"></i>
                    </a>
                  </div>
                  {/* End .soial-icons */}
                </div>
                {/* End .cta-wrapper */}
              </div>
              {/* End .col-lg-6 */}

              <div className="col-lg-6">
                <div className="cta-wrapper text-center">
                  <h3 className="cta-title">Get the Latest Deals</h3>
                  {/* End .cta-title */}
                  <p className="cta-desc">
                    and <br />
                    receive <span className="text-primary">$20 coupon</span> for
                    first shopping
                  </p>
                  {/* End .cta-desc */}

                  <form action="#">
                    <div className="input-group">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Enter your Email Address"
                        aria-label="Email Adress"
                        required
                      />
                      <div className="input-group-append">
                        <button
                          className="btn btn-primary btn-rounded"
                          type="submit"
                        >
                          <i className="icon-long-arrow-right"></i>
                        </button>
                      </div>
                      {/* .End .input-group-append */}
                    </div>
                    {/* .End .input-group */}
                  </form>
                </div>
                {/* End .cta-wrapper */}
              </div>
              {/* End .col-lg-6 */}
            </div>
            {/* End .row */}
          </div>
          {/* End .cta */}
        </div>
        {/* End .container */}

        <div
          className="bg-lighter pt-7 pb-4"
          style={{ backgroundColor: "#fafafa" }}
        >
          <div className="container">
            <div className="instagram-feed-container">
              <div className="row">
                <div className="feed-col">
                  <div className="instagram-feed">
                    <img
                      src="assets/images/demos/demo-5/instagram/1.jpg"
                      alt="img"
                    />

                    <div className="instagram-feed-content">
                      <a href="#">
                        <i className="icon-heart-o"></i>387
                      </a>
                      <a href="#">
                        <i className="icon-comments"></i>45
                      </a>
                    </div>
                    {/* End .instagram-feed-content */}
                  </div>
                  {/* End .instagram-feed */}
                </div>
                {/* End .feed-col */}

                <div className="feed-col">
                  <div className="instagram-feed">
                    <img
                      src="assets/images/demos/demo-5/instagram/2.jpg"
                      alt="img"
                    />

                    <div className="instagram-feed-content">
                      <a href="#">
                        <i className="icon-heart-o"></i>691
                      </a>
                      <a href="#">
                        <i className="icon-comments"></i>87
                      </a>
                    </div>
                    {/* End .instagram-feed-content */}
                  </div>
                  {/* End .instagram-feed */}
                </div>
                {/* End .feed-col */}

                <div className="feed-col feed-col-title">
                  <div className="instagram-feed-title">
                    <i className="icon-instagram"></i>
                    <p>
                      @Molla_store <br />
                      on instagram
                    </p>
                    <a href="#">FOLLOW</a>
                  </div>
                  {/* End .instagram-feed-title */}
                </div>
                {/* End .feed-col */}

                <div className="feed-col">
                  <div className="instagram-feed">
                    <img
                      src="assets/images/demos/demo-5/instagram/3.jpg"
                      alt="img"
                    />

                    <div className="instagram-feed-content">
                      <a href="#">
                        <i className="icon-heart-o"></i>321
                      </a>
                      <a href="#">
                        <i className="icon-comments"></i>54
                      </a>
                    </div>
                    {/* End .instagram-feed-content */}
                  </div>
                  {/* End .instagram-feed */}
                </div>
                {/* End .feed-col */}

                <div className="feed-col">
                  <div className="instagram-feed">
                    <img
                      src="assets/images/demos/demo-5/instagram/4.jpg"
                      alt="img"
                    />

                    <div className="instagram-feed-content">
                      <a href="#">
                        <i className="icon-heart-o"></i>44
                      </a>
                      <a href="#">
                        <i className="icon-comments"></i>55
                      </a>
                    </div>
                    {/* End .instagram-feed-content */}
                  </div>
                  {/* End .instagram-feed */}
                </div>
                {/* End .feed-col */}

                <div className="feed-col">
                  <div className="instagram-feed">
                    <img
                      src="assets/images/demos/demo-5/instagram/5.jpg"
                      alt="img"
                    />

                    <div className="instagram-feed-content">
                      <a href="#">
                        <i className="icon-heart-o"></i>128
                      </a>
                      <a href="#">
                        <i className="icon-comments"></i>99
                      </a>
                    </div>
                    {/* End .instagram-feed-content */}
                  </div>
                  {/* End .instagram-feed */}
                </div>
                {/* End .feed-col */}

                <div className="feed-col">
                  <div className="instagram-feed">
                    <img
                      src="assets/images/demos/demo-5/instagram/6.jpg"
                      alt="img"
                    />

                    <div className="instagram-feed-content">
                      <a href="#">
                        <i className="icon-heart-o"></i>433
                      </a>
                      <a href="#">
                        <i className="icon-comments"></i>25
                      </a>
                    </div>
                    {/* End .instagram-feed-content */}
                  </div>
                  {/* End .instagram-feed */}
                </div>
                {/* End .feed-col */}

                <div className="feed-col">
                  <div className="instagram-feed">
                    <img
                      src="assets/images/demos/demo-5/instagram/7.jpg"
                      alt="img"
                    />

                    <div className="instagram-feed-content">
                      <a href="#">
                        <i className="icon-heart-o"></i>588
                      </a>
                      <a href="#">
                        <i className="icon-comments"></i>44
                      </a>
                    </div>
                    {/* End .instagram-feed-content */}
                  </div>
                  {/* End .instagram-feed */}
                </div>
                {/* End .feed-col */}

                <div className="feed-col">
                  <div className="instagram-feed">
                    <img
                      src="assets/images/demos/demo-5/instagram/8.jpg"
                      alt="img"
                    />

                    <div className="instagram-feed-content">
                      <a href="#">
                        <i className="icon-heart-o"></i>87
                      </a>
                      <a href="#">
                        <i className="icon-comments"></i>23
                      </a>
                    </div>
                    {/* End .instagram-feed-content */}
                  </div>
                  {/* End .instagram-feed */}
                </div>
                {/* End .feed-col */}

                <div className="feed-col">
                  <div className="instagram-feed">
                    <img
                      src="assets/images/demos/demo-5/instagram/9.jpg"
                      alt="img"
                    />

                    <div className="instagram-feed-content">
                      <a href="#">
                        <i className="icon-heart-o"></i>87
                      </a>
                      <a href="#">
                        <i className="icon-comments"></i>23
                      </a>
                    </div>
                    {/* End .instagram-feed-content */}
                  </div>
                  {/* End .instagram-feed */}
                </div>
                {/* End .feed-col */}
              </div>
              {/* End .row */}
            </div>
            {/* End .instagra-feed-container */}

            <div className="row justify-content-center">
              <div className="col-sm-6 col-lg-4">
                <div className="icon-box icon-box-side">
                  <span className="icon-box-icon text-dark">
                    <i className="icon-rocket"></i>
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
              {/* End .col-sm-6 col-lg-4 */}

              <div className="col-sm-6 col-lg-4">
                <div className="icon-box icon-box-side">
                  <span className="icon-box-icon text-dark">
                    <i className="icon-refresh"></i>
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
              {/* End .col-sm-6 col-lg-4 */}

              <div className="col-sm-6 col-lg-4">
                <div className="icon-box icon-box-side">
                  <span className="icon-box-icon text-dark">
                    <i className="icon-life-ring"></i>
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
              {/* End .col-sm-6 col-lg-4 */}
            </div>
            {/* End .row */}
          </div>
          {/* End .container */}
        </div>
        {/* End .bg-lighter pt-5 pb-5 */}
      </main>
      {/* End .main */}
    </>
  );
}
export default Dashboard;
