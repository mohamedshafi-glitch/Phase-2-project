import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [pets, setPets] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    type: "",
    image: "",
    age: "",
    description: "",
  });

  // Fetch pets from backend
  useEffect(() => {
    fetch("http://localhost:4000/pets")
      .then((res) => res.json())
      .then((data) => setPets(data))
      .catch((err) => console.error("Error fetching pets:", err));
  }, []);

  // Handle form input
  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  // Handle form submit (POST)
  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:4000/pets", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((newPet) => {
        setPets([...pets, newPet]);
        setFormData({
          name: "",
          type: "",
          image: "",
          age: "",
          description: "",
        });
      });
  }

  return (
    <div className="App">
      <h1>🐾 PetPal</h1>

      <form onSubmit={handleSubmit} className="pet-form">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Pet name"
          required
        />
        <input
          type="text"
          name="type"
          value={formData.type}
          onChange={handleChange}
          placeholder="Pet type"
          required
        />
        <input
          type="text"
          name="image"
          value={formData.image}
          onChange={handleChange}
          placeholder="Image URL"
          required
        />
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
          placeholder="Age"
          required
        />
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Description"
          required
        />
        <button type="submit">Add Pet</button>
      </form>

      <div className="pet-list">
        {pets.map((pet) => (
          <div key={pet.id} className="pet-card">
            <img src={pet.image} alt={pet.name} />
            <h2>{pet.name}</h2>
            <p>{pet.type}</p>
            <p>Age: {pet.age}</p>
            <p>{pet.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
