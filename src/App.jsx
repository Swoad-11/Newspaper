import Footer from "./components/Footer";
import Navbar from "./components/Header/Navbar";
import Main from "./components/Main/Main";
import CategoryProvider from "./provider/CategoryProvider";
import NewsProvider from "./provider/NewsProvider";
import SearchProvider from "./provider/SearchProvider";

function App() {
  return (
    <>
      <SearchProvider>
        <CategoryProvider>
          <NewsProvider>
            <Navbar />
            <Main />
          </NewsProvider>
        </CategoryProvider>
      </SearchProvider>
      <Footer />
    </>
  );
}

export default App;
