import React from "react";

function FilterSize({ onSelectSize }) {
    const handleSizeClick = (size) => {
        onSelectSize(size);
      };
    
  return (
    <>
      <div className="widget widget-collapsible">
        <h3 className="widget-title">
          <a
            data-toggle="collapse"
            href="#widget-2"
            role="button"
            aria-expanded="true"
            aria-controls="widget-2"
          >
            Size
          </a>
        </h3>
        {/* End .widget-title */}

        <div className="collapse show" id="widget-2">
          <div className="widget-body">
            <div className="filter-items">
              <div className="filter-item">
                <div className="custom-control custom-checkbox">
                  <input
                  onClick={()=>handleSizeClick('S')}
                    type="checkbox"
                    className="custom-control-input"
                    id="size-1"
                  />
                  <label className="custom-control-label" for="size-1">
                    XS
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
                    id="size-2"
                  />
                  <label className="custom-control-label" for="size-2">
                    S
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
                    checked
                    id="size-3"
                  />
                  <label className="custom-control-label" for="size-3">
                    M
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
                    checked
                    id="size-4"
                  />
                  <label className="custom-control-label" for="size-4">
                    L
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
                    id="size-5"
                  />
                  <label className="custom-control-label" for="size-5">
                    XL
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
                    id="size-6"
                  />
                  <label className="custom-control-label" for="size-6">
                    XXL
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
    </>
  );
}
export default FilterSize;
