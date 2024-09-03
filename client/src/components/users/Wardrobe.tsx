import { fetchAllWardrobeByUsers } from "../../features/wardrobe/wardrobeSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { useEffect, useState } from "react";
import { Wardrobe as WardrobeTypes } from "../../features/wardrobe/wardrobeTypes";
import { formatMoney } from "../../utils/formatMoney";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { fetchAddSecondHand } from "../../features/secondHand/secondHandSlice";
import { io } from "socket.io-client";
const socket = io("http://localhost:4000");
export const Wardrobe = () => {
  const dispatch = useAppDispatch();
  const auth = useAppSelector((state) => state.auth.auth);
  const [wardrobeItems, setWardrobeItems] = useState<WardrobeTypes[]>();
  useEffect(() => {
    if (auth) {
      dispatch(fetchAllWardrobeByUsers({ userId: auth.id })).then(
        (res: any) => {
          setWardrobeItems(res.payload);
        }
      );
      //join users
      socket.emit("join_user", { userId: auth.id });
    }
    
  }, [dispatch, auth]);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [quantityToSell, setQuantityToSell]= useState<number>(1);
  const [priceToSell, setPriceToSell] = useState<number>(1);
  const [wardrobelIdToSell, setWardrobeIdToSell] = useState<string>('');
  const handleShowModalSell = (wardrobelId: string) => {
    setShowModal(true);
    setWardrobeIdToSell(wardrobelId);
  };
  const handleOnHideModal = () => {
    setShowModal(false);
  };
  const handleSell = () => {
    dispatch(fetchAddSecondHand({wardrobeId: wardrobelIdToSell, amount: quantityToSell, price: priceToSell})).then(()=>{
      setShowModal(false);
      if (auth) {
        dispatch(fetchAllWardrobeByUsers({ userId: auth.id })).then(
          (res: any) => {
            setWardrobeItems(res.payload);
            socket.emit('join_user_selling_items',{userId: auth.id});
          }
        );
      }
    })
  };
  const handleOnChangeQuantity = (amount: number) => {
    const maxQuantity = wardrobeItems?.find((item) => item.id === wardrobelIdToSell)?.amount;
  
    if (maxQuantity !== undefined) {
      setQuantityToSell(Math.min(amount, maxQuantity));
    }
  };
  const handleOnChangePrice = (price: number) =>{
    setPriceToSell(price);
  }
  useEffect(()=>{
    socket.on('update_user_wardrobe',()=>{
      if (auth) {
        dispatch(fetchAllWardrobeByUsers({ userId: auth.id })).then(
          (res: any) => {
            setWardrobeItems(res.payload);
          }
        );
      }
    });
    socket.on('update_all_selling_items',()=>{
      if (auth) {
        dispatch(fetchAllWardrobeByUsers({ userId: auth.id })).then(
          (res: any) => {
            setWardrobeItems(res.payload);
          }
        );
      }
    })
    return () => {
      socket.off("update_user_wardrobe"); // Clean up the event listener
      socket.off("update_all_selling_items");
    };
  })
  return (
    <>
     <Modal show={showModal} onHide={handleOnHideModal}>
        <Modal.Header closeButton>
          <Modal.Title>Nhập thông tin sản phẩm bán lại</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div>Nhập số lượng</div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="singin-email-2"
                name="singin-email"
                value={quantityToSell}
                onChange={(event)=>handleOnChangeQuantity(parseInt(event.target.value))}
                required
              />
            </div>
            <div>Nhập giá</div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="singin-email-2"
                name="singin-email"
                value={priceToSell}
                onChange={(event)=>handleOnChangePrice(parseInt(event.target.value))}
                required
              />
            </div>
          </form>
        {/* End .form-choice */}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={()=>setShowModal(false)} variant="secondary">Đóng</Button>
          <Button onClick={()=>handleSell()} variant="primary">Bán lại trên web</Button>
        </Modal.Footer>
      </Modal>
      <table className="table table-wishlist table-mobile">
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Số lượng</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {auth &&
            auth !== null &&
            wardrobeItems &&
            wardrobeItems.length > 0 &&
            wardrobeItems.map((item, index) => (
              <tr key={index}>
                <td className="product-col">
                  <div className="product">
                    <figure className="product-media">
                      <a href="#">
                        <img
                          src="assets/images/products/table/product-1.jpg"
                          alt="Product image"
                        />
                      </a>
                    </figure>

                    <h3 className="product-title">
                      <a href="#">
                        {item.clothDetails.cloth.name}
                        <br />
                        {item.clothDetails.color.name}/
                        {item.clothDetails.size.name}
                      </a>
                    </h3>
                    {/* End .product-title */}
                  </div>
                  {/* End .product */}
                </td>
                <td className="price-col">
                  {formatMoney(item.amount * item.clothDetails.cloth.price)}đ
                </td>
                <td className="price-col">{item.amount}</td>
                <td className="stock-col">
                  <span className="in-stock">
                    <>
                      <div className="col-6 col-lg-4 col-xl-2">
                        <div className="btn-wrap">
                          <div
                            onClick={() => handleShowModalSell(item.id)}
                            className="btn btn-primary btn-round"
                          >
                            Bán lại
                          </div>
                        </div>
                      </div>
                    </>
                  </span>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
};
