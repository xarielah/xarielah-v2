import MainPage from "../components/layout/main-page";
import aboutPageData from "../lib/json/about.json";

const About = () => {
  return (
    <MainPage
      title={aboutPageData.title}
      content={aboutPageData.content}
    ></MainPage>
  );
};

export default About;
