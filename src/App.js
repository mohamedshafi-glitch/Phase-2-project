import AddPetForm from "./components/AddPetForm";

function App() {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/pets")
      .then((res) => res.json())
      .then((data) => setPets(data));
  }, []);

  function addPet(newPet) {
    setPets([...pets, newPet]);
  }

  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<h1>🐾 Welcome to PetPal!</h1>} />
          <Route path="/pets" element={<PetList pets={pets} />} />
          <Route path="/add-pet" element={<AddPetForm addPet={addPet} />} />
        </Routes>
      </div>
    </Router>
  );
}
