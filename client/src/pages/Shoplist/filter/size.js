import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllSizes } from "../../../counter/sizesSlice";

function FilterSize({ onSelectSize }) {
  useEffect(() => {
    dispatch(getAllSizes());
  }, []);
  const allSizes = useSelector((state) => state.sizes.sizes);
  const [isCheckedArr, setIsCheckedArr] = useState([]);
  const handleOnChangeCheckbox = (sizeId) => {
    setIsCheckedArr((prev)=>{
      const isChecked = isCheckedArr.includes(sizeId);
      if(isChecked){
        return isCheckedArr.filter(item=> item !== sizeId);
      }else{
        return [...prev,sizeId];
      }
    });
  };
  const dispatch = useDispatch();
  useEffect(()=>{
    onSelectSize(isCheckedArr);
  },[isCheckedArr])
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
              {allSizes &&
                allSizes.map((size, index) => {
                  return (
                    <>
                    <div className="filter-item">
													<div className="custom-control custom-checkbox">
														<input onChange={()=>handleOnChangeCheckbox(size.id)} type="checkbox" class="custom-control-input" id={"size-"+index}/>
														<label className="custom-control-label" for={"size-"+index}>{size.name}</label>
													</div>
												</div>
                    </>
                  );
                })}

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
