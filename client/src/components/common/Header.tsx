import { Navbar } from "../categories/Navbar";
import { Link } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { MiniHeaderCart } from "../carts/MiniHeaderCart";
import { resetAuth } from "../../features/auth/authSlice";
import { Search } from "./Search";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";

interface MockData {
  id: number;
  name: string;
}

const data: MockData[] = [
  { id: 0, name: "ABC" },
  { id: 1, name: "BCD" },
  { id: 3, name: "DEF" },
];

const text = "ABC";

export const Header = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const auth = useAppSelector((state) => state.auth.auth);

  const handleLogout = () => {
    dispatch(resetAuth());
    navigate("/");
  };

  const renderSuggestion = useCallback(() => {
    return text ? (
      <div
        style={{
          position: "absolute",
          top: 100,
          left: 390,
          backgroundColor: "white",
          borderTopWidth: 1,
          borderTopColor: '#ebebeb',
          borderTopStyle: 'solid',
          width: "20%",
        }}
      >
        {data.map((item, index) => {
          return (
            <div
              className="suggestion"
              style={{
                width: "100%",
                paddingTop: 16,
                paddingRight: 16,
                paddingLeft: 16,
              }}
            >
              <a href="#" role="button">
                <h4 className="product-title" style={{ paddingBottom: 16 }}>
                  {item.name}
                </h4>
              </a>
              {index !== data.length - 1 ? (
                <div style={{ height: 1, backgroundColor: "#ebebeb" }} />
              ) : null}
            </div>
          );
        }, [])}
      </div>
    ) : null;
  }, []);

  return (
    <>
      {/* <button onClick={()=> handleLogout()}>signOut</button> */}
      <header className="header header-6">
        <div className="header-top">
          <div className="header-top">
            <div className="container">
              <div className="header-left">
                <div className="header-dropdown">
                  <a href="#">Usd</a>
                  <div className="header-menu">
                    <ul>
                      <li>
                        <a href="#">Eur</a>
                      </li>
                      <li>
                        <a href="#">Usd</a>
                      </li>
                    </ul>
                  </div>
                  {/* End .header-menu */}
                </div>
                {/* End .header-dropdown */}

                <div className="header-dropdown">
                  <a href="#">Eng</a>
                  <div className="header-menu">
                    <ul>
                      <li>
                        <a href="#">English</a>
                      </li>
                      <li>
                        <a href="#">French</a>
                      </li>
                      <li>
                        <a href="#">Spanish</a>
                      </li>
                    </ul>
                  </div>
                  {/* End .header-menu */}
                </div>
                {/* End .header-dropdown */}
              </div>
              {/* End .header-left */}

              <div className="header-right">
                <ul className="top-menu">
                  <li>
                    <a href="#">Links</a>
                    <ul>
                      <li>
                        <a href="tel:#">
                          <i className="icon-phone"></i>Call: +0123 456 789
                        </a>
                      </li>
                      <li>
                        <a href="wishlist.html">
                          <i className="icon-heart-o"></i>Wishlist{" "}
                          <span>(3)</span>
                        </a>
                      </li>
                      <li>
                        <a href="about.html">About Us</a>
                      </li>
                      {auth ? (
                        <li>
                          <Link
                            to="/user"
                            style={{ cursor: "pointer" }}
                            data-toggle="modal"
                          >
                            <i className="icon-user"></i>
                            {auth.fullname}
                          </Link>
                        </li>
                      ) : (
                        <li>
                          <Link
                            to="/login"
                            style={{ cursor: "pointer" }}
                            data-toggle="modal"
                          >
                            <i className="icon-user"></i>Đăng nhập
                          </Link>
                        </li>
                      )}
                      {auth ? (
                        <li>
                          <a
                            onClick={() => handleLogout()}
                            style={{ cursor: "pointer" }}
                          >
                            Đăng xuất
                          </a>
                        </li>
                      ) : (
                        <></>
                      )}
                    </ul>
                  </li>
                </ul>
                {/* End .top-menu */}
              </div>
              {/* End .header-right */}
            </div>
            {/* End .container */}
          </div>
        </div>
        <div className="header-middle">
          <div className="container">
            <Search
            //text
            //setText
            />
            <div className="header-center">
              <Link to="/" className="logo">
                <img
                  src="assets/images/demos/demo-6/logo.png"
                  alt="Molla Logo"
                  width="82"
                  height="20"
                />
              </Link>
            </div>
            {/* End .header-left */}

            <div className="header-right">
              <a href="wishlist.html" className="wishlist-link">
                <i className="icon-heart-o"></i>
                <span className="wishlist-count">3</span>
                <span className="wishlist-txt">My Wishlist</span>
              </a>

              <MiniHeaderCart />
              {/* End .cart-dropdown */}
            </div>
          </div>
          {/* End .container */}
        </div>
        {/* End .header-middle */}

        <Navbar />
        {renderSuggestion()}
        {/* End .header-bottom */}
      </header>
      {/* End .header */}
    </>
  );
};
