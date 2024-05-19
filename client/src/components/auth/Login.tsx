
import { useState } from "react";
import { useAppDispatch,useAppSelector } from '../../store/hooks';
import { fetchLogin } from "../../features/auth/authSlice";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const auth = useAppSelector(state=> state.auth.auth);
  const [usernameOrEmail,setUsernameOrEmail] = useState('');
  const [password,setPassword] = useState('');
  const handleOnchangeUsername = (value: string)=>{
    setUsernameOrEmail(value);
  };
  const handleOnchangePassword = (value: string)=>{
    setPassword(value);
  };
  const handleLogin = () =>{
    dispatch(fetchLogin({usernameOrEmail,password}));
    if(auth){
      navigate("/");
    }
  };
   return (
    <>
      <div
        className="tab-pane fade"
        id="signin-2"
        role="tabpanel"
        aria-labelledby="signin-tab-2"
      >
        <form>
          <div className="form-group">
            <label htmlFor="singin-email-2">Username or email address *</label>
            <input
              type="text"
              className="form-control"
              id="singin-email-2"
              name="singin-email"
              onChange={(event) => handleOnchangeUsername(event.target.value)}
              value={usernameOrEmail}
              required
            />
          </div>
          {/* End .form-group */}

          <div className="form-group">
            <label htmlFor="singin-password-2">Password *</label>
            <input
              type="password"
              className="form-control"
              id="singin-password-2"
              name="singin-password"
              onChange={(event) => handleOnchangePassword(event.target.value)}
              value={password}
              required
            />
          </div>
          {/* End .form-group */}

          <div className="form-footer">
            <button
              type="button"
              className="btn btn-outline-primary-2"
              onClick={()=>handleLogin()}
            >
              <span>LOG IN</span>
              <i className="icon-long-arrow-right"></i>
            </button>

            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="signin-remember-2"
              />
              <label className="custom-control-label" htmlFor="signin-remember-2">
                Remember Me
              </label>
            </div>
            {/* End .custom-checkbox */}

            <a href="#" className="forgot-link">
              Forgot Your Password?
            </a>
          </div>
          {/* End .form-footer */}
        </form>
        <div className="form-choice">
          <p className="text-center">or sign in with</p>
          <div className="row">
            <div className="col-sm-6">
              <a href="#" className="btn btn-login btn-g">
                <i className="icon-google"></i>
                Login With Google
              </a>
            </div>
            {/* End .col-6 */}
            <div className="col-sm-6">
              <a href="#" className="btn btn-login btn-f">
                <i className="icon-facebook-f"></i>
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

