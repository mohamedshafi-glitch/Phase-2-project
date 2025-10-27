import { useState } from "react";

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
      .then((newPet) => addPet(newPet));

    setFormData({ name: "", type: "", age: "", image: "", description: "" });
  }

  return (
    <form onSubmit={handleSubmit} className="add-form">
      <h2>Add a New Pet</h2>
      <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
      <input name="type" placeholder="Type" value={formData.type} onChange={handleChange} />
      <input name="age" placeholder="Age" value={formData.age} onChange={handleChange} />
      <input name="image" placeholder="Image URL" value={formData.image} onChange={handleChange} />
      <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange} />
      <button type="submit">Add Pet</button>
    </form>
  );
}

export default AddPetForm;
