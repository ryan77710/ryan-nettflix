import "./App.css";
import Caroussel from "./Component/Caroussel";

function App() {
  return (
    <div className="body">
      <header>
        <h1>NETFLIX</h1>
        <div className="Contener">
          <Caroussel />
        </div>
      </header>
      <footer></footer>
    </div>
  );
}

export default App;
