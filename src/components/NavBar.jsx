import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/pets">View Pets</Link>
      <Link to="/add-pet">Add Pet</Link>
      <Link to="/about">About</Link>
    </nav>
  );
}

export default NavBar;
