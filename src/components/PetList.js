import PetCard from "./PetCard";

function PetList({ pets }) {
  return (
    <div className="pet-list">
      {pets.map((pet) => (
        <PetCard key={pet.id} pet={pet} />
      ))}
    </div>
  );
}

export default PetList;
