import { useState, useEffect } from "react";
import { ClothesFilter } from "../../features/products/clothesTypes";
import _ from "lodash";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import {
  addItemInLocalCart,
  fetchAddItemToCart,
  fetchUpdateCartQuantity,
  updateQuantityInLocalCart,
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
  const authCarts = useAppSelector((state)=> state.carts.carts);
  const localCarts = useAppSelector((state)=> state.carts.localCarts);
  const [activeColor, setActiveColor] = useState(() => {
    if (!clothDetails || clothDetails.length === 0) {
      return "";
    } else {
      return clothDetails[0] ? clothDetails[0].colorId : "";
    }
  });
  useEffect(() => {
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
    const singleItem = clothDetails.find((item)=> item.id === clothDetailId);
    const maxQuantity = singleItem !== undefined ? singleItem.amount : 0;
    if (auth && auth !== null) {
      try{
        const itemInAuthCart = authCarts.find((item)=> item.clothDetailId === clothDetailId);
        if(itemInAuthCart){
          if(itemInAuthCart.amount + 1 > maxQuantity){
            showToast(<>Trong kho không đủ số lượng</>, "info");
          }else{
            await dispatch(fetchUpdateCartQuantity({cartId: itemInAuthCart.id, amount: itemInAuthCart.amount + 1})).unwrap();
            showToast(<>Đã thêm sản phẩm vào giỏ hàng</>, "success");
          }
        }else{
          await dispatch(
            fetchAddItemToCart({ userId: auth.id, clothDetailId, amount: 1 })
          ).unwrap();
          showToast(<>Đã thêm sản phẩm vào giỏ hàng</>, "success");
        }
      } catch (error) {
        showToast(<>Lỗi khi thêm sản phẩm vào giỏ hàng</>, "error");
      }
    } else {
      try {
        const clothInfo = clothDetails.find((cd) => cd.id === clothDetailId);
        const result = {
          ...rest,
          clothInfo,
        };
        const itemInLocalCart = localCarts.items.find((item)=> item.clothDetailId === clothDetailId);
        if(itemInLocalCart){
          if(itemInLocalCart.amount + 1 > maxQuantity){
            showToast(<>Trong kho không đủ số lượng</>, "info");
          }else{
            await dispatch(updateQuantityInLocalCart({clothDetailId: clothDetailId, amount: itemInLocalCart.amount + 1}))
            showToast(<>Đã thêm sản phẩm vào giỏ hàng</>, "success");
          }
        }else{
          await dispatch(
            addItemInLocalCart({
              clothDetailId: clothDetailId,
              sizeName: result.clothInfo?.size.name ?? "Không tồn tại size",
              colorName: result.clothInfo?.color.name ?? "Không tồn tại màu",
              clothesName: result.name,
              amount: 1,
              price: result.price,
              image1: result.clothInfo?.image1 ?? ""
            })
          );
          showToast(<>Đã thêm sản phẩm vào giỏ hàng</>, "success");
        }
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
                src={`http://localhost:4000/images/${clothDetails.find((item)=>item.colorId === activeColor)?.image1}`}
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
              <a href="#">Người bán: Shop</a>
            </div>
            {/* End .product-cat */}
            <h3 className="product-title">
              <Link to={`/single-product/${clothes.id}`}>{clothes.name}</Link>
            </h3>
            {/* End .product-title */}
            <div className="product-price">{formatMoney(clothes.price)}đ</div>
            {/* End .product-price */}
            <div className="ratings-container">
              
              {/* End .ratings */}
              
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
                      src={`http://localhost:4000/images/${clothDetails.find((itemcd)=>itemcd.colorId === item.colorId)?.image1}`}
                      alt="product desc"
                      style={{ border: `2px solid ${item.name}`,width: '40px', height: '40px' }}
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
