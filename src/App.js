import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import PetList from "./components/PetList";
import AddPetForm from "./components/AddPetForm";
import About from "./components/About";
import "./App.css";

function App() {
  const [pets, setPets] = useState([]);

  // Fetch pets from json-server when the app loads
  useEffect(() => {
    fetch("http://localhost:4000/pets")
      .then((res) => res.json())
      .then((data) => setPets(data))
      .catch((err) => console.error("Error fetching pets:", err));
  }, []);

  // Function to add a new pet to state after POST
  function addPet(newPet) {
    setPets([...pets, newPet]);
  }

  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={<h1 className="home-title">🐾 Welcome to PetPal!</h1>}
          />
          <Route path="/pets" element={<PetList pets={pets} />} />
          <Route path="/add-pet" element={<AddPetForm addPet={addPet} />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
