import { useState, ChangeEvent, useEffect } from "react";
import { useAppSelector } from "../../store/hooks";
import { useAppDispatch } from "../../store/hooks";
import { updateLocalPaymentInfo } from "../../features/payments/paymentsSlice";
import { updateLocal2handPayment } from "../../features/secondhandPayments/secondhandPaymentsSlice";

export const BillingDetail = () => {
  const dispatch = useAppDispatch();
  const auth = useAppSelector((state) => state.auth.auth);
  const [infoLocal, setInfoLocal] = useState({
    fullName: "",
    address: "",
    phoneNumber: "",
    email: "",
  });
  const handleChangeFullname = (event: ChangeEvent<HTMLInputElement>) => {
    setInfoLocal({
      ...infoLocal,
      fullName: event.target.value,
    });
  };
  const handleChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setInfoLocal({
      ...infoLocal,
      email: event.target.value,
    });
  };
  const handleChangeAddress = (event: ChangeEvent<HTMLInputElement>) => {
    setInfoLocal({
      ...infoLocal,
      address: event.target.value,
    });
  };
  const handleChangePhoneNumber = (event: ChangeEvent<HTMLInputElement>) => {
    setInfoLocal({
      ...infoLocal,
      phoneNumber: event.target.value,
    });
  };
  useEffect(() => {
    dispatch(updateLocalPaymentInfo(infoLocal));
    dispatch(updateLocal2handPayment(infoLocal));
  }, [infoLocal, dispatch]);
  return (
    <>
      {auth && auth !== null ? (
        <div className="col-lg-9">
          <h2 className="checkout-title">Chi tiết hóa đơn</h2>
          {/* End .checkout-title */}
          <div className="row">
            <div className="col-sm-6">
              <label>Họ và tên đầy đủ *</label>
              <input
                type="text"
                value={auth.fullname}
                className="form-control"
              />
            </div>
            {/* End .col-sm-6 */}

            {/* End .col-sm-6 */}
          </div>
          {/* End .row */}


          <label>Địa chỉ</label>
          <input
            type="text"
            className="form-control"
            placeholder="Số nhà và tên đường ..."
          />
          {/* End .row */}

          <div className="row">
            {/* End .col-sm-6 */}

            <div className="col-sm-6">
              <label>Số điện thoại</label>
              <input
                type="tel"
                value={auth.phoneNumber}
                className="form-control"
              />
            </div>
            {/* End .col-sm-6 */}
          </div>
          {/* End .row */}

          <label>Địa chỉ email</label>
          <input type="email" value={auth.email} className="form-control" />

          {/* End .custom-checkbox */}

        </div>
      ) : (
        <div className="col-lg-9">
          <h2 className="checkout-title">Chi tiết hóa đơn</h2>
          {/* End .checkout-title */}
          <div className="row">
            <div className="col-sm-6">
              <label>Họ và tên đầy đủ</label>
              <input
                type="text"
                className="form-control"
                value={infoLocal.fullName}
                onChange={(event) => handleChangeFullname(event)}
                required
              />
            </div>
            {/* End .col-sm-6 */}
            {/* End .col-sm-6 */}
          </div>
          {/* End .row */}

          <label>Địa chỉ</label>
          <input
            type="text"
            className="form-control"
            placeholder="Số nhà và tên đường ..."
            value={infoLocal.address}
            onChange={(event) => handleChangeAddress(event)}
            required
          />

          {/* End .row */}

          <div className="row">
            {/* End .col-sm-6 */}

            <div className="col-sm-6">
              <label>Số điện thoại</label>
              <input
                type="tel"
                className="form-control"
                value={infoLocal.phoneNumber}
                onChange={(event) => handleChangePhoneNumber(event)}
                required
              />
            </div>
            {/* End .col-sm-6 */}
          </div>
          {/* End .row */}

          <label>Địa chỉ email</label>
          <input
            type="email"
            className="form-control"
            onChange={(event) => handleChangeEmail(event)}
            required
          />

          {/* End .custom-checkbox */}

          {/* End .custom-checkbox */}
        </div>
      )}
    </>
  );
};
