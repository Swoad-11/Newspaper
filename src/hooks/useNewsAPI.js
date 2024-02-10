import { useContext, useEffect, useState } from "react";
import { CategoryContext } from "../conext";

const useNewsAPI = () => {
  const [newsData, setNewsData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { selectedCategory } = useContext(CategoryContext);

  const fetchNewsData = async (category) => {
    try {
      setLoading(true);
      const response = await fetch(
        `http://localhost:8000/v2/top-headlines?category=${category}`
      );

      if (!response.ok) {
        const errorMessage = `Failed to fetch News data: ${response.status}`;
        throw new Error(errorMessage);
      }

      const data = await response.json();
      setNewsData(data.articles);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNewsData(selectedCategory);
  }, [selectedCategory]);

  return { newsData, loading, error };
};

export default useNewsAPI;
