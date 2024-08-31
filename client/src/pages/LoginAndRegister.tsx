import { Login } from "../components/auth/Login";
import { Register } from "../components/auth/Register";

function LoginAndRegister() {
  return (
    <>
      <main className="main">
        <nav aria-label="breadcrumb" className="breadcrumb-nav border-0 mb-0">
          <div className="container">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="index.html">Home</a>
              </li>
              <li className="breadcrumb-item">
                <a href="#">Pages</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Login
              </li>
            </ol>
          </div>
          {/* End .container */}
        </nav>
        {/* End .breadcrumb-nav */}

        <div
          className="login-page bg-image pt-8 pb-8 pt-md-12 pb-md-12 pt-lg-17 pb-lg-17"
          style={{backgroundImage: "url(assets/images/backgrounds/login-bg.jpg)"}}
        >
          <div className="container">
            <div className="form-box">
              <div className="form-tab">
                <ul className="nav nav-pills nav-fill" role="tablist">
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="signin-tab-2"
                      data-toggle="tab"
                      href="#signin-2"
                      role="tab"
                      aria-controls="signin-2"
                      aria-selected="false"
                    >
                      Sign In
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      id="register-tab-2"
                      data-toggle="tab"
                      href="#register-2"
                      role="tab"
                      aria-controls="register-2"
                      aria-selected="true"
                    >
                      Register
                    </a>
                  </li>
                </ul>
                <div className="tab-content">
                  <Login />
                  {/* .End .tab-pane */}
                  <div
                    className="tab-pane fade show active"
                    id="register-2"
                    role="tabpanel"
                    aria-labelledby="register-tab-2"
                  >
                    <Register/>
                    {/* End .form-choice */}
                  </div>
                  {/* .End .tab-pane */}
                </div>
                {/* End .tab-content */}
              </div>
              {/* End .form-tab */}
            </div>
            {/* End .form-box */}
          </div>
          {/* End .container */}
        </div>
        {/* End .login-page section-bg */}
      </main>
      {/* End .main */}
    </>
  );
}
export default LoginAndRegister;
