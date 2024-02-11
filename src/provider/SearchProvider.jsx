/* eslint-disable react/prop-types */
import { useState } from "react";
import { SearchContext } from "../conext";

const SearchProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <SearchContext.Provider value={{ searchTerm, setSearchTerm }}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
