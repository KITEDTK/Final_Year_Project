import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  fetchAllCategories,
  fetchSingleCategories,
  fetchChildCategory,
  fetchChildRootCategory,
} from "../../features/categorires/categoriesSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
export const Navbar = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  useEffect(() => {
    dispatch(fetchAllCategories());
  }, [dispatch]);
  const auth = useAppSelector((state) => state.auth.auth);
  const categories = useAppSelector((state) => state.categories.categories);
  const [activeCategoryId, setActiveCategoryId] = useState<string | null>(null);
  const handleOnclickNav = (
    categoryId: string,
    rootCategoryId: string,
    childRootCategoryId: string
  ) => {
    setActiveCategoryId(rootCategoryId);
    dispatch(fetchSingleCategories({ categoryId })); //root category
    dispatch(fetchChildCategory({ categoryId }));
    dispatch(fetchChildRootCategory({ categoryId: childRootCategoryId })); // dispatch chỉ để hiển thị ở filter category
  };
  useEffect(() => {
    if (location.pathname !== "/shoplist") {
      setActiveCategoryId(null);
    }
  }, [location]);
  return (
    <>
      <div className="header-bottom sticky-header">
        <div className="container">
          <div className="header-left">
            <nav className="main-nav">
              <ul className="menu sf-arrows">
                {/* start component */}
                {categories &&
                  categories.length > 0 &&
                  categories.map((c) => {
                    return (
                      <>
                        <li
                          className={`megamenu-container ${
                            c.id === activeCategoryId ? "active" : ""
                          }`}
                          key={c.id}
                        >
                          <Link
                            to={`/shoplist`}
                            onClick={() => handleOnclickNav(c.id, c.id, c.id)}
                            className="sf-with-ul"
                          >
                            {c.name}
                          </Link>
                          <div className="megamenu megamenu-md active">
                            <div className="row no-gutters">
                              <div className="col-md-8">
                                <div className="menu-col">
                                  <div className="row">
                                    {c.children &&
                                      c.children.length > 0 &&
                                      c.children.map((cc) => {
                                        return (
                                          <>
                                            <div className="col-md-6">
                                              <div className="menu-title">
                                                {cc.name}
                                              </div>
                                              {/* End .menu-title */}
                                              <ul>
                                                {cc.children &&
                                                  cc.children.length > 0 &&
                                                  cc.children.map((ccc) => {
                                                    return (
                                                      <>
                                                        <li>
                                                          <Link
                                                            to={`/shoplist`}
                                                            onClick={() =>
                                                              handleOnclickNav(
                                                                ccc.id,
                                                                c.id,
                                                                ccc.id
                                                              )
                                                            }
                                                          >
                                                            <span>
                                                              {ccc.name}
                                                              <span className="tip tip-new">
                                                                New
                                                              </span>
                                                            </span>
                                                          </Link>
                                                        </li>
                                                        {ccc.children &&
                                                          ccc.children.length >
                                                            0 &&
                                                          ccc.children.map(
                                                            (cccc) => {
                                                              return (
                                                                <>
                                                                  <li>
                                                                    <Link
                                                                      to={`/shoplist`}
                                                                      onClick={() =>
                                                                        handleOnclickNav(
                                                                          ccc.id,
                                                                          c.id,
                                                                          cccc.id
                                                                        )
                                                                      }
                                                                    >
                                                                      <span>
                                                                        {
                                                                          cccc.name
                                                                        }
                                                                        <span className="tip tip-new">
                                                                          New
                                                                        </span>
                                                                      </span>
                                                                    </Link>
                                                                  </li>
                                                                </>
                                                              );
                                                            }
                                                          )}
                                                      </>
                                                    );
                                                  })}
                                              </ul>
                                            </div>
                                          </>
                                        );
                                      })}

                                    {/* End .col-md-6 */}

                                    {/* End .col-md-6 */}
                                  </div>
                                  {/* End .row */}
                                </div>
                                {/* End .menu-col */}
                              </div>
                              {/* End .col-md-8 */}

                              <div className="col-md-4">
                                <div className="banner banner-overlay">
                                  <a
                                    href="category.html"
                                    className="banner banner-menu"
                                  >
                                    <img
                                      src="assets/images/menu/banner-1.jpg"
                                      alt="Banner"
                                    />

                                    <div className="banner-content banner-content-top">
                                      <div className="banner-title text-white">
                                        Last <br />
                                        Chance
                                        <br />
                                        <span>
                                          <strong>Sale</strong>
                                        </span>
                                      </div>
                                      {/* End .banner-title */}
                                    </div>
                                    {/* End .banner-content */}
                                  </a>
                                </div>
                                {/* End .banner banner-overlay */}
                              </div>
                              {/* End .col-md-4 */}
                            </div>
                            {/* End .row */}
                          </div>
                          {/* End .megamenu */}
                        </li>
                      </>
                    );
                  })}
                {auth && auth !== null && (
                  <li className={`megamenu-container`} key={1}>
                    <Link to={`/secondhand`}>Hàng 2hand</Link>
                  </li>
                )}

                {/* End component */}
              </ul>
              {/* End .menu */}
            </nav>
            {/* End .main-nav */}

            <button className="mobile-menu-toggler">
              <span className="sr-only">Toggle mobile menu</span>
              <i className="icon-bars"></i>
            </button>
          </div>
          {/* End .header-left */}

          <div className="header-right">
            <i className="la la-lightbulb-o"></i>
            <p>KITESHOP Xin chào</p>
          </div>
        </div>
        {/* End .container */}
      </div>
    </>
  );
};
