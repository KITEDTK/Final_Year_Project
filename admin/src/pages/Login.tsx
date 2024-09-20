import React, { useEffect, useState } from "react";
import { showToast } from "../utils/showToast";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { login } from "../features/auth/authSlice";

export const Login: React.FC = () => {
    const dispatch = useAppDispatch();
    const auth = useAppSelector((state)=>state.auth.auth);
    const [username, setUsername] = useState<string>();
    const [password, setPassword] = useState<string>();
    const handleLogin = () =>{
        if(username === 'kiet' && password === '123'){
            dispatch(login());
            window.location.href = 'http://localhost:1709';
        }else{
            showToast('Sai tài khoản hoặc mật khẩu', 'error');
        }
    }
    useEffect(()=>{
        console.log(auth);
    },[auth]);
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

                  <div className="col-4">
                    <button style={{ width: 100, marginLeft: 'auto', display: 'block' }} onClick={()=>handleLogin()} type="button" className="btn btn-primary btn-block">
                      Đăng nhập
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </body>
    </>
  );
}
