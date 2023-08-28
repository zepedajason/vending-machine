import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Switch,
  BrowserRouter,
} from "react-router-dom";
import VendingMachine from "./VendingMachine";
import Chips from "./Chips";
import Candy from "./Candy";
import Soda from "./Soda";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<VendingMachine />}></Route>
          <Route path="/chips" element={<Chips />}></Route>
          <Route path="/candy" element={<Candy />}></Route>
          <Route path="/soda" element={<Soda />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
