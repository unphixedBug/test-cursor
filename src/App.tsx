import "./index.css";
import Title from "./components/elements/Title";
import HeaderImg from "./components/elements/HeaderImg";
import Layout from "./components/styles/Layout";
import Introduction from "./components/sections/Introduction";
import PreparationTime from "./components/sections/PreparationTime";

function App() {
  return (
    <div className="flex flex-col gap-3">
      <HeaderImg />
      <Layout>
        <Title />
        <Introduction />
        <PreparationTime />
      </Layout>
    </div>
  );
}

export default App;
