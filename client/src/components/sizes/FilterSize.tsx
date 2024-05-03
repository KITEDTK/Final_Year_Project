import  { useEffect, useState } from "react";
import { useAppDispatch,useAppSelector } from "../../store/hooks";
import { fetchAllSizes } from "../../features/sizes/sizesSlice";

interface Props {
  onSelectSize: (sizeId: string[])=> void;
}
export const FilterSize: React.FC<Props> = ({onSelectSize})=>{
  const dispatch = useAppDispatch();
  const allSizes = useAppSelector((state) => state.sizes.sizes);
  useEffect(() => {
    dispatch(fetchAllSizes());
  }, [dispatch]);
  const [isCheckedArr, setIsCheckedArr] = useState<string[]>([]);
  const handleOnChangeCheckbox = (sizeId: string) => {
    setIsCheckedArr((prev) => {
      const isChecked = isCheckedArr.includes(sizeId);
      if (isChecked) {
        const newArr = isCheckedArr.filter((item) => item !== sizeId);
        onSelectSize(newArr);
        return isCheckedArr.filter((item) => item !== sizeId);
      } else {
        const newArr = [...prev, sizeId];
        onSelectSize(newArr);
        return [...prev, sizeId];
      }
    });
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
              {allSizes &&
                allSizes.map((size, index) => {
                  return (
                    <>
                      <div className="filter-item">
                        <div className="custom-control custom-checkbox">
                          <input
                            onChange={() => handleOnChangeCheckbox(size.id)}
                            type="checkbox"
                            className="custom-control-input"
                            id={"size-" + index}
                          />
                          <label
                            className="custom-control-label"
                            htmlFor={"size-" + index}
                          >
                            {size.name}
                          </label>
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

