import InfiniteScroll from "react-infinite-scroll-component";
import { FilterSize } from "../components/sizes/FilterSize";
import { FilterColor } from "../components/colors/FilterColor";
import { useState } from "react";
import { SingleClothSecondHand } from "../components/products/SingleClothSecondHand";
import { SecondHand as SecondHandTypes } from "../features/secondHand/secondHandTypes";
import { useAppDispatch } from "../store/hooks";
import { useEffect } from "react";
import { fetchAllSecondHand, fetchMaxQuantity } from "../features/secondHand/secondHandSlice";
export const SecondHand = () => {
  const dispatch = useAppDispatch();
  const [clothesItems, setClothesItems] = useState<SecondHandTypes[]>([]);
  const [sizesFilter, setSizesFilter] = useState<string[] | null>(null);
  const [colorsFilter, setColorsFilter] = useState<string[] | null>(null);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [maxQuantity, setMaxQuantity] = useState<number>(0);
  const [page, setPage] = useState<number>(0);
  useEffect(() => {
    dispatch(fetchMaxQuantity()).then((res: any)=>{
      setMaxQuantity(res.payload);
    })
    dispatch(fetchAllSecondHand(page)).then((res: any) => {
      if (page === 0) {
        setClothesItems(res.payload);
      } else {
        setClothesItems((prev) => [...prev, ...res.payload]);
      }
    });
  }, [dispatch, page]);
  const fetchMoreData = () => {
    if (hasMore === true) {
      setPage((prevPage) => prevPage + 1);
    }
  };
  const handleSizeSelect = (sizeIds: string[]) => {
    setSizesFilter(sizeIds);
  };

  const handleColorSelect = (colorIds: string[]) => {
    setColorsFilter(colorIds);
  };
  useEffect(()=>{
    if(clothesItems.length === maxQuantity){
      setHasMore(false);
    }else{
      setHasMore(true)
    }
  },[clothesItems, maxQuantity]);
  return (
    <>
      <InfiniteScroll
        dataLength={clothesItems.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Đã hết dữ liệu để xem</b>
          </p>
        }
      >
        <main className="main">
          <div
            className="page-header text-center"
            style={{
              backgroundImage: "url('assets/images/page-header-bg.jpg')",
            }}
          >
            <div className="container">
              <h1 className="page-title">
                Hàng Secondhand<span> KITE SHOP</span>
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
                        Hiển thị <span>{clothesItems.length} trong số {maxQuantity}</span> sản phẩm
                      </div>
                      {/* End .toolbox-info */}
                    </div>
                    {/* End .toolbox-left */}
                    {/* End .toolbox-right */}
                  </div>
                  {/* End .toolbox */}

                  <div className="products mb-3">
                    <div className="row justify-content-center">
                      {clothesItems &&
                        clothesItems.length > 0 &&
                        clothesItems
                          .filter((ft) => {
                            const colorMatch =
                              !colorsFilter ||
                              colorsFilter.length === 0 ||
                              colorsFilter.includes(
                                ft.wardrobe.clothDetails.color.id
                              );
                            const sizeMatch =
                              !sizesFilter ||
                              sizesFilter.length === 0 ||
                              sizesFilter.includes(
                                ft.wardrobe.clothDetails.size.id
                              );
                            return colorMatch && sizeMatch;
                          })
                          .map((item) => (
                            <SingleClothSecondHand
                              key={item.id}
                              secondhand={item}
                            />
                          ))}

                      {/* End .col-sm-6 col-lg-4 */}
                    </div>
                    {/* End .row */}
                  </div>

                  {/* End .products */}
                  <nav aria-label="Page navigation"></nav>
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

                    <FilterSize
                      onSelectSize={(size) => handleSizeSelect(size)}
                    />

                    <FilterColor
                      onSelectColor={(color) => handleColorSelect(color)}
                    />
                    {/* End .collapse */}
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
      </InfiniteScroll>
    </>
  );
};
