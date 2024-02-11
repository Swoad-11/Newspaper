import { useContext } from "react";
import searchIcon from "../../assets/icons/search.svg";
import useDebounce from "../../hooks/useDebounce";
import { SearchContext } from "../../conext";

export default function Search() {
  const { setSearchTerm } = useContext(SearchContext);

  const doSearch = useDebounce((term) => {
    setSearchTerm(term);
  }, 500);

  function handleChange(e) {
    e.preventDefault();
    const value = e.target.value;
    doSearch(value);
  }
  return (
    <>
      <form className="bg-gray-50 hover:bg-gray-100 rounded-lg" action="#">
        <div className="flex items-center space-x-2 py-2 px-3 group transition-all  focus-within:border-b-0 focus-within:rounded-md">
          <div className="relative flex-grow">
            <input
              className="bg-transparent placeholder:text-gray-400 text-gray-800 w-full text-xs md:text-base outline-none border-b border-transparent hover:border-gray-500 focus:border-gray-500"
              type="search"
              placeholder="Search News"
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">
            <img src={searchIcon} alt="Search" />
          </button>
        </div>
      </form>
    </>
  );
}
