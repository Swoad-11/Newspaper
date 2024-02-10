/* eslint-disable react/prop-types */

import { NewsContext } from "../conext";
import useNewsAPI from "../hooks/useNewsAPI";

const WeatherProvider = ({ children }) => {
  const { newsData, error, loading } = useNewsAPI();
  return (
    <NewsContext.Provider value={{ newsData, error, loading }}>
      {children}
    </NewsContext.Provider>
  );
};

export default WeatherProvider;
