import React, { useState } from "react";

function AddPetForm({ addPet }) {
  const [formData, setFormData] = useState({
    name: "",
    type: "",
    age: "",
    image: "",
    description: "",
  });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    fetch("http://localhost:4000/pets", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        addPet(data);
        setFormData({ name: "", type: "", age: "", image: "", description: "" });
      });
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add a New Pet</h2>
      <input
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Pet Name"
        required
      />
      <input
        name="type"
        value={formData.type}
        onChange={handleChange}
        placeholder="Pet Type"
        required
      />
      <input
        name="age"
        value={formData.age}
        onChange={handleChange}
        placeholder="Age"
        required
      />
      <input
        name="image"
        value={formData.image}
        onChange={handleChange}
        placeholder="Image URL"
      />
      <textarea
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Short description"
      />
      <button type="submit">Add Pet</button>
    </form>
  );
}

export default AddPetForm;
