/* eslint-disable react/prop-types */

import { NewsContext } from "../conext";
import { useNewsQuery } from "../hooks";

const WeatherProvider = ({ children }) => {
  const { newsData, error, loading } = useNewsQuery();
  return (
    <NewsContext.Provider value={{ newsData, error, loading }}>
      {children}
    </NewsContext.Provider>
  );
};

export default WeatherProvider;
