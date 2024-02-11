import { useContext, useEffect, useState } from "react";
import { CategoryContext, SearchContext } from "../conext";

const useNewsQuery = () => {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { selectedCategory } = useContext(CategoryContext);
  const { searchTerm } = useContext(SearchContext);

  const fetchNewsData = async (category, searchTerm) => {
    try {
      setLoading({
        ...loading,
        state: true,
        message: "Loading news data...",
      });

      let apiUrl;
      if (searchTerm && searchTerm !== "") {
        apiUrl = `http://localhost:8000/v2/search?q=${searchTerm}`;
      } else {
        apiUrl = `http://localhost:8000/v2/top-headlines?category=${category}`;
      }

      const response = await fetch(apiUrl);

      if (!response.ok) {
        const errorMessage = `Failed to fetch News data: ${response.status}`;
        throw new Error(errorMessage);
      }

      const data = await response.json();

      let extractedArticles;
      if (data.articles) {
        extractedArticles = data?.articles;
      } else if (data.result) {
        extractedArticles = data?.result;
      } else {
        throw new Error("Invalid API response format");
      }

      extractedArticles.sort((a, b) => {
        if (a.urlToImage === null && b.urlToImage !== null) return 1;
        if (a.urlToImage !== null && b.urlToImage === null) return -1;
        return 0;
      });

      setNewsData(extractedArticles);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoading({
      ...loading,
      state: true,
      message: "Finding news to show...",
    });
    fetchNewsData(selectedCategory, searchTerm);
  }, [selectedCategory, searchTerm]);

  return { newsData, loading, error };
};

export default useNewsQuery;
