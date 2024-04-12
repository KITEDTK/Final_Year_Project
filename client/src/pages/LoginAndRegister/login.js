import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { fetchUserLogin } from "../../counter/loginAndRegisterSlice";
import { usersLoggedIn } from "../../counter/loginAndRegisterSlice";

function Login() {
  const dispatch = useDispatch();
  const user = useSelector(usersLoggedIn);
  const [usernameOrEmail,setUsernameOrEmail] = useState('');
  const [password,setPassword] = useState('');
  const handleOnchangeUsername = (value)=>{
    setUsernameOrEmail(value);
  };
  const handleOnchangePassword = (value)=>{
    setPassword(value);
  };
  const handleLogin = () =>{
    dispatch(fetchUserLogin({usernameOrEmail,password}));
    console.log(JSON.stringify(user));
  }
  return (
    <>
      <div
        class="tab-pane fade"
        id="signin-2"
        role="tabpanel"
        aria-labelledby="signin-tab-2"
      >
        <form>
          <div class="form-group">
            <label for="singin-email-2">Username or email address *</label>
            <input
              type="text"
              class="form-control"
              id="singin-email-2"
              name="singin-email"
              onChange={(event) => handleOnchangeUsername(event.target.value)}
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
              onChange={(event) => handleOnchangePassword(event.target.value)}
              value={password}
              required
            />
          </div>
          {/* End .form-group */}

          <div class="form-footer">
            <button
              type="button"
              class="btn btn-outline-primary-2"
              onClick={()=>handleLogin()}
            >
              <span>LOG IN</span>
              <i class="icon-long-arrow-right"></i>
            </button>

            <div class="custom-control custom-checkbox">
              <input
                type="checkbox"
                class="custom-control-input"
                id="signin-remember-2"
              />
              <label class="custom-control-label" for="signin-remember-2">
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
    </>
  );
}
export default Login;
