/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React,{useState,useEffect} from "react";
import _ from "lodash";

function SingleCloth({ clothes }) {
  const { clothDetails } = clothes;
  console.log(clothes);
  const [activeColor, setActiveColor] = useState(() => {
    if (!clothDetails || clothDetails.length === 0) {
      return ''; 
    } else {
      return clothDetails[0] ? clothDetails[0].colorId : ''; 
    }
  });
  let color = {};
  if (clothDetails.length === 0) {
    color = {
      clothId: clothes.id,
      color: [],
    };
  } else {
    const colorUnq = _.uniqBy(clothDetails, "colorId").map((item) => item.colorId);
    color = {
      clothId: clothes.id,
      color: colorUnq,
    };
  };
  const chooseColor = (colorId)=>{
    setActiveColor(colorId);
  }
  const buttonStyle = {
    // backgroundColor: 'transparent',
    // border: 'none',
    cursor: 'pointer',
    padding: '2' // Adjust padding as needed
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
              <a
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
            {/* End .product-action-vertical */}

            <div className="product-action">
              <a className="btn-product btn-cart">
                <span>
                  add to cart
                  <br />
                  {
                    clothDetails && clothDetails.map((item)=>{
                      return (
                        <>
                        <button style={buttonStyle}>
                        size : {item.size.name}
                        </button>
                        </>
                      )
                    })
                  }
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
              {color &&
                color.color.map((item) => {
                  return (
                    <>
                      <a onClick={()=>chooseColor(item)} className={activeColor === item ? "active" : ""}>
                        <img
                          src="assets/images/products/product-4-thumb.jpg"
                          alt="product desc"
                        />
                      </a>
                    </>
                  );
                })}
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
