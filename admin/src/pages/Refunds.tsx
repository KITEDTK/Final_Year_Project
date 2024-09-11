import { useState, useEffect } from "react";
import { useAppDispatch } from "../store/hooks";
import {
  fetchClothByBarcode,
  fetchRefunds,
} from "../features/clothes/clothesSlice";
import { ClothByBarcode } from "../features/clothes/clothesType";
import { showToast } from "../utils/showToast";
export const Refunds = () => {
  const dispatch = useAppDispatch();
  const [barcodeString, setBarcodeString] = useState<string>("");
  const [prevBarcodeString, setPrevBarcodeString] = useState<string>("");
  const [cloth, setCloth] = useState<ClothByBarcode | null>();
  const [amountToRefund, setAmountToRefund] = useState<number>(0);
  const handleOnChangeBarcodeValue = (value: string) => {
    const trimmedInput = value.slice(0, 16);
    setBarcodeString(trimmedInput);
  };
  const handleKeyPress = (event: any) => {
    setPrevBarcodeString((prevBarcode) => {
      return prevBarcode + event.key;
    });
  };
  useEffect(() => {
    document.addEventListener("keypress", handleKeyPress);
    setBarcodeString("");
    return () => {
      document.removeEventListener("keypress", handleKeyPress);
    };
  }, []);
  useEffect(() => {
    if (prevBarcodeString.endsWith("Enter")) {
      setPrevBarcodeString(prevBarcodeString.slice(0, -5));
      setBarcodeString(prevBarcodeString);
      setPrevBarcodeString("");
    }
  }, [prevBarcodeString]);
  useEffect(() => {
    if (barcodeString.endsWith("Enter")) {
      setBarcodeString(barcodeString.slice(0, -5));
    }
    if (barcodeString.length === 16) {
      dispatch(fetchClothByBarcode(barcodeString)).then((res: any) => {
        setCloth(res.payload);
      });
    }
  }, [barcodeString, dispatch]);
  const handleOnChangeAmount = (amount: number) => {
    setAmountToRefund(amount);
  };
  const handleOnClickRefund = () => {
    if (cloth) {
      dispatch(
        fetchRefunds({ clothDetailId: cloth?.id, amount: amountToRefund })
      ).then(() => {
        showToast("Cập nhật thành công", "success");
        setCloth(null);
        setBarcodeString("");
      });
    }
  };
  return (
    <>
      <section className="content">
        Mã vạch
        <div style={{ display: "flex", alignItems: "center" }}>
          <input
            type="text"
            className="form-control"
            value={barcodeString}
            onChange={(event) => handleOnChangeBarcodeValue(event.target.value)}
            style={{ width: "300px", marginRight: "10px" }} // Add margin-right for spacing
          />
          <button
            type="button"
            className="btn btn-block btn-success"
            style={{
              width: "10%",
              height: "100%",
              flex: "0 0 auto",
            }}
          >
            Tìm kiếm
          </button>
        </div>
        <br />
        {cloth && cloth !== null ? (
          <>
            <div className="card card-solid">
              <div className="card-body">
                <div className="row">
                  <div className="col-12 col-sm-6">
                    <h3 className="d-inline-block d-sm-none">
                      {cloth?.cloth.name}
                    </h3>
                    <div className="col-12">
                      <img
                      style={{width: 575, height: 521}}
                        src={`http://localhost:4000/images/${cloth.image1}`}
                        className="product-image"
                        alt="Product Image"
                      />
                    </div>
                  </div>
                  <div className="col-12 col-sm-6">
                    <h3 className="my-3">{cloth?.cloth.name}</h3>
                    <p>Nhập thông tin số lượng hàng bạn muốn trả lại</p>
                    <hr />
                    <h4>Màu</h4>
                    <div
                      className="btn-group btn-group-toggle"
                      data-toggle="buttons"
                    >
                      <label className="btn btn-default text-center active">
                        <input
                          type="radio"
                          name="color_option"
                          id="color_option_a1"
                          autoComplete="off"
                          checked
                        />
                        {cloth?.color?.name || "default-color"}
                        <br />
                        <i
                          className={`fas fa-circle fa-2x text-${
                            cloth?.color?.name || "default-color"
                          }`}
                        ></i>
                      </label>
                    </div>
                    <h4 className="mt-3">Kích cỡ</h4>
                    <div
                      className="btn-group btn-group-toggle"
                      data-toggle="buttons"
                    >
                      <label className="btn btn-default text-center">
                        <input
                          type="radio"
                          name="color_option"
                          id="color_option_b1"
                          autoComplete="off"
                        />
                        <span className="text-xl">{cloth?.size.name}</span>
                        <br />
                        {cloth?.size.name}
                      </label>
                    </div>
                    <br />
                    <h4>Nhập số lượng khách trả</h4>
                    <input
                      type="text"
                      className="form-control"
                      onChange={(event) => {
                        handleOnChangeAmount(parseInt(event.target.value));
                      }}
                      value={amountToRefund}
                    />
                    {cloth && cloth !== null && (
                      <div className="mt-4">
                        <div
                          onClick={handleOnClickRefund}
                          className="btn btn-primary btn-lg btn-flat"
                        >
                          <i className="fas fa-cart-plus fa-lg mr-2"></i>
                          Trả hàng
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div>Vui lòng quét mã hoặc nhập mã vạch để tìm kiếm</div>
        )}
      </section>
    </>
  );
};
