import React from "react";
import { SingleClothes } from "../../features/clothes/clothesType";
interface props {
  singleCloth: SingleClothes;
}
export const UpdateClothesModal: React.FC<props> = ({ singleCloth }) => {
  return (
    <>
      <ul className="nav nav-tabs" id="custom-content-below-tab" role="tablist">
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
                      <input
                        type="text"
                        className="form-control"
                        placeholder={singleCloth && singleCloth.name}
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Hãng</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder={singleCloth && singleCloth.brand}
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Vị trí</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder={singleCloth && singleCloth.location}
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Giá nhập</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder={singleCloth && singleCloth.initPrice}
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Giá bán</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder={singleCloth && singleCloth.price}
                      />
                    </div>
                  </div>
                </div>
                {/* <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Textarea</label>
                      <textarea
                        className="form-control"
                        rows={3}
                        placeholder="Enter ..."
                      ></textarea>
                    </div>
                  </div>
                </div> */}
                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Danh mục cha</label>
                      <select className="form-control">
                        <option>option 1</option>
                        <option selected={true}>option 2</option>
                        <option>option 3</option>
                        <option>option 4</option>
                        <option>option 5</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Danh mục con</label>
                      <select className="form-control">
                        <option>option 1</option>
                        <option selected={true}>option 2</option>
                        <option>option 3</option>
                        <option>option 4</option>
                        <option>option 5</option>
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
                          <tr>
                            <td>1</td>
                            <td>dump name</td>
                            <td>dump brand</td>
                            <td>dump location</td>
                            <td>dump category</td>
                            <td>dump price</td>
                            <td>
                              <button
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
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};
