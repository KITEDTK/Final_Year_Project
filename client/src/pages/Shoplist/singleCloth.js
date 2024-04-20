/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect, useMemo } from "react";
import _ from "lodash";

function SingleCloth({ clothes }) {
  const clothDetails = useMemo(
    () => clothes.clothDetails,
    [clothes.clothDetails]
  );
  const [activeColor, setActiveColor] = useState(() => {
    if (!clothDetails || clothDetails.length === 0) {
      return "";
    } else {
      return clothDetails[0] ? clothDetails[0].colorId : "";
    }
  });
  let color = [];
  if (clothDetails.length === 0) {
    color = {
      clothId: clothes.id,
      colorId: [],
      name: "",
    };
  } else {
    // const colorUnqId = _.uniqBy(clothDetails, "colorId").map(
    //   (item) => item.colorId
    // );
    const colorUnqId = _.uniqBy(clothDetails, "colorId").map((item) => {
      return {
        colorId: item.colorId,
        name: item.color.name,
      };
    });

    color = {
      clothId: clothes.id,
      colorInfo: colorUnqId.map(({ colorId, name }) => ({ colorId, name })) || [],
    };
  }
  const chooseColor = (colorId) => {
    setActiveColor(colorId);
  };

  const buttonStyle = {
    // backgroundColor: 'transparent',
    // border: 'none',
    cursor: "pointer",
    padding: "2", // Adjust padding as needed
  };
  return (
    <>
      <div className="col-6 col-md-4 col-lg-4">
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
              <a className="btn-product-icon btn-wishlist btn-expandable">
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
            {/* End .product-action-vertical */}

            <div className="product-action">
              <a className="btn-product btn-cart">
                <span>
                  add to cart
                  <br />
                  {clothDetails &&
                    clothDetails.length > 0 &&
                    clothDetails
                      .filter((item) => item.colorId === activeColor)
                      .map((item, index) => (
                        <button key={index} style={buttonStyle}>
                          size: {item.size.name}
                        </button>
                      ))}
                </span>
              </a>
            </div>
            {/* End .product-action */}
          </figure>
          {/* End .product-media */}

          <div className="product-body">
            <div className="product-cat">
              <a href="#">Women</a>
            </div>
            {/* End .product-cat */}
            <h3 className="product-title">
              <a href="product.html">{clothes.name}</a>
            </h3>
            {/* End .product-title */}
            <div className="product-price">$60.00</div>
            {/* End .product-price */}
            <div className="ratings-container">
              <div className="ratings">
                <div className="ratings-val" style={{ width: "20%" }}></div>
                {/* End .ratings-val */}
              </div>
              {/* End .ratings */}
              <span className="ratings-text">( 2 Reviews )</span>
            </div>
            {/* End .rating-container */}

            <div className="product-nav product-nav-thumbs">
              {/* {color &&
                color.colorId.map((item) => {
                  return (
                    <>
                      <a
                        onClick={() => chooseColor(item)}
                        className={activeColor === item ? "active" : ""}
                        style={{ border: activeColor === item ? "2px solid black" : "none" }}
                      >
                        <img
                          src="assets/images/products/product-4-thumb.jpg"
                          alt="product desc"
                          style={{ border: `2px solid ${item.name}` }}
                        />
                      </a>
                    </>
                  );
                })} */}
              { color && color.colorInfo && color.colorInfo.map((item) => (
                <a
                  key={item.colorId} // Ensure each element in the map has a unique key
                  onClick={() => chooseColor(item.colorId)}
                  className={activeColor === item.colorId ? "active" : ""}
                  style={{
                    border:
                      activeColor === item.colorId ? "2px solid black" : "none",
                  }}
                >
                  <img
                    src="assets/images/products/product-4-thumb.jpg"
                    alt="product desc"
                    style={{ border: `2px solid ${item.name}` }}
                  />
                </a>
              ))}
            </div>
            {/* End .product-nav */}
          </div>
          {/* End .product-body */}
        </div>
        {/* End .product */}
      </div>
    </>
  );
}
export default SingleCloth;
