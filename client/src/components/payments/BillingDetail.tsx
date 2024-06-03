import { useState, ChangeEvent, useEffect } from "react";
import { useAppSelector } from "../../store/hooks";
import { useAppDispatch } from "../../store/hooks";
import { updateLocalPaymentInfo } from "../../features/payments/paymentsSlice";

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
  }, [infoLocal, dispatch]);
  return (
    <>
      {auth && auth !== null ? (
        <div className="col-lg-9">
          <h2 className="checkout-title">Billing Details</h2>
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

          <label>Company Name (Optional)</label>
          <input type="text" className="form-control" />

          <label>Country *</label>
          <input type="text" className="form-control" />

          <label>Street address *</label>
          <input
            type="text"
            className="form-control"
            placeholder="House number and Street name"
          />
          <input
            type="text"
            className="form-control"
            placeholder="Appartments, suite, unit etc ..."
          />

          <div className="row">
            <div className="col-sm-6">
              <label>Town / City *</label>
              <input type="text" className="form-control" />
            </div>
            {/* End .col-sm-6 */}

            <div className="col-sm-6">
              <label>State / County *</label>
              <input type="text" className="form-control" />
            </div>
            {/* End .col-sm-6 */}
          </div>
          {/* End .row */}

          <div className="row">
            <div className="col-sm-6">
              <label>Postcode / ZIP *</label>
              <input type="text" className="form-control" />
            </div>
            {/* End .col-sm-6 */}

            <div className="col-sm-6">
              <label>Phone *</label>
              <input
                type="tel"
                value={auth.phoneNumber}
                className="form-control"
              />
            </div>
            {/* End .col-sm-6 */}
          </div>
          {/* End .row */}

          <label>Email address *</label>
          <input type="email" value={auth.email} className="form-control" />

          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="checkout-create-acc"
            />
            <label
              className="custom-control-label"
              htmlFor="checkout-create-acc"
            >
              Create an account?
            </label>
          </div>
          {/* End .custom-checkbox */}

          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="checkout-diff-address"
            />
            <label
              className="custom-control-label"
              htmlFor="checkout-diff-address"
            >
              Ship to a different address?
            </label>
          </div>
          {/* End .custom-checkbox */}

          <label>Order notes (optional)</label>
          <textarea
            className="form-control"
            cols={30}
            rows={4}
            placeholder="Notes about your order, e.g. special notes for delivery"
          ></textarea>
        </div>
      ) : (
        <div className="col-lg-9">
          <h2 className="checkout-title">Billing Details</h2>
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
            placeholder="House number and Street name"
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

          <label>Email address *</label>
          <input
            type="email"
            className="form-control"
            onChange={(event) => handleChangeEmail(event)}
            required
          />

          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="checkout-create-acc"
            />
            <label
              className="custom-control-label"
              htmlFor="checkout-create-acc"
            >
              Create an account?
            </label>
          </div>
          {/* End .custom-checkbox */}

          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="checkout-diff-address"
            />
            <label
              className="custom-control-label"
              htmlFor="checkout-diff-address"
            >
              Ship to a different address?
            </label>
          </div>
          {/* End .custom-checkbox */}

          <label>Order notes (optional)</label>
          <textarea
            className="form-control"
            cols={30}
            rows={4}
            placeholder="Notes about your order, e.g. special notes for delivery"
          ></textarea>
        </div>
      )}
    </>
  );
};
