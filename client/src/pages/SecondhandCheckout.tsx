import { BillingDetail } from "../components/payments/BillingDetail";
import { SecondhandOrder } from "../components/secondhandPayments/SecondhandOrder";
export const SecondhandCheckout = () => {
  return (
    <>
      <div className="page-content">
        <div className="checkout">
          <div className="container">
            <div className="checkout-discount">
            </div>
            {/* End .checkout-discount */}
            <form action="#">
              <div className="row">
                <BillingDetail />
                {/* End .col-lg-9 */}
                {/* End .summary-title */}

                {/* End .table table-summary */}
                <SecondhandOrder/>
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
