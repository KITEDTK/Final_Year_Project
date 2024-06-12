import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import {
  fetchAllClothes,
  fetchMaxQuantityClothes,
  fetchSingleClothes,
} from "../features/clothes/clothesSlice";
import type { Clothes } from "../features/clothes/clothesType";
import { removeColFromTables } from "../utils/removeColFromTable";
import { tableToExcel } from "../utils/tableToExcels";
import { Modal } from "react-bootstrap";
import { UpdateClothesModal } from "../components/clothes/UpdateClothesModal";
import InfiniteScroll from "react-infinite-scroll-component";

export function Clothes() {
  const dispatch = useAppDispatch();
  const clothes = useAppSelector((state) => state.clothes.clothes);
  const singleClothes = useAppSelector((state) => state.clothes.singleClothes);
  const [page, setPage] = useState<number>(0);
  const [clothesItems, setClothesItems] = useState<Clothes[]>([]);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const maxClothesQuantity = useAppSelector((state)=>state.clothes.maxClothesQuantity);
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
  useEffect(()=>{
    dispatch(fetchMaxQuantityClothes());
  },[dispatch]);
  useEffect(() => {
    dispatch(fetchAllClothes(page));
  }, [dispatch, page]);

  useEffect(() => { // mỗi lần clothes thay đổi thì push vào clothesItems
    setClothesItems((prevItems) => [...prevItems, ...clothes]);
    if(clothesItems.length === maxClothesQuantity){
      setHasMore(false);
    }
  }, [clothes, maxClothesQuantity]);

  const fetchMoreData = () => {
    setPage((prevPage) => prevPage + 1);
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
                  <button
                    type="button"
                    className="btn btn-block btn-success"
                    style={{width:'10%' , marginLeft: 'auto', display: 'block'}}
                    onClick={() => handleExcel()}
                  >
                    In ra excel
                  </button>
                  <br/>
                  <InfiniteScroll
                    dataLength={clothesItems.length}
                    next={fetchMoreData}
                    hasMore={hasMore}
                    loader={<h4>Loading...</h4>}
                    endMessage={
                      <p style={{ textAlign: "center" }}>
                        <b>Đã hết dữ liệu để xem</b>
                      </p>
                    }
                  >
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
                        {clothesItems &&
                          clothesItems.map((cloth, index) => (
                            <tr key={index}>
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
                          ))}
                      </tbody>
                    </table>
                  </InfiniteScroll>
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
