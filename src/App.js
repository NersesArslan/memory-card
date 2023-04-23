import logo from "./logo.svg";
import "./App.css";
import Lisa from "./components/Lidoug";
import Scoreboard from "./components/Scoreboard";
import Cards from "./components/Cards";
const App = () => {
  return (
    <div className="App">
      <Scoreboard />
      <Cards />
    </div>
  );
};

export default App;
