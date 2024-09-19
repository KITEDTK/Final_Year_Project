import { useEffect, useState, useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import {
  fetchAllClothes,
  fetchClothesSearching,
  fetchMaxQuantityClothes,
  fetchSingleClothes,
} from "../features/clothes/clothesSlice";
import type {
  Clothes,
  SearchingClothes,
} from "../features/clothes/clothesType";
import { removeColFromTables } from "../utils/removeColFromTable";
import { tableToExcel } from "../utils/tableToExcels";
import _ from "lodash";
import { UpdateClothesModal } from "../components/clothes/UpdateClothesModal";
import InfiniteScroll from "react-infinite-scroll-component";
import { CreateClothesModal } from "../components/clothes/CreateClothesModal";
import { formatMoney } from '../../../client/src/utils/formatMoney';
export function Clothes() {
  const dispatch = useAppDispatch();
  const singleClothes = useAppSelector((state) => state.clothes.singleClothes);
  const [page, setPage] = useState<number>(0);
  const [clothesItems, setClothesItems] = useState<Clothes[]>([]);
  const [searchText, setSearchText] = useState<string>();
  const [clothesSearch, setClothesSearch] = useState<SearchingClothes[]>();
  const [hasMore, setHasMore] = useState<boolean>(true);
  const maxClothesQuantity = useAppSelector(
    (state) => state.clothes.maxClothesQuantity
  );
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
  const [showUpdateModal, setShowUpdateModal] = useState<boolean>(false);
  const [showCreateModal, setShowCreateModal] = useState<boolean>(false);
  const handleOnClickUpdateClothes = async (clothesId: string) => {
    await dispatch(fetchSingleClothes(clothesId));
    setShowUpdateModal(true);
  };
  const handleOnClickCreateClothes = async () => {
    setShowCreateModal(true);
  };
  const handleOnClickCloseUpdateModal = () => {
    setShowUpdateModal(false);
  };
  const handleOnClickCloseCreateModal = () => {
    setShowCreateModal(false);
  };
  useEffect(() => {
    dispatch(fetchMaxQuantityClothes());
  }, [dispatch]);
  useEffect(() => {
    dispatch(fetchAllClothes(page)).then((res: any) => {
      if (page === 0) {
        setClothesItems(res.payload);
      } else {
        setClothesItems((prev) => [...prev, ...res.payload]);
      }
    });
  }, [dispatch, page]);
  useEffect(() => {
    if (clothesItems.length === maxClothesQuantity) {
      setHasMore(false);
    }
  }, [clothesItems, maxClothesQuantity]);
  const fetchMoreData = () => {
    setPage((prevPage) => prevPage + 1);
  };
  const handleChangeSearching = (text: string) => {
    setSearchText(text);
    debouncedSearch(text);
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedSearch = useCallback(
    _.debounce((searchTerm) => {
      dispatch(fetchClothesSearching(searchTerm)).then((res: any) => {
        setClothesSearch(res.payload);
      });
    }, 300),
    [dispatch]
  );

  useEffect(() => {
    return () => {
      debouncedSearch.cancel();
    };
  }, [debouncedSearch]);
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

                <div className="card-body" style={{ minHeight: "101vh" }}>
                  <div
                    style={{
                      display: "flex",
                      gap: "10px",
                      justifyContent: "flex-end",
                      alignItems: "flex-end",
                    }}
                  >
                    <div
                      style={{
                        width: "10%",
                        height: "100%",
                        flex: "10 0 auto",
                      }}
                    >
                      <input
                        style={{ width: 400 }}
                        onChange={(event) =>
                          handleChangeSearching(event.target.value)
                        }
                        type="text"
                        placeholder="Tìm kiếm ..."
                      />
                    </div>
                    <button
                      type="button"
                      className="btn btn-block btn-success"
                      style={{
                        width: "10%",
                        height: "100%",
                        flex: "0 0 auto", // Thiết lập flex-grow, flex-shrink, và flex-basis cho nút đầu tiên
                      }}
                      onClick={() => handleExcel()}
                    >
                      In ra excel
                    </button>
                    <button
                      type="button"
                      onClick={() => handleOnClickCreateClothes()}
                      className="btn btn-block btn-success"
                      style={{
                        width: "15%",
                        height: "100%",
                        flex: "0 0 auto", // Thiết lập flex-grow, flex-shrink, và flex-basis cho nút thứ hai
                      }}
                    >
                      Nhập hàng mới
                    </button>
                  </div>

                  <br />
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
                          <th>Giá bán</th>
                          <th>Giá nhập</th>
                          <th>Chỉnh sửa/Xóa</th>
                        </tr>
                      </thead>
                      {searchText && clothesSearch ? (
                        <>
                          <tbody>
                            {clothesSearch &&
                              clothesSearch.map((cloth, index) => (
                                <tr key={index}>
                                  <td>{index + 1}</td>
                                  <td>{cloth.name}</td>
                                  <td>{cloth.brand}</td>
                                  <td>{cloth.location}</td>
                                  <td>{cloth.category.name}</td>
                                  <td>{formatMoney(cloth.price)}đ</td>
                                  <td>{formatMoney(cloth.initPrice)}đ</td>
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
                        </>
                      ) : (
                        <>
                          <tbody>
                            {clothesItems &&
                              clothesItems.map((cloth, index) => (
                                <tr key={index}>
                                  <td>{index + 1}</td>
                                  <td>{cloth.name}</td>
                                  <td>{cloth.brand}</td>
                                  <td>{cloth.location}</td>
                                  <td>{cloth.categoryName}</td>
                                  <td>{formatMoney(cloth.price)}đ</td>
                                  <td>{formatMoney(cloth.initPrice)}đ</td>
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
                        </>
                      )}
                    </table>
                  </InfiniteScroll>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {showUpdateModal === true && (
        <UpdateClothesModal
          singleCloth={singleClothes}
          show={showUpdateModal}
          setShow={setShowUpdateModal}
          handleOnClickCloseModal={handleOnClickCloseUpdateModal}
          setClothesItems={setClothesItems}
        />
      )}
      {showCreateModal === true && (
        <CreateClothesModal
          show={showCreateModal}
          handleOnClickCloseModal={handleOnClickCloseCreateModal}
          setClothesItems={setClothesItems}
        />
      )}
    </>
  );
}
