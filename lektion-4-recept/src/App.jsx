import "./App.css";
import Navbar from "./components/Navbar";
import RecipeInfo from "./components/RecipeInfo";
import Ingredients from "./components/Ingredients";
import Instructions from "./components/Instructions";
import Tips from "./components/Tips";

function App() {
  return (
    <>
      <Navbar />
      <RecipeInfo />
      <Ingredients />
      <Instructions />
      <Tips />
    </>
  );
}

export default App; 

 