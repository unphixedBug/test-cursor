import "./index.css";
import Title from "./components/elements/Title";
import HeaderImg from "./components/elements/HeaderImg";
import Layout from "./components/styles/Layout";
import Introduction from "./components/sections/IntroductionSection";
import PreparationTime from "./components/sections/PreparationTimeSection";
import Ingredients from "./components/sections/IngredientsSection";
import Instructions from "./components/sections/InstructionsSection";
import Nutrition from "./components/sections/NutritionSection";

function App() {
  return (
    <div className="flex flex-col gap-3 max-w-5xl mx-auto">
      <HeaderImg />
      <Layout>
        <Title content="Simple Omelette Recipe" titleLevel={1} />
        <Introduction />
        <PreparationTime />
        <Ingredients />
        <hr className="border-stone-300" />
        <Instructions />
        <hr className="border-stone-300" />
        <Nutrition />
      </Layout>
    </div>
  );
}

export default App;
