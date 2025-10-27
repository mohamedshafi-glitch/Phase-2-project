import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<h1>🐾 Welcome to PetPal!</h1>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
