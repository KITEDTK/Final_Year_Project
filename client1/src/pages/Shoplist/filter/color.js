import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllColors } from "../../../counter/colorsSlice";

function FilterColor({ onSelectColor }) {
  const allColors = useSelector((state) => state.colors.colors);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllColors());
  }, [dispatch]);
  const [isCheckedArr, setIsCheckedArr] = useState([]);
  const handleChooseColors = (colorId) =>{
    setIsCheckedArr((prev)=>{
      const isChecked = isCheckedArr.includes(colorId);
      if(isChecked){
        const newArr = isCheckedArr.filter(item => item !== colorId);
        onSelectColor(newArr);
        return newArr;
      }else{
        const newArr = [...prev,colorId];
        onSelectColor(newArr);
        return newArr;
      }
    })
  }
  return (
    <>
      <div className="collapse show" id="widget-3">
        <div className="widget-body">
          <div className="filter-colors">
            {allColors &&
              allColors.map((item,index) => {
                return (
                  <>
                    <a onClick={()=>handleChooseColors(item.id)} href key={index} className={isCheckedArr.includes(item.id) === true ? "selected" : "" } style={{ background: `${item.name}` }}>
                      <span className="sr-only">{item.name}</span>
                    </a>
                  </>
                );
              })}
          </div>
          {/* End .filter-colors */}
        </div>
        {/* End .widget-body */}
      </div>
    </>
  );
}
export default FilterColor;
