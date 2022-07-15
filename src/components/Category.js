import React from "react";

export const Category = (props) => {
  const [allCategory, setAllCategory] = React.useState(props.category);

  return (
    <div className="wrapper">
      {allCategory.map((category, index) => {
        return (
          <li>
            <button
              type="button"
              key={index}
              onClick={() => props.getTarget(category)}
            >
              {category.toUpperCase()}
            </button>
          </li>
        );
      })}
    </div>
  );
};
