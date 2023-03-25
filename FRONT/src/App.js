import "./App.css";
import SideNav2 from "./Components/SideNav2";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <SideNav2 />
      </BrowserRouter>
    </div>
  );
}

export default App;
