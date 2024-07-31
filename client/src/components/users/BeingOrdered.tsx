import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { fetchBeingOrderedItem, fetchUpdate2handCartStatus } from "../../features/secondhandCarts/secondHandCartSlice";
import { formatMoney } from "../../utils/formatMoney";
import { BeingOrderedItem } from '../../features/secondhandCarts/secondHandCartTypes';
const socket = io("http://localhost:4000");
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { showToast } from "../../utils/showToast";
export const BeingOrdered = () => {
  const dispatch = useAppDispatch();
  const auth = useAppSelector((state) => state.auth.auth);
  const [beingOrderedItems, setBeingOrderedItems] = useState<
    BeingOrderedItem[]
  >([]);
  useEffect(() => {
    if (auth?.id) {
      dispatch(fetchBeingOrderedItem(auth.id)).then((res: any) => {
        setBeingOrderedItems(res.payload);
      });
      socket.emit("join_user", { userId: auth.id });
    }
  }, [dispatch, auth]);
  useEffect(() => {
    socket.emit("join_anyone", "anyone");
    socket.on("update_secondhand_item", (data: { secondhandId: string }) => {
      if (auth?.id) {
        dispatch(fetchBeingOrderedItem(auth.id)).then((res: any) => {
          setBeingOrderedItems(res.payload);
          console.log(data);
        });
      }
    });
  });
  const [itemInModal, setItemInModal] = useState<BeingOrderedItem>();
  const [showModal, setShowModal] = useState<boolean>();
  const handleOnHideModal = ()=>{
    setShowModal(false);
  }
  const handleShowModal = async (item: BeingOrderedItem)=>{
    await setItemInModal(item);
    await setShowModal(true);
  }
  const handleOnClickUpdateStatus = (cartId: string) =>{
    dispatch(fetchUpdate2handCartStatus(cartId)).then(()=>{
      showToast('Đã duyệt sản phẩm thành công','success');
      if (auth?.id) {
        dispatch(fetchBeingOrderedItem(auth.id)).then((res: any) => {
          setBeingOrderedItems(res.payload);
        });
      }
    });
  }
  return (
    <>
    <Modal show={showModal} onHide={handleOnHideModal}>
      <Modal.Header closeButton>
        <Modal.Title>Thông tin người mua</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="container">
          <form>
            <div className="form-group">
              <label htmlFor="fname">Tên người mua</label>
              <input
                type="text"
                id="fname"
                name="firstname"
                className="form-control"
                placeholder="Your name.."
                style={{width: 550}}
                value={itemInModal?.secondhandPayment.buyerName}
              />
            </div>
            <div className="form-group">
              <label htmlFor="lname">Số điện thoại</label>
              <input
                type="text"
                id="lname"
                name="lastname"
                className="form-control"
                placeholder="Your last name.."
                value={itemInModal?.secondhandPayment.phoneNumer}
                style={{width: 550}}
              />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Địa chỉ</label>
              <input
                id="subject"
                name="subject"
                className="form-control"
                placeholder="Write something.."
                style={{width: 550}}
                value={itemInModal?.secondhandPayment.address}
              ></input>
            </div>
          </form>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleOnHideModal} variant="secondary">Đóng</Button>
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
            beingOrderedItems &&
            beingOrderedItems.length > 0 &&
            beingOrderedItems.map((item, index) => (
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
                        {item.seconHands.wardrobe.clothDetails.cloth.name}
                        <br />
                        {item.seconHands.wardrobe.clothDetails.color.name}/
                        {item.seconHands.wardrobe.clothDetails.size.name}
                      </a>
                    </h3>
                  </div>
                </td>
                <td className="price-col">
                  {formatMoney(item.seconHands.amount)}đ
                </td>
                <td className="price-col">{item.seconHands.amount}</td>
                <td className="stock-col">
                  <span className="in-stock">
                    <div className="btn-wrap">
                      <div onClick={()=>handleShowModal(item)} className="btn btn-primary btn-round">Xem</div>
                    </div>

                    <div className="btn-wrap">
                      <div onClick={()=>handleOnClickUpdateStatus(item.id)} className="btn btn-primary btn-round">Duyệt</div>
                    </div>
                  </span>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
};
