

export function Footer() {
  return (
    <>
      <footer className="footer footer-2">
        <div className="footer-middle border-0">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-lg-6">
                <div className="widget widget-about">
                  <img
                    src="assets/images/demos/demo-5/logo-footer.png"
                    className="footer-logo"
                    alt="Footer Logo"
                    width="105"
                    height="25"
                  />
                  <p>
                  Kite là cửa hàng quần áo thời trang trẻ trung, năng động, chuyên cung cấp các thiết kế hiện đại, đa dạng phù hợp với phong cách cá nhân của giới trẻ.{" "}
                  </p>

                  <div className="widget-about-info">
                    <div className="row">
                      <div className="col-sm-6 col-md-4">
                        <span className="widget-about-title">
                          Bạn có câu hỏi? Chúng tôi hỗ trợ 24/7
                        </span>
                        <a href="tel:123456789">0866718960</a>
                      </div>
                      {/* End .col-sm-6 */}
                      <div className="col-sm-6 col-md-8">
                        <span className="widget-about-title">
                          Phương thức thanh toán
                        </span>
                        <figure className="footer-payments">
                          <img
                            src="assets/images/payments.png"
                            alt="Payment methods"
                            width="272"
                            height="20"
                          />
                        </figure>
                        {/* End .footer-payments */}
                      </div>
                      {/* End .col-sm-6 */}
                    </div>
                    {/* End .row */}
                  </div>
                  {/* End .widget-about-info */}
                </div>
                {/* End .widget about-widget */}
              </div>
              {/* End .col-sm-12 col-lg-3 */}

              {/* End .col-sm-64 col-lg-3 */}
            </div>
            {/* End .row */}
          </div>
          {/* End .container */}
        </div>
        {/* End .footer-middle */}

        <div className="footer-bottom">

          {/* End .container */}
        </div>
        {/* End .footer-bottom */}
      </footer>
      {/* End .footer */}
    </>
  );
}
