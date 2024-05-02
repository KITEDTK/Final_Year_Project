import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllCategories } from "../../counter/categoriesSlice";
import { fetchSingleCategories } from "../../counter/categoriesSlice";
import { fetchClothesByCategories } from "../../counter/clothesSlice";
export function Navbar() {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.categories);
  const category = useSelector((state)=> state.categories.category);
  const [activeCategoryId, setActiveCategoryId] = useState(null);
  useEffect(() => {
    if (category) {
      setActiveCategoryId(category.id); // Cập nhật giá trị khi category.id thay đổi
    }
  }, [category]); 
  useEffect(() => {
    dispatch(fetchAllCategories());
  }, [dispatch]);
  const handleOnclickNav = (categoryId) =>{
    setActiveCategoryId(categoryId);
    dispatch(fetchSingleCategories({categoryId}));
    dispatch(fetchClothesByCategories({categoryId}));
  }
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
                        <li className={`megamenu-container ${c.id === activeCategoryId ? 'active' : ''}`} key={c.id}>
                          <Link onClick={()=>handleOnclickNav(c.id)}  to={`/shoplist`} className="sf-with-ul">
                          {/* <Link onClick={()=>handleOnclickNav(c.id)} className="sf-with-ul"> */}
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
                                              <Link to={`/shoplist/${cc.id}`} className="menu-title">
                                                {cc.name}
                                              </Link>
                                              {/* End .menu-title */}
                                              <ul>
                                                {cc.children &&
                                                  cc.children.length > 0 &&
                                                  cc.children.map((ccc) => {
                                                    return (
                                                      <>
                                                        <li to={`/shoplist/${ccc.id}`}>
                                                          <Link >
                                                            <span>
                                                              {ccc.name}
                                                              <span className="tip tip-new">
                                                                New
                                                              </span>
                                                            </span>
                                                          </Link>
                                                        </li>
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
            <p>Clearance Up to 30% Off</p>
          </div>
        </div>
        {/* End .container */}
      </div>
    </>
  );
}
