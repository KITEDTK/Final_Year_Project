import { useAppSelector } from "../../store/hooks";
import { useEffect, useState } from "react";
interface Props {
  onSelectCategory: (categoryId: string | null) => void;
}
export const FilterCategory: React.FC<Props> = ({ onSelectCategory }) => {
  const childCategories = useAppSelector(
    (state) => state.categories.childCategories
  );
  const childRootCategory = useAppSelector(
    (state) => state.categories.rootChildCategory
  );
  const category = useAppSelector((state) => state.categories.category);
  const [isChecked, setIsChecked] = useState<string | null>(
    childRootCategory.id
  );
  useEffect(() => {
    setIsChecked(childRootCategory.id);
  }, [childRootCategory]);
  useEffect(() => {
    if (category) {
      if (isChecked === category.id || category.parentId === null) {
        onSelectCategory(null);
      } else {
        onSelectCategory(isChecked);
      }
    }
  }, [onSelectCategory, isChecked, category]);
  const handleOnClickCategory = (categoryId: string) => {
    if (isChecked === categoryId) {
      setIsChecked(null);
      onSelectCategory(null);
    } else {
      setIsChecked(categoryId);
      onSelectCategory(categoryId);
    }
  };
  return (
    <>
      {category &&
        category.parentId !== null &&
        childCategories &&
        childCategories.length > 0 && (
          <div className="widget widget-collapsible">
            <h3 className="widget-title">
              <a
                data-toggle="collapse"
                href="#widget-1"
                role="button"
                aria-expanded="true"
                aria-controls="widget-1"
              >
                DANH MỤC {category.name.toUpperCase()}
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
                                checked={isChecked === c.id ? true : false}
                              />
                              <label
                                className="custom-control-label"
                                htmlFor={`cat-${index}`}
                              >
                                {c.name}
                              </label>
                            </div>
                            {/* End .custom-checkbox */}
                            <span className="item-count">{c.totalAmount}</span>
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
