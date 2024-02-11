import { useContext, useEffect, useState } from "react";
import { CategoryContext, SearchContext } from "../conext";

const useNewsAPI = () => {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { selectedCategory } = useContext(CategoryContext);
  const { searchTerm } = useContext(SearchContext);

  const fetchNewsData = async (category, searchTerm) => {
    try {
      setLoading(true);
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

      console.log("log-2", data);

      setNewsData(extractedArticles);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    console.log("useEffect triggered");
    setLoading(true);
    fetchNewsData(selectedCategory, searchTerm);
  }, [selectedCategory, searchTerm]);

  return { newsData, loading, error };
};

export default useNewsAPI;
