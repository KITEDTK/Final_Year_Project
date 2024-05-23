import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { fetchAllClothes } from "../features/clothes/clothesSlice";
import type { Clothes } from "../features/clothes/clothesType";
import { removeColFromTables } from "../utils/removeColFromTable";
import { tableToExcel } from "../utils/tableToExcels";
export function Clothes() {
  const dispatch = useAppDispatch();
  const clothes = useAppSelector((state) => state.clothes.clothes);
  useEffect(() => {
    dispatch(fetchAllClothes());
  }, [dispatch, clothes]);
  const handleExcel = () => {
    const table = document.getElementById("clothes-table");
    if (table) {
      const fixedTable = removeColFromTables(table as HTMLTableElement,[6]);
      const wscols = [
        { width: 15 },
        { width: 50 },
        { width: 15 },
        { width: 15 },
        { width: 13 },
        { width: 15 },
      ];
      tableToExcel(fixedTable, "Clothes",wscols);
    } else {
      console.log("Lỗi không tìm thấy bảng");
    }
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
                        clothes.map((cloth,index) => (
                          <>
                            <tr>
                              <td>{index+1}</td>
                              <td>{cloth.name}</td>
                              <td>{cloth.brand}</td>
                              <td>{cloth.location}</td>
                              <td>{cloth.categoryName}</td>
                              <td>{cloth.price}</td>
                              <td>
                                <button>Xóa</button>
                                <button>Sửa</button>
                              </td>
                            </tr>
                          </>
                        ))}
                    </tbody>
                    {/* <tfoot>
                      <tr>
                        <th>Tên sản phẩm</th>
                        <th>Hãng</th>
                        <th>Vị trí</th>
                        <th>Danh mục</th>
                        <th>Giá tiền</th>
                      </tr>
                    </tfoot> */}
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
