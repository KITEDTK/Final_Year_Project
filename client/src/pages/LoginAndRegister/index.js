import React, { useState } from "react";
import { json, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import useSignIn from 'react-auth-kit/hooks/useSignIn';
import axios from 'axios';


const BASE_URL = 'http://localhost:4000/loginAndRegister';
function LoginAndRegister() {
  const signIn = useSignIn();
  const navigate = useNavigate();
  const [user, setUser] = useState();
  const [usernameOrEmail,setUsernameOrEmail] = useState();
  const [password,setPassword] = useState();
  const handleOnchangeUsername = (value)=>{
    setUsernameOrEmail(value);
  }
  const handleOnchangePassword = (value)=>{
    setPassword(value);
  }
  const  handleSubmit = async ()=>{
    try{
      const response = await axios.post(`${BASE_URL}/login`,{
          usernameOrEmail: usernameOrEmail,
          password: password
        });
        const {token,user} = response.data;
        const result = signIn({
          auth: {
            token: token,
            type: 'Bearer'
          },
          userState: user.email
        });
        //console.log(response.data);
        if(result){
          navigate('/');
          console.log('login success');
        }else{
          console.log('login failed');
        }
    }catch(err){
      //Xử lí lỗi ở đây
      console.log('Wrong username or password',err);
    }
  }
  return (
    <>
      <main class="main">
        <nav aria-label="breadcrumb" class="breadcrumb-nav border-0 mb-0">
          <div class="container">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <a href="index.html">Home</a>
              </li>
              <li class="breadcrumb-item">
                <a href="#">Pages</a>
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                Login
              </li>
            </ol>
          </div>
          {/* End .container */}
        </nav>
        {/* End .breadcrumb-nav */}

        <div
          class="login-page bg-image pt-8 pb-8 pt-md-12 pb-md-12 pt-lg-17 pb-lg-17"
          style={{backgroundImage: "url(assets/images/backgrounds/login-bg.jpg)"}}
        >
          <div class="container">
            <div class="form-box">
              <div class="form-tab">
                <ul class="nav nav-pills nav-fill" role="tablist">
                  <li class="nav-item">
                    <a
                      class="nav-link"
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
                  <li class="nav-item">
                    <a
                      class="nav-link active"
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
                <div class="tab-content">
                  <div
                    class="tab-pane fade"
                    id="signin-2"
                    role="tabpanel"
                    aria-labelledby="signin-tab-2"
                  >
                    <form >
                      <div class="form-group">
                        <label for="singin-email-2">
                          Username or email address *
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          id="singin-email-2"
                          name="singin-email"
                          onChange={(event)=>handleOnchangeUsername(event.target.value)}
                          value={usernameOrEmail}
                          required
                        />
                      </div>
                      {/* End .form-group */}

                      <div class="form-group">
                        <label for="singin-password-2">Password *</label>
                        <input
                          type="password"
                          class="form-control"
                          id="singin-password-2"
                          name="singin-password"
                          onChange={(event)=>handleOnchangePassword(event.target.value)}
                          value={password}
                          required
                        />
                      </div>
                      {/* End .form-group */}

                      <div class="form-footer">
                        <button type="button" class="btn btn-outline-primary-2" onClick={()=>handleSubmit()}>
                          <span>LOG IN</span>
                          <i class="icon-long-arrow-right"></i>
                        </button>

                        <div class="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            class="custom-control-input"
                            id="signin-remember-2"
                          />
                          <label
                            class="custom-control-label"
                            for="signin-remember-2"
                          >
                            Remember Me
                          </label>
                        </div>
                        {/* End .custom-checkbox */}

                        <a href="#" class="forgot-link">
                          Forgot Your Password?
                        </a>
                      </div>
                      {/* End .form-footer */}
                    </form>
                    <div class="form-choice">
                      <p class="text-center">or sign in with</p>
                      <div class="row">
                        <div class="col-sm-6">
                          <a href="#" class="btn btn-login btn-g">
                            <i class="icon-google"></i>
                            Login With Google
                          </a>
                        </div>
                        {/* End .col-6 */}
                        <div class="col-sm-6">
                          <a href="#" class="btn btn-login btn-f">
                            <i class="icon-facebook-f"></i>
                            Login With Facebook
                          </a>
                        </div>
                        {/* End .col-6 */}
                      </div>
                      {/* End .row */}
                    </div>
                    {/* End .form-choice */}
                  </div>
                  {/* .End .tab-pane */}
                  <div
                    class="tab-pane fade show active"
                    id="register-2"
                    role="tabpanel"
                    aria-labelledby="register-tab-2"
                  >
                    <form action="#">
                      <div class="form-group">
                        <label for="register-email-2">
                          Your email address *
                        </label>
                        <input
                          type="email"
                          class="form-control"
                          id="register-email-2"
                          name="register-email"
                          required
                        />
                      </div>
                      {/* End .form-group */}

                      <div class="form-group">
                        <label for="register-password-2">Password *</label>
                        <input
                          type="password"
                          class="form-control"
                          id="register-password-2"
                          name="register-password"
                          required
                        />
                      </div>
                      {/* End .form-group */}

                      <div class="form-footer">
                        <button type="submit" class="btn btn-outline-primary-2">
                          <span>SIGN UP</span>
                          <i class="icon-long-arrow-right"></i>
                        </button>

                        <div class="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            class="custom-control-input"
                            id="register-policy-2"
                            required
                          />
                          <label
                            class="custom-control-label"
                            for="register-policy-2"
                          >
                            I agree to the <a href="#">privacy policy</a> *
                          </label>
                        </div>
                        {/* End .custom-checkbox */}
                      </div>
                      {/* End .form-footer */}
                    </form>
                    <div class="form-choice">
                      <p class="text-center">or sign in with</p>
                      <div class="row">
                        <div class="col-sm-6">
                          <a href="#" class="btn btn-login btn-g">
                            <i class="icon-google"></i>
                            Login With Google
                          </a>
                        </div>
                        {/* End .col-6 */}
                        <div class="col-sm-6">
                          <a href="#" class="btn btn-login  btn-f">
                            <i class="icon-facebook-f"></i>
                            Login With Facebook
                          </a>
                        </div>
                        {/* End .col-6 */}
                      </div>
                      {/* End .row */}
                    </div>
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
