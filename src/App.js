import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import PetList from "./components/PetList";
import AddPetForm from "./components/AddPetForm";
import About from "./components/About";

function App() {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/pets")
      .then((res) => res.json())
      .then((data) => setPets(data))
      .catch((err) => console.error("Error fetching pets:", err));
  }, []);

  function addPet(newPet) {
    setPets([...pets, newPet]);
  }

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<h1>Welcome to PetPal</h1>} />
        <Route path="/pets" element={<PetList pets={pets} />} />
        <Route path="/add-pet" element={<AddPetForm addPet={addPet} />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
