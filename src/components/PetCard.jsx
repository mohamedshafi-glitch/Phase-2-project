function PetCard({ pet }) {
  return (
    <div className="pet-card">
      <img src={pet.image} alt={pet.name} />
      <h3>{pet.name}</h3>
      <p>Type: {pet.type}</p>
      <p>Age: {pet.age} years</p>
      <p>{pet.description}</p>
    </div>
  );
}

export default PetCard;
