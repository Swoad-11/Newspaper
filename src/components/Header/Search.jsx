import { useState, useContext } from "react";
import searchIcon from "../../assets/icons/search.svg";
import useDebounce from "../../hooks/useDebounce";
import { SearchContext } from "../../conext";

export default function Search() {
  const { setSearchTerm } = useContext(SearchContext);
  const [showInput, setShowInput] = useState(false); // State to manage input visibility

  const doSearch = useDebounce((term) => {
    setSearchTerm(term);
  }, 500);

  function handleChange(e) {
    e.preventDefault();
    const value = e.target.value;
    doSearch(value);
  }

  function handleSearchButtonClick() {
    setShowInput((prevState) => !prevState); // Toggle showInput state
  }

  return (
    <div className="rounded-lg">
      <div
        className="flex items-center space-x-2 py-2 px-3 group transition-all 
      focus-within:border-b-0 focus-within:rounded-md relative"
      >
        <div
          className={`w-full overflow-hidden transition-max-width duration-500 ${
            showInput ? "max-w-xs" : "max-w-0"
          }`}
        >
          <input
            className="bg-transparent placeholder-text-gray-400 text-gray-800 w-full text-xs
             md:text-base outline-none border-b border-transparent border-gray-500
              focus:border-gray-500"
            type="search"
            placeholder="Search News"
            onChange={handleChange}
            required
          />
        </div>
        <button type="button" onClick={handleSearchButtonClick}>
          <img src={searchIcon} alt="Search" />
        </button>
      </div>
    </div>
  );
}
