import React, { useEffect, useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { getAllSizes } from "../../../counter/sizesSlice";

function FilterSize({ onSelectSize }) {
  const dispatch = useDispatch();
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
