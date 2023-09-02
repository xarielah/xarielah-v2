import MainPage from "../components/layout/main-page";
import homePageData from "../lib/json/home.json";

const Home = () => {
  return (
    <MainPage
      title={homePageData.title}
      content={homePageData.content}
    ></MainPage>
  );
};

export default Home;
