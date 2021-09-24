import "./App.css";
import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import Shop from "./components/Shop/Shop";

function App() {
  return (
    <div className="App">
      <Header />
      <h1 className="text-success mt-4 text-center">Buy your desire product</h1>
      <div className=" mb-4  w-50 mx-auto">
        <Search />
      </div>

      <Shop />
    </div>
  );
}

export default App;
