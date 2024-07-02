import React, { ChangeEvent, useEffect, useState } from "react";
import { Clothes, SingleClothes } from "../../features/clothes/clothesType";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { fetchModalCategories } from "../../features/categories/categoriesSlice";
import { Modal } from "react-bootstrap";
import { fetchUpdateClothesAdmin } from "../../features/clothes/clothesSlice";
import { showToast } from "../../utils/showToast";
import { fetchAllColors } from "../../features/colors/colorsSlice";
import { fetchAllSizes } from "../../features/sizes/sizesSlice";
import { useRef } from "react";
import { fetchGenerateBarcode } from "../../features/clothes/clothesSlice";
import axios from "axios";
interface props {
  singleCloth: SingleClothes;
  show: boolean;
  handleOnClickCloseModal: () => void;
  setShow: (item: boolean) => void;
  setClothesItems: (items: (prevItems: Clothes[]) => Clothes[]) => void;
}
interface Rows {
  colorId: string;
  sizeId: string;
  image1: File | null;
  image2: File | null;
  image3: File | null;
  barcode: string;
  quantity: number;
}
export const UpdateClothesModal: React.FC<props> = ({
  singleCloth,
  show,
  setShow,
  handleOnClickCloseModal,
  setClothesItems,
}) => {
  const dispatch = useAppDispatch();
  const colors = useAppSelector((state) => state.colors.colors);
  const sizes = useAppSelector((state) => state.sizes.sizes);
  useEffect(() => {
    dispatch(fetchModalCategories());
    dispatch(fetchAllColors());
    dispatch(fetchAllSizes());
  }, [dispatch]);
  const categoriesModal = useAppSelector(
    (state) => state.categories.categoriesModal
  );
  const [clothesName, setClothesName] = useState<string>();
  const [categoryId, setCategoryId] = useState<string>();
  const [categoryName, setCategoryName] = useState<string>();
  const [location, setLocation] = useState<string>();
  const [price, setPrice] = useState<number>();
  const [brand, setBrand] = useState<string>();
  const onChangePrice = (event: ChangeEvent<HTMLInputElement>) => {
    const newPrice = event.target.value;
    // Convert the input to a number and ensure it is valid
    const parsedPrice = parseFloat(newPrice);

    // Check if the parsedPrice is a valid number and not negative
    if (!isNaN(parsedPrice) && parsedPrice >= 0) {
      setPrice(parsedPrice);
    }
  };
  const handleOnChangeCategory = (selectedName: string) => {
    const selectedCategory = categoriesModal.find(
      (category) => category.name === selectedName
    );
    if (selectedCategory) {
      setCategoryId(selectedCategory.id);
      setCategoryName(selectedName);
    }
  };
  const handleUpdateClothes = async () => {
    await dispatch(
      fetchUpdateClothesAdmin({
        clothesId: singleCloth.id,
        name: clothesName,
        categoryId: categoryId,
        location: location,
        price: price,
        brand: brand,
      })
    );
    const updatedClothes: any = {
      ...singleCloth,
      name: clothesName || singleCloth.name,
      categoryName: categoryName || singleCloth.category.name,
      location: location || singleCloth.location,
      price: price !== undefined ? price : singleCloth.price,
      brand: brand || singleCloth.brand,
    };
    await setClothesItems((prevItems) =>
      prevItems.map((item) =>
        item.id === singleCloth.id ? updatedClothes : item
      )
    );
    if (rows.length > 0) {
      rows.forEach(async (item) => {
        const formData = new FormData();
        formData.append("colorId", item.colorId);
        formData.append("sizeId", item.sizeId);
        if (item.image1 !== null) {
          formData.append("image1", item.image1);
          formData.append("image1Name", item.image1.name);
        }
        if (item.image2 !== null) {
          formData.append("image2", item.image2);
          formData.append("image2Name", item.image2.name);
        }
        if (item.image3 !== null) {
          formData.append("image3", item.image3);
          formData.append("image3Name", item.image3.name);
        }
        formData.append("amount", item.quantity.toString());
        formData.append("barcode", item.barcode);
        await axios.post(
          `http://localhost:4000/clothes/admin/${singleCloth.id}/clothDetails`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
      });
    }
    await showToast("Bạn đã cập nhật thành công", "success");
    setShow(false);
  };
  const [rows, setRows] = useState<Rows[]>([]);
  const fileInput1Refs = useRef<(HTMLInputElement | null)[]>([]);
  const fileInput2Refs = useRef<(HTMLInputElement | null)[]>([]);
  const fileInput3Refs = useRef<(HTMLInputElement | null)[]>([]);

  const oldBarcode = rows.map((item: Rows) => item.barcode);
  const handleAddRow = () => {
    dispatch(fetchGenerateBarcode({ oldBarcode: [...oldBarcode] })).then(
      (res) => {
        setRows([
          ...rows,
          {
            colorId: colors[0].id,
            sizeId: sizes[0].id,
            image1: null,
            image2: null,
            image3: null,
            barcode: res.payload as string,
            quantity: 0,
          },
        ]);
      }
    );
  };
  const handleDeleteRow = (index: any) => {
    setRows(rows.filter((_, i) => i !== index));
  };
  const handleColorChange = (index: number, newColorId: string) => {
    const newRows = rows.map((row, i) =>
      i === index ? { ...row, colorId: newColorId } : row
    );
    setRows(newRows);
  };
  const handleSizeChange = (index: number, newSizeId: string) => {
    const newRows = rows.map((row, i) =>
      i === index ? { ...row, sizeId: newSizeId } : row
    );
    setRows(newRows);
  };
  const handleQuantityChange = (index: number, newQuantityString: string) => {
    let newQuantity = parseInt(newQuantityString, 10);

    if (isNaN(newQuantity)) {
      newQuantity = 0;
    }

    const newRows = rows.map((row, i) =>
      i === index ? { ...row, quantity: newQuantity } : row
    );
    setRows(newRows);
  };
  const handleFile1Change = (
    index: number,
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      const updatedRows = [...rows];
      updatedRows[index].image1 = file;
      setRows(updatedRows);
    }
  };

  const handleFile2Change = (
    index: number,
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      const updatedRows = [...rows];
      updatedRows[index].image2 = file;
      setRows(updatedRows);
    }
  };

  const handleFile3Change = (
    index: number,
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      const updatedRows = [...rows];
      updatedRows[index].image3 = file;
      setRows(updatedRows);
    }
  };
  const getImageUrl = (file: File | null): string | undefined => {
    if (file) {
      return URL.createObjectURL(file);
    }
    return undefined;
  };
  const [showAddQuantity, setShowAddQuantity] = useState<boolean>(false);

  const handleAddQuantity = () => {
    setShowAddQuantity(true);
  };
  const handleCloseAddQuantity = () => {
    setShowAddQuantity(false);
  };
  return (
    <>
      <Modal show={showAddQuantity} onHide={handleCloseAddQuantity}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {" "}
          <input type="text" className="form-control" />
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
      <Modal
        show={show}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
      >
        <Modal.Header onClick={() => handleOnClickCloseModal()} closeButton>
          <Modal.Title>{singleCloth.name}</Modal.Title>
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
            <li className="nav-item">
              <a
                className="nav-link"
                id="custom-content-below-details-tab"
                data-toggle="pill"
                href="#custom-content-below-details"
                role="tab"
                aria-controls="custom-content-below-details"
                aria-selected="false"
              >
                Thêm mới chi tiết mặt hàng
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
                            onChange={(event) =>
                              setClothesName(event.target.value)
                            }
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
                            onChange={(event) => setBrand(event.target.value)}
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
                            onChange={(event) =>
                              setLocation(event.target.value)
                            }
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
                            disabled
                          />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-group">
                          <label>Giá bán</label>
                          <input
                            onChange={(event) => onChangePrice(event)}
                            type="text"
                            className="form-control"
                            placeholder={
                              singleCloth ? singleCloth.price.toString() : ""
                            }
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
                          <label>Danh mục</label>
                          <select
                            onChange={(event) =>
                              handleOnChangeCategory(event.target.value)
                            }
                            className="form-control"
                          >
                            {categoriesModal &&
                              categoriesModal.map((item) => (
                                <option
                                  key={item.id}
                                  value={item.name}
                                  selected={
                                    item.name === singleCloth.category.name
                                      ? true
                                      : false
                                  }
                                >
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
                                <th style={{ width: "3%" }}>STT</th>
                                <th style={{ width: "10%" }}>Màu sắc</th>
                                <th style={{ width: "10%" }}>Kích cỡ</th>
                                <th style={{ width: "10%" }}>Mã vạch</th>
                                <th style={{ width: "10%" }}>Tồn kho</th>
                                <th style={{ width: "10%" }}>Đang đặt</th>
                                <th style={{ width: "15%" }}>Thêm số lượng</th>
                              </tr>
                            </thead>
                            <tbody>
                              {singleCloth &&
                                singleCloth.clothDetails &&
                                singleCloth.clothDetails.map((item, index) => (
                                  <>
                                    <tr>
                                      <td>{index + 1}</td>
                                      <td>{item.color.name}</td>
                                      <td>{item.size.name}</td>
                                      <td>{item.codeBar}</td>
                                      <td>{item.amount}</td>
                                      <td>{item.sumOrderAmount}</td>
                                      <td>
                                        <button
                                          type="button"
                                          onClick={() => handleAddQuantity()}
                                          className="btn btn-block btn-info"
                                        >
                                          Thêm số lượng
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
            </div>
            <div
              className="tab-pane fade"
              id="custom-content-below-details"
              role="tabpanel"
              aria-labelledby="custom-content-below-details-tab"
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
                                      value={row.colorId}
                                    >
                                      {colors &&
                                        colors.map((item) => (
                                          <option key={item.id} value={item.id}>
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
                                      value={row.sizeId}
                                    >
                                      {sizes &&
                                        sizes.map((item) => (
                                          <option key={item.id} value={item.id}>
                                            {item.name}
                                          </option>
                                        ))}
                                    </select>
                                  </td>
                                  <td>{row.barcode}</td>
                                  <td>
                                    <input
                                      onChange={(
                                        e: ChangeEvent<HTMLInputElement>
                                      ) =>
                                        handleQuantityChange(
                                          index,
                                          e.target.value
                                        )
                                      }
                                      type="text"
                                      value={row.quantity}
                                      style={{ width: "100%" }}
                                    />
                                  </td>
                                  <td>
                                    {row.image1 === null ? (
                                      <>
                                        {" "}
                                        <button
                                          onClick={() => {
                                            const fileInput =
                                              fileInput1Refs.current[index];
                                            if (fileInput) {
                                              fileInput.click();
                                            }
                                          }}
                                          type="button"
                                          className="btn btn-block btn-info"
                                        >
                                          File
                                        </button>
                                        <input
                                          type="file"
                                          accept="image/*"
                                          ref={(el) =>
                                            (fileInput1Refs.current[index] = el)
                                          }
                                          onChange={(e) =>
                                            handleFile1Change(index, e)
                                          }
                                          style={{ display: "none" }}
                                        />
                                      </>
                                    ) : (
                                      <>
                                        <img
                                          src={
                                            getImageUrl(row.image1) || undefined
                                          }
                                          alt="Preview"
                                          style={{
                                            width: "50px",
                                            height: "50px",
                                          }}
                                        />
                                      </>
                                    )}
                                  </td>
                                  <td>
                                    {row.image2 ? (
                                      <img
                                        src={
                                          getImageUrl(row.image2) || undefined
                                        }
                                        alt="Preview"
                                        style={{
                                          width: "50px",
                                          height: "50px",
                                        }}
                                      />
                                    ) : (
                                      <>
                                        <button
                                          onClick={() => {
                                            const fileInput =
                                              fileInput2Refs.current[index];
                                            if (fileInput) {
                                              fileInput.click();
                                            }
                                          }}
                                          type="button"
                                          className="btn btn-block btn-info"
                                        >
                                          File
                                        </button>
                                        <input
                                          type="file"
                                          accept="image/*"
                                          ref={(el) =>
                                            (fileInput2Refs.current[index] = el)
                                          }
                                          onChange={(e) =>
                                            handleFile2Change(index, e)
                                          }
                                          style={{ display: "none" }}
                                        />
                                      </>
                                    )}
                                  </td>
                                  <td>
                                    {row.image3 ? (
                                      <img
                                        src={
                                          getImageUrl(row.image3) || undefined
                                        }
                                        alt="Preview"
                                        style={{
                                          width: "50px",
                                          height: "50px",
                                        }}
                                      />
                                    ) : (
                                      <>
                                        {" "}
                                        <button
                                          onClick={() => {
                                            const fileInput =
                                              fileInput3Refs.current[index];
                                            if (fileInput) {
                                              fileInput.click();
                                            }
                                          }}
                                          type="button"
                                          className="btn btn-block btn-info"
                                        >
                                          File
                                        </button>
                                        <input
                                          type="file"
                                          accept="image/*"
                                          ref={(el) =>
                                            (fileInput3Refs.current[index] = el)
                                          }
                                          onChange={(e) =>
                                            handleFile3Change(index, e)
                                          }
                                          style={{ display: "none" }}
                                        />
                                      </>
                                    )}
                                  </td>
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
            onClick={() => handleUpdateClothes()}
            type="button"
            className="btn btn-block btn-outline-info"
          >
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
    </>
  );
};
