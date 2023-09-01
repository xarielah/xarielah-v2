import WordCloud from "react-d3-cloud";
import MainPage from "../components/layout/main-page";
import homePageData from "../lib/json/home.json";

const Home = () => {
  // Array to store objects
  const arrayOfObjects = [];

  // Motivational words
  const motivationalWords = [
    "perseverance",
    "determination",
    "resilience",
    "inspiration",
    "ambition",
    "courage",
    "strength",
    "tenacity",
    "success",
    "achievement",
    "focus",
    "optimism",
    "dedication",
    "vision",
    "persistence",
    "drive",
    "empowerment",
    "confidence",
    "willpower",
    "passion",
    "growth",
    "mindset",
    "hardwork",
    "excellence",
    "motivation",
  ];

  // Function to generate a random integer between 1 and 100
  function getRandomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // Generate objects with random values
  for (let i = 0; i < motivationalWords.length; i++) {
    // You can change the number 10 to the desired length of your array
    const randomValue = getRandomInt(500, 1500);
    const randomWord =
      motivationalWords[Math.floor(Math.random() * motivationalWords.length)];

    const newObj = {
      value: randomValue,
      text: randomWord,
    };

    arrayOfObjects.push(newObj);
  }

  console.log(arrayOfObjects);
  return (
    <MainPage title={homePageData.title} content={homePageData.content}>
      <WordCloud spiral="archimedean" data={arrayOfObjects} />
    </MainPage>
  );
};

export default Home;
