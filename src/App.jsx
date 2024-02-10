import Footer from "./components/Footer";
import Navbar from "./components/Header/Navbar";
import Main from "./components/Main/Main";
import CategoryProvider from "./provider/CategoryProvider";
import NewsProvider from "./provider/NewsProvider";

function App() {
  return (
    <>
      <CategoryProvider>
        <NewsProvider>
          <Navbar />
          <Main />
        </NewsProvider>
      </CategoryProvider>
      <Footer />
    </>
  );
}

export default App;
