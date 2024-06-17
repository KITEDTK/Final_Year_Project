import { Modal } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { useEffect } from "react";
import { fetchModalCategories } from "../../features/categories/categoriesSlice";
import { fetchAllColors } from "../../features/colors/colorsSlice";
import { fetchAllSizes } from "../../features/sizes/sizesSlice";
import { useState } from "react";
import { ChangeEvent } from "react";
interface props {
  show: boolean;
  handleOnClickCloseModal: () => void;
}
export const CreateClothesModal: React.FC<props> = ({
  show,
  handleOnClickCloseModal,
}) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchModalCategories());
    dispatch(fetchAllColors());
    dispatch(fetchAllSizes());
  }, [dispatch]);
  const colors = useAppSelector((state) => state.colors.colors);
  const sizes = useAppSelector((state) => state.sizes.sizes);
  const categoriesModal = useAppSelector(
    (state) => state.categories.categoriesModal
  );
  const [rows, setRows] = useState([
    { color: colors[0].name, size: sizes[0].name,image1:"",image2:"", image3:"", barcode: "", quantity: "" },
  ]);
  const handleAddRow = () => {
    setRows([
      ...rows,
      { color: colors[0].name, size: sizes[0].name,image1:"",image2:"", image3:"", barcode: "", quantity: "" },
    ]);
  };
  const handleDeleteRow = (index: any) => {
    setRows(rows.filter((_, i) => i !== index));
  };
  const handleColorChange = (index: number, newColor: string) => {
    const newRows = rows.map((row, i) =>
      i === index ? { ...row, color: newColor } : row
    );
    setRows(newRows);
  };

  const handleSizeChange = (index: number, newSize: string) => {
    const newRows = rows.map((row, i) =>
      i === index ? { ...row, size: newSize } : row
    );
    setRows(newRows);
  };

  const handleCreateClothes = () => {
    console.log(rows);
  };
  return (
    <>
      <Modal
        show={show}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
      >
        <Modal.Header onClick={() => handleOnClickCloseModal()} closeButton>
          <Modal.Title>Tạo mới mặt hàng</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ul
            className="nav nav-tabs"
            id="custom-content-below-tab"
            role="tablist"
          >
            <li className="nav-item">
              <a
                className="nav-link active"
                id="custom-content-below-home-tab"
                data-toggle="pill"
                href="#custom-content-below-home"
                role="tab"
                aria-controls="custom-content-below-home"
                aria-selected="true"
              >
                Thông tin
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="custom-content-below-profile-tab"
                data-toggle="pill"
                href="#custom-content-below-profile"
                role="tab"
                aria-controls="custom-content-below-profile"
                aria-selected="false"
              >
                Tồn kho
              </a>
            </li>
          </ul>
          <div className="tab-content" id="custom-content-below-tabContent">
            <div
              className="tab-pane fade show active"
              id="custom-content-below-home"
              role="tabpanel"
              aria-labelledby="custom-content-below-home-tab"
            >
              <div className="card card-default">
                <div className="card-body">
                  <form>
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="form-group">
                          <label>Tên mặt hàng</label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="form-group">
                          <label>Hãng</label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-group">
                          <label>Vị trí</label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="form-group">
                          <label>Giá nhập</label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-group">
                          <label>Giá bán</label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="form-group">
                          <label>Danh mục</label>
                          <select className="form-control">
                            {categoriesModal &&
                              categoriesModal.map((item) => (
                                <option key={item.id} value={item.name}>
                                  {item.name}
                                </option>
                              ))}
                          </select>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="custom-content-below-profile"
              role="tabpanel"
              aria-labelledby="custom-content-below-profile-tab"
            >
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
                                <th style={{ width: "15%" }}>Màu sắc</th>
                                <th style={{ width: "10%" }}>Kích cỡ</th>
                                <th style={{ width: "10%" }}>Mã vạch</th>
                                <th style={{ width: "10%" }}>Số lượng</th>
                                <th style={{ width: "7%" }}>Ảnh 1</th>
                                <th style={{ width: "7%" }}>Ảnh 2</th>
                                <th style={{ width: "7%" }}>Ảnh 3</th>
                                <th style={{ width: "5%" }}>Xóa</th>
                              </tr>
                            </thead>
                            <tbody>
                              {rows.map((row, index) => (
                                <tr key={index}>
                                  <td>
                                    <select
                                      onChange={(
                                        e: ChangeEvent<HTMLSelectElement>
                                      ) =>
                                        handleColorChange(index, e.target.value)
                                      }
                                      style={{ width: "100%" }}
                                      className="form-control"
                                    >
                                      {colors &&
                                        colors.map((item) => (
                                          <option
                                            key={item.id}
                                            value={item.name}
                                          >
                                            {item.name}
                                          </option>
                                        ))}
                                    </select>
                                  </td>
                                  <td>
                                    <select
                                      onChange={(
                                        e: ChangeEvent<HTMLSelectElement>
                                      ) =>
                                        handleSizeChange(index, e.target.value)
                                      }
                                      className="form-control"
                                    >
                                      {sizes &&
                                        sizes.map((item) => (
                                          <option
                                            key={item.id}
                                            value={item.name}
                                          >
                                            {item.name}
                                          </option>
                                        ))}
                                    </select>
                                  </td>
                                  <td>
                                    <input
                                      type="text"
                                      value={row.barcode}
                                      style={{ width: "100%" }}
                                    />
                                  </td>
                                  <td>
                                    <input
                                      type="text"
                                      value={row.quantity}
                                      style={{ width: "100%" }}
                                    />
                                  </td>
                                  <td>Ảnh 1</td>
                                  <td>Ảnh 2</td>
                                  <td>Ảnh 3</td>
                                  <td>
                                    <button
                                      onClick={() => handleDeleteRow(index)}
                                      type="button"
                                      className="btn btn-block btn-outline-danger"
                                      style={{
                                        width: "100%",
                                      }}
                                    >
                                      Xóa
                                    </button>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                          <br />
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "center",
                            }}
                          >
                            <button
                              onClick={() => handleAddRow()}
                              type="button"
                              className="btn btn-block btn-success"
                              style={{
                                width: "30%",
                              }}
                            >
                              Thêm chi tiết mặt hàng
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button
            onClick={handleCreateClothes}
            type="button"
            className="btn btn-block btn-outline-info"
          >
            Thêm mới
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
    </>
  );
};
