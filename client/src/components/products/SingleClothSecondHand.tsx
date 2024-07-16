import React from "react";
import { useEffect, useState } from "react";
import { formatMoney } from "../../utils/formatMoney";
import { Link } from "react-router-dom";
import { SecondHand } from "../../features/secondHand/secondHandTypes";
interface Props {
    clothes: SecondHand;
  }
export const SingleClothSecondHand: React.FC<Props> = ({clothes}) =>{
    const { wardrobe, ...rest } = clothes;
    const {clothDetails} = wardrobe;
    return (<>
      <div className="col-6 col-md-4 col-lg-4">
        <div className="product product-7 text-center">
          <figure className="product-media">
            <span className="product-label label-new">New</span>
            <Link to={`/single-product/${clothes.id}`}>
              <img
                src={`http://localhost:4000/images/${clothDetails.image1}`}
                style={{ width: '280px', height: '280px' }}
                alt="Product image"
                className="product-image"
              />
            </Link>

            <div className="product-action-vertical">
              <a className="btn-product-icon btn-wishlist btn-expandable">
                <span>add to wishlist</span>
              </a>
              <a className="btn-product-icon btn-quickview" title="Quick view">
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
            <div className="product-action action-icon-top">
                    <a
                      className="btn-product btn-cart"
                      //onClick={() => addItemToCart(item.id)}
                      style={{ cursor: "pointer" }}
                    >
                      <span>size: {clothDetails.size.name}</span>
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
              {clothDetails.cloth.name}
            </h3>
            {/* End .product-title */}
            <div className="product-price">Chưa làm đ</div>
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
                  <a
                    className={"active"}
                    style={{
                      border: "2px solid black"
                    }}
                  >
                    <img
                      src={`http://localhost:4000/images/${clothDetails.image1}`}
                      alt="product desc"
                      style={{ border: `2px solid ${clothDetails.color.name}`,width: '40px', height: '40px' }}
                    />
                  </a>
            </div>
            {/* End .product-nav */}
          </div>
          {/* End .product-body */}
        </div>
        {/* End .product */}
      </div>
    </>)
}