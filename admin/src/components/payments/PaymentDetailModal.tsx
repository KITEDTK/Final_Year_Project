import { Modal } from "react-bootstrap";
import React from "react";
import { PaymentDetail } from "../../features/payments/paymentTypes";
interface props {
    show: boolean;
    handleOnClickCloseModal: () => void;
    paymentDetails: PaymentDetail[]
}
export const PaymentDetailModal: React.FC<props> = ({show, handleOnClickCloseModal, paymentDetails}) => {
  return (
    <>
      <Modal show={show} size="lg" aria-labelledby="contained-modal-title-vcenter">
        <Modal.Header onClick={() => handleOnClickCloseModal()} closeButton>
          <Modal.Title>Bảng chi tiết hóa đơn</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <section className="content">
            <div className="container-fluid">
              <div className="row">
                <div className="col-12">
                  <div className="card">
                    <div className="card-header">
                      <h3 className="card-title">Bảng Quần áo</h3>
                    </div>
                    <div className="card-body">
                      <table
                        id="clothes-table"
                        className="table table-bordered table-hover"
                      >
                        <thead>
                          <tr>
                            <th style={{ width: "3%" }}>STT</th>
                            <th style={{ width: "10%" }}>Tên sản phẩm</th>
                            <th style={{ width: "10%" }}>Số lượng</th>
                            <th style={{ width: "10%" }}>Mã vạch</th>
                            <th style={{ width: "10%" }}>Tồn kho</th>
                          </tr>
                        </thead>
                        <tbody>
                          <>
                          {paymentDetails && paymentDetails.length > 0 && paymentDetails.map((item, index)=>(<>
                            <tr>
                              <td>{index + 1}</td>
                              <td>{item.clothDetail.cloth.name}<br/>{item.clothDetail.size.name}/{item.clothDetail.color.name}</td>
                              <td>{item.amount}</td>
                              <td>{item.clothDetail.codeBar}</td>
                              <td>{item.clothDetail.amount}</td>
                            </tr>
                          </>))}
                          </>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Modal.Body>
        <Modal.Footer>
          <button type="button" className="btn btn-block btn-outline-info">
            Lưu
          </button>
          <button onClick={()=>handleOnClickCloseModal()} type="button" className="btn btn-block btn-default">
            Đóng
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
