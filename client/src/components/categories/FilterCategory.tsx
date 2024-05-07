import { useAppSelector } from "../../store/hooks";
export const FilterCategory = () => {
  const categories = useAppSelector(
    (state) => state.categories.childCategories
  );
  const category = useAppSelector((state) => state.categories.category);
  const handleOnClickCategory = () => {
    //console.log(category);
  };
  return (
    <>
      {category && category.parentId !== null && categories && categories.length > 0 && (
        <div className="widget widget-collapsible">
          <h3 className="widget-title">
            <a
              onClick={() => {
                handleOnClickCategory();
              }}
              data-toggle="collapse"
              href="#widget-1"
              role="button"
              aria-expanded="true"
              aria-controls="widget-1"
            >
              DANH MỤC
            </a>
          </h3>
          {/* End .widget-title */}

          <div className="collapse show" id="widget-1">
            <div className="widget-body">
              <div className="filter-items filter-items-count">
                {categories &&
                  categories.length &&
                  categories.map((c, index) => {
                    return (
                      <>
                        <div className="filter-item">
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id={`cat-${index}`}
                            />
                            <label
                              className="custom-control-label"
                              htmlFor={`cat-${index}`}
                            >
                              {c.name}
                            </label>
                          </div>
                          {/* End .custom-checkbox */}
                          <span className="item-count">3</span>
                        </div>
                      </>
                    );
                  })}

                {/* End .filter-item */}
              </div>
              {/* End .filter-items */}
            </div>
            {/* End .widget-body */}
          </div>
          {/* End .collapse */}
        </div>
      )}
      <></>
    </>
  );
};
