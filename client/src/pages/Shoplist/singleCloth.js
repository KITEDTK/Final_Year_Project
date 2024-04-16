import React from "react";
import _ from "lodash";

function SingleCloth({ clothes }) {
  let size = [];
  let color = {};
  const [colorState, setColorState] = useState({
    
  });
  const { clothDetails } = clothes;
  const handleChooseColor = (colorId) => {
    const findSize = clothDetails.filter((item)=> item.colorId === colorId);
    const sizeIds = findSize.map((item)=>item.colorId);
    size = {
      clothId: clothes.id,
      sizes: sizeIds
    }
    console.log(size);
  };
  if (clothDetails.length === 0) {
    color = {
      clothId: clothes.id,
      color: [],
    };
  } else {
    const colorUnq = _.uniqBy(clothDetails, "colorId").map(
      (item) => item.colorId
    );
    color = {
      clothId: clothes.id,
      color: colorUnq,
    };
  }
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
              <a href="#" className="btn-product btn-cart">
                <span>
                  add to cart
                  <br />
                  <button>S</button>
                  <button>M</button>
                  <button>L</button>
                  <button>XL</button>
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
                      <a onClick={()=>handleChooseColor(item)} className="active">
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
