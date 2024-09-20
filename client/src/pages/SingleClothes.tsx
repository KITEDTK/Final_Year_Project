import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { SingleClothSingleDetail } from '../components/products/SIngleClothSingleDetail';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { fetchSingleClothes } from '../features/products/clothesSlice';
import { CommentSingleCloth } from '../components/comments/CommentSingleCloth';

export const SingleClothes: React.FC = () => {
  const dispatch = useAppDispatch();
  const { clothesId } = useParams<string>();
  useEffect(()=>{
    if(clothesId){
      dispatch(fetchSingleClothes(clothesId));
    }
  },[clothesId, dispatch])
  const singleClothes = useAppSelector((state)=>state.clothes.singleClothes);
  const {clothDetails,category,comments, ...rest} = singleClothes;
  return (
    <>
      <main className="main">
        <nav aria-label="breadcrumb" className="breadcrumb-nav border-0 mb-0">
          <div className="container d-flex align-items-center">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="index.html">Home</a>
              </li>
              <li className="breadcrumb-item">
                <a href="#">Sản phẩm</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Default
              </li>
            </ol>

            <nav className="product-pager ml-auto" aria-label="Product">
            </nav>
            {/*  End .pager-nav */}
          </div>
          {/*  End .container */}
        </nav>
        {/*  End .breadcrumb-nav */}

        <div className="page-content">
          <div className="container">
            {<SingleClothSingleDetail clothesInfo={{rest: rest,clothDetails: clothDetails,category: category}}/>}
            {/*  End .product-details-top */}

            <div className="product-details-tab">
              <ul
                className="nav nav-pills justify-content-center"
                role="tablist"
              >
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    id="product-desc-link"
                    data-toggle="tab"
                    href="#product-desc-tab"
                    role="tab"
                    aria-controls="product-desc-tab"
                    aria-selected="true"
                  >
                    Mô tả
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    id="product-info-link"
                    data-toggle="tab"
                    href="#product-info-tab"
                    role="tab"
                    aria-controls="product-info-tab"
                    aria-selected="false"
                  >
                    Thông tin thêm 
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    id="product-shipping-link"
                    data-toggle="tab"
                    href="#product-shipping-tab"
                    role="tab"
                    aria-controls="product-shipping-tab"
                    aria-selected="false"
                  >
                    Vận chuyển
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    id="product-review-link"
                    data-toggle="tab"
                    href="#product-review-tab"
                    role="tab"
                    aria-controls="product-review-tab"
                    aria-selected="true"
                  >
                    Bình luận ({comments && comments.length})
                  </a>
                </li>
              </ul>
              <div className="tab-content">
                <div
                  className="tab-pane fade show active"
                  id="product-desc-tab"
                  role="tabpanel"
                  aria-labelledby="product-desc-link"
                >
                  <div className="product-desc-content">
                    <h3>Thông tin sản phẩm</h3>
                    <p>
                    Áo thun là một loại trang phục phổ biến, thường được làm từ chất liệu cotton hoặc vải thun co giãn, mang lại cảm giác thoải mái và thoáng mát cho người mặc. Áo thun có nhiều kiểu dáng, từ cổ tròn, cổ tim, đến cổ bẻ, và thường có tay ngắn. Đây là lựa chọn lý tưởng cho những dịp dạo phố, đi học, đi làm hoặc thậm chí là tham gia các hoạt động thể thao nhẹ nhàng. Một số áo thun còn được in hoặc thêu họa tiết, logo, hoặc thông điệp, giúp người mặc thể hiện phong cách và cá tính riêng của mình..{" "}
                    </p>
                    <ul>
                    </ul>
                  </div>
                  {/*  End .product-desc-content */}
                </div>
                {/*  .End .tab-pane */}
                <div
                  className="tab-pane fade"
                  id="product-info-tab"
                  role="tabpanel"
                  aria-labelledby="product-info-link"
                >
                  <div className="product-desc-content">
                    <h3>Thông tin</h3>
                    <p>
                    Áo thun không chỉ đa dạng về kiểu dáng mà còn phong phú về màu sắc và kích cỡ, phù hợp cho cả nam, nữ và trẻ em. Chúng dễ dàng phối hợp với nhiều trang phục khác như quần jeans, chân váy, hoặc quần shorts, tạo nên phong cách thời trang từ đơn giản đến năng động. Ngoài ra, áo thun còn có nhiều dòng sản phẩm chuyên biệt như áo thun thể thao với khả năng thấm hút mồ hôi tốt, áo thun oversized tạo phong cách thoải mái, hay áo thun bodyfit tôn dáng. Đây là một trong những món đồ thời trang không thể thiếu trong tủ đồ của mọi người..{" "}
                    </p>
                  </div>
                  {/*  End .product-desc-content */}
                </div>
                {/*  .End .tab-pane */}
                <div
                  className="tab-pane fade"
                  id="product-shipping-tab"
                  role="tabpanel"
                  aria-labelledby="product-shipping-link"
                >
                  <div className="product-desc-content">
                    <h3>Vận chuyển</h3>
                    <p>
                    Vận chuyển là quá trình chuyển giao hàng hóa từ người bán đến người mua, đóng vai trò quan trọng trong thương mại điện tử. Các phương thức vận chuyển phổ biến bao gồm giao hàng nhanh, giao hàng tiêu chuẩn, hoặc dịch vụ giao hàng quốc tế. Thời gian vận chuyển thường dao động từ 1-3 ngày đối với giao hàng nội địa và từ 5-14 ngày đối với quốc tế, tùy thuộc vào khoảng cách địa lý và phương thức vận chuyển. Để đảm bảo hàng hóa được vận chuyển an toàn, các đơn vị vận chuyển thường sử dụng đóng gói cẩn thận và cung cấp các tùy chọn như theo dõi đơn hàng trực tuyến, hỗ trợ bảo hiểm hàng hóa, và dịch vụ giao hàng tận nơi. Vận chuyển hiệu quả giúp nâng cao trải nghiệm mua sắm của khách hàng.
                    </p>
                  </div>
                  {/*  End .product-desc-content */}
                </div>
                {/*  .End .tab-pane */}
                <CommentSingleCloth commentInfo={comments}/>
                {/*  .End .tab-pane */}
              </div>
              {/*  End .tab-content */}
            </div>
            {/*  End .product-details-tab */}

            <h2 className="title text-center mb-4">You May Also Like</h2>
            {/*  End .title text-center */}
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
                                    "items":1
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
                  <span className="product-label label-new">New</span>
                  <a href="product.html">
                    <img
                      src="assets/images/products/product-4.jpg"
                      alt="Product image"
                      className="product-image"
                    />
                  </a>

                  <div className="product-action-vertical">
                    <a
                      href="#"
                      className="btn-product-icon btn-wishlist btn-expandable"
                    >
                      <span>add to wishlist</span>
                    </a>
                    <a
                      href="popup/quickView.html"
                      className="btn-product-icon btn-quickview"
                      title="Quick view"
                    >
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
                  {/*  End .product-action-vertical */}

                  <div className="product-action">
                    <a href="#" className="btn-product btn-cart">
                      <span>add to cart</span>
                    </a>
                  </div>
                  {/*  End .product-action */}
                </figure>
                {/*  End .product-media */}

                <div className="product-body">
                  <div className="product-cat">
                    <a href="#">Women</a>
                  </div>
                  {/*  End .product-cat */}
                  <h3 className="product-title">
                    <a href="product.html">
                      Brown paperbag waist <br />
                      pencil skirt
                    </a>
                  </h3>
                  {/*  End .product-title */}
                  <div className="product-price">$60.00</div>
                  {/*  End .product-price */}
                  <div className="ratings-container">
                    <div className="ratings">
                      <div
                        className="ratings-val"
                        style={{ width: "20%" }}
                      ></div>
                      {/*  End .ratings-val */}
                    </div>
                    {/*  End .ratings */}
                    <span className="ratings-text">( 2 Reviews )</span>
                  </div>
                  {/*  End .rating-container */}

                  <div className="product-nav product-nav-thumbs">
                    <a href="#" className="active">
                      <img
                        src="assets/images/products/product-4-thumb.jpg"
                        alt="product desc"
                      />
                    </a>
                    <a href="#">
                      <img
                        src="assets/images/products/product-4-2-thumb.jpg"
                        alt="product desc"
                      />
                    </a>

                    <a href="#">
                      <img
                        src="assets/images/products/product-4-3-thumb.jpg"
                        alt="product desc"
                      />
                    </a>
                  </div>
                  {/*  End .product-nav */}
                </div>
                {/*  End .product-body */}
              </div>
              {/*  End .product */}

              <div className="product product-7 text-center">
                <figure className="product-media">
                  <span className="product-label label-out">Out of Stock</span>
                  <a href="product.html">
                    <img
                      src="assets/images/products/product-6.jpg"
                      alt="Product image"
                      className="product-image"
                    />
                  </a>

                  <div className="product-action-vertical">
                    <a
                      href="#"
                      className="btn-product-icon btn-wishlist btn-expandable"
                    >
                      <span>add to wishlist</span>
                    </a>
                    <a
                      href="popup/quickView.html"
                      className="btn-product-icon btn-quickview"
                      title="Quick view"
                    >
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
                  {/*  End .product-action-vertical */}

                  <div className="product-action">
                    <a href="#" className="btn-product btn-cart">
                      <span>add to cart</span>
                    </a>
                  </div>
                  {/*  End .product-action */}
                </figure>
                {/*  End .product-media */}

                <div className="product-body">
                  <div className="product-cat">
                    <a href="#">Jackets</a>
                  </div>
                  {/*  End .product-cat */}
                  <h3 className="product-title">
                    <a href="product.html">Khaki utility boiler jumpsuit</a>
                  </h3>
                  {/*  End .product-title */}
                  <div className="product-price">
                    <span className="out-price">$120.00</span>
                  </div>
                  {/*  End .product-price */}
                  <div className="ratings-container">
                    <div className="ratings">
                      <div
                        className="ratings-val"
                        style={{ width: "80%" }}
                      ></div>
                      {/*  End .ratings-val */}
                    </div>
                    {/*  End .ratings */}
                    <span className="ratings-text">( 6 Reviews )</span>
                  </div>
                  {/*  End .rating-container */}
                </div>
                {/*  End .product-body */}
              </div>
              {/*  End .product */}

              <div className="product product-7 text-center">
                <figure className="product-media">
                  <span className="product-label label-top">Top</span>
                  <a href="product.html">
                    <img
                      src="assets/images/products/product-11.jpg"
                      alt="Product image"
                      className="product-image"
                    />
                  </a>

                  <div className="product-action-vertical">
                    <a
                      href="#"
                      className="btn-product-icon btn-wishlist btn-expandable"
                    >
                      <span>add to wishlist</span>
                    </a>
                    <a
                      href="popup/quickView.html"
                      className="btn-product-icon btn-quickview"
                      title="Quick view"
                    >
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
                  {/*  End .product-action-vertical */}

                  <div className="product-action">
                    <a href="#" className="btn-product btn-cart">
                      <span>add to cart</span>
                    </a>
                  </div>
                  {/*  End .product-action */}
                </figure>
                {/*  End .product-media */}

                <div className="product-body">
                  <div className="product-cat">
                    <a href="#">Shoes</a>
                  </div>
                  {/*  End .product-cat */}
                  <h3 className="product-title">
                    <a href="product.html">
                      Light brown studded Wide fit wedges
                    </a>
                  </h3>
                  {/*  End .product-title */}
                  <div className="product-price">$110.00</div>
                  {/*  End .product-price */}
                  <div className="ratings-container">
                    <div className="ratings">
                      <div
                        className="ratings-val"
                        style={{ width: "80%" }}
                      ></div>
                      {/*  End .ratings-val */}
                    </div>
                    {/*  End .ratings */}
                    <span className="ratings-text">( 1 Reviews )</span>
                  </div>
                  {/*  End .rating-container */}

                  <div className="product-nav product-nav-thumbs">
                    <a href="#" className="active">
                      <img
                        src="assets/images/products/product-11-thumb.jpg"
                        alt="product desc"
                      />
                    </a>
                    <a href="#">
                      <img
                        src="assets/images/products/product-11-2-thumb.jpg"
                        alt="product desc"
                      />
                    </a>

                    <a href="#">
                      <img
                        src="assets/images/products/product-11-3-thumb.jpg"
                        alt="product desc"
                      />
                    </a>
                  </div>
                  {/*  End .product-nav */}
                </div>
                {/*  End .product-body */}
              </div>
              {/*  End .product */}

              <div className="product product-7 text-center">
                <figure className="product-media">
                  <a href="product.html">
                    <img
                      src="assets/images/products/product-10.jpg"
                      alt="Product image"
                      className="product-image"
                    />
                  </a>

                  <div className="product-action-vertical">
                    <a
                      href="#"
                      className="btn-product-icon btn-wishlist btn-expandable"
                    >
                      <span>add to wishlist</span>
                    </a>
                    <a
                      href="popup/quickView.html"
                      className="btn-product-icon btn-quickview"
                      title="Quick view"
                    >
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
                  {/*  End .product-action-vertical */}

                  <div className="product-action">
                    <a href="#" className="btn-product btn-cart">
                      <span>add to cart</span>
                    </a>
                  </div>
                  {/*  End .product-action */}
                </figure>
                {/*  End .product-media */}

                <div className="product-body">
                  <div className="product-cat">
                    <a href="#">Jumpers</a>
                  </div>
                  {/*  End .product-cat */}
                  <h3 className="product-title">
                    <a href="product.html">Yellow button front tea top</a>
                  </h3>
                  {/*  End .product-title */}
                  <div className="product-price">$56.00</div>
                  {/*  End .product-price */}
                  <div className="ratings-container">
                    <div className="ratings">
                      <div
                        className="ratings-val"
                        style={{ width: "0%" }}
                      ></div>
                      {/*  End .ratings-val */}
                    </div>
                    {/*  End .ratings */}
                    <span className="ratings-text">( 0 Reviews )</span>
                  </div>
                  {/*  End .rating-container */}
                </div>
                {/*  End .product-body */}
              </div>
              {/*  End .product */}

              <div className="product product-7 text-center">
                <figure className="product-media">
                  <a href="product.html">
                    <img
                      src="assets/images/products/product-7.jpg"
                      alt="Product image"
                      className="product-image"
                    />
                  </a>

                  <div className="product-action-vertical">
                    <a
                      href="#"
                      className="btn-product-icon btn-wishlist btn-expandable"
                    >
                      <span>add to wishlist</span>
                    </a>
                    <a
                      href="popup/quickView.html"
                      className="btn-product-icon btn-quickview"
                      title="Quick view"
                    >
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
                  {/*  End .product-action-vertical */}

                  <div className="product-action">
                    <a href="#" className="btn-product btn-cart">
                      <span>add to cart</span>
                    </a>
                  </div>
                  {/*  End .product-action */}
                </figure>
                {/*  End .product-media */}

                <div className="product-body">
                  <div className="product-cat">
                    <a href="#">Jeans</a>
                  </div>
                  {/*  End .product-cat */}
                  <h3 className="product-title">
                    <a href="product.html">Blue utility pinafore denim dress</a>
                  </h3>
                  {/*  End .product-title */}
                  <div className="product-price">$76.00</div>
                  {/*  End .product-price */}
                  <div className="ratings-container">
                    <div className="ratings">
                      <div
                        className="ratings-val"
                        style={{ width: "20%" }}
                      ></div>
                      {/*  End .ratings-val */}
                    </div>
                    {/*  End .ratings */}
                    <span className="ratings-text">( 2 Reviews )</span>
                  </div>
                  {/*  End .rating-container */}
                </div>
                {/*  End .product-body */}
              </div>
              {/*  End .product */}
            </div>
            {/*  End .owl-carousel */}
          </div>
          {/*  End .container */}
        </div>
        {/*  End .page-content */}
      </main>
      {/*  End .main */}
    </>
  );
};
