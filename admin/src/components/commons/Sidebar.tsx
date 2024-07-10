import { Link } from "react-router-dom";

export function Sidebar() {
  return (
    <>
      <aside className="main-sidebar sidebar-dark-primary elevation-4">
        <a href="index3.html" className="brand-link">
          <img
            src="dist/img/AdminLTELogo.png"
            alt="AdminLTE Logo"
            className="brand-image img-circle elevation-3"
            style={{ opacity: 0.8 }}
          />
          <span className="brand-text font-weight-light">AdminLTE 3</span>
        </a>

        <div className="sidebar">
          <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="image">
              <img
                src="dist/img/user2-160x160.jpg"
                className="img-circle elevation-2"
                alt="User Image"
              />
            </div>
            <div className="info">
              <a href="#" className="d-block">
                Đào Tuấn Kiệt
              </a>
            </div>
          </div>

          <div className="form-inline">
            <div className="input-group" data-widget="sidebar-search">
              <input
                className="form-control form-control-sidebar"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <div className="input-group-append">
                <button className="btn btn-sidebar">
                  <i className="fas fa-search fa-fw"></i>
                </button>
              </div>
            </div>
          </div>

          <nav className="mt-2">
            <ul
              className="nav nav-pills nav-sidebar flex-column"
              data-widget="treeview"
              role="menu"
              data-accordion="false"
            >
              <li className="nav-item menu-open">
                <Link  to='/' className="nav-link active">
                  <i className="nav-icon fas fa-tachometer-alt"></i>
                  <p>
                    Thống kê
                  </p>
                </Link >
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="nav-icon fas fa-edit"></i>
                  <p>
                    Giao dịch
                    <i className="fas fa-angle-left right"></i>
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <Link to="/order" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>Hóa đơn</p>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="nav-icon fas fa-table"></i>
                  <p>
                    Hàng hóa
                    <i className="fas fa-angle-left right"></i>
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <Link to="/clothes" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>Quần áo</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to='/refunds' className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>Trả hàng</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <a href="pages/tables/jsgrid.html" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>jsGrid</p>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="nav-icon fas fa-book"></i>
                  <p>
                    Sổ quỹ
                    <i className="fas fa-angle-left right"></i>
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <a href="../examples/invoice.html" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>Invoice</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="../examples/profile.html" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>Profile</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="../examples/e-commerce.html" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>E-commerce</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="../examples/projects.html" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>Projects</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="../examples/project-add.html" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>Project Add</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="../examples/project-edit.html" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>Project Edit</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="../examples/project-detail.html" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>Project Detail</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="../examples/contacts.html" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>Contacts</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="../examples/faq.html" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>FAQ</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="../examples/contact-us.html" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>Contact us</p>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
    </>
  );
}
