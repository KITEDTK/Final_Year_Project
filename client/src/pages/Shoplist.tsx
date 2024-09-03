import { useEffect, useState } from "react";
import {
  fetchFilterClothes,
  fetchMaxClothesQuantity,
  resetClothes,
} from "../features/products/clothesSlice";
import { SingleClothShoplist } from "../components/products/SingleClothShoplist";
import { FilterSize } from "../components/sizes/FilterSize";
import { FilterColor } from "../components/colors/FilterColor";
import { FilterCategory } from "../components/categories/FilterCategory";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { ClothesFilter } from "../features/products/clothesTypes";
import InfiniteScroll from "react-infinite-scroll-component";

export const Shoplist = () => {
  const dispatch = useAppDispatch();
  const category = useAppSelector((state) => state.categories.category);
  const maxQuantityClothesByCategory = useAppSelector(
    (state) => state.clothes.maxQuantityByCategory
  );

  const [clothesItems, setClothesItems] = useState<ClothesFilter[]>([]);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [page, setPage] = useState<number>(0);

  const [sizesFilter, setSizesFilter] = useState<string[] | null>(null);
  const [colorsFilter, setColorsFilter] = useState<string[] | null>(null);
  const [categoryFilter, setCategoryFilter] = useState<string | null>(null);

  const handleCategorySelect = (categoryId: string | null) => {
    setCategoryFilter(categoryId);
  };

  const handleSizeSelect = (sizeIds: string[]) => {
    setSizesFilter(sizeIds);
  };

  const handleColorSelect = (colorIds: string[]) => {
    setColorsFilter(colorIds);
  };

  const fetchMoreData = () => {
    if (hasMore) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    if (category) {
      dispatch(resetClothes());
      setPage(0);
      setClothesItems([]);
      setHasMore(true);
      dispatch(fetchMaxClothesQuantity(category.id));
    }
  }, [category, dispatch]);

  useEffect(() => {
    if (category) {
      dispatch(
        fetchFilterClothes({
          rootCategoryId: category.id,
          page: page,
        })
      ).then((res : any)=>{
        if(page === 0){
          setClothesItems(res.payload);
        }else{
          setClothesItems((prev)=>[...prev, ...res.payload]);
        }
      });
    }
  }, [page, category, dispatch]);

  useEffect(()=>{
    if(clothesItems.length === maxQuantityClothesByCategory){
      setHasMore(false);
    }else{
      setHasMore(true);
    }
  },[clothesItems, maxQuantityClothesByCategory]);
  
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
                {category?.name}<span>Shop</span>
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
                {category?.name}
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
                        Hiển thị{" "}
                        <span>
                          {clothesItems.length} trong số{" "}
                          {maxQuantityClothesByCategory}
                        </span>{" "}
                        sản phẩm
                      </div>
                      {/* End .toolbox-info */}
                    </div>
                    {/* End .toolbox-left */}

                    {/* End .toolbox-right */}
                  </div>
                  {/* End .toolbox */}

                  <div className="products mb-3">
                    <div className="row justify-content-center">
                      {clothesItems && // filter trực tiếp ở đây
                        clothesItems.length > 0 &&
                        clothesItems
                          .filter(
                            (fi) =>
                              !categoryFilter ||
                              categoryFilter.length === 0 ||
                              categoryFilter.includes(fi.categoryId)
                          )
                          .map((item) => {
                            const filteredDetails = item.clothDetails.filter(
                              (cd) =>
                                (!colorsFilter ||
                                  colorsFilter.length === 0 ||
                                  colorsFilter.includes(cd.colorId)) &&
                                (!sizesFilter ||
                                  sizesFilter.length === 0 ||
                                  sizesFilter.includes(cd.sizeId))
                            );

                            return {
                              ...item,
                              clothDetails: filteredDetails,
                            };
                          })
                          .filter((item)=> item.clothDetails.length > 0)
                          .map((item) => {
                            return (
                              <>
                                <SingleClothShoplist
                                  key={item.id}
                                  clothes={item}
                                />
                              </>
                            );
                          })}
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

                    <FilterCategory
                      onSelectCategory={(categoryId) =>
                        handleCategorySelect(categoryId)
                      }
                    />

                    <FilterSize
                      onSelectSize={(size) => handleSizeSelect(size)}
                    />

                    <FilterColor
                      onSelectColor={(color) => handleColorSelect(color)}
                    />
                    {/* End .collapse */}
                    {/* End .widget */}


                    {/* End .widget */}

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
