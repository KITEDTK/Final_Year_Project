import { useState, useEffect } from "react";
import { useAppDispatch } from "../store/hooks";
import { fetchClothByBarcode } from "../features/clothes/clothesSlice";
import { ClothByBarcode } from "../features/clothes/clothesType";
export const Refunds = () => {
  const dispatch = useAppDispatch();
  const [barcodeString, setBarcodeString] = useState<string>("");
  const [prevBarcodeString, setPrevBarcodeString] = useState<string>("");
  const [cloth, setCloth] = useState<ClothByBarcode>();
  const handleOnChangeBarcodeValue = (value: string) => {
    setBarcodeString(value);
  };
  const handleKeyPress = (event: any) => {
    setPrevBarcodeString((prevBarcode) => {
      return prevBarcode + event.key;
    });
  };
  const conditionToBreak = barcodeString.length === 16;
  useEffect(() => {
    if (conditionToBreak) {
      setBarcodeString(barcodeString);
    }
  }, [barcodeString, conditionToBreak]);
  useEffect(() => {
    document.addEventListener("keypress", handleKeyPress);
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
  useEffect(()=>{
    if(barcodeString.endsWith("Enter")){
      setBarcodeString(barcodeString.slice(0,-5));
    }
    if(barcodeString.length === 16){
      dispatch(fetchClothByBarcode(barcodeString)).then((res: any)=>{
        setCloth(res.payload);
      })
    }
  },[barcodeString,dispatch]);
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
        <div className="card card-solid">
          <div className="card-body">
            <div className="row">
              <div className="col-12 col-sm-6">
                <h3 className="d-inline-block d-sm-none">
                  {cloth?.cloth.name}
                </h3>
                <div className="col-12">
                  <img
                    src="../../dist/img/prod-1.jpg"
                    className="product-image"
                    alt="Product Image"
                  />
                </div>
                <div className="col-12 product-image-thumbs">
                  <div className="product-image-thumb active">
                    <img src="../../dist/img/prod-1.jpg" alt="Product Image" />
                  </div>
                  <div className="product-image-thumb">
                    <img src="../../dist/img/prod-2.jpg" alt="Product Image" />
                  </div>
                  <div className="product-image-thumb">
                    <img src="../../dist/img/prod-3.jpg" alt="Product Image" />
                  </div>
                  <div className="product-image-thumb">
                    <img src="../../dist/img/prod-4.jpg" alt="Product Image" />
                  </div>
                  <div className="product-image-thumb">
                    <img src="../../dist/img/prod-5.jpg" alt="Product Image" />
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6">
                <h3 className="my-3">
                  LOWA Men’s Renegade GTX Mid Hiking Boots Review
                </h3>
                <p>
                  Raw denim you probably haven't heard of them jean shorts
                  Austin. Nesciunt tofu stumptown aliqua butcher retro keffiyeh
                  dreamcatcher synth. Cosby sweater eu banh mi, qui irure terr.
                </p>
                <hr />
                <h4>Available Colors</h4>
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
                    Green
                    <br />
                    <i className="fas fa-circle fa-2x text-green"></i>
                  </label>
                  <label className="btn btn-default text-center">
                    <input
                      type="radio"
                      name="color_option"
                      id="color_option_a2"
                      autoComplete="off"
                    />
                    Blue
                    <br />
                    <i className="fas fa-circle fa-2x text-blue"></i>
                  </label>
                  <label className="btn btn-default text-center">
                    <input
                      type="radio"
                      name="color_option"
                      id="color_option_a3"
                      autoComplete="off"
                    />
                    Purple
                    <br />
                    <i className="fas fa-circle fa-2x text-purple"></i>
                  </label>
                  <label className="btn btn-default text-center">
                    <input
                      type="radio"
                      name="color_option"
                      id="color_option_a4"
                      autoComplete="off"
                    />
                    Red
                    <br />
                    <i className="fas fa-circle fa-2x text-red"></i>
                  </label>
                  <label className="btn btn-default text-center">
                    <input
                      type="radio"
                      name="color_option"
                      id="color_option_a5"
                      autoComplete="off"
                    />
                    Orange
                    <br />
                    <i className="fas fa-circle fa-2x text-orange"></i>
                  </label>
                </div>
                <h4 className="mt-3">
                  Size <small>Please select one</small>
                </h4>
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
                    <span className="text-xl">S</span>
                    <br />
                    Small
                  </label>
                  <label className="btn btn-default text-center">
                    <input
                      type="radio"
                      name="color_option"
                      id="color_option_b2"
                      autoComplete="off"
                    />
                    <span className="text-xl">M</span>
                    <br />
                    Medium
                  </label>
                  <label className="btn btn-default text-center">
                    <input
                      type="radio"
                      name="color_option"
                      id="color_option_b3"
                      autoComplete="off"
                    />
                    <span className="text-xl">L</span>
                    <br />
                    Large
                  </label>
                  <label className="btn btn-default text-center">
                    <input
                      type="radio"
                      name="color_option"
                      id="color_option_b4"
                      autoComplete="off"
                    />
                    <span className="text-xl">XL</span>
                    <br />
                    Xtra-Large
                  </label>
                </div>
                <div className="bg-gray py-2 px-3 mt-4">
                  <h2 className="mb-0">$80.00</h2>
                  <h4 className="mt-0">
                    <small>Ex Tax: $80.00 </small>
                  </h4>
                </div>
                <div className="mt-4">
                  <div className="btn btn-primary btn-lg btn-flat">
                    <i className="fas fa-cart-plus fa-lg mr-2"></i>
                    Add to Cart
                  </div>
                  <div className="btn btn-default btn-lg btn-flat">
                    <i className="fas fa-heart fa-lg mr-2"></i>
                    Add to Wishlist
                  </div>
                </div>
                <div className="mt-4 product-share">
                  <a href="#" className="text-gray">
                    <i className="fab fa-facebook-square fa-2x"></i>
                  </a>
                  <a href="#" className="text-gray">
                    <i className="fab fa-twitter-square fa-2x"></i>
                  </a>
                  <a href="#" className="text-gray">
                    <i className="fas fa-envelope-square fa-2x"></i>
                  </a>
                  <a href="#" className="text-gray">
                    <i className="fas fa-rss-square fa-2x"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
