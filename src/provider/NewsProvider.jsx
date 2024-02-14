/* eslint-disable react/prop-types */

import { NewsContext } from "../conext";
import { useNewsQuery } from "../hooks";

const WeatherProvider = ({ children }) => {
  const { newsData, error, loading, noData } = useNewsQuery();
  return (
    <NewsContext.Provider value={{ newsData, error, loading, noData }}>
      {children}
    </NewsContext.Provider>
  );
};

export default WeatherProvider;
