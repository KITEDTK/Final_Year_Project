import _ from "lodash";
import type { Category } from "../../features/categorires/categoriesTypes";
import type { ClothDetailsColorSize } from "../../features/products/clothesTypes";
import { formatMoney } from "../../utils/formatMoney";
import { useEffect, useState } from "react";
import "../../../public/assets/js/jquery.elevateZoom.min";
import { showToast } from "../../utils/showToast";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  addItemInLocalCart,
  fetchAddItemToCart,
} from "../../features/carts/cartsSlice";
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
  const dispatch = useAppDispatch();
  const { clothDetails } = clothesInfo;
  const allClothColors = _.uniqBy(clothDetails, "colorId");
  const allClothSizes = _.uniqBy(clothDetails, "sizeId");
  const auth = useAppSelector((state) => state.auth.auth);
  const authCarts = useAppSelector((state) => state.carts.carts);
  const LocalCarts = useAppSelector((state)=>state.carts.localCarts);
  const [viewImage, setViewImage] = useState<string>(clothesInfo.clothDetails[1].image1);
  useEffect(()=>{
    setViewImage(clothDetails[1].image1)
  },[clothDetails]);
  const [activeColor, setActiveColor] = useState<string>(() => {
    if (!clothDetails || clothDetails.length === 0) {
      return "";
    } else {
      return clothDetails[0] ? clothDetails[0].colorId : "";
    }
  });
  const [activeSize, setActiveSize] = useState<string>();
  useEffect(() => {
    setActiveColor(() => {
      if (!clothDetails || clothDetails.length === 0) {
        return "";
      } else {
        return clothDetails[0] ? clothDetails[0].colorId : "";
      }
    });
  }, [clothDetails]);
  const [quantity, setQuantity] = useState<number>(1);
  const handleChooseColor = (colorId: string) => {
    setActiveColor(colorId);
  };
  const handleChooseSize = (sizeId: string) => {
    setActiveSize(sizeId);
  };
  const handleChangeQuantity = (value: string) => {
    const parsedValue = parseInt(value, 10);
    const itemToAdd = clothDetails.find((item) => {
      return item.sizeId === activeSize && item.colorId === activeColor;
    });
    if (itemToAdd) {
      if (auth && auth !== null) {
        const cartItem = authCarts.find(
          (item) => item.clothDetailId === itemToAdd.id
        );
        const maxQuantity: number =
          cartItem !== undefined
            ? itemToAdd.amount - cartItem.amount
            : itemToAdd.amount;
        if (
          !isNaN(parsedValue) &&
          parsedValue >= 1 &&
          parsedValue <= maxQuantity
        ) {
          setQuantity(parsedValue);
        } else if (parsedValue > maxQuantity) {
          if (maxQuantity === 0) {
            setQuantity(1);
          } else {
            setQuantity(maxQuantity);
          }
        } else {
          setQuantity(1);
        }
      }else{
        const cartItem = LocalCarts.items.find(
          (item) => item.clothDetailId === itemToAdd.id
        );
        const maxQuantity: number =
          cartItem !== undefined
            ? itemToAdd.amount - cartItem.amount
            : itemToAdd.amount;
        if (
          !isNaN(parsedValue) &&
          parsedValue >= 1 &&
          parsedValue <= maxQuantity
        ) {
          setQuantity(parsedValue);
        } else if (parsedValue > maxQuantity) {
          if (maxQuantity === 0) {
            setQuantity(1);
          } else {
            setQuantity(maxQuantity);
          }
        } else {
          setQuantity(1);
        }
      }
    } else {
      showToast("Vui lòng chọn kích thước", "info");
    }
  };
  const handleButtonQuantity = (value: number) => {
    const itemToAdd = clothDetails.find((item) => {
      return item.sizeId === activeSize && item.colorId === activeColor;
    });
    if (itemToAdd) {
      if (auth && auth !== null) {
        const cartItem = authCarts.find(
          (item) => item.clothDetailId === itemToAdd.id
        );
        const maxQuantity: number =
          cartItem !== undefined
            ? itemToAdd.amount - cartItem.amount
            : itemToAdd.amount;
        setQuantity((prev) => {
          const newQuantity = prev + value;
          if (newQuantity < 1) {
            return 1;
          } else if (newQuantity > maxQuantity) {
            return maxQuantity === 0 ? 1 : maxQuantity;
          } else {
            return newQuantity;
          }
        });
      }else{
        const cartItem = LocalCarts.items.find(
          (item) => item.clothDetailId === itemToAdd.id
        );
        const maxQuantity: number =
          cartItem !== undefined
            ? itemToAdd.amount - cartItem.amount
            : itemToAdd.amount;
        console.log(maxQuantity);
        setQuantity((prev) => {
          const newQuantity = prev + value;
          if (newQuantity < 1) {
            return 1;
          } else if (newQuantity > maxQuantity) {
            return maxQuantity === 0 ? 1 : maxQuantity;
          } else {
            return newQuantity;
          }
        });
      }
    } else {
      showToast("Vui lòng chọn kích thước", "info");
    }
  };

  const handleAddToCart = async () => {
    const itemToAdd = clothDetails.find((item) => {
      return item.sizeId === activeSize && item.colorId === activeColor;
    });
    if (itemToAdd) {
      if (auth) {
        try {
          const cartItem = authCarts.find(
            (item) => item.clothDetailId === itemToAdd.id
          );
          const cartItemQuantity: number =
            cartItem !== undefined ? cartItem.amount : 0;
          if (cartItemQuantity + quantity > itemToAdd.amount) {
            showToast("Trong kho không có đủ số lượng cho bạn", "info");
          } else {
            await dispatch(
              fetchAddItemToCart({
                userId: auth.id,
                clothDetailId: itemToAdd.id,
                amount: quantity,
              })
            );
            showToast("Đã thêm sản phẩm vào giỏ hàng", "success");
          }
        } catch (err) {
          showToast("Lỗi khi thêm sản phẩm vào giỏ hàng", "error");
        }
      } else {
        try {
          const cartItem = LocalCarts.items.find(
            (item) => item.clothDetailId === itemToAdd.id
          );
          const cartItemQuantity: number =
            cartItem !== undefined ? cartItem.amount : 0;
            if (cartItemQuantity + quantity > itemToAdd.amount) {
              showToast("Trong kho không có đủ số lượng cho bạn", "info");
            }else{
              await dispatch(
                addItemInLocalCart({
                  clothDetailId: itemToAdd.id,
                  sizeName: itemToAdd.size.name,
                  colorName: itemToAdd.color.name,
                  clothesName: clothesInfo.rest.name,
                  amount: quantity,
                  price: clothesInfo.rest.price,
                  image1: itemToAdd.image1
                })
              );
              showToast("Đã thêm sản phẩm vào giỏ hàng", "success");
            }
        } catch (err) {
          showToast("Lỗi khi thêm sản phẩm vào giỏ hàng", "error");
        }
      }
    } else {
      showToast("Vui lòng chọn kích thước", "info");
    }
  };
  const handleChooseImage = (image: string)=>{
    setViewImage(image);
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
                    id="product-zoom-1"
                    src={`http://localhost:4000/images/${viewImage}`}
                    data-zoom-image={`http://localhost:4000/images/${viewImage}`}

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
                    className="product-gallery-item "
                    onClick={()=>handleChooseImage(clothDetails[1].image1)}
                    data-image={`http://localhost:4000/images/${clothDetails[1].image1}`}
                    data-zoom-image="assets/images/products/single/1-big.jpg"
                  >
                    <img
                    style={{width: 107, height:107}}
                      src={`http://localhost:4000/images/${clothDetails[1].image1}`}
                      alt="product side"
                    />
                  </a>

                  <a
                    className="product-gallery-item"
                    onClick={()=>handleChooseImage(clothDetails[1].image2)}
                    data-image="assets/images/products/single/2.jpg"
                    data-zoom-image="assets/images/products/single/2-big.jpg"
                  >
                    <img
                    style={{width: 107, height:107}}
                      src={`http://localhost:4000/images/${clothDetails[1].image2}`}
                      alt="product cross"
                    />
                  </a>

                  <a
                    className="product-gallery-item"
                    onClick={()=>handleChooseImage(clothDetails[1].image3)}
                    data-image="assets/images/products/single/3.jpg"
                    data-zoom-image="assets/images/products/single/3-big.jpg"
                  >
                    <img
                    style={{width: 107, height:107}}
                      src={`http://localhost:4000/images/${clothDetails[1].image3}`}
                      alt="product with model"
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
               
                {/*  End .ratings */}
                
              </div>
              {/*  End .rating-container */}

              <div className="product-price">
                {formatMoney(clothesInfo.rest.price)}đ
              </div>
              {/*  End .product-price */}

              <div className="product-content">
                <p>
                Quần áo thời trang luôn thay đổi theo xu hướng, thể hiện phong cách cá nhân và văn hóa. Chúng mang tính thẩm mỹ cao và giúp người mặc tự tin, tạo ấn tượng riêng biệt.{" "}
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
                          onClick={() => handleChooseColor(item.colorId)}
                          className={
                            activeColor === item.colorId ? "active" : ""
                          }
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
                        <a
                          style={{ cursor: "pointer" }}
                          title={item.size.name}
                          onClick={() => handleChooseSize(item.sizeId)}
                          className={
                            clothDetails
                              .filter((item1) => item1.colorId === activeColor)
                              .find((item2) => item2.sizeId === item.sizeId)
                              ? `${item.sizeId === activeSize ? "active" : ""}`
                              : "disabled"
                          }
                        >
                          {item.size.name}
                        </a>
                      </>
                    ))}
                </div>
                {/* End .product-size */}

               
              </div>
              {/* End .details-filter-row */}
              {/*  End .details-filter-row */}

              <div className="details-filter-row details-row-size">
                <label htmlFor="qty">Qty:</label>
                <div className="product-details-quantity">
                  <div className="input-group input-spinner">
                    <div className="input-group-prepend">
                      <button
                        onClick={() => handleButtonQuantity(-1)}
                        style={{ minWidth: "26px" }}
                        className="btn btn-decrement btn-spinner"
                        type="button"
                      >
                        <i className="icon-minus"></i>
                      </button>
                    </div>
                    <input
                      onChange={(event) =>
                        handleChangeQuantity(event.target.value)
                      }
                      type="text"
                      style={{ textAlign: "center" }}
                      className="form-control"
                      required
                      value={quantity}
                      placeholder=""
                    />
                    <div className="input-group-append">
                      <button
                        onClick={() => handleButtonQuantity(1)}
                        style={{ minWidth: "26px" }}
                        className="btn btn-increment btn-spinner"
                        type="button"
                      >
                        <i className="icon-plus"></i>
                      </button>
                    </div>
                  </div>
                </div>
                {/*  End .product-details-quantity */}
              </div>

              {/*  End .details-filter-row */}

              <div className="product-details-action">
                <a
                  style={{ cursor: "pointer" }}
                  onClick={() => handleAddToCart()}
                  className="btn-product btn-cart"
                >
                  <span>thêm vào giỏ hàng</span>
                </a>

                <div className="details-action-wrapper">
                </div>
                {/*  End .details-action-wrapper */}
              </div>
              {/*  End .product-details-action */}

              <div className="product-details-footer">
                
                {/*  End .product-cat */}

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
