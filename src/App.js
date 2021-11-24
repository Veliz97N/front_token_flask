import { BrowserRouter, Route,Routes } from "react-router-dom"
import Login from "./Login";
import Signup from "./Signup";
import Private from "./Private";

function App() {
  return (
    <div className="App">
       <BrowserRouter>
        <Routes>

          <Route exact path="/" element={<Login/>} />

          <Route exact path="/Signup" element={<Signup/>} />
          <Route exact path="/Private" element={<Private/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
