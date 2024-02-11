import { useContext, useEffect, useState } from "react";
import { CategoryContext, SearchContext } from "../conext";

const useNewsAPI = () => {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { selectedCategory } = useContext(CategoryContext);
  const { searchTerm } = useContext(SearchContext);

  const fetchNewsData = async (category, search) => {
    try {
      setLoading({
        ...loading,
        state: true,
        message: "Loading News...",
      });

      let apiUrl;
      if (search && search !== "") {
        apiUrl = `http://localhost:8000/v2/search?q=${search}`;
      } else {
        apiUrl = `http://localhost:8000/v2/top-headlines?category=${category}`;
      }

      const response = await fetch(apiUrl);

      if (!response.ok) {
        const errorMessage = `Failed to fetch News data: ${response.status}`;
        throw new Error(errorMessage);
      }

      const data = await response.json();
      console.log(data);

      data.articles.sort((a, b) => {
        if (a.urlToImage === null && b.urlToImage !== null) return 1;
        if (a.urlToImage !== null && b.urlToImage === null) return -1;
        return 0;
      });

      setNewsData(data?.articles);
    } catch (error) {
      setError(error);
    } finally {
      setLoading({
        ...loading,
        state: false,
        message: "",
      });
    }
  };

  useEffect(() => {
    setLoading({
      ...loading,
      state: true,
      message: "Finding your location...",
    });
    fetchNewsData(selectedCategory, searchTerm);
  }, [selectedCategory, searchTerm]);

  return { newsData, loading, error };
};

export default useNewsAPI;
