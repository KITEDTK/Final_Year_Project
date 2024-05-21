import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { fetchAllClothes } from "../features/clothes/clothesSlice";
import type { Clothes } from "../features/clothes/clothesType";
import { getHeaders } from "../utils/getHeaders";
// import { objectToArrayCSV } from "../utils/objectToArrayCSV";
// import { CSVLink } from "react-csv";
export function Clothes() {
    const dispatch = useAppDispatch();
    const clothes = useAppSelector((state)=> state.clothes.clothes);
    useEffect(()=>{
        dispatch(fetchAllClothes())
    },[dispatch, clothes]);
    const headers = getHeaders(clothes);
  return (
    <>
      <section className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">
                    Bảng Quần áo 
                  </h3>
                  {/* <CSVLink data={clothes}>Download me</CSVLink>; */}
                </div>

                <div className="card-body">
                  <table
                    id="example2"
                    className="table table-bordered table-hover"
                  >
                    <thead>
                      <tr>
                        {headers && headers.map((header)=>(
                            <th>{header}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                        {clothes && clothes.length > 0 && clothes.map((cloth)=> (
                            <>
                             <tr>
                        <td>{cloth.name}</td>
                        <td>{cloth.brand}</td>
                        <td>{cloth.location}</td>
                        <td>{cloth.price}</td>
                        <td>{cloth.categoryName}</td>
                      </tr>
                            </>
                        ))}
                     
                    </tbody>
                    <tfoot>
                      <tr>
                      {headers && headers.map((header)=>(
                            <th>{header}</th>
                        ))}
                      </tr>
                    </tfoot>
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
