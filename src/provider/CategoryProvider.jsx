/* eslint-disable react/prop-types */
import { useState } from "react";
import { CategoryContext } from "../conext";

const CategoryProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  return (
    <CategoryContext.Provider value={{ selectedCategory, setSelectedCategory }}>
      {children}
    </CategoryContext.Provider>
  );
};

export default CategoryProvider;
