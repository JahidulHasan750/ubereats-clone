import Category from "./components/Category";
import Food from "./components/Food";
import HeadlineCards from "./components/HeadlineCards";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Hero></Hero>
      <HeadlineCards></HeadlineCards>
      <Food></Food>
      <Category></Category>
    </div>
  );
}

export default App;
