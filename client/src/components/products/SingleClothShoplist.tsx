import { useState, useEffect } from "react";
import { ClothesFilter } from "../../features/products/clothesTypes";
import _ from "lodash";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import {
  addItemInLocalCart,
  fetchAddItemToCart,
} from "../../features/carts/cartsSlice";
interface Props {
  clothes: ClothesFilter;
}
import { showToast } from "../../utils/showToast";
import { formatMoney } from "../../utils/formatMoney";
import { Link } from "react-router-dom";
export const SingleClothShoplist: React.FC<Props> = ({ clothes }) => {
  const { clothDetails, ...rest } = clothes;
  const dispatch = useAppDispatch();
  const auth = useAppSelector((state) => state.auth.auth);
  const [activeColor, setActiveColor] = useState(() => {
    if (!clothDetails || clothDetails.length === 0) {
      return "";
    } else {
      return clothDetails[0] ? clothDetails[0].colorId : "";
    }
  });
  useEffect(() => {
    // Mỗi lần filter thì reset mẫu màu đã chọn
    setActiveColor(() => {
      if (!clothDetails || clothDetails.length === 0) {
        return "";
      } else {
        return clothDetails[0] ? clothDetails[0].colorId : "";
      }
    });
  }, [clothDetails]);
  let color: {
    clothId: string;
    colorInfo: { colorId: string; name: string }[];
  };
  if (clothDetails.length === 0) {
    color = {
      clothId: clothes.id,
      colorInfo: [],
    };
  } else {
    const allClothColors = _.uniqBy(clothDetails, "colorId").map((item) => ({
      colorId: item.colorId,
      name: item.color.name,
    }));
    color = {
      clothId: clothes.id,
      colorInfo: allClothColors.map(({ colorId, name }) => ({ colorId, name })),
    };
  }
  const chooseColor = (colorId: string) => {
    setActiveColor(colorId);
  };

  const addItemToCart = async (clothDetailId: string) => {
    if (auth && auth !== null) {
      // Khách hàng đã đăng nhập
      try {
        await dispatch(
          fetchAddItemToCart({ userId: auth.id, clothDetailId, amount: 1 })
        ).unwrap();
        showToast(<>Đã thêm sản phẩm vào giỏ hàng</>, "success");
      } catch (error) {
        showToast(<>Lỗi khi thêm sản phẩm vào giỏ hàng</>, "error");
      }
    } else {
      //khách hàng chưa đăng nhập
      try {
        const clothInfo = clothDetails.find((cd) => cd.id === clothDetailId);
        const result = {
          ...rest,
          clothInfo,
        };
        await dispatch(
          addItemInLocalCart({
            clothDetailId: clothDetailId,
            sizeName: result.clothInfo?.size.name ?? "Không tồn tại size",
            colorName: result.clothInfo?.color.name ?? "Không tồn tại màu",
            clothesName: result.name,
            amount: 1,
            price: result.price,
          })
        );
        showToast(<>Đã thêm sản phẩm vào giỏ hàng</>, "success");
      } catch (error) {
        showToast(<>Lỗi khi thêm sản phẩm vào giỏ hàng</>, "error");
      }
    }
  };
  return (
    <>
      <div className="col-6 col-md-4 col-lg-4">
        <div className="product product-7 text-center">
          <figure className="product-media">
            <span className="product-label label-new">New</span>
            <Link to={`/single-product/${clothes.id}`}>
              <img
                src="assets/images/products/product-4.jpg"
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
              {clothDetails &&
                clothDetails.length > 0 &&
                clothDetails
                  .filter((item) => item.colorId === activeColor)
                  .map((item, index) => (
                    <a
                      className="btn-product btn-cart"
                      onClick={() => addItemToCart(item.id)}
                      key={index}
                      style={{ cursor: "pointer" }}
                    >
                      <span>size: {item.size.name}</span>
                    </a>
                  ))}
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
              <Link to={`/single-product/${clothes.id}`}>{clothes.name}</Link>
            </h3>
            {/* End .product-title */}
            <div className="product-price">{formatMoney(clothes.price)}đ</div>
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
                color.colorInfo &&
                color.colorInfo.map((item) => (
                  <a
                    key={item.colorId} // Ensure each element in the map has a unique key
                    onClick={() => chooseColor(item.colorId)}
                    className={activeColor === item.colorId ? "active" : ""}
                    style={{
                      border:
                        activeColor === item.colorId
                          ? "2px solid black"
                          : "none",
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
};
