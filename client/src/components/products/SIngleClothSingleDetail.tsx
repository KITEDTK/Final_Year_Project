import _ from "lodash";
import type { Category } from "../../features/categorires/categoriesTypes";
import type { ClothDetailsColorSize } from "../../features/products/clothesTypes";
import { formatMoney } from "../../utils/formatMoney";
import { useEffect, useState } from "react";
interface Props {
  clothesInfo: {
    rest: {
      id: string;
      name: string;
      categoryId: string;
      brand: string;
      location: string;
      createAt: Date;
      isEnable: boolean;
      price: number;
    };
    clothDetails: ClothDetailsColorSize[];
    category: Category;
  };
}
export const SingleClothSingleDetail: React.FC<Props> = ({ clothesInfo }) => {
  const { clothDetails } = clothesInfo;
  const allClothColors = _.uniqBy(clothDetails, "colorId");
  const allClothSizes = _.uniqBy(clothDetails, "sizeId");
  const [activeColor, setActiveColor] = useState<string>(() => {
    if (!clothDetails || clothDetails.length === 0) {
      return "";
    } else {
      return clothDetails[0] ? clothDetails[0].colorId : "";
    }
  });
  useEffect(()=>{
    setActiveColor(() => {
      if (!clothDetails || clothDetails.length === 0) {
        return "";
      } else {
        return clothDetails[0] ? clothDetails[0].colorId : "";
      }
    });
  },[clothDetails]);
  const handleChooseColor = (colorId: string)=>{
    setActiveColor(colorId);
  }
  return (
    <>
      <div className="product-details-top">
        <div className="row">
          <div className="col-md-6">
            <div className="product-gallery product-gallery-vertical">
              <div className="row">
                <figure className="product-main-image">
                  <img
                    id="product-zoom"
                    src="assets/images/products/single/1.jpg"
                    data-zoom-image="assets/images/products/single/1-big.jpg"
                    alt="product image"
                  />

                  <a
                    href="#"
                    id="btn-product-gallery"
                    className="btn-product-gallery"
                  >
                    <i className="icon-arrows"></i>
                  </a>
                </figure>
                {/*  End .product-main-image */}
                <div
                  id="product-zoom-gallery"
                  className="product-image-gallery"
                >
                  <a
                    className="product-gallery-item active"
                    href="#"
                    data-image="assets/images/products/single/1.jpg"
                    data-zoom-image="assets/images/products/single/1-big.jpg"
                  >
                    <img
                      src="assets/images/products/single/1-small.jpg"
                      alt="product side"
                    />
                  </a>

                  <a
                    className="product-gallery-item"
                    href="#"
                    data-image="assets/images/products/single/2.jpg"
                    data-zoom-image="assets/images/products/single/2-big.jpg"
                  >
                    <img
                      src="assets/images/products/single/2-small.jpg"
                      alt="product cross"
                    />
                  </a>

                  <a
                    className="product-gallery-item"
                    href="#"
                    data-image="assets/images/products/single/3.jpg"
                    data-zoom-image="assets/images/products/single/3-big.jpg"
                  >
                    <img
                      src="assets/images/products/single/3-small.jpg"
                      alt="product with model"
                    />
                  </a>

                  <a
                    className="product-gallery-item"
                    href="#"
                    data-image="assets/images/products/single/4.jpg"
                    data-zoom-image="assets/images/products/single/4-big.jpg"
                  >
                    <img
                      src="assets/images/products/single/4-small.jpg"
                      alt="product back"
                    />
                  </a>
                </div>
                {/*  End .product-image-gallery */}
              </div>
              {/*  End .row */}
            </div>
            {/*  End .product-gallery */}
          </div>
          {/*  End .col-md-6 */}

          <div className="col-md-6">
            <div className="product-details">
              <h1 className="product-title">{clothesInfo.rest.name}</h1>
              {/*  End .product-title */}

              <div className="ratings-container">
                <div className="ratings">
                  <div className="ratings-val" style={{ width: "80%" }}></div>
                  {/*  End .ratings-val */}
                </div>
                {/*  End .ratings */}
                <a
                  className="ratings-text"
                  href="#product-review-link"
                  id="review-link"
                >
                  ( 2 Reviews )
                </a>
              </div>
              {/*  End .rating-container */}

              <div className="product-price">
                {formatMoney(clothesInfo.rest.price)}đ
              </div>
              {/*  End .product-price */}

              <div className="product-content">
                <p>
                  Sed egestas, ante et vulputate volutpat, eros pede semper est,
                  vitae luctus metus libero eu augue. Morbi purus libero,
                  faucibus adipiscing. Sed lectus.{" "}
                </p>
              </div>
              {/*  End .product-content */}

              <div className="details-filter-row details-row-size">
                <label>Color:</label>

                <div className="product-nav product-nav-dots">
                  {allClothColors &&
                    allClothColors.length > 0 &&
                    allClothColors.map((item) => (
                      <>
                        <a
                        onClick={()=>handleChooseColor(item.colorId)}
                          className={activeColor === item.colorId ? "active" : ""}
                          style={{ background: item.color.name }}
                        >
                          <span className="sr-only">{item.color.name}</span>
                        </a>
                      </>
                    ))}
                </div>
              </div>
              {/* End .details-filter-row */}

              <div className="details-filter-row details-row-size mb-md-1">
                <label>Size:</label>

                <div className="product-size">
                  {allClothSizes &&
                    allClothSizes.length > 0 &&
                    allClothSizes.map((item) => (
                      <>
                        <a>{item.size.name}</a>
                      </>
                    ))}
                  {/* <a title="Small">
                    S
                  </a>
                  <a title="Medium" className="active">
                    M
                  </a>
                  <a title="Large" className="disabled">
                    L
                  </a>
                  <a title="Extra Large">
                    XL
                  </a> */}
                </div>
                {/* End .product-size */}

                <a href="#" className="size-guide">
                  <i className="icon-th-list"></i>size guide
                </a>
              </div>
              {/* End .details-filter-row */}
              {/*  End .details-filter-row */}

              <div className="details-filter-row details-row-size">
                <label htmlFor="qty">Qty:</label>
                <div className="product-details-quantity">
                  <input
                    type="number"
                    id="qty"
                    className="form-control"
                    value="1"
                    min="1"
                    max="10"
                    step="1"
                    data-decimals="0"
                    required
                  />
                </div>
                {/*  End .product-details-quantity */}
              </div>
              
              {/*  End .details-filter-row */}

              <div className="product-details-action">
                <a href="#" className="btn-product btn-cart">
                  <span>add to cart</span>
                </a>

                <div className="details-action-wrapper">
                  <a
                    href="#"
                    className="btn-product btn-wishlist"
                    title="Wishlist"
                  >
                    <span>Add to Wishlist</span>
                  </a>
                  <a
                    href="#"
                    className="btn-product btn-compare"
                    title="Compare"
                  >
                    <span>Add to Compare</span>
                  </a>
                </div>
                {/*  End .details-action-wrapper */}
              </div>
              {/*  End .product-details-action */}

              <div className="product-details-footer">
                <div className="product-cat">
                  <span>Category:</span>
                  <a href="#">Women</a>,<a href="#">Dresses</a>,
                  <a href="#">Yellow</a>
                </div>
                {/*  End .product-cat */}

                <div className="social-icons social-icons-sm">
                  <span className="social-label">Share:</span>
                  <a
                    href="#"
                    className="social-icon"
                    title="Facebook"
                    target="_blank"
                  >
                    <i className="icon-facebook-f"></i>
                  </a>
                  <a
                    href="#"
                    className="social-icon"
                    title="Twitter"
                    target="_blank"
                  >
                    <i className="icon-twitter"></i>
                  </a>
                  <a
                    href="#"
                    className="social-icon"
                    title="Instagram"
                    target="_blank"
                  >
                    <i className="icon-instagram"></i>
                  </a>
                  <a
                    href="#"
                    className="social-icon"
                    title="Pinterest"
                    target="_blank"
                  >
                    <i className="icon-pinterest"></i>
                  </a>
                </div>
              </div>
              {/*  End .product-details-footer */}
            </div>
            {/*  End .product-details */}
          </div>
          {/*  End .col-md-6 */}
        </div>
        {/*  End .row */}
      </div>
    </>
  );
};