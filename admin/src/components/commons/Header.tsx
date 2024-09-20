import { logout } from "../../features/auth/authSlice";
import { useAppDispatch } from "../../store/hooks";

export function Header() {
  const dispatch = useAppDispatch();
  const handleOnClick = () => {
    dispatch(logout());
  };
  return (
    <>
      <div className="preloader flex-column justify-content-center align-items-center">
        <img
          className="animation__shake"
          src="dist/img/AdminLTELogo.png"
          alt="AdminLTELogo"
          height="60"
          width="60"
        />
      </div>

      <nav className="main-header navbar navbar-expand navbar-white navbar-light">
        <button
          type="button"
          onClick={() => handleOnClick()}
          className="btn btn-block btn-danger"
          style={{
            width: "15%",
            height: "100%",
            flex: "0 0 auto", // Thiết lập flex-grow, flex-shrink, và flex-basis cho nút
            marginLeft: "auto", // Đẩy nút sang bên phải
          }}
        >
          Đăng xuất
        </button>
      </nav>
    </>
  );
}
