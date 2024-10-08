
import { useState, useEffect } from "react";
import { useAppDispatch,useAppSelector } from '../../store/hooks';
import { fetchLogin } from "../../features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { showToast } from "../../utils/showToast";


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
    dispatch(fetchLogin({usernameOrEmail,password})).then((res: any)=>{
      if(res.error){
        showToast('Tài khoản của bạn không tồn tại hoặc chưa đăng kí','error');
      }
    });
  };
  useEffect(() => {
    if (auth) {
      navigate('/');
    }
  }, [auth, navigate]);
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
              <label htmlFor="singin-email-2">Tên đăng nhập hoặc email</label>
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
              <label htmlFor="singin-password-2">Mật khẩu</label>
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
                <span>ĐĂNG NHẬP</span>
                <i className="icon-long-arrow-right"></i>
              </button>

              {/* End .custom-checkbox */}

            </div>
            {/* End .form-footer */}
          </form>
        {/* End .form-choice */}
      </div>
    </>
  );
}

