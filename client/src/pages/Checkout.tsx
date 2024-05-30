import { BillingDetail } from "../components/payments/BillingDetail";
import { Order } from "../components/payments/Order";
import { fetchPaybyVNPAY } from "../features/payments/paymentsSlice";
import { useAppDispatch, useAppSelector } from "../store/hooks";

export const Checkout = () => {
  const dispatch = useAppDispatch();
  const paymentUrl = useAppSelector((state)=>state.payments.paymentUrl);
  const handleSubmitButton = async ()=>{
    await dispatch(fetchPaybyVNPAY());
    window.location.href = paymentUrl
  }
  return (
    <>
    <div className="page-content">
      <div className="checkout">
        <div className="container">
          <div className="checkout-discount">
            <form action="#">
              <input
                type="text"
                className="form-control"
                required
                id="checkout-discount-input"
              />
              <label
                htmlFor="checkout-discount-input"
                className="text-truncate"
              >
                Have a coupon? <span>Click here to enter your code</span>
              </label>
            </form>
          </div>
          {/* End .checkout-discount */}
          <form action="#">
            <div className="row">
             <BillingDetail/>
              {/* End .col-lg-9 */}
              <aside className="col-lg-3">
                <div className="summary">
                  <h3 className="summary-title">Hóa đơn của bạn</h3>
                  {/* End .summary-title */}

                  <Order/>
                  {/* End .table table-summary */}

                  <div className="accordion-summary" id="accordion-payment">
                    <div className="card">
                      <div className="card-header" id="heading-1">
                        <h2 className="card-title">
                          <a
                            role="button"
                            data-toggle="collapse"
                            href="#collapse-1"
                            aria-expanded="true"
                            aria-controls="collapse-1"
                          >
                            Direct bank transfer
                          </a>
                        </h2>
                      </div>
                      {/* End .card-header */}
                      <div
                        id="collapse-1"
                        className="collapse show"
                        aria-labelledby="heading-1"
                        data-parent="#accordion-payment"
                      >
                        <div className="card-body">
                          Make your payment directly into our bank account.
                          Please use your Order ID as the payment reference.
                          Your order will not be shipped until the funds have
                          cleared in our account.
                        </div>
                        {/* End .card-body */}
                      </div>
                      {/* End .collapse */}
                    </div>
                    {/* End .card */}

                    <div className="card">
                      <div className="card-header" id="heading-2">
                        <h2 className="card-title">
                          <a
                            className="collapsed"
                            role="button"
                            data-toggle="collapse"
                            href="#collapse-2"
                            aria-expanded="false"
                            aria-controls="collapse-2"
                          >
                            Check payments
                          </a>
                        </h2>
                      </div>
                      {/* End .card-header */}
                      <div
                        id="collapse-2"
                        className="collapse"
                        aria-labelledby="heading-2"
                        data-parent="#accordion-payment"
                      >
                        <div className="card-body">
                          Ipsum dolor sit amet, consectetuer adipiscing elit.
                          Donec odio. Quisque volutpat mattis eros. Nullam
                          malesuada erat ut turpis.
                        </div>
                        {/* End .card-body */}
                      </div>
                      {/* End .collapse */}
                    </div>
                    {/* End .card */}

                    <div className="card">
                      <div className="card-header" id="heading-3">
                        <h2 className="card-title">
                          <a
                            className="collapsed"
                            role="button"
                            data-toggle="collapse"
                            href="#collapse-3"
                            aria-expanded="false"
                            aria-controls="collapse-3"
                          >
                            Cash on delivery
                          </a>
                        </h2>
                      </div>
                      {/* End .card-header */}
                      <div
                        id="collapse-3"
                        className="collapse"
                        aria-labelledby="heading-3"
                        data-parent="#accordion-payment"
                      >
                        <div className="card-body">
                          Quisque volutpat mattis eros. Lorem ipsum dolor sit
                          amet, consectetuer adipiscing elit. Donec odio.
                          Quisque volutpat mattis eros.
                        </div>
                        {/* End .card-body */}
                      </div>
                      {/* End .collapse */}
                    </div>
                    {/* End .card */}

                    <div className="card">
                      <div className="card-header" id="heading-4">
                        <h2 className="card-title">
                          <a
                            className="collapsed"
                            role="button"
                            data-toggle="collapse"
                            href="#collapse-4"
                            aria-expanded="false"
                            aria-controls="collapse-4"
                          >
                            PayPal{" "}
                            <small className="float-right paypal-link">
                              What is PayPal?
                            </small>
                          </a>
                        </h2>
                      </div>
                      {/* End .card-header */}
                      <div
                        id="collapse-4"
                        className="collapse"
                        aria-labelledby="heading-4"
                        data-parent="#accordion-payment"
                      >
                        <div className="card-body">
                          Nullam malesuada erat ut turpis. Suspendisse urna
                          nibh, viverra non, semper suscipit, posuere a, pede.
                          Donec nec justo eget felis facilisis fermentum.
                        </div>
                        {/* End .card-body */}
                      </div>
                      {/* End .collapse */}
                    </div>
                    {/* End .card */}

                    <div className="card">
                      <div className="card-header" id="heading-5">
                        <h2 className="card-title">
                          <a
                            className="collapsed"
                            role="button"
                            data-toggle="collapse"
                            href="#collapse-5"
                            aria-expanded="false"
                            aria-controls="collapse-5"
                          >
                            Credit Card (Stripe)
                            <img
                              src="assets/images/payments-summary.png"
                              alt="payments cards"
                            />
                          </a>
                        </h2>
                      </div>
                      {/* End .card-header */}
                      <div
                        id="collapse-5"
                        className="collapse"
                        aria-labelledby="heading-5"
                        data-parent="#accordion-payment"
                      >
                        <div className="card-body">
                          Donec nec justo eget felis facilisis fermentum.Lorem
                          ipsum dolor sit amet, consectetuer adipiscing elit.
                          Donec odio. Quisque volutpat mattis eros. Lorem ipsum
                          dolor sit ame.
                        </div>
                        {/* End .card-body */}
                      </div>
                      {/* End .collapse */}
                    </div>
                    {/* End .card */}
                  </div>
                  {/* End .accordion */}

                  <button
                    onClick={()=>handleSubmitButton()}
                    type="button"
                    className="btn btn-outline-primary-2 btn-order btn-block"
                  >
                    <span className="btn-text">Place Order</span>
                    <span className="btn-hover-text">Proceed to Checkout</span>
                  </button>
                </div>
                {/* End .summary */}
              </aside>
              {/* End .col-lg-3 */}
            </div>
            {/* End .row */}
          </form>
        </div>
        {/* End .container */}
      </div>
      {/* End .checkout */}
    </div>
    {/* End .page-content */}
    </>
  );
};
