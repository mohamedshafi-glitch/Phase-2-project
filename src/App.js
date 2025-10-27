import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import PetList from "./components/PetList";

function App() {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/pets")
      .then((res) => res.json())
      .then((data) => setPets(data));
  }, []);

  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<h1>🐾 Welcome to PetPal!</h1>} />
          <Route path="/pets" element={<PetList pets={pets} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
