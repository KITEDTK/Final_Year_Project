import React, { useState } from "react";
import { showToast } from "../utils/showToast";

export const Login: React.FC = () => {
    const [username, setUsername] = useState<string>();
    const [password, setPassword] = useState<string>();
    const handleLogin = () =>{
        if(username === 'kiet' && password === '123'){
            localStorage.setItem("auth", 'true');
        }else{
            showToast('Sai tài khoản hoặc mật khẩu', 'error');
        }
    }
  return (
    <>
      <body className="hold-transition login-page">
        <div className="login-box">
          <div className="login-logo">
            <a href="https://adminlte.io/themes/v3/index2.html">
              <b>ADMIN KITESHOP</b>
            </a>
          </div>

          <div className="card">
            <div className="card-body login-card-body">
              <p className="login-box-msg">Đăng nhập để tiếp tục</p>
              <form
                action="https://adminlte.io/themes/v3/index3.html"
                method="post"
              >
                <div className="input-group mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    onChange={(event)=>{setUsername(event.target.value)}}
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-envelope"></span>
                    </div>
                  </div>
                </div>
                <div className="input-group mb-3">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    onChange={(event)=>{setPassword(event.target.value)}}
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-lock"></span>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-8">
                    <div className="icheck-primary">
                      <input type="checkbox" id="remember" />
                      <label htmlFor="remember"> Remember Me </label>
                    </div>
                  </div>

                  <div className="col-4">
                    <button onClick={()=>handleLogin()} type="button" className="btn btn-primary btn-block">
                      Sign In
                    </button>
                  </div>
                </div>
              </form>
              <div className="social-auth-links text-center mb-3">
                <p>- OR -</p>
                <a href="#" className="btn btn-block btn-primary">
                  <i className="fab fa-facebook mr-2"></i> Sign in using
                  Facebook
                </a>
                <a href="#" className="btn btn-block btn-danger">
                  <i className="fab fa-google-plus mr-2"></i> Sign in using
                  Google+
                </a>
              </div>

              <p className="mb-1">
                <a href="forgot-password.html">I forgot my password</a>
              </p>
              <p className="mb-0">
                <a href="register.html" className="text-center">
                  Register a new membership
                </a>
              </p>
            </div>
          </div>
        </div>
      </body>
    </>
  );
}
