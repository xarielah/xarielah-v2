import MainPage from "../components/layout/main-page";
import workPageData from "../lib/json/work.json";

const Work = () => {
  return (
    <MainPage
      title={workPageData.title}
      content={workPageData.content}
    ></MainPage>
  );
};

export default Work;
