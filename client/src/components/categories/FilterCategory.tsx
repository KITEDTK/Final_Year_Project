import { useAppSelector } from "../../store/hooks";
import { useState } from "react";
interface Props {
  onSelectCategory: (categoryId: string[])=> void;
}
export const FilterCategory : React.FC<Props> = ({onSelectCategory})=>{
  const childCategories = useAppSelector(
    (state) => state.categories.childCategories
  );
  const category = useAppSelector((state) => state.categories.category);
  const [isCheckedArr, setIsCheckedArr] = useState<string[]>([]);
  const handleOnClickCategory = (categoryId: string) => {
    setIsCheckedArr((prev) => {
      const isChecked = isCheckedArr.includes(categoryId);
      if (isChecked) {
        const newArr = isCheckedArr.filter((item) => item !== categoryId);
        onSelectCategory(newArr);
        return isCheckedArr.filter((item) => item !== categoryId);
      } else {
        const newArr = [...prev, categoryId];
        onSelectCategory(newArr);
        return [...prev, categoryId];
      }
    });
  };
  return (
    <>
      {category && category.parentId !== null && childCategories && childCategories.length > 0 && (
        <div className="widget widget-collapsible">
          <h3 className="widget-title">
            <a
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
                {childCategories &&
                  childCategories.length &&
                  childCategories.map((c, index) => {
                    return (
                      <>
                        <div className="filter-item">
                          <div className="custom-control custom-checkbox">
                            <input
                            onChange={() => handleOnClickCategory(c.id)}
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
