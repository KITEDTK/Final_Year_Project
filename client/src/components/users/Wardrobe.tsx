import { fetchAllWardrobeByUsers } from "../../features/wardrobe/wardrobeSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { useEffect, useState } from "react";
import { Wardrobe as WardrobeTypes } from "../../features/wardrobe/wardrobeTypes";
import { formatMoney } from "../../utils/formatMoney";
import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { fetchAddSecondHand } from "../../features/secondHand/secondHandSlice";
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
    }
  });
  const [showModal, setShowModal] = useState<boolean>(false);
  const [quantityToSell, setQuantityToSell]= useState<number>(0);
  const [clothDetailIdToSell, setClothDetialIdToSell] = useState<string>('');
  const handleShowModalSell = (paymentDetailId: string) => {
    setShowModal(true);
    setClothDetialIdToSell(paymentDetailId);
  };
  const handleOnHideModal = () => {
    setShowModal(false);
  };
  const handleSell = () => {
    dispatch(fetchAddSecondHand({clothDetailId: clothDetailIdToSell, amount: quantityToSell})).then(()=>{
      setShowModal(false);
    })
  }
  return (
    <>
     <Modal show={showModal} onHide={handleOnHideModal}>
        <Modal.Header closeButton>
          <Modal.Title>Nhập số lượng sản phẩm muốn bán lại</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="singin-email-2"
                name="singin-email"
                onChange={(event)=>setQuantityToSell(parseInt(event.target.value))}
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
