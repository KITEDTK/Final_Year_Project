import { useAppSelector } from "../../store/hooks";

export const BillingDetail = () => {
    const auth = useAppSelector((state)=>state.auth.auth);
  return (
    <>
    {auth && auth !== null ? <div className="col-lg-9">
        <h2 className="checkout-title">Billing Details</h2>
        {/* End .checkout-title */}
        <div className="row">
          <div className="col-sm-6">
            <label>Họ và tên đầy đủ *</label>
            <input type="text" value={auth.fullname} className="form-control"  />
          </div>
          {/* End .col-sm-6 */}

          {/* End .col-sm-6 */}
        </div>
        {/* End .row */}

        <label>Company Name (Optional)</label>
        <input type="text" className="form-control" />

        <label>Country *</label>
        <input type="text" className="form-control"  />

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
            <input type="text" className="form-control"  />
          </div>
          {/* End .col-sm-6 */}

          <div className="col-sm-6">
            <label>State / County *</label>
            <input type="text" className="form-control"  />
          </div>
          {/* End .col-sm-6 */}
        </div>
        {/* End .row */}

        <div className="row">
          <div className="col-sm-6">
            <label>Postcode / ZIP *</label>
            <input type="text" className="form-control"  />
          </div>
          {/* End .col-sm-6 */}

          <div className="col-sm-6">
            <label>Phone *</label>
            <input type="tel" value={auth.phoneNumber} className="form-control"  />
          </div>
          {/* End .col-sm-6 */}
        </div>
        {/* End .row */}

        <label>Email address *</label>
        <input type="email" value={auth.email} className="form-control"  />

        <div className="custom-control custom-checkbox">
          <input
            type="checkbox"
            className="custom-control-input"
            id="checkout-create-acc"
          />
          <label className="custom-control-label" htmlFor="checkout-create-acc">
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
      </div> :
      <div className="col-lg-9">
      <h2 className="checkout-title">Billing Details</h2>
      {/* End .checkout-title */}
      <div className="row">
        <div className="col-sm-6">
          <label>First Name *</label>
          <input type="text" className="form-control"  />
        </div>
        {/* End .col-sm-6 */}

        <div className="col-sm-6">
          <label>Last Name *</label>
          <input type="text" className="form-control"  />
        </div>
        {/* End .col-sm-6 */}
      </div>
      {/* End .row */}

      <label>Company Name (Optional)</label>
      <input type="text" className="form-control" />

      <label>Country *</label>
      <input type="text" className="form-control"  />

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
          <input type="text" className="form-control"  />
        </div>
        {/* End .col-sm-6 */}

        <div className="col-sm-6">
          <label>State / County *</label>
          <input type="text" className="form-control"  />
        </div>
        {/* End .col-sm-6 */}
      </div>
      {/* End .row */}

      <div className="row">
        <div className="col-sm-6">
          <label>Postcode / ZIP *</label>
          <input type="text" className="form-control"  />
        </div>
        {/* End .col-sm-6 */}

        <div className="col-sm-6">
          <label>Phone *</label>
          <input type="tel" className="form-control"  />
        </div>
        {/* End .col-sm-6 */}
      </div>
      {/* End .row */}

      <label>Email address *</label>
      <input type="email" className="form-control"  />

      <div className="custom-control custom-checkbox">
        <input
          type="checkbox"
          className="custom-control-input"
          id="checkout-create-acc"
        />
        <label className="custom-control-label" htmlFor="checkout-create-acc">
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
       }
      
    </>
  );
};
