import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import {
  fetchAllClothes,
  fetchSingleClothes,
} from "../features/clothes/clothesSlice";
import type { Clothes } from "../features/clothes/clothesType";
import { removeColFromTables } from "../utils/removeColFromTable";
import { tableToExcel } from "../utils/tableToExcels";
import { Modal } from "react-bootstrap";
import { UpdateClothesModal } from "../components/clothes/UpdateClothesModal";

export function Clothes() {
  const dispatch = useAppDispatch();
  const clothes = useAppSelector((state) => state.clothes.clothes);
  const singleClothes = useAppSelector((state) => state.clothes.singleClothes);
  useEffect(() => {
    dispatch(fetchAllClothes());
  }, [dispatch]);
  const handleExcel = () => {
    const table = document.getElementById("clothes-table");
    if (table) {
      const fixedTable = removeColFromTables(table as HTMLTableElement, [6]);
      const wscols = [
        { width: 15 },
        { width: 50 },
        { width: 15 },
        { width: 15 },
        { width: 13 },
        { width: 15 },
      ];
      tableToExcel(fixedTable, "Clothes", wscols);
    } else {
      console.log("Lỗi không tìm thấy bảng");
    }
  };
  const [clothesIdModal, setClothesIdModal] = useState<string>("");
  const [show, setShow] = useState<boolean>(false);
  const handleOnClickUpdateClothes = async (clothesId: string) => {
    await setClothesIdModal(clothesId);
    await dispatch(fetchSingleClothes(clothesId));
    setShow(true);
  };
  const handleOnClickCloseModal = () => {
    setShow(false);
  };
  return (
    <>
      <section className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">Bảng Quần áo</h3>
                </div>

                <div className="card-body">
                  <button onClick={() => handleExcel()}>In ra excel</button>
                  <table
                    id="clothes-table"
                    className="table table-bordered table-hover"
                  >
                    <thead>
                      <tr>
                        <th>STT</th>
                        <th>Tên sản phẩm</th>
                        <th>Hãng</th>
                        <th>Vị trí</th>
                        <th>Danh mục</th>
                        <th>Giá tiền</th>
                        <th>Chỉnh sửa/Xóa</th>
                      </tr>
                    </thead>
                    <tbody>
                      {clothes &&
                        clothes.length > 0 &&
                        clothes.map((cloth, index) => (
                          <>
                            <tr>
                              <td>{index + 1}</td>
                              <td>{cloth.name}</td>
                              <td>{cloth.brand}</td>
                              <td>{cloth.location}</td>
                              <td>{cloth.categoryName}</td>
                              <td>{cloth.price}</td>
                              <td>
                                <button
                                  onClick={() =>
                                    handleOnClickUpdateClothes(cloth.id)
                                  }
                                  type="button"
                                  className="btn btn-block btn-outline-info"
                                >
                                  Chỉnh sửa
                                </button>
                                <button
                                  type="button"
                                  className="btn btn-block btn-outline-danger"
                                >
                                  Xóa
                                </button>
                              </td>
                            </tr>
                          </>
                        ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {show === true && (
        <Modal
          show={show}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
        >
          <Modal.Header onClick={() => handleOnClickCloseModal()} closeButton>
            <Modal.Title>
              {clothes.find((item) => item.id === clothesIdModal)?.name}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <UpdateClothesModal singleCloth={singleClothes} />
          </Modal.Body>
          <Modal.Footer>
            <button type="button" className="btn btn-block btn-outline-info">
              Lưu
            </button>
            <button
              onClick={() => handleOnClickCloseModal()}
              type="button"
              className="btn btn-block btn-default"
            >
              Đóng
            </button>
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
}
