import React from "react";
import { useNavigate } from "react-router-dom";


const categories = [
  "Boardings",
  "Taxis",
  "Medicare",
  "Rental Items",
  "Skill Sharing",
];

const CategorySelection = () => {
  const navigate = useNavigate();

  const handleCategorySelect = (category) => {
    window.open(`/add?category=${category}`, "_blank"); // Opens new tab
  };

  return (
    <div className="category-selection">
      <h2>Select a Category</h2>
      <div className="category-buttons">
        {categories.map((category, index) => (
          <button key={index} onClick={() => handleCategorySelect(category)}>
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategorySelection;
