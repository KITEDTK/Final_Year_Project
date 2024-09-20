import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { fetchAllColors } from "../../features/colors/colorsSilce";

interface Props {
  onSelectColor: (colorId: string[]) => void;
}
export const FilterColor: React.FC<Props> = ({ onSelectColor }) => {
  const allColors = useAppSelector((state) => state.colors.colors);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchAllColors());
  }, [dispatch]);
  const [isCheckedArr, setIsCheckedArr] = useState<string[]>([]);
  const handleChooseColors = (colorId: string) => {
    setIsCheckedArr((prev) => {
      const isChecked = isCheckedArr.includes(colorId);
      if (isChecked) {
        const newArr = isCheckedArr.filter((item) => item !== colorId);
        onSelectColor(newArr);
        return newArr;
      } else {
        const newArr = [...prev, colorId];
        onSelectColor(newArr);
        return newArr;
      }
    });
  };
  return (
    <>
      <div className="widget widget-collapsible">
        <h3 className="widget-title">
          <a
            data-toggle="collapse"
            href="#widget-3"
            role="button"
            aria-expanded="true"
            aria-controls="widget-3"
          >
            Màu sắc
          </a>
        </h3>
        <div className="collapse show" id="widget-3">
          <div className="widget-body">
            <div className="filter-colors">
              {allColors &&
                allColors.map((item, index) => {
                  return (
                    <>
                      <a
                        onClick={() => handleChooseColors(item.id)}
                        key={index}
                        className={
                          isCheckedArr.includes(item.id) === true
                            ? "selected"
                            : ""
                        }
                        style={{ background: `${item.name}` }}
                      >
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
      </div>
    </>
  );
};
export default FilterColor;
