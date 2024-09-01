import { useState } from "react";
import { useAppDispatch } from "../../store/hooks";
import {
  fetchLogin,
  fetchRegister,
  fetchSendVerifyToken,
  fetchVerifyToken,
} from "../../features/auth/authSlice";
import { showToast } from "../../utils/showToast";
import { useNavigate } from "react-router-dom";
export const Register = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [fullname, setFullname] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [token, setToken] = useState<string>("");
  const [tokenSend, setTokenSend] = useState<string>("");
  const handleOnClikRegister = () => {
    dispatch(
      fetchRegister({
        email: email,
        username: username,
        fullname: fullname,
        phoneNumber: phoneNumber,
        password: password,
      })
    ).then((res: any) => {
      if (res.payload.status === 409) {
        showToast(
          "Email đã có người đăng kí, vui lòng chọn email khác",
          "error"
        );
      } else {
        dispatch(fetchSendVerifyToken(email)).then(() => {
          setTokenSend(res.payload.verifyToken);
          showToast("Shop đã gửi cho bạn 1 mã OTP thông qua email", "success");
        });
      }
    });
  };
  const handleOnClickVerifyToken = () => {
    dispatch(fetchVerifyToken({ email: email, token: token })).then(
      (res: any) => {
        if (res.payload === true) {
          dispatch(
            fetchLogin({ usernameOrEmail: username, password: password })
          ).then(() => {
            navigate("/");
          });
        } else {
          showToast("Bạn nhập mã sai vui lòng nhập lại", "error");
        }
      }
    );
  };
  return (
    <>
      {" "}
      {tokenSend === "" ? (
        <form>
          <div className="form-group">
            <label htmlFor="register-email-2">Email của bạn</label>
            <input
              type="email"
              className="form-control"
              id="register-email-2"
              name="user_email"
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </div>
          {/* End .form-group */}
          <div className="form-group">
            <label htmlFor="register-email-2">Tên đăng nhập</label>
            <input
              type="text"
              className="form-control"
              id="register-email-2"
              name="user_email"
              onChange={(event) => setUsername(event.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="register-email-2">Họ và tên đầy đủ</label>
            <input
              type="text"
              className="form-control"
              id="register-email-2"
              name="user_email"
              onChange={(event) => setFullname(event.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="register-email-2">Số điện thoại</label>
            <input
              type="text"
              className="form-control"
              id="register-email-2"
              name="user_email"
              onChange={(event) => setPhoneNumber(event.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="register-password-2">Password *</label>
            <input
              type="password"
              className="form-control"
              id="register-password-2"
              name="user_name"
              onChange={(event) => setPassword(event.target.value)}
              required
            />
          </div>
          {/* End .form-group */}

          <div className="form-footer">
            <button
              onClick={handleOnClikRegister}
              type="button"
              className="btn btn-outline-primary-2"
            >
              <span>ĐĂNG KÍ</span>
              <i className="icon-long-arrow-right"></i>
            </button>

            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="register-policy-2"
                required
              />
            </div>
            {/* End .custom-checkbox */}
          </div>
          {/* End .form-footer */}
        </form>
      ) : (
        <form>
          <div className="form-group">
            <label htmlFor="register-email-2">
              Shop đã gửi 1 mã xác thực thông qua email của bạn. Mã có hiệu lực
              trong 10p. Vui lòng nhập mã
            </label>
            <input
              type="text"
              className="form-control"
              id="register-email-2"
              name="user_email"
              onChange={(event) => setToken(event.target.value)}
              required
            />
          </div>
          {/* End .form-group */}

          <div className="form-footer">
            <button
              type="button"
              className="btn btn-outline-primary-2"
              onClick={handleOnClickVerifyToken}
            >
              <span>Đăng kí</span>
              <i className="icon-long-arrow-right"></i>
            </button>

            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="register-policy-2"
                required
              />
            </div>
            {/* End .custom-checkbox */}
          </div>
          {/* End .form-footer */}
        </form>
      )}
    </>
  );
};
