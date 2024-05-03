import { useEffect, useState } from "react";
import { fetchFilterClothes } from "../features/products/clothesSlice";
import { SingleClothShoplist } from "../components/products/SingleClothShoplist";
import { FilterSize } from "../components/sizes/FilterSize";
import FilterColor from "../components/colors/FilterColor";
import { useAppDispatch, useAppSelector } from "../store/hooks";
export const Shoplist = () => {
  const dispatch = useAppDispatch();
  const category = useAppSelector(state => state.categories.category);
  const clothes = useAppSelector(state => state.clothes.clothes)
  // Filter
  const [filter, setFilter] = useState({
    categoryId: '',
    sizeIds: [] as string[],
    colorIds: [] as string[],
  });

  const [sizesFilter, setSizesFilter] = useState<string[] | null>(null);
  const [colorsFilter, setColorsFilter] = useState<string[] | null>(null);

  const handleSizeSelect = (size: string[]) => {
    setSizesFilter(size); // Set the size filter as an array
  };

  const handleColorSelect = (color: string[]) => {
    setColorsFilter(color); // Set the color filter as an array
  };

  // Dispatch
  useEffect(() => {
    if (category) {
      setFilter(prevFilter => ({
        ...prevFilter,
        categoryId: category.id,
        colorIds: colorsFilter || [],
        sizeIds: sizesFilter || [],
      }));
    }else {
      setFilter(prevFilter => ({
        ...prevFilter,
        categoryId: '',
        colorIds: colorsFilter || [],
        sizeIds: sizesFilter || [],
      }));
    }
  }, [category, sizesFilter, colorsFilter]);

  useEffect(() => {
    dispatch(fetchFilterClothes({ filter }));
  }, [dispatch, filter]);
  return (
    <>
      <main className="main">
        <div
          className="page-header text-center"
          style={{ backgroundImage: "url('assets/images/page-header-bg.jpg')" }}
        >
          <div className="container">
            <h1 className="page-title">
              Grid 3 Columns<span>Shop</span>
            </h1>
          </div>
          {/* End .container */}
        </div>
        {/* End .page-header */}
        <nav aria-label="breadcrumb" className="breadcrumb-nav mb-2">
          <div className="container">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="index.html">Home</a>
              </li>
              <li className="breadcrumb-item">
                <a href="#">Shop</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Grid 3 Columns
              </li>
            </ol>
          </div>
          {/* End .container */}
        </nav>
        {/* End .breadcrumb-nav */}

        <div className="page-content">
          <div className="container">
            <div className="row">
              <div className="col-lg-9">
                <div className="toolbox">
                  <div className="toolbox-left">
                    <div className="toolbox-info">
                      Showing <span>9 of 56</span> Products
                    </div>
                    {/* End .toolbox-info */}
                  </div>
                  {/* End .toolbox-left */}

                  <div className="toolbox-right">
                    <div className="toolbox-sort">
                      <label htmlFor="sortby">Sort by:</label>
                      <div className="select-custom">
                        <select
                          name="sortby"
                          id="sortby"
                          className="form-control"
                        >
                          <select value="popularity">
                            <option value="popularity" selected>
                              Most Popular
                            </option>
                          </select>

                          <option value="rating">Most Rated</option>
                          <option value="date">Date</option>
                        </select>
                      </div>
                    </div>
                    {/* End .toolbox-sort */}
                    <div className="toolbox-layout">
                      <a href="category-list.html" className="btn-layout">
                        <svg width="16" height="10">
                          <rect x="0" y="0" width="4" height="4" />
                          <rect x="6" y="0" width="10" height="4" />
                          <rect x="0" y="6" width="4" height="4" />
                          <rect x="6" y="6" width="10" height="4" />
                        </svg>
                      </a>

                      <a href="category-2cols.html" className="btn-layout">
                        <svg width="10" height="10">
                          <rect x="0" y="0" width="4" height="4" />
                          <rect x="6" y="0" width="4" height="4" />
                          <rect x="0" y="6" width="4" height="4" />
                          <rect x="6" y="6" width="4" height="4" />
                        </svg>
                      </a>

                      <a href="category.html" className="btn-layout active">
                        <svg width="16" height="10">
                          <rect x="0" y="0" width="4" height="4" />
                          <rect x="6" y="0" width="4" height="4" />
                          <rect x="12" y="0" width="4" height="4" />
                          <rect x="0" y="6" width="4" height="4" />
                          <rect x="6" y="6" width="4" height="4" />
                          <rect x="12" y="6" width="4" height="4" />
                        </svg>
                      </a>

                      <a href="category-4cols.html" className="btn-layout">
                        <svg width="22" height="10">
                          <rect x="0" y="0" width="4" height="4" />
                          <rect x="6" y="0" width="4" height="4" />
                          <rect x="12" y="0" width="4" height="4" />
                          <rect x="18" y="0" width="4" height="4" />
                          <rect x="0" y="6" width="4" height="4" />
                          <rect x="6" y="6" width="4" height="4" />
                          <rect x="12" y="6" width="4" height="4" />
                          <rect x="18" y="6" width="4" height="4" />
                        </svg>
                      </a>
                    </div>
                    {/* End .toolbox-layout */}
                  </div>
                  {/* End .toolbox-right */}
                </div>
                {/* End .toolbox */}

                <div className="products mb-3">
                  <div className="row justify-content-center">
                    {clothes &&
                      clothes.length > 0 &&
                      clothes.map((item) => {
                        return (
                          <>
                            <SingleClothShoplist key={item.id} clothes={item} />
                          </>
                        );
                      })}
                    {/* End .col-sm-6 col-lg-4 */}
                  </div>
                  {/* End .row */}
                </div>
                {/* End .products */}

                <nav aria-label="Page navigation">
                  <ul className="pagination justify-content-center">
                    <li className="page-item disabled">
                      <a
                        className="page-link page-link-prev"
                        href="#"
                        aria-label="Previous"
                        tabIndex={-1}
                        aria-disabled={true}
                      >
                        <span aria-hidden="true">
                          <i className="icon-long-arrow-left"></i>
                        </span>
                        Prev
                      </a>
                    </li>
                    <li className="page-item active" aria-current="page">
                      <a className="page-link" href="#">
                        1
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        2
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        3
                      </a>
                    </li>
                    <li className="page-item-total">of 6</li>
                    <li className="page-item">
                      <a
                        className="page-link page-link-next"
                        href="#"
                        aria-label="Next"
                      >
                        Next{" "}
                        <span aria-hidden="true">
                          <i className="icon-long-arrow-right"></i>
                        </span>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
              {/* End .col-lg-9 */}
              <aside className="col-lg-3 order-lg-first">
                <div className="sidebar sidebar-shop">
                  <div className="widget widget-clean">
                    <label>Filters:</label>
                    <a href="#" className="sidebar-filter-clear">
                      Clean All
                    </a>
                  </div>
                  {/* End .widget widget-clean */}

                  <div className="widget widget-collapsible">
                    <h3 className="widget-title">
                      <a
                        data-toggle="collapse"
                        href="#widget-1"
                        role="button"
                        aria-expanded="true"
                        aria-controls="widget-1"
                      >
                        Category
                      </a>
                    </h3>
                    {/* End .widget-title */}

                    <div className="collapse show" id="widget-1">
                      <div className="widget-body">
                        <div className="filter-items filter-items-count">
                          <div className="filter-item">
                            <div className="custom-control custom-checkbox">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="cat-1"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="cat-1"
                              >
                                Dresses
                              </label>
                            </div>
                            {/* End .custom-checkbox */}
                            <span className="item-count">3</span>
                          </div>
                          {/* End .filter-item */}

                          <div className="filter-item">
                            <div className="custom-control custom-checkbox">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="cat-2"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="cat-2"
                              >
                                T-shirts
                              </label>
                            </div>
                            {/* End .custom-checkbox */}
                            <span className="item-count">0</span>
                          </div>
                          {/* End .filter-item */}

                          <div className="filter-item">
                            <div className="custom-control custom-checkbox">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="cat-3"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="cat-3"
                              >
                                Bags
                              </label>
                            </div>
                            {/* End .custom-checkbox */}
                            <span className="item-count">4</span>
                          </div>
                          {/* End .filter-item */}

                          <div className="filter-item">
                            <div className="custom-control custom-checkbox">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="cat-4"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="cat-4"
                              >
                                Jackets
                              </label>
                            </div>
                            {/* End .custom-checkbox */}
                            <span className="item-count">2</span>
                          </div>
                          {/* End .filter-item */}

                          <div className="filter-item">
                            <div className="custom-control custom-checkbox">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="cat-5"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="cat-5"
                              >
                                Shoes
                              </label>
                            </div>
                            {/* End .custom-checkbox */}
                            <span className="item-count">2</span>
                          </div>
                          {/* End .filter-item */}

                          <div className="filter-item">
                            <div className="custom-control custom-checkbox">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="cat-6"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="cat-6"
                              >
                                Jumpers
                              </label>
                            </div>
                            {/* End .custom-checkbox */}
                            <span className="item-count">1</span>
                          </div>
                          {/* End .filter-item */}

                          <div className="filter-item">
                            <div className="custom-control custom-checkbox">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="cat-7"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="cat-7"
                              >
                                Jeans
                              </label>
                            </div>
                            {/* End .custom-checkbox */}
                            <span className="item-count">1</span>
                          </div>
                          {/* End .filter-item */}

                          <div className="filter-item">
                            <div className="custom-control custom-checkbox">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="cat-8"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="cat-8"
                              >
                                Sportwear
                              </label>
                            </div>
                            {/* End .custom-checkbox */}
                            <span className="item-count">0</span>
                          </div>
                          {/* End .filter-item */}
                        </div>
                        {/* End .filter-items */}
                      </div>
                      {/* End .widget-body */}
                    </div>
                    {/* End .collapse */}
                  </div>
                  {/* End .widget */}

                  <FilterSize onSelectSize={(size) => handleSizeSelect(size)} />
                  {/* End .widget */}

                  <div className="widget widget-collapsible">
                    <h3 className="widget-title">
                      <a
                        data-toggle="collapse"
                        href="#widget-3"
                        role="button"
                        aria-expanded="true"
                        aria-controls="widget-3"
                      >
                        Colour
                      </a>
                    </h3>
                    {/* End .widget-title */}

                    <FilterColor
                      onSelectColor={(color) => handleColorSelect(color)}
                    />
                    {/* End .collapse */}
                  </div>
                  {/* End .widget */}

                  <div className="widget widget-collapsible">
                    <h3 className="widget-title">
                      <a
                        data-toggle="collapse"
                        href="#widget-4"
                        role="button"
                        aria-expanded="true"
                        aria-controls="widget-4"
                      >
                        Brand
                      </a>
                    </h3>
                    {/* End .widget-title */}

                    <div className="collapse show" id="widget-4">
                      <div className="widget-body">
                        <div className="filter-items">
                          <div className="filter-item">
                            <div className="custom-control custom-checkbox">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="brand-1"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="brand-1"
                              >
                                Next
                              </label>
                            </div>
                            {/* End .custom-checkbox */}
                          </div>
                          {/* End .filter-item */}

                          <div className="filter-item">
                            <div className="custom-control custom-checkbox">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="brand-2"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="brand-2"
                              >
                                River Island
                              </label>
                            </div>
                            {/* End .custom-checkbox */}
                          </div>
                          {/* End .filter-item */}

                          <div className="filter-item">
                            <div className="custom-control custom-checkbox">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="brand-3"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="brand-3"
                              >
                                Geox
                              </label>
                            </div>
                            {/* End .custom-checkbox */}
                          </div>
                          {/* End .filter-item */}

                          <div className="filter-item">
                            <div className="custom-control custom-checkbox">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="brand-4"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="brand-4"
                              >
                                New Balance
                              </label>
                            </div>
                            {/* End .custom-checkbox */}
                          </div>
                          {/* End .filter-item */}

                          <div className="filter-item">
                            <div className="custom-control custom-checkbox">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="brand-5"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="brand-5"
                              >
                                UGG
                              </label>
                            </div>
                            {/* End .custom-checkbox */}
                          </div>
                          {/* End .filter-item */}

                          <div className="filter-item">
                            <div className="custom-control custom-checkbox">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="brand-6"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="brand-6"
                              >
                                F&F
                              </label>
                            </div>
                            {/* End .custom-checkbox */}
                          </div>
                          {/* End .filter-item */}

                          <div className="filter-item">
                            <div className="custom-control custom-checkbox">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="brand-7"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="brand-7"
                              >
                                Nike
                              </label>
                            </div>
                            {/* End .custom-checkbox */}
                          </div>
                          {/* End .filter-item */}
                        </div>
                        {/* End .filter-items */}
                      </div>
                      {/* End .widget-body */}
                    </div>
                    {/* End .collapse */}
                  </div>
                  {/* End .widget */}

                  <div className="widget widget-collapsible">
                    <h3 className="widget-title">
                      <a
                        data-toggle="collapse"
                        href="#widget-5"
                        role="button"
                        aria-expanded="true"
                        aria-controls="widget-5"
                      >
                        Price
                      </a>
                    </h3>
                    {/* End .widget-title */}

                    <div className="collapse show" id="widget-5">
                      <div className="widget-body">
                        <div className="filter-price">
                          <div className="filter-price-text">
                            Price Range:
                            <span id="filter-price-range"></span>
                          </div>
                          {/* End .filter-price-text */}

                          <div id="price-slider"></div>
                          {/* End #price-slider */}
                        </div>
                        {/* End .filter-price */}
                      </div>
                      {/* End .widget-body */}
                    </div>
                    {/* End .collapse */}
                  </div>
                  {/* End .widget */}
                </div>
                {/* End .sidebar sidebar-shop */}
              </aside>
              {/* End .col-lg-3 */}
            </div>
            {/* End .row */}
          </div>
          {/* End .container */}
        </div>
        {/* End .page-content */}
      </main>
      {/* End .main */}
    </>
  );
}