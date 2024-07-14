import { PaymentHistory } from "../components/users/PaymentHistory";
import { Wardrobe } from "../components/users/Wardrobe";
export const UserProfile = () => {
  return (
    <>
      <main className="main">
        <div
          className="page-header text-center"
          style={{ backgroundImage: "url('assets/images/page-header-bg.jpg')" }}
        >
          <div className="container">
            <h1 className="page-title">
              My Account<span>Shop</span>
            </h1>
          </div>
          {/* End .container */}
        </div>
        {/* End .page-header */}
        <nav aria-label="breadcrumb" className="breadcrumb-nav mb-3">
          <div className="container">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="index.html">Home</a>
              </li>
              <li className="breadcrumb-item">
                <a href="#">Shop</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                My Account
              </li>
            </ol>
          </div>
          {/* End .container */}
        </nav>
        {/* End .breadcrumb-nav */}

        <div className="page-content">
          <div className="dashboard">
            <div className="container">
              <div className="row">
                <aside className="col-md-4 col-lg-3">
                  <ul
                    className="nav nav-dashboard flex-column mb-3 mb-md-0"
                    role="tablist"
                  >
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        id="tab-dashboard-link"
                        data-toggle="tab"
                        href="#tab-dashboard"
                        role="tab"
                        aria-controls="tab-dashboard"
                        aria-selected="true"
                      >
                        Dashboard
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        id="tab-orders-link"
                        data-toggle="tab"
                        href="#tab-orders"
                        role="tab"
                        aria-controls="tab-orders"
                        aria-selected="false"
                      >
                        Lịch sử mua hàng
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        id="tab-downloads-link"
                        data-toggle="tab"
                        href="#tab-downloads"
                        role="tab"
                        aria-controls="tab-downloads"
                        aria-selected="false"
                      >
                        Tủ quần áo 
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        id="tab-address-link"
                        data-toggle="tab"
                        href="#tab-address"
                        role="tab"
                        aria-controls="tab-address"
                        aria-selected="false"
                      >
                        Adresses
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        id="tab-account-link"
                        data-toggle="tab"
                        href="#tab-account"
                        role="tab"
                        aria-controls="tab-account"
                        aria-selected="false"
                      >
                        Account Details
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Sign Out
                      </a>
                    </li>
                  </ul>
                </aside>
                {/* End .col-lg-3 */}

                <div className="col-md-8 col-lg-9">
                  <div className="tab-content">
                    <div
                      className="tab-pane fade show active"
                      id="tab-dashboard"
                      role="tabpanel"
                      aria-labelledby="tab-dashboard-link"
                    >
                      <p>
                        Hello{" "}
                        <span className="font-weight-normal text-dark">
                          User
                        </span>{" "}
                        (not{" "}
                        <span className="font-weight-normal text-dark">
                          User
                        </span>
                        ? <a href="#">Log out</a>)
                        <br />
                        From your account dashboard you can view your{" "}
                        <a
                          href="#tab-orders"
                          className="tab-trigger-link link-underline"
                        >
                          recent orders
                        </a>
                        , manage your{" "}
                        <a href="#tab-address" className="tab-trigger-link">
                          shipping and billing addresses
                        </a>
                        , and{" "}
                        <a href="#tab-account" className="tab-trigger-link">
                          edit your password and account details
                        </a>
                        .
                      </p>
                    </div>
                    {/* .End .tab-pane */}

                    <div
                      className="tab-pane fade"
                      id="tab-orders"
                      role="tabpanel"
                      aria-labelledby="tab-orders-link"
                    >
                      <PaymentHistory/>
                    </div>

                    <div
                      className="tab-pane fade"
                      id="tab-downloads"
                      role="tabpanel"
                      aria-labelledby="tab-downloads-link"
                    >
                      <Wardrobe/>
                    </div>
                    {/* .End .tab-pane */}

                    <div
                      className="tab-pane fade"
                      id="tab-address"
                      role="tabpanel"
                      aria-labelledby="tab-address-link"
                    >
                      <p>
                        The following addresses will be used on the checkout
                        page by default.
                      </p>

                      <div className="row">
                        <div className="col-lg-6">
                          <div className="card card-dashboard">
                            <div className="card-body">
                              <h3 className="card-title">Billing Address</h3>
                              {/* End .card-title */}

                              <p>
                                User Name
                                <br />
                                User Company
                                <br />
                                John str
                                <br />
                                New York, NY 10001
                                <br />
                                1-234-987-6543
                                <br />
                                <a
                                  href="https://portotheme.com/cdn-cgi/l/email-protection"
                                  className="__cf_email__"
                                  data-cfemail="b3cadcc6c1ded2dadff3ded2dadf9dd0dcde"
                                >
                                  [email&#160;protected]
                                </a>
                                <br />
                                <a href="#">
                                  Edit <i className="icon-edit"></i>
                                </a>
                              </p>
                            </div>
                            {/* End .card-body */}
                          </div>
                          {/* End .card-dashboard */}
                        </div>
                        {/* End .col-lg-6 */}

                        <div className="col-lg-6">
                          <div className="card card-dashboard">
                            <div className="card-body">
                              <h3 className="card-title">Shipping Address</h3>
                              {/* End .card-title */}

                              <p>
                                You have not set up this type of address yet.
                                <br />
                                <a href="#">
                                  Edit <i className="icon-edit"></i>
                                </a>
                              </p>
                            </div>
                            {/* End .card-body */}
                          </div>
                          {/* End .card-dashboard */}
                        </div>
                        {/* End .col-lg-6 */}
                      </div>
                      {/* End .row */}
                    </div>
                    {/* .End .tab-pane */}

                    <div
                      className="tab-pane fade"
                      id="tab-account"
                      role="tabpanel"
                      aria-labelledby="tab-account-link"
                    >
                      <form action="#">
                        <div className="row">
                          <div className="col-sm-6">
                            <label>First Name *</label>
                            <input
                              type="text"
                              className="form-control"
                              required
                            />
                          </div>
                          {/* End .col-sm-6 */}

                          <div className="col-sm-6">
                            <label>Last Name *</label>
                            <input
                              type="text"
                              className="form-control"
                              required
                            />
                          </div>
                          {/* End .col-sm-6 */}
                        </div>
                        {/* End .row */}

                        <label>Display Name *</label>
                        <input type="text" className="form-control" required />
                        <small className="form-text">
                          This will be how your name will be displayed in the
                          account section and in reviews
                        </small>

                        <label>Email address *</label>
                        <input type="email" className="form-control" required />

                        <label>
                          Current password (leave blank to leave unchanged)
                        </label>
                        <input type="password" className="form-control" />

                        <label>
                          New password (leave blank to leave unchanged)
                        </label>
                        <input type="password" className="form-control" />

                        <label>Confirm new password</label>
                        <input type="password" className="form-control mb-2" />

                        <button
                          type="submit"
                          className="btn btn-outline-primary-2"
                        >
                          <span>SAVE CHANGES</span>
                          <i className="icon-long-arrow-right"></i>
                        </button>
                      </form>
                    </div>
                    {/* .End .tab-pane */}
                  </div>
                </div>
                {/* End .col-lg-9 */}
              </div>
              {/* End .row */}
            </div>
            {/* End .container */}
          </div>
          {/* End .dashboard */}
        </div>
        {/* End .page-content */}
      </main>
      {/* End .main */}
    </>
  );
};
